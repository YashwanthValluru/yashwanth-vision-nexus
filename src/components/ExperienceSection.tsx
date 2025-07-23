import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, CheckCircle } from 'lucide-react';

const experienceData = [
  {
    company: 'Minfy Technologies',
    role: 'DevOps Intern',
    period: 'Apr 2025 – Present',
    location: 'Remote',
    achievements: [
      'Implemented CI/CD pipelines with GitHub Actions',
      'Deployed AWS infrastructure using Terraform',
      'Containerized applications with Docker',
      'Managed ECS, EKS clusters for scalability',
      'Set up monitoring with Prometheus & Grafana'
    ],
    technologies: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'ECS', 'EKS', 'Prometheus', 'Grafana']
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            💼 Experience
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary hidden md:block"></div>
                
                <Card className="bg-card-gradient border-border hover:shadow-glow transition-all mb-8 md:ml-16">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-2xl text-primary mb-2">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2 text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};