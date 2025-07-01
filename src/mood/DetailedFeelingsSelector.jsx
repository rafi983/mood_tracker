import React, { useState } from "react";

const DetailedFeelingsSelector = ({ moodData, onNext, onPrevious }) => {
  const [selectedMoods, setSelectedMoods] = useState(
    moodData?.detailedMoods || [],
  );

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

  const handleContinue = () => {
    onNext({ detailedMoods: selectedMoods });
  };

  return (
    <div className="flex flex-col h-full">
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
              <span className="font-medium text-xs leading-tight">{mood}</span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
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
  );
};

export default DetailedFeelingsSelector;
