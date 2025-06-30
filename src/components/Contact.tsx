
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on innovative AI solutions? Let's build something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations in AI and data science. Feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                        <Mail className="text-blue-300" size={20} />
                      </div>
                      <span className="text-blue-100">fouziya.shaik@example.com</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                        <MapPin className="text-purple-300" size={20} />
                      </div>
                      <span className="text-blue-100">Punjab, India</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start p-4 h-auto"
                      onClick={() => window.open('https://linkedin.com', '_blank')}
                    >
                      <Linkedin className="mr-3" size={24} />
                      <div className="text-left">
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-sm text-blue-100">Professional Network</div>
                      </div>
                    </Button>
                    
                    <Button 
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white justify-start p-4 h-auto"
                      onClick={() => window.open('https://github.com', '_blank')}
                    >
                      <Github className="mr-3" size={24} />
                      <div className="text-left">
                        <div className="font-semibold">GitHub</div>
                        <div className="text-sm text-gray-300">Code Repository</div>
                      </div>
                    </Button>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white justify-start p-4 h-auto"
                    >
                      <Mail className="mr-3" size={24} />
                      <div className="text-left">
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-pink-100">Direct Contact</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-200">
            © 2024 Fouziya Shaik. Crafted with passion for AI and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
