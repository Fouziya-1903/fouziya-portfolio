
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-300/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-300/60 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-scale-in relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">FS</span>
              <Sparkles className="absolute top-2 right-2 text-yellow-300 opacity-70 animate-pulse" size={16} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
              Fouziya Shaik
            </span>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              AI-Driven Analytics Specialist & Emotional Intelligence Researcher
            </p>
            <div className="absolute -top-2 -right-4 text-yellow-300 animate-bounce delay-500">✨</div>
          </div>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            Crafting intelligent solutions that decode behavioral signals and drive empathetic technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-blue-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-1000">
            <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-125 transform hover:rotate-6 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <Github size={28} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-125 transform hover:-rotate-6 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-all duration-300 hover:scale-125 transform hover:rotate-3 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <ArrowDown className="text-blue-200" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
