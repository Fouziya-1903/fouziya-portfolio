
import { useState } from "react";
import { Menu, X, User, Briefcase, Wrench, Award, GraduationCap, Mail, ChevronLeft } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Introduction", icon: <User size={20} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={20} /> },
    { id: "skills", label: "Skills", icon: <Wrench size={20} /> },
    { id: "certifications", label: "Certifications", icon: <Award size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-rose-50/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-200"
      >
        {isOpen ? <X size={24} className="text-rose-600" /> : <Menu size={24} className="text-rose-600" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-rose-50/95 to-blue-50/95 backdrop-blur-sm shadow-2xl z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 border-r border-rose-200`}>
        
        {/* Close Button for Desktop */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 hidden md:block p-2 rounded-full hover:bg-rose-100 transition-colors"
        >
          <ChevronLeft size={20} className="text-rose-600" />
        </button>

        {/* Profile Section */}
        <div className="p-6 pt-8 border-b border-rose-200/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-300 to-blue-300 p-1 mb-3 shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl font-bold text-slate-600">
                FS
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-1">Fouziya Shaik</h3>
            <p className="text-sm text-slate-500">AI Engineer & Data Scientist</p>
          </div>
        </div>

        <div className="p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-gradient-to-r hover:from-rose-100 hover:to-blue-100 transition-all duration-300 group"
              >
                <span className="text-slate-500 group-hover:text-rose-600 transition-colors">
                  {item.icon}
                </span>
                <span className="text-slate-600 group-hover:text-slate-800 font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
