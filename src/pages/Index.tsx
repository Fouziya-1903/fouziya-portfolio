
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
      
      {/* Grid Layout for Main Sections */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-12">
            <About />
            <Education />
          </div>
          <div className="space-y-12">
            <Projects />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Achievements />
              <Certifications />
            </div>
          </div>
        </div>
      </div>
      
      {/* Full Width Skills Section */}
      <Skills />
      
      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
