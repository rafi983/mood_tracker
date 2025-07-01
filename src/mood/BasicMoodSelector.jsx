import React, { useState } from "react";
import veryHappyIcon from "../assets/icon-very-happy-color.svg";
import happyIcon from "../assets/icon-happy-color.svg";
import neutralIcon from "../assets/icon-neutral-color.svg";
import sadIcon from "../assets/icon-sad-color.svg";
import verySadIcon from "../assets/icon-very-sad-color.svg";

export default function BasicMoodSelector({ moodData, onNext }) {
  const [selectedMood, setSelectedMood] = useState(
    moodData?.basicMood || "Very Happy",
  );

  const moodOptions = [
    {
      id: "very-happy",
      label: "Very Happy",
      icon: veryHappyIcon,
      bgColor: "bg-orange-100",
      emojiColor: "text-orange-500",
    },
    {
      id: "happy",
      label: "Happy",
      icon: happyIcon,
      bgColor: "bg-green-100",
      emojiColor: "text-green-500",
    },
    {
      id: "neutral",
      label: "Neutral",
      icon: neutralIcon,
      bgColor: "bg-blue-100",
      emojiColor: "text-blue-500",
    },
    {
      id: "sad",
      label: "Sad",
      icon: sadIcon,
      bgColor: "bg-purple-100",
      emojiColor: "text-purple-500",
    },
    {
      id: "very-sad",
      label: "Very Sad",
      icon: verySadIcon,
      bgColor: "bg-pink-100",
      emojiColor: "text-pink-500",
    },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
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
            key={mood.id}
            className={`flex items-center justify-between p-1.5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-sm ${
              selectedMood === mood.label
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleMoodSelect(mood.label)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedMood === mood.label
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedMood === mood.label && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-800">
                {mood.label}
              </span>
            </div>
            <div
              className={`w-8 h-8 rounded-full ${mood.bgColor} flex items-center justify-center text-sm`}
            >
              <img
                src={mood.icon}
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
