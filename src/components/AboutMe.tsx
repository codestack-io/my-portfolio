"use client";
import Image from "next/image";
import {
  RiReactjsLine,
  RiNextjsFill,
  RiJavascriptFill,
  RiNodejsLine,
  RiGithubFill,
} from "react-icons/ri";

import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiPostman,
  SiFigma,
  SiFramer,
  SiCloudinary,
} from "react-icons/si";

import { FaRobot } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbComponents } from "react-icons/tb";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Next.js", icon: RiNextjsFill, color: "text-white" },
      { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "DaisyUI", icon: SiDaisyui, color: "text-teal-400" },
     { name: "Shadcn/UI", icon: TbComponents, color: "text-white" },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: RiNodejsLine, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Stripe", icon: SiStripe, color: "text-violet-400" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-orange-400" },
    ],
  },

  {
    title: "Design & Tools",
    skills: [
      { name: "GitHub", icon: RiGithubFill, color: "text-white" },
      { name: "Figma", icon: SiFigma, color: "text-pink-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },

 {
  title: "AI Development",
  skills: [
    { name: "ChatGPT", icon: FaRobot, color: "text-green-400" },
    { name: "Claude", icon: BsStars, color: "text-orange-400" },
    { name: "Gemini AI", icon: BsStars, color: "text-blue-400" },
  ],
}, 
];

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
            Here,this is ANTARA
          </h2>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none max-w-2xl">
            A full-stack Web Developer focused on Full-Stack and Frontend Systems
          </h1>
         <div className="max-w-xl text-on-surface-variant">
  <h2 className="text-3xl font-bold mb-6 text-white">
    Why You Should Hire Me?
  </h2>

  <ul className="space-y-4 list-disc pl-5 text-body-lg leading-relaxed">
    <li>
      <span className="font-semibold text-white">Strong Full-Stack Expertise:</span>{" "}
      Skilled in building responsive, secure, and scalable web applications
      using React, Next.js, TypeScript, Express.js, MongoDB, Firebase
      Authentication, and Tailwind CSS.
    </li>

    <li>
      <span className="font-semibold text-white">End-to-End Development:</span>{" "}
      Capable of developing complete applications from intuitive frontend
      interfaces to robust backend APIs, authentication systems, and database
      management.
    </li>

    <li>
      <span className="font-semibold text-white">Problem-Solving Mindset:</span>{" "}
      Enjoy tackling complex bugs and technical challenges with patience,
      analytical thinking, and a focus on delivering reliable solutions.
    </li>

    <li>
      <span className="font-semibold text-white">Clean & Maintainable Code:</span>{" "}
      Committed to writing readable, reusable, and well-structured code that
      supports long-term scalability and maintainability.
    </li>

    <li>
      <span className="font-semibold text-white">
        Performance & User Experience:
      </span>{" "}
      Build fast, responsive, and user-friendly applications that deliver an
      excellent experience across devices.
    </li>

    <li>
      <span className="font-semibold text-white">Continuous Learner:</span>{" "}
      Passionate about exploring new technologies, staying updated with
      industry trends, and continuously improving my technical skills.
    </li>

    <li>
      <span className="font-semibold text-white">Collaborative Team Player:</span>{" "}
      Communicate effectively, work well within cross-functional teams, and
      take ownership of assigned tasks.
    </li>

    <li>
      <span className="font-semibold text-white">Quality-Driven Approach:</span>{" "}
      Focused on delivering reliable, secure, and high-quality software that
      meets business and user requirements.
    </li>
  </ul>
</div>
          <div className="mt-6 flex flex-wrap gap-4">
  <a
    href="/Antara's Frontend Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-nav-link uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,241,218,.25)]"
  >
    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
      description
    </span>

    View Resume
  </a>
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
      {/* ====================== TECH STACK ====================== */}

<div className="mt-32 border-t border-border-custom pt-20">

    <div className="mb-14">

        <span className="uppercase tracking-[4px] text-sm text-primary-fixed-dim">

            My Tech Stack

        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">

            Technologies I Work With

        </h2>

        <p className="mt-4 text-on-surface-variant max-w-2xl leading-8">

            I build scalable full-stack applications using modern frontend,
            backend, cloud services and AI-assisted development tools.

        </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

        {skillCategories.map((category, index) => (

            <motion.div
  key={category.title}
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.7,
    delay: index * 0.15,
    ease: "easeOut",
  }}
  animate={{
    y: [0, -6, 0],
  }}
  whileHover={{
    scale: 1.02,
    y: -10,
    transition: { duration: 0.25 },
  }}
  className="relative overflow-hidden rounded-[30px] border border-white/10
  bg-white/[0.03] backdrop-blur-xl p-8"
>

                <div className="flex items-center gap-4 mb-8">

                    <h3 className="uppercase tracking-[4px] text-sm font-semibold text-primary whitespace-nowrap">

                        {category.title}

                    </h3>

                    <div className="flex-1 h-px bg-white/10"></div>

                </div>

                <div className="flex flex-wrap gap-4">

                    {category.skills.map((skill, i) => {

                        const Icon = skill.icon;

                        return (

                            <motion.div

                                key={skill.name}

                                initial={{
                                    opacity: 0,
                                    scale: .8,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}

                                transition={{
                                    delay: i * .05,
                                }}

                                whileHover={{
                                    scale: 1.08,
                                    y: -5,
                                }}

                                className="group
                                flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.04]
                                px-5
                                py-3
                                cursor-pointer
                                transition-all
                                hover:border-primary
                                hover:bg-primary/10"

                            >

                                <Icon

                                    className={`text-xl transition-transform duration-300 group-hover:rotate-12 ${skill.color}`}

                                />

                                <span className="font-medium">

                                    {skill.name}

                                </span>

                            </motion.div>

                        );

                    })}

                </div>

            </motion.div>

        ))}

    </div>

</div>
    </section>
  );
}
