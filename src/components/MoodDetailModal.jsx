import React from "react";
import { X } from "lucide-react";
import dataService from "../services/dataService";
import { createMoodIcon } from "../utils/moodUtils";

export default function MoodDetailModal({ entry, onClose }) {
  if (!entry) return null;

  const date = new Date(entry.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
      style={{ backgroundColor: "rgba(87, 87, 123, 0.3)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold text-gray-800">Mood Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Date */}
        <p className="text-gray-600 mb-6">{formattedDate}</p>

        {/* Mood */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Mood</h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <img {...createMoodIcon(entry.mood)} />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {dataService.getMoodLabel(entry.mood)}
            </span>
          </div>
        </div>

        {/* Feelings */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Feelings</h3>
          <div className="flex flex-wrap gap-2">
            {entry.feelings &&
              entry.feelings.map((feeling, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {feeling}
                </span>
              ))}
          </div>
        </div>

        {/* Sleep */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Sleep</h3>
          <p className="text-2xl font-bold text-gray-800">
            {entry.sleepHours} hours
          </p>
        </div>

        {/* Journal Entry */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Reflection</h3>
          <p className="text-gray-700 leading-relaxed">
            {entry.journalEntry || "No reflection recorded for this day."}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
