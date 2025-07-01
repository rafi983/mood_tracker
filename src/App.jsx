import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import MoodLogger from "./components/MoodLogger";
import dataService from "./services/dataService";

function App() {
  const [showInsights, setShowInsights] = useState(false);
  const [showMoodLogger, setShowMoodLogger] = useState(false);
  const [todaysEntry, setTodaysEntry] = useState(null);
  const [refreshData, setRefreshData] = useState(0);

  useEffect(() => {
    setTodaysEntry(dataService.getTodaysEntry());
  }, [refreshData]);

  const handleMoodLoggerComplete = () => {
    setShowMoodLogger(false);
    setRefreshData((prev) => prev + 1); // Trigger data refresh
    setShowInsights(true); // Redirect to Insights page after logging mood
  };

  return (
    <>
      {showInsights ? (
        <Insights
          onBack={() => setShowInsights(false)}
          todaysEntry={todaysEntry}
        />
      ) : (
        <Dashboard
          onLogMoodClick={() => setShowMoodLogger(true)}
          onViewInsights={() => setShowInsights(true)}
          todaysEntry={todaysEntry}
        />
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
