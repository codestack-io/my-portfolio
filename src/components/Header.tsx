"use client";

import { useState } from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const scrollToSection = (selector: string) => {
    setDrawerOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile py-6 bg-[var(--background)]/85 backdrop-blur-[32px] border-b border-border-custom transition-colors duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDrawer}
            aria-label="Toggle navigation menu"
            className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 active:scale-95 transition-transform bg-transparent border-none p-0 flex items-center justify-center"
          >
            menu
          </button>
          <span className="text-nav-link font-nav-link tracking-[0.2em] text-primary uppercase select-none">
            ARCHITECT.LOG
          </span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-primary font-bold transition-all duration-300 hover:active-nav-glow hover:scale-105"
            >
              MANIFESTO
            </button>
            <button
              onClick={() => scrollToSection("#about")}
              className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:active-nav-glow hover:scale-105"
            >
              PROFILE
            </button>
            <button
              onClick={() => scrollToSection("#stack")}
              className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:active-nav-glow hover:scale-105"
            >
              TECH_STACK
            </button>
          </nav>
          <span className="material-symbols-outlined text-primary select-none animate-pulse">
            terminal
          </span>
        </div>
      </header>

      {/* Side Navigation Drawer Overlay Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Side Navigation Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col p-8 bg-surface-container-lowest/95 backdrop-blur-[32px] border-r border-border-custom h-full w-[280px] transition-transform duration-500 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-headline-md font-headline-md text-primary uppercase tracking-tight">
            SYSTEM_V1
          </h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="material-symbols-outlined text-on-surface-variant hover:text-primary p-1 bg-transparent border-none flex items-center justify-center cursor-pointer transition-colors"
          >
            close
          </button>
        </div>
        <nav className="flex flex-col gap-8">
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-left text-primary font-nav-link border-l-2 border-primary pl-4 flex items-center gap-4 hover:bg-white/5 py-2 rounded transition-all active:translate-x-1"
          >
            <span className="material-symbols-outlined">grid_view</span> MANIFESTO
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="text-left text-on-surface-variant hover:text-primary font-nav-link pl-4 flex items-center gap-4 hover:bg-white/5 py-2 rounded transition-all active:translate-x-1"
          >
            <span className="material-symbols-outlined">person</span> DEVELOPER_PROFILE
          </button>
          <button
            onClick={() => scrollToSection("#stack")}
            className="text-left text-on-surface-variant hover:text-primary font-nav-link pl-4 flex items-center gap-4 hover:bg-white/5 py-2 rounded transition-all active:translate-x-1"
          >
            <span className="material-symbols-outlined">science</span> TECHNICAL_STACK
          </button>
          <button
            onClick={() => scrollToSection("#footer")}
            className="text-left text-on-surface-variant hover:text-primary font-nav-link pl-4 flex items-center gap-4 hover:bg-white/5 py-2 rounded transition-all active:translate-x-1"
          >
            <span className="material-symbols-outlined">alternate_email</span> CONNECT_LOG
          </button>
        </nav>
      </aside>
    </>
  );
}
