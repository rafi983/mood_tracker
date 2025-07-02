import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import MoodLogger from "./components/MoodLogger";
import initialData from "./data/data.json";
import { calculateAverages } from "./utils/statsCalculator";

function App() {
  const [moodEntries, setMoodEntries] = useState(() => {
    try {
      const savedEntries = localStorage.getItem("moodEntries");
      return savedEntries ? JSON.parse(savedEntries) : initialData.moodEntries;
    } catch (error) {
      console.error("Error parsing mood entries from localStorage", error);
      return initialData.moodEntries;
    }
  });

  const [showMoodLogger, setShowMoodLogger] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [averages, setAverages] = useState({ mood: {}, sleep: {} });

  useEffect(() => {
    localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
    const calculatedAverages = calculateAverages(moodEntries);
    setAverages(calculatedAverages);
  }, [moodEntries]);

  const handleMoodLoggerComplete = (newMoodData) => {
    const newEntry = {
      id: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      mood: newMoodData.basicMood,
      feelings: newMoodData.detailedMoods,
      journalEntry: newMoodData.journalEntry,
      sleepHours: newMoodData.sleepHours,
    };
    setMoodEntries((prevEntries) => [...prevEntries, newEntry]);
    setSelectedEntry(newEntry);
    setShowMoodLogger(false);
  };

  const handleSelectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const handleBackFromInsights = () => {
    setSelectedEntry(null);
  };

  const mainView = selectedEntry ? (
    <Insights
      entry={selectedEntry}
      onBack={handleBackFromInsights}
      moodQuotes={initialData.moodQuotes}
      averages={averages}
      moodEntries={moodEntries}
      onBarClick={handleSelectEntry}
    />
  ) : (
    <Dashboard
      onLogMoodClick={() => setShowMoodLogger(true)}
      onBarClick={handleSelectEntry}
      moodEntries={moodEntries}
      averages={averages}
    />
  );

  return (
    <>
      {mainView}
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
