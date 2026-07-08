"use client";
 export default function Footer() {
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = new FormData(form);

  const body = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Failed to send message.");
  }
};
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
           <form
  className="max-w-xl space-y-4"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full p-4 rounded-xl bg-surface-container border border-border-custom"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full p-4 rounded-xl bg-surface-container border border-border-custom"
    required
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Your Message"
    className="w-full p-4 rounded-xl bg-surface-container border border-border-custom resize-none"
    required
  />
    
  <button
    className="bg-primary text-on-primary px-8 py-4 rounded-full"
  >
    Send Message
  </button>
  
</form>
            
          </div>
        </div>

        
          
        
      </div>
    </footer>
  );
}