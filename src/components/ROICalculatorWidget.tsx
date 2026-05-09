"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import ROICalculator from "@/components/ROICalculator";

interface CalculatorContextType {
  openCalculator: (solution: string) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
);

export function ROICalculatorWidget({ children }: { children: ReactNode }) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState("");

  const openCalculator = (solution: string) => {
    setSelectedSolution(solution);
    setIsCalculatorOpen(true);
  };

  return (
    <CalculatorContext.Provider value={{ openCalculator }}>
      {children}
      <ROICalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        solutionTitle={selectedSolution}
      />
    </CalculatorContext.Provider>
  );
}

export function useROICalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      "useROICalculator must be used within ROICalculatorWidget"
    );
  }
  return context;
}
