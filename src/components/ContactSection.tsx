import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Github, Linkedin, Download, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center">
            📬 Let's Connect
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card-gradient border-border hover:shadow-glow transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">yashwanthvalluru984882@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91-8919384632</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Github className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-muted-foreground">github.com/Vr5189</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-muted-foreground">linkedin.com/in/yashwanth-valluru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-glow" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-card-gradient border-border hover:shadow-glow transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};