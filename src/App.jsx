import React, { useState } from "react";
import Insights from "./components/Insights.jsx";
import Dashboard from "./components/Dashboard.jsx";
function App() {
  const [showInsights, setShowInsights] = useState(false);
  return (
    <>
      {showInsights ? (
        <Insights onBack={() => setShowInsights(false)} />
      ) : (
        <Dashboard onLogMoodClick={() => setShowInsights(true)} />
      )}
    </>
  );
}

export default App;
