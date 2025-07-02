import MoodIcon1 from "../assets/Mood Icon.svg";
import MoodIcon2 from "../assets/Mood Icon_2.svg";
import MoodIcon3 from "../assets/Mood Icon_3.svg";
import MoodIcon4 from "../assets/Mood Icon_4.svg";
import MoodIcon5 from "../assets/Mood Icon_5.svg";

export const moodConfig = {
  2: {
    label: "Very Happy",
    Icon: MoodIcon4,
    color: "bg-orange-400",
    quoteImg:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png",
  },
  1: {
    label: "Happy",
    Icon: MoodIcon2,
    color: "bg-green-400",
    quoteImg:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png",
  },
  0: {
    label: "Neutral",
    Icon: MoodIcon3,
    color: "bg-blue-400",
    quoteImg:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png",
  },
  "-1": {
    label: "Sad",
    Icon: MoodIcon5,
    color: "bg-purple-400",
    quoteImg:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png",
  },
  "-2": {
    label: "Very Sad",
    Icon: MoodIcon1,
    color: "bg-red-400",
    quoteImg:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feeling%20Icon%20Container-bD3Ohd1Skd6lWdei6coeEdOnREsZnK.png",
  },
};

export const sleepHoursToNumeric = (sleepHours) => {
  const mapping = {
    "9+ hours": 9,
    "7-8 hours": 7.5,
    "5-6 hours": 5.5,
    "3-4 hours": 3.5,
    "0-2 hours": 1,
  };
  return mapping[sleepHours] || 0;
};

export const formatDate = (dateString, options = {}) => {
  const defaultOptions = { month: "long", day: "numeric" };
  const finalOptions = { ...defaultOptions, ...options };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", finalOptions).replace(",", "");
};

export const createMoodIcon = (moodValue) => {
  const config = moodConfig[moodValue] || moodConfig["0"];
  return {
    src: config.Icon,
    alt: config.label,
    style: { width: "1.5em", height: "1.5em" },
  };
};
