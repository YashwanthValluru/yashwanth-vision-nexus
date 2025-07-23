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
    demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Wheat Disease Classification with SSL',
    description: 'Self-supervised learning approach for wheat disease classification using VGG16, ResNet50, YOLO, and positional attention mechanisms.',
    technologies: ['VGG16', 'ResNet50', 'YOLO', 'Positional Attention', 'TensorFlow', 'Keras'],
    highlights: ['Self-supervised learning', 'Multi-model ensemble', 'High accuracy detection'],
    demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'End-to-end AWS infrastructure automation using Terraform, with CI/CD pipelines and monitoring solutions.',
    technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Docker', 'Prometheus', 'Grafana'],
    highlights: ['Infrastructure as Code', 'Automated deployments', 'Comprehensive monitoring'],
    demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🌟 Featured Projects
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-glow transition-all group overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-6 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Demo Video */}
                  <div className={`relative aspect-video bg-muted rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <iframe
                      src={project.demoVideo}
                      title={`${project.title} Demo`}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Project Details */}
                  <div className={`p-6 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" className="group-hover:border-primary transition-all hover:scale-105">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button variant="outline" className="group-hover:border-primary transition-all hover:scale-105">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="group-hover:border-primary transition-all hover:scale-105">
                        <Eye className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};