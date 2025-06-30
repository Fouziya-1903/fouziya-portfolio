
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Sidebar />
      
      {/* Main content with left margin for sidebar */}
      <div className="md:ml-64">
        <section id="hero">
          <Hero />
        </section>
        
        {/* Grid Layout for Main Sections */}
        <div className="container mx-auto px-6 py-12">
          <section id="projects" className="mb-16">
            <Projects />
          </section>
          
          <section id="skills" className="mb-16">
            <Skills />
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <section id="achievements">
              <Achievements />
            </section>
            <section id="certifications">
              <Certifications />
            </section>
          </div>
          
          <section id="education" className="mb-16">
            <Education />
          </section>
        </div>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;
