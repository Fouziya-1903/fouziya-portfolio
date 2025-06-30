
import { Award, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "AI & Data Analysis using Power BI",
      provider: "Skill Nation",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Emerging AI Workshop",
      provider: "be10x",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SQL & DBMS",
      provider: "Board Infinity",
      icon: "🗄️",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Industrial Training",
      provider: "Heavy Water Plant",
      icon: "🏭",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "NCC 'A' Certificate",
      provider: "SGT Rank",
      icon: "🎖️",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="text-blue-600 mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Certifications
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className={`bg-gradient-to-r ${cert.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center text-lg">
                  <span className="text-2xl mr-3">{cert.icon}</span>
                  <span className="leading-tight">{cert.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-600">
                  <Building size={16} className="mr-2" />
                  <span className="font-medium">{cert.provider}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center">
                  <Award className="text-blue-500 group-hover:text-purple-500 transition-colors duration-300" size={24} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
