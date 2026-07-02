"use client";

import { useEffect, useState } from "react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  result?: string;
  coursework?: string[];
  description?: string;
  icon: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Statistics",
    institution: "Comilla University",
    duration: "2023 – Present",
    result: "CGPA: 3.66/4.00",

    description: "Focused on web development, data science, staistics.",
    icon: "school",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "National College",
    duration: "2019 – 2021",
    result: "GPA: 5.00/5.00",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Technology"],
    icon: "history_edu",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Narsingdi govt. Girls' High School",
    duration: "2009 – 2019",
    result: "GPA: 4.89/5.00",
    icon: "menu_book",
  },
];

export default function Education() {
  const [visibleItems, setVisibleItems] = useState([0, 1, 2]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index].sort((a, b) => a - b);
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll(".education-card-trigger");
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="education"
      className="relative z-10 py-24 px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-stack-lg">
        <h2 className="font-label-serif text-label-serif text-primary-fixed-dim uppercase tracking-[0.2em] mb-2">
          ACADEMIC_RECORD_V1
        </h2>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none max-w-2xl mb-4">
          Educational Qualifications
        </h1>
        <p className="text-secondary font-label-serif max-w-2xl opacity-80">
          Chronological breakdown of formal credentials, academic programs, and foundational coursework.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto py-8">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-border-custom -translate-x-1/2 -z-10"></div>

        <div className="space-y-12">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className="education-card-trigger relative flex flex-col md:flex-row items-stretch w-full"
              >
                {/* Timeline Node Badge (Center on desktop, left on mobile) */}
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-lg glass-panel flex items-center justify-center border border-border-custom transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 scale-100 rotate-0 bg-primary/10 border-primary shadow-[0_0_15px_rgba(2,132,199,0.2)]"
                        : "opacity-0 scale-50 -rotate-45"
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl filled">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Left side content (Empty spacer or active card) */}
                <div
                  className={`w-full md:w-1/2 flex pl-16 md:pl-0 md:pr-12 justify-end ${isEven ? "md:order-1" : "md:order-3 opacity-0 pointer-events-none hidden md:flex"
                    }`}
                >
                  {isEven && (
                    <div
                      className={`w-full glass-panel rounded-2xl p-6 md:p-8 border border-border-custom transition-all duration-700 hover:border-primary/30 hover:shadow-[0_8px_32px_0_rgba(2,132,199,0.06)] group hover:scale-[1.01] ${isVisible
                        ? "opacity-100 translate-y-0 md:translate-x-0"
                        : "opacity-0 translate-y-12 md:-translate-x-12"
                        }`}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <span className="font-mono text-[10px] tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 w-fit">
                              {item.duration}
                            </span>
                            <h3 className="font-display-lg text-headline-md text-on-surface mt-2 group-hover:text-primary transition-colors duration-300">
                              {item.degree}
                            </h3>
                            <p className="font-nav-link text-sm text-on-surface-variant font-semibold tracking-wide mt-1">
                              {item.institution}
                            </p>
                          </div>
                          {item.result && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/15 self-start">
                              {item.result}
                            </span>
                          )}
                        </div>

                        {item.description && (
                          <p className="font-body-lg text-sm text-on-surface-variant leading-relaxed mt-2">
                            {item.description}
                          </p>
                        )}

                        {item.coursework && item.coursework.length > 0 && (
                          <div className="mt-2 pt-4 border-t border-border-custom">
                            <span className="block font-mono text-[10px] text-on-surface-variant tracking-wider uppercase mb-2">
                              Core Specializations:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.coursework.map((course, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="font-sans text-xs bg-surface-container px-3 py-1 rounded-md text-on-surface-variant border border-border-custom"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center separator column for desktop alignment */}
                <div className="hidden md:flex md:w-0 md:order-2"></div>

                {/* Right side content (Empty spacer or active card) */}
                <div
                  className={`w-full md:w-1/2 flex pl-16 md:pl-12 justify-start ${!isEven ? "md:order-3" : "md:order-1 opacity-0 pointer-events-none hidden md:flex"
                    }`}
                >
                  {!isEven && (
                    <div
                      className={`w-full glass-panel rounded-2xl p-6 md:p-8 border border-border-custom transition-all duration-700 hover:border-primary/30 hover:shadow-[0_8px_32px_0_rgba(2,132,199,0.06)] group hover:scale-[1.01] ${isVisible
                        ? "opacity-100 translate-y-0 md:translate-x-0"
                        : "opacity-0 translate-y-12 md:translate-x-12"
                        }`}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div>
                            <span className="font-mono text-[10px] tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 w-fit">
                              {item.duration}
                            </span>
                            <h3 className="font-display-lg text-headline-md text-on-surface mt-2 group-hover:text-primary transition-colors duration-300">
                              {item.degree}
                            </h3>
                            <p className="font-nav-link text-sm text-on-surface-variant font-semibold tracking-wide mt-1">
                              {item.institution}
                            </p>
                          </div>
                          {item.result && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/15 self-start">
                              {item.result}
                            </span>
                          )}
                        </div>

                        {item.description && (
                          <p className="font-body-lg text-sm text-on-surface-variant leading-relaxed mt-2">
                            {item.description}
                          </p>
                        )}

                        {item.coursework && item.coursework.length > 0 && (
                          <div className="mt-2 pt-4 border-t border-border-custom">
                            <span className="block font-mono text-[10px] text-on-surface-variant tracking-wider uppercase mb-2">
                              Core Specializations:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.coursework.map((course, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="font-sans text-xs bg-surface-container px-3 py-1 rounded-md text-on-surface-variant border border-border-custom"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
