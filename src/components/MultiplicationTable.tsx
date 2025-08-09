import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle, X } from "lucide-react";

const MultiplicationTable = () => {
  const [selectedTable, setSelectedTable] = useState(2);
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  const generateQuestion = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  const checkAnswer = () => {
    const correctAnswer = selectedTable * currentQuestion;
    const isCorrect = parseInt(userAnswer) === correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
    setCurrentQuestion(generateQuestion());
    setUserAnswer("");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiplication Tables</h2>
          <p className="text-xl text-muted-foreground">
            Master tables from 1 to 50 with interactive practice
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Table Selector */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Select a table to practice:</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {[...Array(20)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={selectedTable === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTable(i + 1)}
                  className="h-10"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Table Display */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Table of {selectedTable}</h3>
              </div>
              
              <div className="space-y-3">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">
                      {selectedTable} × {i + 1}
                    </span>
                    <span className="font-bold text-primary">
                      = {selectedTable * (i + 1)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Practice Mode */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Practice Mode</h3>
                {questionsAnswered > 0 && (
                  <Badge variant="secondary">
                    Score: {score}/{questionsAnswered}
                  </Badge>
                )}
              </div>

              {!practiceMode ? (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                      <Calculator className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Ready to practice the {selectedTable} times table?
                    </p>
                  </div>
                  <Button 
                    variant="hero" 
                    onClick={() => {
                      setPracticeMode(true);
                      setCurrentQuestion(generateQuestion());
                      setScore(0);
                      setQuestionsAnswered(0);
                    }}
                  >
                    Start Practice
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-4">
                      {selectedTable} × {currentQuestion} = ?
                    </div>
                    
                    <div className="flex gap-2 max-w-xs mx-auto">
                      <Input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Your answer"
                        className="text-center text-lg"
                        onKeyPress={(e) => e.key === 'Enter' && userAnswer && checkAnswer()}
                      />
                      <Button 
                        onClick={checkAnswer}
                        disabled={!userAnswer}
                        variant="success"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setPracticeMode(false)}
                      className="gap-2"
                    >
                      <X className="h-4 w-4" />
                      Stop Practice
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiplicationTable;