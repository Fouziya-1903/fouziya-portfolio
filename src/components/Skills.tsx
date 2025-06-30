
import { Code, Database, BarChart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Python", "Java", "SQL", "R"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Science & ML",
      icon: <BarChart className="text-purple-600" size={24} />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Predictive Modeling"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Visualization Tools",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["Power BI", "Tableau", "Microsoft Excel", "Matplotlib"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-orange-600" size={24} />,
      skills: ["MySQL", "Git", "Jupyter Notebook", "Android Studio"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-pink-600" size={24} />,
      skills: ["Adaptability", "Communication", "Team Collaboration", "Versatility", "Persuasiveness"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center text-lg">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 font-medium"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
