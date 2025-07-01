import MoodIcon from "../assets/Mood Icon.svg";
import MoodIcon2 from "../assets/Mood Icon_2.svg";
import MoodIcon3 from "../assets/Mood Icon_3.svg";
import MoodIcon4 from "../assets/Mood Icon_4.svg";
import MoodIcon5 from "../assets/Mood Icon_5.svg";

export const moodIcons = {
  1: MoodIcon,
  2: MoodIcon2,
  3: MoodIcon3,
  4: MoodIcon4,
  5: MoodIcon5,
};

export const moodColors = {
  1: "bg-red-400",
  2: "bg-green-400",
  3: "bg-blue-400",
  4: "bg-orange-400",
  5: "bg-purple-400",
};

export const moodLabels = {
  1: "Very Sad",
  2: "Happy",
  3: "Neutral",
  4: "Very Happy",
  5: "Excited",
};

export function createMoodIcon(moodLevel, className = "w-6 h-6") {
  return {
    src: moodIcons[moodLevel],
    alt: `Mood Icon ${moodLevel}`,
    className: className,
  };
}
