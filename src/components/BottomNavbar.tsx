"use client";

import { useEffect, useState } from "react";

export default function BottomNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Initialise theme
    const storedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : (systemDark ? "dark" : "light");

    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "stack", "footer"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 md:px-6">
      <div className="relative group">
        {/* Background Mesh Glow */}
        <div className="gradient-mesh"></div>

        {/* Navbar Body */}
        <nav className="glass-container relative flex items-center justify-between px-4 md:px-8 py-2 md:py-2.5 rounded-full overflow-hidden transition-all duration-300">
          {/* Home Link */}
          <button
            onClick={() => scrollToSection("hero")}
            className="relative flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer bg-transparent border-none p-2 md:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 duration-300"
            aria-label="Scroll to top"
          >
            <span
              className={`material-symbols-rounded text-on-surface ${
                activeSection === "hero" ? "filled active-icon-glow" : "opacity-80 hover:opacity-100"
              }`}
            >
              home
            </span>
            {activeSection === "hero" && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-primary rounded-full opacity-80 shadow-[0_0_8px_var(--color-primary-val)]"></div>
            )}
          </button>

          {/* Search/About Link */}
          <button
            onClick={() => scrollToSection("about")}
            className="relative flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer bg-transparent border-none p-2 md:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 duration-300"
            aria-label="Scroll to Profile section"
          >
            <span
              className={`material-symbols-rounded text-on-surface ${
                activeSection === "about" ? "filled active-icon-glow" : "opacity-80 hover:opacity-100"
              }`}
            >
              search
            </span>
            {activeSection === "about" && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-primary rounded-full opacity-80 shadow-[0_0_8px_var(--color-primary-val)]"></div>
            )}
          </button>

          {/* Favorite/Stack Link */}
          <button
            onClick={() => scrollToSection("stack")}
            className="relative flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer bg-transparent border-none p-2 md:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 duration-300"
            aria-label="Scroll to Tech Stack section"
          >
            <span
              className={`material-symbols-rounded text-on-surface ${
                activeSection === "stack" ? "filled active-icon-glow" : "opacity-80 hover:opacity-100"
              }`}
            >
              favorite
            </span>
            {activeSection === "stack" && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-primary rounded-full opacity-80 shadow-[0_0_8px_var(--color-primary-val)]"></div>
            )}
          </button>

          {/* Person/Footer Link */}
          <button
            onClick={() => scrollToSection("footer")}
            className="relative flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer bg-transparent border-none p-2 md:p-2.5 rounded-full hover:bg-white/10 active:bg-white/20 duration-300"
            aria-label="Scroll to footer links"
          >
            <span
              className={`material-symbols-rounded text-on-surface ${
                activeSection === "footer" ? "filled active-icon-glow" : "opacity-80 hover:opacity-100"
              }`}
            >
              person
            </span>
            {activeSection === "footer" && (
              <div className="absolute bottom-1 w-1.5 h-1.5 bg-primary rounded-full opacity-80 shadow-[0_0_8px_var(--color-primary-val)]"></div>
            )}
          </button>

          {/* Theme Sliding Toggle Switch */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-between w-16 h-9 bg-white/10 dark:bg-black/40 rounded-full border border-border-custom px-1.5 cursor-pointer transition-all duration-300 select-none overflow-hidden"
            aria-label="Toggle theme mode"
          >
            {/* Sliding Knob */}
            <div
              className={`absolute top-0.5 w-7 h-7 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary-val)] transition-all duration-300 transform ${
                theme === "dark" ? "left-[30px]" : "left-1"
              }`}
            />
            {/* Icons */}
            <span
              className={`material-symbols-rounded !text-sm z-10 transition-colors duration-300 pl-1 ${
                theme === "light" ? "text-on-primary font-bold" : "text-on-surface opacity-60"
              }`}
            >
              light_mode
            </span>
            <span
              className={`material-symbols-rounded !text-sm z-10 transition-colors duration-300 pr-1 ${
                theme === "dark" ? "text-on-primary font-bold" : "text-on-surface opacity-60"
              }`}
            >
              dark_mode
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
