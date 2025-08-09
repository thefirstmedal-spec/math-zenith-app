import { Calculator, BookOpen, Trophy, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card/90 backdrop-blur-sm border-b shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Math Mastery Hub</h1>
              <p className="text-sm text-muted-foreground">Learn • Practice • Master</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Grades
            </Button>
            <Button variant="ghost" className="gap-2">
              <Calculator className="h-4 w-4" />
              Practice
            </Button>
            <Button variant="ghost" className="gap-2">
              <Trophy className="h-4 w-4" />
              Progress
            </Button>
          </nav>
          
          <Button variant="outline" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;