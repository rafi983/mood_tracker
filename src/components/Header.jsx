import React from "react";
import Logo from "../assets/Logo icon.png";
import avatar from "../assets/Avatar.png";

export default function Header() {
  return (
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
  );
}
