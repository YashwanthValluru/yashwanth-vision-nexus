import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, GraduationCap, Users } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Academy ML Foundations',
    provider: 'Amazon Web Services',
    icon: GraduationCap,
    type: 'certification'
  },
  {
    title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services',
    icon: GraduationCap,
    type: 'certification'
  }
];

const achievements = [
  {
    title: 'SRM JEE 5th Rank',
    description: 'Achieved 5th rank in SRM Joint Engineering Entrance Examination',
    icon: Trophy,
    type: 'achievement'
  },
  {
    title: 'SRM Founder\'s Scholarship',
    description: 'Awarded merit-based scholarship for academic excellence',
    icon: Award,
    type: 'achievement'
  }
];

const leadership = [
  {
    title: 'Joint Cultural Secretary',
    description: 'Milan Festival Organizer - Led cultural events and student engagement',
    icon: Users,
    type: 'leadership'
  },
  {
    title: 'AIU Host at SRMIST',
    description: 'Hosted All India University events, managing logistics and coordination',
    icon: Users,
    type: 'leadership'
  },
  {
    title: 'Head of Student Committees',
    description: 'Led multiple student committees and managed cross-functional teams',
    icon: Users,
    type: 'leadership'
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            📜 Certifications & 🏆 Achievements
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <GraduationCap className="mr-2 h-6 w-6" />
                Certifications
              </h3>
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-glow transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <cert.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                          Certified
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Trophy className="mr-2 h-6 w-6" />
                Achievements
              </h3>
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-glow transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <achievement.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                          Excellence
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Leadership */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Leadership
              </h3>
              {leadership.map((leader, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-glow transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <leader.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">{leader.title}</h4>
                        <p className="text-sm text-muted-foreground">{leader.description}</p>
                        <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                          Leadership
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};