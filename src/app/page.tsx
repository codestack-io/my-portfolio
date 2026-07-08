import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";

import BottomNavbar from "@/components/BottomNavbar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background layer with radial overlay and dotted patterns */}
      <div className="fixed inset-0 misty-overlay z-0 pointer-events-none"></div>
      <div className="fixed inset-0 dotted-line z-0 pointer-events-none"></div>

      {/* Custom tracking cursor and atmospheric mouse follow trail */}
      <CursorGlow />

      {/* Top Menu App Bar Header and sidebar Drawer navigation */}
      <Header />

      {/* Main scrolling elements */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        <Hero />
        <AboutMe />
        <Education />
       
        <Projects />
      </main>

      {/* Bottom Footers */}
      <Footer />

      {/* Bottom floating dock and theme switcher */}
      <BottomNavbar />
    </div>
  );
}
