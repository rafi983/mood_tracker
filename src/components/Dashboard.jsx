import React, { useState } from "react";
import { ChevronDown, Moon } from "lucide-react";
import logoIcon from "../assets/Logo icon.png";

export default function Dashboard({ onLogMoodClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const chartData = [
    { date: "April\n06", value: 5 },
    { date: "April\n07", value: 4 },
    { date: "April\n08", value: 3 },
    { date: "April\n09", value: 2 },
    { date: "April\n10", value: 1 },
    { date: "April\n11", value: 2 },
    { date: "April\n12", value: 3 },
    { date: "April\n13", value: 4 },
    { date: "April\n14", value: 5 },
    { date: "April\n15", value: 4 },
    { date: "April\n16", value: 3 },
  ];

  const sleepLabels = [
    "9+ hours",
    "7-8 hours",
    "5-6 hours",
    "3-4 hours",
    "0-2 hours",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <img
                src={logoIcon}
                alt="Mood Tracker Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Mood tracker
            </h1>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-2 hover:bg-white/50 rounded-full transition-colors"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                <img
                  src="/placeholder-user.jpg"
                  alt="Lisa"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <span className="text-gray-600 font-medium hidden">L</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-blue-600 mb-6">
            Hello, Lisa!
          </h2>
          <h3 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            How are you feeling today?
          </h3>
          <p className="text-xl text-gray-600 mb-10">
            Wednesday, April 16th, 2025
          </p>
          <button
            onClick={onLogMoodClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-xl font-medium transition-colors"
          >
            Log today's mood
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Combined Stats Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="p-6 space-y-6">
                {/* Average Mood Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Average Mood{" "}
                    <span className="text-base font-normal text-gray-500">
                      (Last 5 Check-ins)
                    </span>
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-8 text-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      Keep tracking!
                    </h4>
                    <p className="text-gray-600">
                      Log 5 check-ins to see your average mood.
                    </p>
                  </div>
                </div>

                {/* Average Sleep Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Average Sleep{" "}
                    <span className="text-base font-normal text-gray-500">
                      (Last 5 Check-ins)
                    </span>
                  </h3>
                  <div className="bg-blue-50 rounded-xl p-8 text-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      Not enough data yet!
                    </h4>
                    <p className="text-gray-600">
                      Track 5 nights to view average sleep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trends Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden h-full">
              <div className="p-4 sm:p-6 pb-4 sm:pb-6">
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                  Mood and sleep trends
                </h3>
              </div>
              <div className="px-4 sm:px-6 pb-6 sm:pb-6 h-full">
                <div className="flex h-40 sm:h-64 md:h-80 relative">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between py-2 sm:py-4 pr-2 sm:pr-4 text-xs sm:text-sm text-gray-600">
                    {sleepLabels.map((label, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 sm:gap-2"
                      >
                        <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="hidden sm:inline">{label}</span>
                        <span className="sm:hidden">{label.split(" ")[0]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex items-end justify-between px-1 sm:px-2 pb-6 sm:pb-8">
                      {chartData.map((point, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-2 sm:w-3 bg-blue-500 rounded-t-sm mb-1 sm:mb-2"
                            style={{ height: `${point.value * 15}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 sm:px-2 text-xs text-gray-500">
                      {chartData.map((point, index) => (
                        <div key={index} className="text-center leading-tight">
                          <span className="hidden sm:inline">
                            {point.date.replace("\n", " ")}
                          </span>
                          <span className="sm:hidden">
                            {point.date.split("\n")[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
