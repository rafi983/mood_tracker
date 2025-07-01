import data from "../data/data.json";

class DataService {
  constructor() {
    this.loadData();
  }

  loadData() {
    // In a real app, this would load from localStorage or an API
    const savedData = localStorage.getItem("moodTrackerData");
    if (savedData) {
      this.data = JSON.parse(savedData);
      // Migrate old text-based sleep values to numbers
      this.migrateSleepData();
    } else {
      this.data = { ...data };
      this.saveData();
    }
  }

  // Migrate old text-based sleep values to numeric values
  migrateSleepData() {
    const sleepMapping = {
      "9+ hours": 9,
      "7-8 hours": 7.5,
      "5-6 hours": 5.5,
      "3-4 hours": 3.5,
      "0-2 hours": 1,
    };

    let updated = false;
    this.data.moodEntries.forEach((entry) => {
      // If sleepHours is a string, convert it to number
      if (
        typeof entry.sleepHours === "string" &&
        sleepMapping[entry.sleepHours]
      ) {
        entry.sleepHours = sleepMapping[entry.sleepHours];
        updated = true;
      }
      // If sleepHours is 0 (from previous failed conversions), assign a reasonable default
      else if (entry.sleepHours === 0) {
        // Assign a random realistic sleep value between 6-8 hours for existing 0 entries
        entry.sleepHours = 6 + Math.random() * 2; // Random between 6-8 hours
        updated = true;
      }
    });

    if (updated) {
      console.log(
        "Migrated sleep data from text to numbers and fixed zero values",
      );
      this.saveData();
    }
  }

  saveData() {
    localStorage.setItem("moodTrackerData", JSON.stringify(this.data));
  }

  // Add a new mood entry
  addMoodEntry(entry) {
    const newEntry = {
      ...entry,
      createdAt: new Date().toISOString(),
    };
    this.data.moodEntries.push(newEntry);
    this.saveData();
    return newEntry;
  }

  // Get all mood entries
  getAllEntries() {
    return this.data.moodEntries.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  }

  // Get today's entry
  getTodaysEntry() {
    const today = new Date().toDateString();
    return this.data.moodEntries.find(
      (entry) => new Date(entry.createdAt).toDateString() === today,
    );
  }

  // Get the most recent N entries
  getRecentEntries(count = 11) {
    return this.getAllEntries().slice(0, count);
  }

  // Get average mood and sleep for last N entries
  getAverages(count = 5) {
    const entries = this.getRecentEntries(count);
    console.log(
      "Recent entries for averaging:",
      entries.map((e) => ({
        date: e.createdAt,
        sleep: e.sleepHours,
        type: typeof e.sleepHours,
      })),
    );

    if (entries.length === 0) return { mood: 0, sleep: 0 };

    const totalMood = entries.reduce((sum, entry) => sum + entry.mood, 0);
    const totalSleep = entries.reduce((sum, entry) => {
      console.log(
        "Processing sleep value:",
        entry.sleepHours,
        "Type:",
        typeof entry.sleepHours,
      );
      return sum + (entry.sleepHours || 0);
    }, 0);

    console.log(
      "Total sleep sum:",
      totalSleep,
      "Average:",
      totalSleep / entries.length,
    );

    return {
      mood: totalMood / entries.length,
      sleep: totalSleep / entries.length,
      count: entries.length,
    };
  }

  // Compare current averages with previous period
  getComparison(currentCount = 5) {
    const allEntries = this.getAllEntries();
    const current = this.getAverages(currentCount);

    // Get previous period entries
    const previousEntries = allEntries.slice(currentCount, currentCount * 2);
    if (previousEntries.length === 0) {
      return { current, previous: null, comparison: "same" };
    }

    const previousMood =
      previousEntries.reduce((sum, entry) => sum + entry.mood, 0) /
      previousEntries.length;
    const previousSleep =
      previousEntries.reduce((sum, entry) => sum + entry.sleepHours, 0) /
      previousEntries.length;

    const moodDiff = current.mood - previousMood;
    const sleepDiff = current.sleep - previousSleep;

    return {
      current,
      previous: {
        mood: previousMood,
        sleep: previousSleep,
        count: previousEntries.length,
      },
      moodComparison:
        moodDiff > 0.1 ? "increase" : moodDiff < -0.1 ? "decrease" : "same",
      sleepComparison:
        sleepDiff > 0.5 ? "increase" : sleepDiff < -0.5 ? "decrease" : "same",
    };
  }

  // Get quote for specific mood
  getQuoteForMood(mood) {
    const quotes = this.data.moodQuotes[mood.toString()];
    if (!quotes || quotes.length === 0) return null;

    // Return a random quote
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Convert mood number to label
  getMoodLabel(mood) {
    const labels = {
      "-2": "Very Sad",
      "-1": "Sad",
      0: "Neutral",
      1: "Happy",
      2: "Very Happy",
    };
    return labels[mood.toString()] || "Unknown";
  }
}

export default new DataService();
