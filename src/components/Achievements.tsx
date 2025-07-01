
import { Star, Award, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize in SPECTRA Art Competition",
      organization: "Lovely Professional University",
      icon: <Trophy className="text-yellow-500" size={24} />,
      emoji: "🏆"
    },
    {
      title: "Gold Medal in Shooting & Singing",
      organization: "NCC Warangal Camp – Selected for RDC Parade",
      icon: <Award className="text-amber-500" size={24} />,
      emoji: "🥇"
    },
    {
      title: "First Consolation Prize",
      organization: "Hindu Young World Art Competition",
      icon: <Star className="text-purple-500" size={24} />,
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
        
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-yellow-50 to-orange-50">
                    <TableHead className="w-16 text-center">Award</TableHead>
                    <TableHead className="text-left font-semibold">Achievement</TableHead>
                    <TableHead className="text-left font-semibold">Organization</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {achievements.map((achievement, index) => (
                    <TableRow 
                      key={index} 
                      className="hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-orange-50/50 transition-all duration-300"
                    >
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-2xl">{achievement.emoji}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {achievement.title}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {achievement.organization}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
