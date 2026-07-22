import Hero from "@/components/sections/Hero";
import RoleMarquee from "@/components/sections/RoleMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RoleMarquee />
      <About />
      <Services />
      <Experience />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
    </main>
  );
}
