import React, { useState } from "react";
import { X, Check } from "lucide-react";

const Mood2 = () => {
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
    console.log("Continue to next step", { selectedMoods });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Log your mood.
          </h1>

          {/* Progress bar */}
          <div className="flex gap-2 mb-8">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${index < currentStep ? "bg-blue-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            How did you feel?
          </h2>
          <p className="text-gray-600">Select up to three tags:</p>
        </div>

        {/* Mood tags grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {moodOptions.map((mood) => {
            const isSelected = selectedMoods.includes(mood);
            return (
              <button
                key={mood}
                onClick={() => handleMoodToggle(mood)}
                className={`
                  flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200
                  ${
                    isSelected
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                <div
                  className={`
                  w-5 h-5 rounded border-2 flex items-center justify-center
                  ${isSelected ? "bg-white border-white" : "border-gray-300"}
                `}
                >
                  {isSelected && <Check size={12} className="text-blue-500" />}
                </div>
                <span className="font-medium">{mood}</span>
              </button>
            );
          })}
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Mood2;
