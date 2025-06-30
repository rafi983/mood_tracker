import React from "react";
import PropTypes from "prop-types";

export default function ChartBar({ height, color, emoji, date }) {
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
  emoji: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
};
