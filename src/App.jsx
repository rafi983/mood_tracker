import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import MoodLogger from "./components/MoodLogger";

function App() {
  const [showInsights, setShowInsights] = useState(false);
  const [showMoodLogger, setShowMoodLogger] = useState(false);

  const handleMoodLoggerComplete = () => {
    setShowMoodLogger(false);
    setShowInsights(true);
  };

  return (
    <>
      {showInsights ? (
        <Insights onBack={() => setShowInsights(false)} />
      ) : (
        <Dashboard onLogMoodClick={() => setShowMoodLogger(true)} />
      )}

      {showMoodLogger && (
        <MoodLogger
          onClose={() => setShowMoodLogger(false)}
          onComplete={handleMoodLoggerComplete}
        />
      )}
    </>
  );
}

export default App;
