import Image from "next/image";

interface StackItem {
  name: string;
  logo: string;
  alt: string;
}

interface StackCategory {
  title: string;
  code: string;
  icon: string;
  iconColorClass: string;
  bgColorClass: string;
  borderColorClass: string;
  items: StackItem[];
}

const categories: StackCategory[] = [
  {
    title: "Languages & Core",
    code: "01_CORE_SYNTAX",
    icon: "code",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-primary/20",
    items: [
      {
        name: "HTML5",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwjbMoro6jD7gzKx5ywm18nNg4DIBYRgWesGrnMNvEoaQ3UpQJUNdx96m1jIf8P63ruYvpOYJrYrYfhYGdUZvU2ZAcoylAW_q6ETFRYCdR14qvCTHWeHzuQgWKKFb9ucwbl-o0nyjcRj4Ib65vPWE_R7PEyZZELo-lrgURH1avPnoZ8LStAuUtF7QVwJ0BNyTGS4igIaz7XJV2xops-s-BWDmWispY15yAAgmz6pAPYQ7etRoHpyQWI0xhtXTnB7tUcLeLZ3dt38vt",
        alt: "Official HTML5 logo with its signature orange shield",
      },
      {
        name: "CSS3",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuApEaGZog57q45x7FZpgLfUSOdMZdI1Qis7upDgAAJh6Iz6bVNDm7R3IUSoyH_x9P6FdS2H7_9kqbKi76Y-1VgfkekpAovsQ8CwgcyM1EY6U4qyI4fsu3PFxODn7NCTdTdey-Raj52VE632B8YhWlYJ1HZIkmMCz-pUgwLGlCNqrZEOOd4aiGTxSIVc8-ruHP5sw_ZKK5l89zwIhi30MCNMHLJGcwRIoMTWvoUqJrGK6Z4QYCUSjXW9Awu2YlbFe_rc-lmLFGE-30H2",
        alt: "Official CSS3 logo with blue shield iconography",
      },
      {
        name: "JAVASCRIPT",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy52Icp8JPWd4YuHu_Um-jATg3J-hPlOW__XEzc5hXoSoZ-AW2aJg7ze3RG25UQTYIQNzZInFuUqS0cgSYFgovYKpndPLCuYBgea94qr8P1biEj_BVWNTz2Xp1i72kT2TFrBFHcUIlcgOjz9rERAPF7Ya1Itme_cipJauJsbhNp3JXCjSHClNwOAzA8uhS86qRH1YTMdXjf-QmdOH92L89l7b_MKNcX4TXOVP8Q_xcfWauwXxxBydVRUg2i4lssRxjqcILSCdSfH2X",
        alt: "JavaScript logo with the iconic JS letters",
      },
      {
        name: "TYPESCRIPT",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr94V2T4sp8UVhGQ5-rYHZTeBIugtMdC7vtT7pJ8vSq1SAoqSLJbPSZirTIKq87DO8OhD4pN8XWmEcxPrhWCB2vA7sqJVIeUC3Fr11TUdA2rrvxT7XTJ9z4j_yP59xrnFe4gZ6VjX3XyvB4Mi3yCRRZ-c4bEQVeIB_DIKlCB1fmTVDDwCYMTWLvpZ7A1CSDUIJubhFIRNTaN9HpEVju6pUQlHtgYTq9BOGpOQ4fPSyni53TEMiDTces5UxK1o632SOSCOJw5rStCKI",
        alt: "TypeScript logo featuring a blue square with TS lettering",
      },
    ],
  },
  {
    title: "Frontend Frameworks",
    code: "02_UI_ARCHITECTURE",
    icon: "layers",
    iconColorClass: "text-tertiary",
    bgColorClass: "bg-tertiary-container/10",
    borderColorClass: "border-tertiary-container/20",
    items: [
      {
        name: "React",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7jW0AKDACNIIjcBOFITvD5eciUJwQOTtDxd94mEUWOMOALsRGplMie_d-gk8-PDrmlNGW-644Vh-Y1b9MPD4V7aBTlElU05ZLdbxnCHApzQZEYPrJNIaGIoc8wbBtvUYqYPUc17aUsrlRYPl2hkNL5ETmskG5cZaYS04ayozNL0zPihXIfjIj9vrVcSNNQsu5tYh5NRfKPu0aMaTz-H3v42V4pMiQ8vzi62XYLLJlnRfhkNxtiHzKpkjtkCcb0PudiM4iMfXfQHU5",
        alt: "The React logo with its atom-like cyan symbol",
      },
      {
        name: "Next.js",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0uDHYmFiYWjRtM-qmrYExCqj8gtQyrOaNgPMS_M1sY-AQaqsGRAsj_GVIOcHzmFyYB5-4SLDac5EQuCvMQPfe7S2iRDOJiyb2lkxjgaljwRj2b9YfyGYbMIIkugy8zxeF3KhYyD_97xe4jHrIqg_TiWTtl5dHa8E9ANCk6MIT5Pkayl4ViNJcmFbB94ZmcpwxgvZCTZ5b8p5-XwOgOwMs6FPEeKtRlrp4rDLTVmUCjz86LWyJ0MskWQ5MsuiCwCYJlsfzwh5HrEAg",
        alt: "The Next.js minimalist black and white logo",
      },
      {
        name: "Tailwind",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK07fkKZNXqcxxV8wdL6roAnIFve1ZnKrfA1RQaRjxmxtXtUbgYvkr34LPOSsB7lSunE5NRpJjQ-adAAt8HaYwXf92E7cSJ5GrgnQL-tvgkG2yCIj27HJQlQoMz-O6JHLRqUpNt2oeGT31XuBKfuwwtrzetwHm4atWweJpy22n4J2MU4Bur8Jz67_-wWZch-HRMgBieTk1FvkhQHMykYhtcbbBnk5O_pRRhC3QyjQCyyylMJURyUMVQJPJUTze_fttFhEbKvlDG0uG",
        alt: "Tailwind CSS logo with the wave shape in cyan",
      },
      {
        name: "Shadcn",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSJfkyprO2D4NlIQBck7OnbxiEUdVUc-cFqNcdto5MXKWjzXZ8xRuyjC6WcgdaUuJQaWEGnuN0qazza27tTkOb1FL2sNddVfihEFLysh99YJkQLl5T20mG1r_IvDoIs3As61muEeKm9Xk6C3hNv1BAtfgDU4niZi7ApKOHccQ9cuF8lQoSi7RYcQtcT7GH3pbJM5EfvAkW9qnnTCwMeklzmkAMRV4PiZs497Kq-6ojrjnNGxeTdQP82N9cFjghb56rjbJuy-SuYEf-",
        alt: "Shadcn UI branding elements",
      },
    ],
  },
  {
    title: "Backend & Database",
    code: "03_DATA_INFRA",
    icon: "database",
    iconColorClass: "text-error",
    bgColorClass: "bg-error-container/10",
    borderColorClass: "border-error-container/20",
    items: [
      {
        name: "Node.js",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCq37gRifeLe5Jgglm7SOFR9LdWbJTtPyRYlwA8SU_B5QAMbb-ruKkepf-srRkHOHndqIOiorLJypcPZzWmylgyVpt3qnjGS_TDywZa8octo6uEA7Eaom7nYCTbqU4QKWsi3DSKcLi7IE-ovgC4xnC73GpoyX8ALA3idMXFePBi0AUh8ROpmk3l5GXD6GzIXHnClVrf4PoZQ0fTFPAKYZzhyjj2wtQ6ZFTMTVomz-IZD4gbDTpx-M7Qc7dEJ-UtQ4_DgssNsmjhA2p",
        alt: "Node.js logo with the green hexagon shape",
      },
      {
        name: "MongoDB",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwxACd3asynj0Unj2CTUNt0ZLhpieTxS-KpYHST2kWYxbMK1rq6N4d8nCCgtgnKZx4byoaLaq8Fe7CQymmOO9vLjgIHVoWKBxYtAwlPa-yDkiIT93vxzub9XInXZD-xRXL8nz-ib22S0uuGTPegorHghcJw6snk2G_ax3_G55_ZOuBJuXsjLmd-gjOhKqmM9eR3_-3HpiTLdMxAeObDG4hNWRzGlk7WmxuNWWz5outZe7OfjG6cpBNK7f8J6OzoyLDA1rMFPY0lPAq",
        alt: "MongoDB leaf logo in green",
      },
    ],
  },
  {
    title: "Tools & Operations",
    code: "04_WORKFLOW_ENG",
    icon: "handyman",
    iconColorClass: "text-on-surface",
    bgColorClass: "bg-surface-container-highest/50",
    borderColorClass: "border-border-custom",
    items: [
      {
        name: "GitHub",
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7XB2q0TFi2m92F-mS9vcZl_c5jNXBnyJtFPEieyMo--sOnR9ai16jIbJ-ow7zJVoi7vSFDUHch3ksfqhmjS3jgkuV-e5ldefNpsEf-88-Jv4SNpv4Uf5DTaczcyM2wQY5yPmJmD4EgFZMYs3bbyRl_YkcKQedwf6x5jmTythmGdHmUMQwXRkd6P_PJOMBt7C66EYmPlUr2Dc7kyi9f5Vvyg2FnExWJ72fk2o8mRZDi6WC1v--D52Hi5S_K4BRpOpbgx_Tj16e0_zt",
        alt: "GitHub Octocat logo in white",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 py-24 px-margin-mobile max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <div className="mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-fixed-dim mb-4">
          SYSTEM_MANIFESTO_V1
        </h1>
        <p className="text-secondary font-label-serif max-w-2xl opacity-80">
          A blueprint of technological proficiencies and architectural choices defining a decade of digital engineering.
        </p>
      </div>

      {/* Technical Stack Grid */}
      <div className="grid grid-cols-1 gap-12 relative select-none">
        {/* Central Connection Line (Desktop) */}
        <div className="hidden md:block absolute left-[12.5%] top-0 bottom-0 w-px border-l border-dashed border-custom-border-custom -z-10"></div>

        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 md:flex-row md:items-start group/row transition-all duration-300"
          >
            {/* Category Header */}
            <div className="md:w-1/4 flex items-center gap-4 py-4 md:sticky md:top-32 z-10">
              <div
                className={`w-12 h-12 rounded-lg ${category.bgColorClass} flex items-center justify-center border ${category.borderColorClass} transition-all duration-300 group-hover/row:scale-110`}
              >
                <span className={`material-symbols-outlined ${category.iconColorClass} filled`}>
                  {category.icon}
                </span>
              </div>
              <div>
                <h2 className="text-nav-link font-nav-link uppercase tracking-widest text-primary">
                  {category.title}
                </h2>
                <span className="text-[10px] text-secondary opacity-50 font-mono">
                  {category.code}
                </span>
              </div>
            </div>

            {/* Category Items Card */}
            <div className="flex-grow glass-panel rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-500 hover:border-primary/30">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="flex flex-col items-center gap-3 stack-item-hover transition-all duration-300 group/item"
                >
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <Image
                      className="w-full h-full object-contain opacity-70 grayscale group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
                      src={item.logo}
                      alt={item.alt}
                      width={48}
                      height={48}
                      unoptimized
                    />
                  </div>
                  <span className="text-nav-link font-nav-link text-secondary-fixed text-xs tracking-wider uppercase transition-colors group-hover/item:text-primary">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
