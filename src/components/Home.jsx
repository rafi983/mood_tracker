import React from "react";
import PropTypes from "prop-types";

import Logo from "../assets/Logo icon.png";
import avatar from "../assets/Avatar.png";
import MoodIcon from "../assets/Mood Icon.svg";
import MoodIcon2 from "../assets/Mood Icon_2.svg";
import MoodIcon3 from "../assets/Mood Icon_3.svg";
import MoodIcon4 from "../assets/Mood Icon_4.svg";
import MoodIcon5 from "../assets/Mood Icon_5.svg";

export default function Home() {
  const statsCards = [
    {
      title: "Average Mood",
      subtitle: "(Last 5 check-ins)",
      content: (
        <div className="bg-[#89CAFF] text-white p-4 rounded-2xl relative overflow-hidden pt-9">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-4 translate-x-4"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src={MoodIcon3} alt="Mood Icon" className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Neutral</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 pb-4">
              <span className="text-lg">→</span>
              <span className="text-sm font-medium">
                Same as the previous 5 check-ins
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Average Sleep",
      subtitle: "(Last 5 check-ins)",
      content: (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-5 rounded-xl pt-9">
          <div className="text-2xl font-bold mb-2 flex items-center gap-2">
            💤 5-6 Hours
          </div>
          <div className="text-sm opacity-90 flex items-center gap-1 pb-3">
            ↗ Increase from the previous 5 <br /> check-ins
          </div>
        </div>
      ),
    },
  ];

  const chartBars = [
    {
      height: "h-32",
      color: "bg-purple-400",
      emoji: (
        <img
          src={MoodIcon5}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "March 31",
    },
    {
      height: "h-48",
      color: "bg-green-400",
      emoji: (
        <img
          src={MoodIcon2}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 02",
    },
    {
      height: "h-24",
      color: "bg-red-400",
      emoji: (
        <img
          src={MoodIcon}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 04",
    },
    {
      height: "h-36",
      color: "bg-blue-400",
      emoji: (
        <img
          src={MoodIcon3}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 06",
    },
    {
      height: "h-52",
      color: "bg-green-400",
      emoji: (
        <img
          src={MoodIcon2}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 07",
    },
    {
      height: "h-64",
      color: "bg-orange-400",
      emoji: (
        <img
          src={MoodIcon4}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 09",
    },
    {
      height: "h-28",
      color: "bg-purple-400",
      emoji: (
        <img
          src={MoodIcon5}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 10",
    },
    {
      height: "h-44",
      color: "bg-blue-400",
      emoji: (
        <img
          src={MoodIcon3}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 12",
    },
    {
      height: "h-56",
      color: "bg-green-400",
      emoji: (
        <img
          src={MoodIcon2}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 13",
    },
    {
      height: "h-26",
      color: "bg-red-400",
      emoji: (
        <img
          src={MoodIcon}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 14",
    },
    {
      height: "h-68",
      color: "bg-orange-400",
      emoji: (
        <img
          src={MoodIcon4}
          alt="Mood Icon"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      ),
      date: "April 15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-xl">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Mood tracker
            </span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gray-300">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="text-gray-500 text-sm">▼</span>
          </div>
        </header>

        <main className="text-center mb-16">
          <h1 className="text-4xl text-indigo-600 mb-4 font-normal">
            Hello, Lisa!
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How are you feeling today?
          </h2>
          <p className="text-gray-600 mb-10">Wednesday, April 16th, 2025</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
            Log today's mood
          </button>
        </main>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-6 pt-6">
            {statsCards.map((card, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 pb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 ml-3">{card.subtitle}</p>
                </div>
                {card.content}
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Mood and sleep trends
            </h3>

            <div className="relative">
              <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-sm text-gray-600 -ml-2">
                <div className="flex items-center gap-2 h-4">
                  <span>💤</span>
                  <span>9+ hours</span>
                </div>
                <div className="flex items-center gap-2 h-4">
                  <span>💤</span>
                  <span>7-8 hours</span>
                </div>
                <div className="flex items-center gap-2 h-4">
                  <span>💤</span>
                  <span>5-6 hours</span>
                </div>
                <div className="flex items-center gap-2 h-4">
                  <span>💤</span>
                  <span>3-4 hours</span>
                </div>
                <div className="flex items-center gap-2 h-4">
                  <span>💤</span>
                  <span>0-2 hours</span>
                </div>
              </div>

              <div className="ml-24 h-80 flex items-end justify-between gap-2">
                {chartBars.map((bar, idx) => (
                  <ChartBar key={idx} {...bar} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ChartBar({ height, color, emoji, date }) {
  const [month, day] = date.split(" ");

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className={`w-12 ${height} ${color} rounded-full relative`}>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm border border-gray-100">
            {emoji}
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <div className="text-sm font-medium text-gray-700">{month}</div>
        <div className="text-xs text-gray-500">{day}</div>
      </div>
    </div>
  );
}

ChartBar.propTypes = {
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
