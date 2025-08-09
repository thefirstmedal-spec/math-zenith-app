import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const grades = [
  { id: 1, name: "Grade 1", topics: "Basic Numbers, Addition, Subtraction", color: "from-blue-400 to-blue-600" },
  { id: 2, name: "Grade 2", topics: "Multiplication Tables, Place Value", color: "from-green-400 to-green-600" },
  { id: 3, name: "Grade 3", topics: "Division, Fractions Introduction", color: "from-purple-400 to-purple-600" },
  { id: 4, name: "Grade 4", topics: "Advanced Multiplication, Decimals", color: "from-orange-400 to-orange-600" },
  { id: 5, name: "Grade 5", topics: "Complex Fractions, Geometry", color: "from-red-400 to-red-600" },
  { id: 6, name: "Grade 6", topics: "Algebra Basics, Ratios", color: "from-teal-400 to-teal-600" },
];

const GradeSelector = () => {
  const handleGradeSelect = (grade: typeof grades[0]) => {
    alert(`Starting ${grade.name} curriculum!\n\nTopics: ${grade.topics}\n\nThis will take you to ${grade.name} lessons and practice materials.`);
  };
  return (
    <section className="py-16 bg-secondary/30" id="grades">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Grade Level</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your grade to access tailored math content and practice materials
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {grades.map((grade) => (
            <Card key={grade.id} className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group" onClick={() => handleGradeSelect(grade)}>
              <div className={`bg-gradient-to-r ${grade.color} p-4 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <GraduationCap className="h-8 w-8 text-white mx-auto" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-center">{grade.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{grade.topics}</p>
              
              <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" onClick={(e) => {
                e.stopPropagation();
                handleGradeSelect(grade);
              }}>
                <BookOpen className="h-4 w-4" />
                Start Learning
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradeSelector;