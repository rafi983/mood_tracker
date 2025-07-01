import React from "react";
import PropTypes from "prop-types";

export default function StatsCard({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 pb-2">{title}</h3>
        <p className="text-sm text-gray-500 ml-3">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
