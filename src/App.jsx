import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import MoodTracker from "./components/MoodTracker";

function App() {
  const [showInsights, setShowInsights] = useState(false);
  const [showMoodTracker, setShowMoodTracker] = useState(false);

  const handleMoodTrackerComplete = () => {
    setShowMoodTracker(false);
    setShowInsights(true);
  };

  return (
    <>
      {showInsights ? (
        <Insights onBack={() => setShowInsights(false)} />
      ) : (
        <Dashboard onLogMoodClick={() => setShowMoodTracker(true)} />
      )}

      {showMoodTracker && (
        <MoodTracker
          onClose={() => setShowMoodTracker(false)}
          onComplete={handleMoodTrackerComplete}
        />
      )}
    </>
  );
}

export default App;
