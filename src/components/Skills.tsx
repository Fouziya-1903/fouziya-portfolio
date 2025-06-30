
import { Code, Database, BarChart, Users, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={32} />,
      skills: ["Python", "Java", "SQL", "R"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Data Science & ML",
      icon: <BarChart className="text-purple-600" size={32} />,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Predictive Modeling"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Visualization Tools",
      icon: <Palette className="text-green-600" size={32} />,
      skills: ["Power BI", "Tableau", "Microsoft Excel", "Matplotlib"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-orange-600" size={32} />,
      skills: ["MySQL", "Git", "Jupyter Notebook", "Android Studio"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-pink-600" size={32} />,
      skills: ["Adaptability", "Communication", "Team Collaboration", "Versatility", "Persuasiveness"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group perspective-1000 h-64 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative preserve-3d w-full h-full duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg bg-gradient-to-r ${category.color} text-white flex flex-col items-center justify-center cursor-pointer group-hover:shadow-2xl transition-shadow duration-300`}>
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center px-4">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90 mt-2">Hover to see skills</p>
                </div>
                
                {/* Back of card */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg ${category.bgColor} border-2 border-gray-200 p-6 flex flex-col justify-center`}>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 animate-pulse`}></div>
                        <span className="text-gray-700 font-medium text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
