
import { useState } from "react";
import { Menu, X, User, FolderOpen, Wrench, Award, GraduationCap, Mail } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Introduction", icon: <User size={20} /> },
    { id: "projects", label: "Projects", icon: <FolderOpen size={20} /> },
    { id: "skills", label: "Skills", icon: <Wrench size={20} /> },
    { id: "achievements", label: "Achievements", icon: <Award size={20} /> },
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
        className="fixed top-6 left-6 z-50 md:hidden bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-2xl z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 pt-20 md:pt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-gray-600 text-sm">Fouziya Shaik</p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
              >
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                </span>
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">
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
