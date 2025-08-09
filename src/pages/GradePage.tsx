import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calculator, Star, Trophy, GraduationCap } from "lucide-react";
import Header from "@/components/Header";

const grades = [
  { 
    id: 1, 
    name: "Grade 1", 
    topics: "Basic Numbers, Addition, Subtraction", 
    color: "from-blue-400 to-blue-600",
    practiceSheets: [
      { title: "Number Recognition 1-10", difficulty: "Easy", exercises: 15 },
      { title: "Simple Addition", difficulty: "Easy", exercises: 20 },
      { title: "Basic Subtraction", difficulty: "Medium", exercises: 18 },
      { title: "Counting Practice", difficulty: "Easy", exercises: 12 }
    ]
  },
  { 
    id: 2, 
    name: "Grade 2", 
    topics: "Multiplication Tables, Place Value", 
    color: "from-green-400 to-green-600",
    practiceSheets: [
      { title: "2 Times Table", difficulty: "Easy", exercises: 12 },
      { title: "5 Times Table", difficulty: "Easy", exercises: 12 },
      { title: "10 Times Table", difficulty: "Easy", exercises: 12 },
      { title: "Place Value Practice", difficulty: "Medium", exercises: 25 }
    ]
  },
  { 
    id: 3, 
    name: "Grade 3", 
    topics: "Division, Fractions Introduction", 
    color: "from-purple-400 to-purple-600",
    practiceSheets: [
      { title: "Simple Division", difficulty: "Medium", exercises: 20 },
      { title: "Introduction to Fractions", difficulty: "Medium", exercises: 15 },
      { title: "Mixed Operations", difficulty: "Hard", exercises: 30 },
      { title: "Word Problems", difficulty: "Medium", exercises: 10 }
    ]
  },
  { 
    id: 4, 
    name: "Grade 4", 
    topics: "Advanced Multiplication, Decimals", 
    color: "from-orange-400 to-orange-600",
    practiceSheets: [
      { title: "Multi-digit Multiplication", difficulty: "Medium", exercises: 25 },
      { title: "Introduction to Decimals", difficulty: "Medium", exercises: 20 },
      { title: "Long Division", difficulty: "Hard", exercises: 18 },
      { title: "Decimal Operations", difficulty: "Hard", exercises: 22 }
    ]
  },
  { 
    id: 5, 
    name: "Grade 5", 
    topics: "Complex Fractions, Geometry", 
    color: "from-red-400 to-red-600",
    practiceSheets: [
      { title: "Fraction Operations", difficulty: "Hard", exercises: 30 },
      { title: "Basic Geometry", difficulty: "Medium", exercises: 20 },
      { title: "Area and Perimeter", difficulty: "Medium", exercises: 15 },
      { title: "Mixed Number Operations", difficulty: "Hard", exercises: 25 }
    ]
  },
  { 
    id: 6, 
    name: "Grade 6", 
    topics: "Algebra Basics, Ratios", 
    color: "from-teal-400 to-teal-600",
    practiceSheets: [
      { title: "Introduction to Algebra", difficulty: "Hard", exercises: 20 },
      { title: "Ratios and Proportions", difficulty: "Medium", exercises: 25 },
      { title: "Percentage Calculations", difficulty: "Medium", exercises: 18 },
      { title: "Advanced Word Problems", difficulty: "Hard", exercises: 15 }
    ]
  },
];

const GradePage = () => {
  const { gradeId } = useParams();
  const navigate = useNavigate();
  
  const grade = grades.find(g => g.id === parseInt(gradeId || ""));
  
  if (!grade) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Grade Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handlePracticeStart = (sheet: typeof grade.practiceSheets[0]) => {
    alert(`Starting practice: ${sheet.title}\n\nDifficulty: ${sheet.difficulty}\nExercises: ${sheet.exercises}\n\nThis will open the interactive practice session.`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        {/* Grade Header */}
        <div className="text-center mb-12">
          <div className={`bg-gradient-to-r ${grade.color} p-6 rounded-2xl mb-6 inline-block`}>
            <GraduationCap className="h-12 w-12 text-white mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{grade.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{grade.topics}</p>
        </div>

        {/* Practice Sheets Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Practice Sheets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {grade.practiceSheets.map((sheet, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-r ${grade.color} p-2 rounded-lg`}>
                      <Calculator className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{sheet.title}</h3>
                      <p className="text-sm text-muted-foreground">{sheet.exercises} exercises</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={getDifficultyColor(sheet.difficulty)}>
                    {sheet.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>Not started</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePracticeStart(sheet)}
                    className="gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    Start Practice
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Your Progress</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Completed Sheets</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">0%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </div>
            <div className="text-center p-4 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Stars Earned</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default GradePage;