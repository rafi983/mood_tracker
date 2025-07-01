import React, { useState } from "react";
import { X } from "lucide-react";

export default function JournalEntry() {
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
          <div className="h-2 rounded-full flex-1 bg-gray-200"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
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
              onClick={handleBack}
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
      </div>
    </div>
  );
}
