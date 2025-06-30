
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-scale-in">
              FS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Fouziya Shaik
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-Driven Analytics Specialist & Emotional Intelligence Researcher
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Crafting intelligent solutions that decode behavioral signals and drive empathetic technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-100 hover:text-blue-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-200" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
