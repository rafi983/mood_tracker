import React, { useState } from "react";
import { X } from "lucide-react";

export default function SleepTracker() {
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

  const handleClose = () => {
    console.log("Close clicked");
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
          <div className="h-2 rounded-full flex-1 bg-blue-500"></div>
          <div className="h-2 rounded-full flex-1 bg-blue-500"></div>
          <div className="h-2 rounded-full flex-1 bg-blue-500"></div>
          <div className="h-2 rounded-full flex-1 bg-blue-500"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            How many hours did you sleep today?
          </h2>

          <div className="space-y-2 mb-4 flex-1">
            {sleepOptions.map((option) => (
              <label
                key={option}
                className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
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
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      selectedSleep === option
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedSleep === option && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 font-medium flex-1">
                  {option}
                </span>
              </label>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            <button
              onClick={handleBack}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
