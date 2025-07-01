import React from "react";
import Header from "./Header";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <Header />
        {children}
      </div>
    </div>
  );
}
