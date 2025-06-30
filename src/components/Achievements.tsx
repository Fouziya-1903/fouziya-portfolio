
import { Star, Award, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize in SPECTRA Art Competition",
      organization: "Lovely Professional University",
      icon: <Trophy className="text-yellow-500" size={28} />,
      color: "from-yellow-400 to-orange-500",
      emoji: "🏆"
    },
    {
      title: "Gold Medal in Shooting & Singing",
      organization: "NCC Warangal Camp – Selected for RDC Parade",
      icon: <Award className="text-amber-500" size={28} />,
      color: "from-amber-400 to-yellow-500",
      emoji: "🥇"
    },
    {
      title: "First Consolation Prize",
      organization: "Hindu Young World Art Competition",
      icon: <Star className="text-purple-500" size={28} />,
      color: "from-purple-400 to-pink-500",
      emoji: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-yellow-500 mr-3" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Achievements
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{achievement.emoji}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 font-medium">
                  {achievement.organization}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  {achievement.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
