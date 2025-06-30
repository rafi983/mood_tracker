import React from "react";

export default function StatsCard({ title, subtitle, content, date }) {
  return (
    <div className="mb-6">
      <div className="font-semibold text-lg mb-1">{title}</div>
      <div className="text-xs text-gray-500 mb-2">{subtitle}</div>
      {content}
      {date && <div className="text-xs text-gray-400 mt-2">{date}</div>}
    </div>
  );
}
