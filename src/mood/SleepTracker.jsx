import React, { useState } from "react";

export default function SleepTracker({ moodData, onNext, onPrevious }) {
  const [selectedSleep, setSelectedSleep] = useState(
    moodData?.sleepHours || "",
  );

  const sleepOptions = [
    { label: "9+ hours", value: 9 },
    { label: "7-8 hours", value: 7.5 },
    { label: "5-6 hours", value: 5.5 },
    { label: "3-4 hours", value: 3.5 },
    { label: "0-2 hours", value: 1 },
  ];

  const handleSubmit = () => {
    // Find the selected option and get its numeric value
    const selectedOption = sleepOptions.find(
      (option) => option.label === selectedSleep,
    );
    const sleepHours = selectedOption ? selectedOption.value : 0;

    onNext({ sleepHours: sleepHours });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        How many hours did you sleep today?
      </h2>

      <div className="space-y-2 mb-4 flex-1">
        {sleepOptions.map((option) => (
          <label
            key={option.label}
            className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
              selectedSleep === option.label
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="relative">
              <input
                type="radio"
                name="sleep"
                value={option.label}
                checked={selectedSleep === option.label}
                onChange={(e) => setSelectedSleep(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all ${
                  selectedSleep === option.label
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedSleep === option.label && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-800">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
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
  );
}
