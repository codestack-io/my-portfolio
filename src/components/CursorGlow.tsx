"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!glow || !cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let isTouch = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
      glow.style.opacity = "1";
    };

    const handleTouchStart = () => {
      isTouch = true;
      glow.style.opacity = "0";
      cursor.style.display = "none";
      dot.style.display = "none";
    };

    const animate = () => {
      // Lerp calculations for fluid trailing effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
      dot.style.transform = `translate(${dotX - 2}px, ${dotY - 2}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.classList.add("scale-[1.8]", "bg-primary/10");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("scale-[1.8]", "bg-primary/10");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);

    // Apply scaling listener to links & interactive items
    const updateHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], .interactive-hover");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    updateHoverListeners();
    const frameId = requestAnimationFrame(animate);

    // Set up observer to handle dynamically loaded content
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background glow trail */}
      <div
        ref={glowRef}
        id="cursor-glow"
        className="fixed pointer-events-none w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] z-0 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 md:opacity-100"
      />
      {/* Outer cursor circle */}
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out hidden md:block"
      />
      {/* Inner cursor dot */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className="fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] transition-all duration-75 ease-out hidden md:block"
      />
    </>
  );
}
