
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl md:text-5xl font-bold text-gray-600">
                FS
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Fouziya Shaik
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600 mb-2">
            <MapPin size={20} className="text-blue-500" />
            <span>AI Engineer & Data Scientist</span>
          </div>
          <p className="text-gray-500">Punjab, India</p>
        </div>

        {/* Bio */}
        <div className="mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Specializing in <span className="font-semibold text-blue-600">AI-driven analytics</span>, 
            <span className="font-semibold text-purple-600"> emotional intelligence modeling</span>, and 
            <span className="font-semibold text-pink-600"> human-centered systems</span>. 
            Crafting intelligent solutions that decode behavioral signals and drive empathetic technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-blue-300"
              aria-label={label}
            >
              <Icon size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
