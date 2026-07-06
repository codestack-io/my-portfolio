export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 w-full border-t border-border-custom bg-surface-container-lowest/80 backdrop-blur-[32px] pt-12 pb-36 transition-colors duration-300"
    >
      <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12">
        {/* Top Segment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-display-lg text-headline-md text-primary tracking-tighter">
              PORTFOLIO.
            </span>

            <p className="font-label-serif text-[12px] text-on-surface-variant uppercase">
              © 2026 DESIGNED BY ANTARA SAHA. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <a
              href="https://www.linkedin.com/in/antara-saha-810718254/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-serif text-label-serif text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/codestack-io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-serif text-label-serif text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:[sahaantara444@gmail.com]"
              className="font-label-serif text-label-serif text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              Email
            </a>

            {/* Replace this with your Read.cv URL or remove it */}
            <a
              href="https://read.cv/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-serif text-label-serif text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              Read.cv
            </a>
          </div>
        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-border-custom">
          <div className="flex flex-col gap-1">
            <span className="text-nav-link font-nav-link text-secondary">
              ©2026_STABLE_BUILD_4.0.1
            </span>

            <span className="font-mono text-[10px] text-on-surface-variant opacity-45">
              SYSTEM STATUS: V4.2.0_STABLE
            </span>
          </div>

          <div className="flex gap-8">
            <a
              href="https://github.com/codestack-io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-secondary-fixed-variant font-nav-link hover:text-primary transition-colors active:scale-95"
            >
              SOURCE_CODE
            </a>

            <a
              href="mailto:sahaantara444@gmail.com"
              className="text-on-secondary-fixed-variant font-nav-link hover:text-primary transition-colors active:scale-95"
            >
              CONTACT_ME
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}