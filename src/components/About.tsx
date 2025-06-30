
import { User, Brain, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full translate-x-20 translate-y-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4 group">
            <Sparkles className="text-purple-500 mr-3 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
              About Me
            </h2>
            <Sparkles className="text-blue-500 ml-3 animate-pulse delay-300" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-fade-in delay-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex items-center mb-8 animate-fade-in delay-500">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 hover:text-purple-700 transition-colors duration-300">Professional Journey</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in delay-700 hover:text-gray-900 transition-colors duration-300">
                I'm <span className="font-semibold text-purple-700 hover:text-purple-900 transition-colors duration-300">Fouziya Shaik</span>, a Computer Science engineer specializing in 
                <span className="font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300"> AI-driven analytics, emotional intelligence modeling, and human-centered systems</span>. 
                With hands-on experience in Python, SQL, Power BI, and machine learning pipelines, I craft intelligent solutions that decode behavioral signals and drive empathetic technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start group animate-fade-in delay-1000 hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Brain className="text-blue-600 group-hover:text-blue-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Current Focus</h4>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      Currently developing a personal AI wellness companion, blending natural language processing, 
                      sentiment analysis, and data visualization to enable mood-aware interactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group animate-fade-in delay-1200 hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 mt-1 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Heart className="text-purple-600 group-hover:text-purple-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Mission</h4>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      I aim to build scalable, responsible AI systems that connect data with human depth, 
                      creating technology that truly understands and serves human needs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
