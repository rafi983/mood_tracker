import React, { useState } from "react";
import PageLayout from "./PageLayout";
import StatsCard from "./StatsCard";
import ChartBar from "./ChartBar";
import MoodDetailModal from "./MoodDetailModal";
import { createMoodIcon, moodColors, moodIcons } from "../utils/moodUtils";
import dataService from "../services/dataService";
import quoteIcon from "../assets/images/icon-quote.svg";
import sleepIcon from "../assets/images/icon-sleep.svg";

export default function Dashboard({
  onLogMoodClick,
  onViewInsights,
  todaysEntry,
}) {
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Get real data from service
  const recentEntries = dataService.getRecentEntries(11);
  const comparison = dataService.getComparison(5);

  // Convert data entries to chart format
  const processedChartBars = recentEntries.map((entry, index) => {
    const date = new Date(entry.createdAt);
    // Use predefined Tailwind height classes based on mood
    const getHeightClass = (mood) => {
      switch (mood) {
        case -2:
          return "h-16"; // Very Sad - 64px
        case -1:
          return "h-24"; // Sad - 96px
        case 0:
          return "h-32"; // Neutral - 128px
        case 1:
          return "h-40"; // Happy - 160px
        case 2:
          return "h-48"; // Very Happy - 192px
        default:
          return "h-32";
      }
    };

    return {
      height: getHeightClass(entry.mood),
      mood: entry.mood + 3, // Convert -2 to 2 range to 1 to 5 for moodIcons
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      entry: entry,
      color: moodColors[entry.mood + 3],
      emoji: (
        <img
          src={moodIcons[entry.mood + 3]}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
    };
  });

  // Get trend icons
  const getTrendIcon = (comparison) => {
    switch (comparison) {
      case "increase":
        return "↗";
      case "decrease":
        return "↘";
      default:
        return "→";
    }
  };

  const getTrendText = (comparison, type) => {
    switch (comparison) {
      case "increase":
        return `Increase from the previous 5 check-ins`;
      case "decrease":
        return `Decrease from the previous 5 check-ins`;
      default:
        return `Same as the previous 5 check-ins`;
    }
  };

  return (
    <PageLayout>
      <main className="text-center mb-16">
        <h1 className="text-4xl text-indigo-600 mb-4 font-normal">
          Hello, Lisa!
        </h1>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 mb-10">Wednesday, April 16th, 2025</p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          onClick={onLogMoodClick}
        >
          Log today's mood
        </button>
      </main>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-6 pt-6">
          <StatsCard title="Average Mood" subtitle="(Last 5 check-ins)">
            <div className="bg-[#89CAFF] text-white p-4 rounded-2xl relative overflow-hidden pt-9">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-4 translate-x-4"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      {...createMoodIcon(
                        Math.round(comparison.current.mood) + 3,
                      )}
                    />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">
                    {dataService.getMoodLabel(
                      Math.round(comparison.current.mood),
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 pb-4">
                  <span className="text-lg">
                    {getTrendIcon(comparison.moodComparison)}
                  </span>
                  <span className="text-sm font-medium">
                    {getTrendText(comparison.moodComparison)}
                  </span>
                </div>
              </div>
            </div>
          </StatsCard>

          <StatsCard title="Average Sleep" subtitle="(Last 5 check-ins)">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 rounded-xl pt-9">
              <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                💤 {comparison.current.sleep.toFixed(1)} Hours
              </div>
              <div className="text-sm opacity-90 flex items-center gap-1 pb-3">
                {getTrendIcon(comparison.sleepComparison)}{" "}
                {getTrendText(comparison.sleepComparison)
                  .split(" ")
                  .slice(0, 3)
                  .join(" ")}
                <br />
                {getTrendText(comparison.sleepComparison)
                  .split(" ")
                  .slice(3)
                  .join(" ")}
              </div>
            </div>
          </StatsCard>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-8 max-sm:p-4 shadow-sm">
          <h3 className="text-2xl max-sm:text-xl font-bold text-gray-900 mb-8 max-sm:mb-6">
            Mood and sleep trends
          </h3>

          <div className="relative">
            <div className="absolute left-0 top-0 h-80 max-sm:h-60 flex flex-col justify-between text-sm max-sm:text-xs text-gray-600 -ml-2 max-sm:-ml-1">
              <div className="flex items-center gap-2 max-sm:gap-1 h-4">
                <span>💤</span>
                <span className="max-sm:hidden">9+ hours</span>
                <span className="sm:hidden">9+h</span>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-1 h-4">
                <span>💤</span>
                <span className="max-sm:hidden">7-8 hours</span>
                <span className="sm:hidden">7-8h</span>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-1 h-4">
                <span>💤</span>
                <span className="max-sm:hidden">5-6 hours</span>
                <span className="sm:hidden">5-6h</span>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-1 h-4">
                <span>💤</span>
                <span className="max-sm:hidden">3-4 hours</span>
                <span className="sm:hidden">3-4h</span>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-1 h-4">
                <span>💤</span>
                <span className="max-sm:hidden">0-2 hours</span>
                <span className="sm:hidden">0-2h</span>
              </div>
            </div>

            <div className="ml-24 max-sm:ml-12 h-80 max-sm:h-60 flex items-end justify-between gap-2 max-sm:overflow-x-auto">
              {processedChartBars.map((bar, idx) => (
                <ChartBar
                  key={idx}
                  {...bar}
                  onClick={(entry) => setSelectedEntry(entry)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEntry && (
        <MoodDetailModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </PageLayout>
  );
}
