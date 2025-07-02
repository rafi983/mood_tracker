import React, { useState } from "react";
import { X } from "lucide-react";
import BasicMoodSelector from "../mood/BasicMoodSelector";
import DetailedFeelingsSelector from "../mood/DetailedFeelingsSelector";
import JournalEntry from "../mood/JournalEntry";
import SleepTracker from "../mood/SleepTracker";

const MoodLogger = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [moodData, setMoodData] = useState({
    basicMood: "0",
    detailedMoods: [],
    journalEntry: "",
    sleepHours: "7-8 hours",
  });

  const totalSteps = 4;

  const handleNext = (stepData) => {
    const updatedMoodData = { ...moodData, ...stepData };
    setMoodData(updatedMoodData);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(updatedMoodData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (finalMoodData) => {
    onComplete(finalMoodData);
  };

  return (
      <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: "rgba(87, 87, 123, 0.3)" }}
      >
        <StepWrapper step={currentStep} totalSteps={totalSteps} onClose={onClose}>
          <StepContent
              step={currentStep}
              moodData={moodData}
              onNext={handleNext}
              onPrevious={handlePrevious}
          />
        </StepWrapper>
      </div>
  );
};

const StepWrapper = ({ step, totalSteps, onClose, children }) => {
  return (
      <div className="w-[520px] h-[520px] max-h-[560px] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 shadow-xl mx-auto flex flex-col overflow-hidden">
        <div className="flex justify-between items-start mb-6 flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-800">Log your mood.</h1>
          <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex gap-2 mb-8 flex-shrink-0">
          {Array.from({ length: totalSteps }, (_, index) => (
              <div
                  key={index}
                  className={`h-2 rounded-full flex-1 ${
                      index < step ? "bg-blue-500" : "bg-gray-200"
                  }`}
              />
          ))}
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
          {children}
        </div>
      </div>
  );
};

const StepContent = ({ step, moodData, onNext, onPrevious }) => {
  const commonProps = {
    moodData,
    onNext,
    onPrevious,
  };

  switch (step) {
    case 1:
      return <BasicMoodSelector {...commonProps} />;
    case 2:
      return <DetailedFeelingsSelector {...commonProps} />;
    case 3:
      return <JournalEntry {...commonProps} />;
    case 4:
      return <SleepTracker {...commonProps} />;
    default:
      return null;
  }
};

export default MoodLogger;