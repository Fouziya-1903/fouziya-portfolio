
import { Briefcase, Star, ArrowUp } from "lucide-react";
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="text-purple-600 mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Projects
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardHeader className={`bg-gradient-to-r ${project.color} text-white rounded-t-lg relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-2">
                  {project.isOngoing && (
                    <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-xs font-medium">Live</span>
                    </div>
                  )}
                </div>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <span className="text-2xl mr-3">{project.icon}</span>
                  <div>
                    <div className="leading-tight">{project.title}</div>
                    {project.accuracy && (
                      <div className="flex items-center mt-2 text-sm">
                        <Star className="mr-1" size={16} />
                        Accuracy: {project.accuracy}
                      </div>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.isOngoing 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <ArrowUp className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 transform group-hover:-translate-y-1" size={20} />
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
