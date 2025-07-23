import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Cog, Brain, Wrench } from 'lucide-react';

const SkillBar = ({ skill, percentage, delay = 0 }: { skill: string; percentage: number; delay?: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="skill-bar h-2 rounded-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Bash', level: 75 }
    ]
  },
  {
    title: 'DevOps',
    icon: Cog,
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 80 },
      { name: 'Terraform', level: 75 }
    ]
  },
  {
    title: 'Cloud (AWS)',
    icon: Cloud,
    skills: [
      { name: 'EC2 & S3', level: 85 },
      { name: 'Lambda', level: 80 },
      { name: 'ECS & EKS', level: 75 },
      { name: 'IAM', level: 80 }
    ]
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'Keras', level: 80 },
      { name: 'Scikit-Learn', level: 85 },
      { name: 'Computer Vision', level: 75 }
    ]
  }
];

const tools = [
  'SonarQube', 'Jira', 'Postman', 'Prometheus', 'Grafana', 'Git', 'Linux', 'Kubernetes'
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🔧 Skills & Expertise
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="bg-card-gradient border-border hover:shadow-glow transition-all">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      percentage={skill.level}
                      delay={index * 200 + skillIndex * 100}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-card-gradient border-border hover:shadow-glow transition-all">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-6 w-6 text-primary" />
                <span>Tools & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};