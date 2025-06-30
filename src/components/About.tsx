
import { User, Brain, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm <span className="font-semibold text-purple-700">Fouziya Shaik</span>, a Computer Science engineer specializing in 
                <span className="font-semibold text-blue-700"> AI-driven analytics, emotional intelligence modeling, and human-centered systems</span>. 
                With hands-on experience in Python, SQL, Power BI, and machine learning pipelines, I craft intelligent solutions that decode behavioral signals and drive empathetic technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                    <Brain className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
                    <p className="text-gray-700">
                      Currently developing a personal AI wellness companion, blending natural language processing, 
                      sentiment analysis, and data visualization to enable mood-aware interactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 mt-1">
                    <Heart className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mission</h4>
                    <p className="text-gray-700">
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
