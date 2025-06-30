
import { GraduationCap, Calendar, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      duration: "Since Aug 2022",
      cgpa: "7.14",
      courses: ["Data Management", "Tableau", "Computer Graphics", "International Business"],
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Govt. Polytechnic, Masab Tank, Telangana",
      duration: "Completed",
      cgpa: "88.47%",
      courses: ["Computer Aided Drafting", "Physics"],
      icon: "📡",
      color: "from-purple-500 to-purple-600"
    },
    {
      degree: "Matriculation",
      institution: "Atomic Energy Central School, Telangana",
      duration: "Completed",
      cgpa: "91%",
      courses: [],
      icon: "🏫",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="text-blue-600 mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className={`bg-gradient-to-r ${edu.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center text-xl md:text-2xl">
                  <span className="text-2xl mr-3">{edu.icon}</span>
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {edu.duration}
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-500 mr-2" size={20} />
                  <span className="text-lg font-semibold text-gray-800">
                    Score: {edu.cgpa}
                  </span>
                </div>
                
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
