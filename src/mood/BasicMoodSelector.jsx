import React, { useState } from "react";
import { moodConfig } from "../utils/moodUtils";

// Import the special color icons directly into this file
import veryHappyIcon from "../assets/images/icon-very-happy-color.svg";
import happyIcon from "../assets/images/icon-happy-color.svg";
import neutralIcon from "../assets/images/icon-neutral-color.svg";
import sadIcon from "../assets/images/icon-sad-color.svg";
import verySadIcon from "../assets/images/icon-very-sad-color.svg";

// Create a local mapping for these specific icons
const localIcons = {
  2: veryHappyIcon,
  1: happyIcon,
  0: neutralIcon,
  "-1": sadIcon,
  "-2": verySadIcon,
};

export default function BasicMoodSelector({ moodData, onNext }) {
  const [selectedMood, setSelectedMood] = useState(moodData?.basicMood || "0");

  const moodOptions = [
    { value: "2", label: "Very Happy" },
    { value: "1", label: "Happy" },
    { value: "0", label: "Neutral" },
    { value: "-1", label: "Sad" },
    { value: "-2", label: "Very Sad" },
  ];

  const handleMoodSelect = (moodValue) => {
    setSelectedMood(moodValue);
  };

  const handleContinue = () => {
    onNext({ basicMood: selectedMood });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        How was your mood today?
      </h2>

      <div className="space-y-1.5 mb-4 flex-1">
        {moodOptions.map((mood) => (
          <label
            key={mood.value}
            className={`flex items-center justify-between p-1.5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-sm ${
              selectedMood === mood.value
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleMoodSelect(mood.value)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedMood === mood.value
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedMood === mood.value && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-800">
                {mood.label}
              </span>
            </div>
            <div
              className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm`}
            >
              <img
                src={localIcons[mood.value]}
                alt={`${mood.label} icon`}
                className="w-6 h-6"
              />
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm mt-auto"
      >
        Continue
      </button>
    </div>
  );
}
