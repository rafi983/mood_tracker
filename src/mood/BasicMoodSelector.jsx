import React, { useState } from "react";
import { X } from "lucide-react";

export default function BasicMoodSelector() {
  const [selectedMood, setSelectedMood] = useState("Very Happy");

  const moodOptions = [
    {
      id: "very-happy",
      label: "Very Happy",
      emoji: "😊",
      bgColor: "bg-orange-100",
      emojiColor: "text-orange-500",
    },
    {
      id: "happy",
      label: "Happy",
      emoji: "😄",
      bgColor: "bg-green-100",
      emojiColor: "text-green-500",
    },
    {
      id: "neutral",
      label: "Neutral",
      emoji: "😐",
      bgColor: "bg-blue-100",
      emojiColor: "text-blue-500",
    },
    {
      id: "sad",
      label: "Sad",
      emoji: "😢",
      bgColor: "bg-purple-100",
      emojiColor: "text-purple-500",
    },
    {
      id: "very-sad",
      label: "Very Sad",
      emoji: "😭",
      bgColor: "bg-pink-100",
      emojiColor: "text-pink-500",
    },
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleContinue = () => {
    console.log("Selected mood:", selectedMood);
    // Handle continue logic here
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
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8 flex-shrink-0">
          <div className="h-2 rounded-full flex-1 bg-blue-500"></div>
          <div className="h-2 rounded-full flex-1 bg-gray-200"></div>
          <div className="h-2 rounded-full flex-1 bg-gray-200"></div>
          <div className="h-2 rounded-full flex-1 bg-gray-200"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
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
                  className={`w-6 h-6 rounded-full ${mood.bgColor} flex items-center justify-center text-sm`}
                >
                  {mood.emoji}
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
      </div>
    </div>
  );
}
