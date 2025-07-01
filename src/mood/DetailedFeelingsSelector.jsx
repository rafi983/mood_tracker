import React, { useState } from "react";
import { X, Check } from "lucide-react";

const DetailedFeelingsSelector = () => {
  const [selectedMoods, setSelectedMoods] = useState([
    "Joyful",
    "Motivated",
    "Confident",
  ]);
  const [currentStep] = useState(2);
  const totalSteps = 4;

  const moodOptions = [
    "Joyful",
    "Down",
    "Anxious",
    "Calm",
    "Excited",
    "Frustrated",
    "Lonely",
    "Grateful",
    "Overwhelmed",
    "Motivated",
    "Irritable",
    "Peaceful",
    "Tired",
    "Hopeful",
    "Confident",
    "Stressed",
    "Content",
    "Disappointed",
    "Optimistic",
    "Restless",
  ];

  const handleMoodToggle = (mood) => {
    setSelectedMoods((prev) => {
      if (prev.includes(mood)) {
        return prev.filter((m) => m !== mood);
      } else if (prev.length < 3) {
        return [...prev, mood];
      }
      return prev;
    });
  };

  const handleClose = () => {
    console.log("Close modal");
  };

  const handleContinue = () => {
    console.log("Selected detailed moods:", selectedMoods);
    // Handle continue logic here
  };

  const handleBack = () => {
    console.log("Go back to previous step");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: "rgba(87, 87, 123, 0.3)" }}
    >
      <div className="w-[520px] h-[520px] max-h-[560px] bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 shadow-xl mx-auto flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-800">Log your mood.</h1>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8 flex-shrink-0">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full flex-1 ${
                index < currentStep ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-800 mb-1">
              How did you feel?
            </h2>
            <p className="text-xs text-gray-600">Select up to three tags:</p>
          </div>

          <div className="grid grid-cols-3 gap-1.5 mb-4 flex-1">
            {moodOptions.map((mood) => {
              const isSelected = selectedMoods.includes(mood);
              return (
                <button
                  key={mood}
                  onClick={() => handleMoodToggle(mood)}
                  className={`
                    flex items-center gap-1 p-2 rounded border transition-all duration-200 h-fit
                    ${
                      isSelected
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-200 text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <div
                    className={`
                    w-2.5 h-2.5 rounded border flex items-center justify-center
                    ${isSelected ? "bg-white border-white" : "border-gray-300"}
                  `}
                  >
                    {isSelected && (
                      <div className="w-1 h-1 bg-blue-500 rounded"></div>
                    )}
                  </div>
                  <span className="font-medium text-xs leading-tight">
                    {mood}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 mt-auto">
            <button
              onClick={handleBack}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-2 rounded transition-colors text-xs"
            >
              Back
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded transition-colors text-xs"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFeelingsSelector;
