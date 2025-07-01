import React from "react";
import PropTypes from "prop-types";

export default function ChartBar({
  height,
  color,
  emoji,
  date,
  entry,
  onClick,
}) {
  const [month, day] = date.split(" ");

  const handleClick = () => {
    if (onClick && entry) {
      onClick(entry);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className={`w-12 max-sm:w-8 ${height} ${color} rounded-full relative cursor-pointer hover:opacity-80 transition-opacity`}
          onClick={handleClick}
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
    </div>
  );
}

ChartBar.propTypes = {
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  emoji: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  entry: PropTypes.object,
  onClick: PropTypes.func,
};
