import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="relative z-10 py-24 px-gutter max-w-container-max mx-auto w-full">
      {/* Recreated About Me Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Block */}
        <div className="lg:col-span-7 flex flex-col gap-stack-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-panel rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-nav-link text-[10px] tracking-widest uppercase text-on-surface-variant">
              Available for Projects
            </span>
          </div>
          <h2 className="font-label-serif text-label-serif text-primary-fixed-dim uppercase tracking-[0.2em]">
            ANTARA
          </h2>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none max-w-2xl">
            A Web Developer focused on Full-Stack and Frontend Systems
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            A developer driven by a passion for building efficient, secure, and scalable applications.
            Expertise in modern web technologies with a focus on performance, security, and pushing
            boundaries in code. Intelligent system design stands at the core of my interests, combined
            with a deep philosophy for clean, maintainable architecture.
          </p>
          <div className="mt-4">
            <button className="group flex items-center gap-4 bg-primary px-8 py-4 rounded-full text-on-primary font-nav-link text-nav-link uppercase transition-all hover:shadow-[0_0_30px_rgba(255,241,218,0.2)] hover:scale-[1.02] active:scale-95 cursor-pointer">
              Stay connected and let the good work begin.
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Framed Image Block */}
        <div className="lg:col-span-5 relative group flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-square glass-panel rounded-2xl overflow-hidden border border-border-custom p-2">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Chris Allow Portrait"
              className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaIECHlf7RzuZPh18y2vxZ2Fe_n0EaE-IWudcv0_Zs8whxV6butAcNYJhSYqHEgOLkVogStR_YmirRUD9azt4Pz1ELFfj_JrRMeULElP-blTSgZbSGwSlJ-Dto4v-rRdjJgMWKnAayJbeC8WiMTLwx39_D4fLcCkgJlG7h4Idv5AqU-UxVBSREm83uVnNFHsIk6rripoU0UsZjGjDghDIn1M8CYkuSpW7U4KuWqJuLL_2cxoyYnyY_M4eli5zDYvzNC4BJgVTbOKTs"
              width={400}
              height={400}
              unoptimized
            />
          </div>

          {/* Rotating Badges / Circle Path text */}
          <div className="absolute -bottom-6 right-1/2 translate-x-1/2 lg:translate-x-0 lg:-right-6 w-32 h-32 glass-panel rounded-full flex items-center justify-center p-4 z-20 border border-border-custom animate-spin-slow select-none">
            <svg className="w-full h-full fill-primary" viewBox="0 0 100 100">
              <path
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
                id="circlePath"
              ></path>
              <text className="font-sans text-[7.5px] uppercase tracking-[1.5px]">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • FULLSTACK • FRONTEND • SYSTEMS • ARCHITECT
                </textPath>
              </text>
            </svg>
            <span className="absolute material-symbols-outlined text-primary scale-150 select-none">
              code
            </span>
          </div>
        </div>
      </div>

      {/* Technical Breadcrumbs / Secondary Info */}
      <div className="mt-32 pt-16 border-t border-border-custom">
        <div className="flex flex-wrap gap-8 justify-between items-end">
          <div className="flex flex-col gap-2">
            <span className="font-nav-link text-nav-link text-on-surface-variant uppercase">
              Primary Stack
            </span>
            <div className="flex flex-wrap gap-4">
              <span className="font-label-serif text-label-serif text-primary italic">React.js</span>
              <span className="font-label-serif text-label-serif text-primary italic">Node.js</span>
              <span className="font-label-serif text-label-serif text-primary italic">TypeScript</span>
              <span className="font-label-serif text-label-serif text-primary italic">PostgreSQL</span>
            </div>
          </div>
          <div className="max-w-xs text-left lg:text-right">
            <p className="font-nav-link text-[12px] text-on-surface-variant uppercase leading-relaxed">
              Currently exploring high-performance edge computing and Rust-based backend implementations for distributed systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
