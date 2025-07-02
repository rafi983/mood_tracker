import React, { useState } from "react";
import PageLayout from "./PageLayout";
import StatsCard from "./StatsCard";
import ChartBar from "./ChartBar";
import MoodDetailModal from "./MoodDetailModal";
import { moodConfig } from "../utils/moodUtils";
import { formatDate } from "../utils/moodUtils";

function getBarHeight(sleepHours) {
  const mapping = {
    "9+ hours": "h-68 max-sm:h-52",
    "7-8 hours": "h-52 max-sm:h-38",
    "5-6 hours": "h-32 max-sm:h-25",
    "3-4 hours": "h-20 max-sm:h-13",
    "0-2 hours": "h-16 max-sm:h-16",
  };
  return mapping[sleepHours] || "h-20 max-sm:h-12";
}

export default function Dashboard({
  onLogMoodClick,
  onBarClick,
  moodEntries,
  averages,
}) {
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleBarClick = (entry) => {
    setSelectedEntry(entry);
    // Don't call onBarClick to prevent navigation to Insights
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  const recentEntries = moodEntries.slice(-11);

  const processedChartBars = recentEntries.map((entry) => {
    const config = moodConfig[entry.mood] || moodConfig["0"];
    return {
      height: getBarHeight(entry.sleepHours),
      color: config.color,
      emoji: (
        <img
          src={config.Icon}
          alt={config.label}
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: formatDate(entry.createdAt),
      fullEntry: entry,
    };
  });

  const today = new Date();
  const todayFormatted = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PageLayout>
      <main className="text-center mb-16">
        <h1 className="text-4xl text-indigo-600 mb-4 font-normal">
          Hello, Lisa!
        </h1>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 mb-10">{todayFormatted}</p>
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
                      src={averages.mood.Icon}
                      className="w-6 h-6"
                      alt="average mood"
                    />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">
                    {averages.mood.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 pb-4">
                  <span className="text-lg"></span>
                  <span className="text-sm font-medium">
                    {averages.mood.comparison}
                  </span>
                </div>
              </div>
            </div>
          </StatsCard>

          <StatsCard title="Average Sleep" subtitle="(Last 5 check-ins)">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 rounded-xl pt-9">
              <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                💤 {averages.sleep.range}
              </div>
              <div className="text-sm opacity-90 flex items-center gap-1 pb-3">
                {averages.sleep.comparisonLine1} <br />{" "}
                {averages.sleep.comparisonLine2}
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
              {processedChartBars.map((bar) => (
                <ChartBar
                  key={bar.fullEntry.id || `entry-${bar.date}`}
                  {...bar}
                  onBarClick={() => handleBarClick(bar.fullEntry)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mood Detail Modal */}
      {selectedEntry && (
        <MoodDetailModal entry={selectedEntry} onClose={closeModal} />
      )}
    </PageLayout>
  );
}
