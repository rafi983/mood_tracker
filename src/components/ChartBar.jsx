import React from "react";
import PropTypes from "prop-types";

export default function ChartBar({
  height,
  color,
  emoji,
  date,
  fullEntry,
  onBarClick,
}) {
  const [month, day] = date.split(" ");

  const handleClick = () => {
    console.log("ChartBar clicked, fullEntry:", fullEntry); // Debug log
    if (onBarClick) {
      onBarClick(fullEntry);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex flex-col items-center h-full group focus:outline-none"
    >
      <div className="relative w-full h-full flex items-end justify-center">
        <div
          className={`w-12 max-sm:w-8 ${height} ${color} rounded-full relative transition-transform group-hover:scale-110`}
        >
          <div className="absolute -top-5 max-sm:-top-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 max-sm:w-8 max-sm:h-8 bg-white rounded-full flex items-center justify-center text-lg max-sm:text-sm shadow-sm border border-gray-100">
            {emoji}
          </div>
        </div>
      </div>
      <div className="mt-3 max-sm:mt-2 text-center">
        <div className="text-sm max-sm:text-xs font-medium text-gray-700">
          {month}
        </div>
        <div className="text-xs text-gray-500">{day}</div>
      </div>
    </button>
  );
}

ChartBar.propTypes = {
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  emoji: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
};
