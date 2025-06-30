
import { Briefcase, Star, ArrowUp, Zap, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI Companion for Emotional & Mental Well-being",
      status: "Ongoing",
      description: "A personal AI assistant for journaling and wellness tracking. Analyzes patterns, recommends personalized activities, and has a roadmap for reinforcement learning and cycle syncing.",
      techStack: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      isOngoing: true
    },
    {
      title: "User Purchase Intent Prediction – E-Commerce Analytics",
      status: "Completed",
      description: "Built an ML pipeline to predict buying decisions from clickstream behavior. Achieved 85% accuracy using session depth, time, and cart behavior.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      accuracy: "85%",
      isOngoing: false
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 right-10 text-purple-200 animate-bounce delay-300">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-20 left-10 text-blue-200 animate-bounce delay-700">
        <Zap size={20} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4 group">
            <Briefcase className="text-purple-600 mr-3 group-hover:rotate-12 transition-transform duration-300" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
              Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className={`bg-gradient-to-r ${project.color} text-white rounded-t-lg relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-2">
                  {project.isOngoing && (
                    <div className="flex items-center bg-white/20 px-2 py-1 rounded-full animate-pulse">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-2"></div>
                      <span className="text-xs font-medium">Live</span>
                    </div>
                  )}
                </div>
                
                {/* Animated sparkles */}
                <div className="absolute top-2 left-2 text-white/60 animate-bounce delay-500">
                  <Sparkles size={12} />
                </div>
                
                <CardTitle className="flex items-center text-xl md:text-2xl relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl mr-3 animate-bounce">{project.icon}</span>
                  <div>
                    <div className="leading-tight hover:text-yellow-100 transition-colors duration-300">{project.title}</div>
                    {project.accuracy && (
                      <div className="flex items-center mt-2 text-sm animate-fade-in delay-300">
                        <Star className="mr-1 animate-pulse" size={16} />
                        Accuracy: {project.accuracy}
                      </div>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 relative z-10">
                <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center group-hover:text-purple-700 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-110 hover:shadow-md animate-fade-in"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-purple-200 transition-colors duration-300">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    project.isOngoing 
                      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}>
                    {project.status}
                  </span>
                  <ArrowUp className="text-gray-400 group-hover:text-blue-500 group-hover:scale-125 transition-all duration-300 transform group-hover:-translate-y-2" size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
