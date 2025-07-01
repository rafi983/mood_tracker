import React, { useState } from "react";

export default function JournalEntry({ moodData, onNext, onPrevious }) {
  const [journalText, setJournalText] = useState(moodData?.journalEntry || "");
  const maxLength = 150;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setJournalText(e.target.value);
    }
  };

  const handleContinue = () => {
    onNext({ journalEntry: journalText });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        What happened today?
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Write a short note about your day (optional)
      </p>

      <div className="mb-4 flex-1">
        <textarea
          value={journalText}
          onChange={handleTextChange}
          placeholder="Today was..."
          className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl resize-none focus:border-blue-500 focus:outline-none transition-colors"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">Optional</span>
          <span className="text-sm text-gray-500">
            {journalText.length}/{maxLength}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
