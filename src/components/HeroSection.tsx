import { Button } from "@/components/ui/button";
import { PlayCircle, BookOpen, Trophy, Calculator } from "lucide-react";
import heroMath from "@/assets/hero-math.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroMath})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Master Mathematics
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Grade by Grade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            From basic arithmetic to advanced topics. Practice with interactive tools, 
            track your progress, and ace your exams with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="gap-2" onClick={() => document.getElementById('practice')?.scrollIntoView({ behavior: 'smooth' })}>
              <PlayCircle className="h-5 w-5" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => document.getElementById('grades')?.scrollIntoView({ behavior: 'smooth' })}>
              <BookOpen className="h-5 w-5" />
              Browse Topics
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interactive Tables</h3>
              <p className="text-muted-foreground">Master multiplication tables 1-50 with engaging practice tools</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-success p-3 rounded-lg w-fit mx-auto mb-4">
                <PlayCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Timed Practice</h3>
              <p className="text-muted-foreground">Challenge yourself with timed tests and track improvement</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-accent p-3 rounded-lg w-fit mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">Monitor your learning journey with detailed analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;