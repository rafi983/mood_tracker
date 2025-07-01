import React, { useState } from "react";
import { X } from "lucide-react";

export default function Mood3() {
  const [journalText, setJournalText] = useState("");
  const maxLength = 150;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setJournalText(e.target.value);
    }
  };

  const handleClose = () => {
    console.log("Close clicked");
  };

  const handleContinue = () => {
    console.log("Continue clicked", { journalText });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="relative p-6 pb-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 pr-8">
          Log your mood.
        </h1>

        {/* Progress bar */}
        <div className="flex gap-2 mt-4">
          <div className="flex-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-6">
        {/* Subheading */}
        <h2 className="text-xl font-medium text-gray-800">
          Write about your day...
        </h2>

        {/* Text area */}
        <div className="relative">
          <textarea
            value={journalText}
            onChange={handleTextChange}
            placeholder="Today, I felt..."
            className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
          <div className="absolute bottom-3 right-3 text-sm text-gray-400">
            {journalText.length}/{maxLength}
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
