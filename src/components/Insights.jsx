import React from "react";
import PageLayout from "./PageLayout";
import StatsCard from "./StatsCard";
import ChartBar from "./ChartBar";
import { createMoodIcon, moodColors, moodIcons } from "../utils/moodUtils";

export default function Insights({ onBack }) {
  const chartBars = [
    { height: "h-32 max-sm:h-20", mood: 5, date: "March 31" },
    { height: "h-48 max-sm:h-32", mood: 2, date: "April 02" },
    { height: "h-24 max-sm:h-16", mood: 1, date: "April 04" },
    { height: "h-36 max-sm:h-24", mood: 3, date: "April 06" },
    { height: "h-52 max-sm:h-36", mood: 2, date: "April 07" },
    { height: "h-64 max-sm:h-44", mood: 4, date: "April 09" },
    { height: "h-28 max-sm:h-20", mood: 5, date: "April 10" },
    { height: "h-44 max-sm:h-28", mood: 3, date: "April 12" },
    { height: "h-56 max-sm:h-40", mood: 2, date: "April 13" },
    { height: "h-26 max-sm:h-16", mood: 1, date: "April 14" },
    { height: "h-68 max-sm:h-48", mood: 4, date: "April 15" },
  ];

  const processedChartBars = chartBars.map((bar) => ({
    ...bar,
    color: moodColors[bar.mood],
    emoji: (
      <img
        src={moodIcons[bar.mood]}
        alt="Mood Icon"
        style={{ width: "1.5em", height: "1.5em" }}
      />
    ),
  }));

  return (
    <PageLayout showBackButton={!!onBack} onBackClick={onBack}>
      <main className="text-center mb-16">
        <h1 className="text-4xl text-indigo-600 mb-4 font-normal">
          Hello, Lisa!
        </h1>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          How are you feeling today?
        </h2>
        <p className="text-gray-600 mb-10">Wednesday, April 16th, 2025</p>
      </main>

      {/* Main Container with 32px gap */}
      <div className="flex max-lg:flex-col gap-8 max-lg:gap-6 mb-8">
        {/* Current Mood Section */}
        <div className="p-6 max-sm:p-4 bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-lg flex-1 lg:w-[670px] lg:h-[340px] max-lg:min-h-[280px]">
          <div className="flex max-sm:flex-col items-center max-sm:items-start justify-between h-full max-sm:gap-4">
            <div className="flex-1 max-sm:w-full pr-12 max-sm:pr-0">
              <p className="text-gray-500 text-xl max-sm:text-lg mb-2">
                {"I'm feeling"}
              </p>
              <h4 className="text-5xl max-sm:text-3xl font-bold text-gray-800 mb-12 max-sm:mb-6">
                Very Happy
              </h4>

              <div className="flex items-start gap-4 max-sm:gap-3">
                <div className="text-blue-500 text-5xl max-sm:text-3xl font-bold leading-none mt-1">
                  "
                </div>
                <p className="text-gray-700 italic text-xl max-sm:text-lg leading-relaxed pt-2">
                  When your heart is full, share your light with the world.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 max-sm:w-full max-sm:flex max-sm:justify-center">
              <div className="w-48 h-48 max-sm:w-32 max-sm:h-32 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png"
                  alt="Very Happy Emoji"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div
                  className="w-48 h-48 max-sm:w-32 max-sm:h-32 bg-yellow-300 rounded-full flex items-center justify-center text-8xl max-sm:text-5xl"
                  style={{ display: "none" }}
                >
                  😊
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sleep & Reflection with 20px gap */}
        <div className="flex-1 lg:w-[568px] flex flex-col gap-5">
          {/* Sleep Section */}
          <div className="p-6 max-sm:p-4 bg-white border-0 shadow-lg rounded-lg lg:h-[160px] max-lg:min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-gray-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12h3l3-9 6 18 3-9h3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">Sleep</span>
            </div>
            <p className="text-4xl font-bold text-gray-800">9+ hours</p>
          </div>

          {/* Reflection Section */}
          <div className="p-6 max-sm:p-4 bg-white border-0 shadow-lg rounded-lg lg:h-[160px] max-lg:min-h-[120px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-gray-600">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-600 font-medium">
                Reflection of the day
              </span>
            </div>
            <p className="text-gray-800 text-lg mb-4 leading-relaxed">
              Woke up early and finally tackled a big project!
            </p>
            <div className="space-x-3">
              <span className="text-gray-500 italic">#Grateful</span>
              <span className="text-gray-500 italic">#Optimistic</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-6 pt-6">
          <StatsCard title="Average Mood" subtitle="(Last 5 check-ins)">
            <div className="bg-[#89CAFF] text-white p-4 rounded-2xl relative overflow-hidden pt-9">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-4 translate-x-4"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img {...createMoodIcon(3)} />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">
                    Neutral
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 pb-4">
                  <span className="text-lg">→</span>
                  <span className="text-sm font-medium">
                    Same as the previous 5 check-ins
                  </span>
                </div>
              </div>
            </div>
          </StatsCard>

          <StatsCard title="Average Sleep" subtitle="(Last 5 check-ins)">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 rounded-xl pt-9">
              <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                💤 5-6 Hours
              </div>
              <div className="text-sm opacity-90 flex items-center gap-1 pb-3">
                ↗ Increase from the previous 5 <br /> check-ins
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
                <ChartBar key={idx} {...bar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
