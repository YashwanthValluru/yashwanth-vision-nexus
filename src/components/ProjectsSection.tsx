import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Eye } from 'lucide-react';

const projects = [
  {
    title: 'Forest Land Encroachment Detection',
    description: 'Advanced satellite monitoring system using Google Earth Engine and Swin Transformer for real-time forest encroachment detection and analysis.',
    technologies: ['Google Earth Engine', 'Swin Transformer', 'Python', 'Computer Vision', 'Remote Sensing'],
    highlights: ['Real-time monitoring', 'AI-powered detection', 'Satellite imagery analysis'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Wheat Disease Classification with SSL',
    description: 'Self-supervised learning approach for wheat disease classification using VGG16, ResNet50, YOLO, and positional attention mechanisms.',
    technologies: ['VGG16', 'ResNet50', 'YOLO', 'Positional Attention', 'TensorFlow', 'Keras'],
    highlights: ['Self-supervised learning', 'Multi-model ensemble', 'High accuracy detection'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'End-to-end AWS infrastructure automation using Terraform, with CI/CD pipelines and monitoring solutions.',
    technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Docker', 'Prometheus', 'Grafana'],
    highlights: ['Infrastructure as Code', 'Automated deployments', 'Comprehensive monitoring'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🌟 Featured Projects
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-glow transition-all group h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary transition-colors">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
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