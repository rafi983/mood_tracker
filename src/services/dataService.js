const dataService = {
  getMoodLabel: (moodValue) => {
    const moodLabels = {
      2: "Very Happy",
      1: "Happy",
      0: "Neutral",
      "-1": "Sad",
      "-2": "Very Sad",
    };
    return moodLabels[moodValue] || "Unknown";
  },
};

export default dataService;
