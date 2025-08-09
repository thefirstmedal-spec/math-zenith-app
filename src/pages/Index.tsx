import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GradeSelector from "@/components/GradeSelector";
import MultiplicationTable from "@/components/MultiplicationTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GradeSelector />
      <MultiplicationTable />
    </div>
  );
};

export default Index;
