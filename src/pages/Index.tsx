
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
