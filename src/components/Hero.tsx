import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-stack-lg overflow-hidden"
    >
      {/* Vertical Accent Line */}
      <div className="absolute left-margin-mobile top-0 bottom-0 w-[1px] bg-white/5 hidden md:block">
        <div className="absolute top-1/4 h-24 w-[1px] bg-primary-fixed-dim shadow-[0_0_15px_rgba(233,193,106,0.3)]"></div>
      </div>
      <div className="scanline"></div>

      {/* Central Element Canvas */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center px-margin-mobile z-20">
        {/* Background Atmospheric Glow */}
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-110"></div>

        {/* Iridescent Fluid Sphere */}
        <div className="relative w-full h-full flex items-center justify-center animate-float">
          <Image
            className="w-4/5 h-4/5 object-contain mix-blend-screen drop-shadow-[0_0_60px_rgba(118,88,6,0.25)] select-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgD-g0GCATKqioo2V9KYEkwgUl6O-cq4txmewQa7tJWrKp_w5UTf_qLdklxWiwK9ssH2T1c-jiQ2MzTdWDrBsHOlILzQhmLjlROnln3k2twgdf0tCvy8fsR8eN7g77uVNiI7en6g2FfgI8CYTc6IPstOHkWaru71T10Y6e3kJN6j9ikF0V08dgQgYAkdkxjX3yqJh8sgi-vbJMbNJhB8TrQnk6FmBZFNDoXkGErSbmmSNpgl-T0_g4T-qhu7zorZ0VGe0D6-gMJ0BQ"
            alt="Iridescent Fluid Sphere representing engineering fluidity"
            width={480}
            height={480}
            priority
            unoptimized
          />

          {/* Quote 1: Top-Left */}
          <div className="absolute -top-4 left-0 md:left-4 font-mono text-[10px] md:text-xs tracking-widest text-primary opacity-80 uppercase px-2 py-1 glass-panel select-none">
            CODE IS POETRY
          </div>

          {/* Quote 2: Top-Right */}
          <div className="absolute top-12 right-0 md:right-4 font-mono text-[10px] md:text-xs tracking-widest text-on-surface-variant opacity-60 uppercase px-2 py-1 glass-panel select-none">
            {"// SIMPLICITY IS EFFICIENCY"}
          </div>

          {/* Quote 3: Bottom-Left */}
          <div className="absolute bottom-12 left-0 md:left-4 font-mono text-[10px] md:text-xs tracking-widest text-secondary-fixed-dim opacity-40 uppercase px-2 py-1 glass-panel select-none">
            BUILD. TEST. DEPLOY. REPEAT.
          </div>

          {/* Quote 4: Bottom-Right */}
          <div className="absolute -bottom-4 right-0 md:right-4 font-mono text-[10px] md:text-xs tracking-widest text-primary-fixed-dim opacity-70 uppercase border border-primary/20 px-3 py-1 select-none">
            {/* Quote 3: Bottom-Left */}
          <div className="absolute bottom-12 left-0 md:left-4 font-mono text-[10px] md:text-xs tracking-widest text-secondary-fixed-dim opacity-40 uppercase px-2 py-1 glass-panel select-none">
            BUILD. TEST. DEPLOY. REPEAT.
          </div>{/* Quote 3: Bottom-Left */}
          <div className="absolute bottom-12 left-0 md:left-4 font-mono text-[10px] md:text-xs tracking-widest text-secondary-fixed-dim opacity-40 uppercase px-2 py-1 glass-panel select-none">
           STAY_STABLE. STAY_CURIOUS.
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Information Layer */}
      <div className="z-30 mt-stack-md text-center px-margin-mobile">
        <p className="font-mono text-xs text-on-surface-variant opacity-50 tracking-[0.3em] mb-4">
          ENGINEERING CREATIVE FLUIDITY
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent"></div>
          <p className="font-mono text-nav-link text-primary-fixed-dim">
            SCROLL_FOR_MANIFESTO
          </p>
        </div>
      </div>
    </section>
  );
}
