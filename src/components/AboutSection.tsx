import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Who Am I?
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate IT Engineer with specializations in DevOps, Machine Learning, and Cloud technologies. 
                I thrive on building scalable solutions and automating complex workflows.
              </p>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span>Studying at SRM Institute | GPA 8.55</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Strong team player, fast learner, and open-source contributor who believes in 
                continuous learning and sharing knowledge with the community.
              </p>
            </div>
            
            <div className="grid gap-4">
              <Card className="bg-card-gradient border-border hover:shadow-glow transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">5th Rank</h3>
                      <p className="text-sm text-muted-foreground">SRM JEE Achievement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card-gradient border-border hover:shadow-glow transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Team Leader</h3>
                      <p className="text-sm text-muted-foreground">Cultural Secretary & Event Organizer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};