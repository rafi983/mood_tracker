import { moodConfig } from "./moodUtils";

export function calculateAverages(moodEntries) {
  if (!moodEntries || moodEntries.length === 0) {
    return {
      mood: { label: "No data", Icon: "", comparison: "No entries yet" },
      sleep: {
        range: "0 hours",
        comparisonLine1: "No data",
        comparisonLine2: "available yet",
      },
    };
  }

  // Get last 5 entries for averages
  const recentEntries = moodEntries.slice(-5);

  // Calculate average mood - convert string to number
  const avgMoodValue =
    recentEntries.reduce((sum, entry) => sum + parseInt(entry.mood), 0) /
    recentEntries.length;
  const roundedMoodValue = Math.round(avgMoodValue);
  const moodConfigData = moodConfig[roundedMoodValue] || moodConfig["0"];

  // Calculate mood comparison
  let moodComparison = "";
  if (recentEntries.length >= 2) {
    const previousAvg =
      recentEntries
        .slice(0, -1)
        .reduce((sum, entry) => sum + parseInt(entry.mood), 0) /
      (recentEntries.length - 1);
    const currentMood = parseInt(recentEntries[recentEntries.length - 1].mood);

    if (currentMood > previousAvg) {
      moodComparison = "↗ Improving";
    } else if (currentMood < previousAvg) {
      moodComparison = "↘ Declining";
    } else {
      moodComparison = "→ Stable";
    }
  } else {
    moodComparison = "New data";
  }

  // Calculate average sleep - handle different possible field names and convert to number
  const avgSleep =
    recentEntries.reduce((sum, entry) => {
      const sleepValue =
        entry.sleepHours || entry.sleep || entry.sleepTime || 0;
      return sum + parseFloat(sleepValue);
    }, 0) / recentEntries.length;

  // Convert sleep to range
  let sleepRange = "";
  if (avgSleep >= 9) {
    sleepRange = "9+ hours";
  } else if (avgSleep >= 7) {
    sleepRange = "7-8 hours";
  } else if (avgSleep >= 5) {
    sleepRange = "5-6 hours";
  } else if (avgSleep >= 3) {
    sleepRange = "3-4 hours";
  } else {
    sleepRange = "0-2 hours";
  }

  // Calculate sleep comparison
  let sleepComparisonLine1 = "";
  let sleepComparisonLine2 = "";

  if (recentEntries.length >= 2) {
    const previousSleepAvg =
      recentEntries.slice(0, -1).reduce((sum, entry) => {
        const sleepValue =
          entry.sleepHours || entry.sleep || entry.sleepTime || 0;
        return sum + parseFloat(sleepValue);
      }, 0) /
      (recentEntries.length - 1);
    const currentSleep = parseFloat(
      recentEntries[recentEntries.length - 1].sleepHours ||
        recentEntries[recentEntries.length - 1].sleep ||
        recentEntries[recentEntries.length - 1].sleepTime ||
        0,
    );

    if (currentSleep > previousSleepAvg) {
      sleepComparisonLine1 = "Sleep quality is";
      sleepComparisonLine2 = "improving";
    } else if (currentSleep < previousSleepAvg) {
      sleepComparisonLine1 = "Sleep quality is";
      sleepComparisonLine2 = "declining";
    } else {
      sleepComparisonLine1 = "Sleep quality is";
      sleepComparisonLine2 = "stable";
    }
  } else {
    sleepComparisonLine1 = "Track more days";
    sleepComparisonLine2 = "for insights";
  }

  return {
    mood: {
      label: moodConfigData.label,
      Icon: moodConfigData.Icon,
      comparison: moodComparison,
      value: avgMoodValue,
    },
    sleep: {
      range: sleepRange,
      comparisonLine1: sleepComparisonLine1,
      comparisonLine2: sleepComparisonLine2,
      averageHours: avgSleep,
    },
  };
}
