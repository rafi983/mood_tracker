import React, { useState } from "react";

export default function Mood4() {
  const [selectedSleep, setSelectedSleep] = useState("");

  const sleepOptions = [
    "9+ hours",
    "7-8 hours",
    "5-6 hours",
    "3-4 hours",
    "0-2 hours",
  ];

  const handleSubmit = () => {
    console.log("Selected sleep duration:", selectedSleep);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md relative">
        {/* Close button */}
        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Log your mood.
        </h1>

        {/* Progress indicator */}
        <div className="flex gap-2 mb-12">
          <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
          <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
          <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
          <div className="h-1 bg-blue-500 rounded-full flex-1"></div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          How many hours did you sleep today?
        </h2>

        {/* Sleep options */}
        <div className="space-y-4 mb-8">
          {sleepOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                selectedSleep === option
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="relative">
                <input
                  type="radio"
                  name="sleep"
                  value={option}
                  checked={selectedSleep === option}
                  onChange={(e) => setSelectedSleep(e.target.value)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                    selectedSleep === option
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedSleep === option && (
                    <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-700 font-medium flex-1">{option}</span>
            </label>
          ))}
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
