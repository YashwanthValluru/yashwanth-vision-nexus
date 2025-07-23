import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const technologies = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'Bash', icon: '⚡' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'GitHub Actions', icon: '⚙️' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Kubernetes', icon: '⛵' }
    ]
  },
  {
    category: 'Machine Learning',
    items: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'Keras', icon: '🤖' },
      { name: 'Scikit-Learn', icon: '📊' },
      { name: 'Computer Vision', icon: '👁️' }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'SonarQube', icon: '🔍' },
      { name: 'Jira', icon: '📋' },
      { name: 'Postman', icon: '📮' },
      { name: 'Prometheus', icon: '📈' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Git', icon: '📝' },
      { name: 'Linux', icon: '🐧' }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="technologies" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            💻 Technologies I Worked On
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((category, index) => (
              <Card key={category.category} className="bg-card-gradient border-border hover:shadow-glow transition-all group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center group-hover:text-primary transition-colors">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="flex flex-col items-center p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-all group cursor-pointer hover:scale-105"
                      >
                        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</span>
                        <span className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};