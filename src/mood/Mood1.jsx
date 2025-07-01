import React, { useState } from "react";
import { X } from "lucide-react";

export default function Mood1() {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Log your mood.</h1>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          <div className="h-2 bg-blue-500 rounded-full flex-1"></div>
          <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
          <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
          <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          How was your mood today?
        </h2>

        {/* Mood Options */}
        <div className="space-y-4 mb-8">
          {moodOptions.map((mood) => (
            <label
              key={mood.id}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-md ${
                selectedMood === mood.label
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => handleMoodSelect(mood.label)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedMood === mood.label
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedMood === mood.label && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {mood.label}
                </span>
              </div>
              <div
                className={`w-12 h-12 rounded-full ${mood.bgColor} flex items-center justify-center text-2xl`}
              >
                {mood.emoji}
              </div>
            </label>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
