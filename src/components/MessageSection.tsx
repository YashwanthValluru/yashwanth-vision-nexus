import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export const MessageSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <Card className="bg-card-gradient border-border shadow-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">A Message from Yashwanth</h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Thank you for taking the time to explore my portfolio! I'd be happy to connect if you have a hiring opportunity to discuss or an exciting collaboration in mind.
                    </p>
                    
                    <p>
                      I'm always open to scheduling a call or meeting to discuss projects, potential opportunities, or just to have a great conversation about technology and innovation.
                    </p>
                    
                    <p className="text-foreground font-medium">
                      Let's create something amazing together! 🚀
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      Y
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Valluru Yashwanth Reddy</p>
                      <p className="text-sm text-muted-foreground">DevOps Engineer | ML Developer | Cloud Innovator</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};