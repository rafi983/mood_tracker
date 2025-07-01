import React, { useState } from "react";
import { X } from "lucide-react";

const MoodLogger = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [moodData, setMoodData] = useState({
    basicMood: "",
    detailedMoods: [],
    journalEntry: "",
    sleepHours: "",
  });

  const totalSteps = 4;

  const handleNext = (stepData) => {
    // Update mood data based on current step
    setMoodData((prev) => ({
      ...prev,
      ...stepData,
    }));

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Final mood data:", moodData);
    // Handle final submission logic here
    // You can send data to API, store in local storage, etc.

    // Redirect to insights page for demo
    if (onComplete) {
      onComplete();
    } else {
      onClose?.();
    }
  };

  const renderCurrentStep = () => {
    const commonProps = {
      onNext: handleNext,
      onPrevious: handlePrevious,
      onClose,
      currentStep,
      totalSteps,
      moodData,
    };

    switch (currentStep) {
      case 1:
        return (
          <StepWrapper step={1} {...commonProps}>
            <BasicMoodSelectorContent {...commonProps} />
          </StepWrapper>
        );
      case 2:
        return (
          <StepWrapper step={2} {...commonProps}>
            <DetailedFeelingsSelectorContent {...commonProps} />
          </StepWrapper>
        );
      case 3:
        return (
          <StepWrapper step={3} {...commonProps}>
            <JournalEntryContent {...commonProps} />
          </StepWrapper>
        );
      case 4:
        return (
          <StepWrapper step={4} {...commonProps}>
            <SleepTrackerContent {...commonProps} />
          </StepWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ backgroundColor: "rgba(87, 87, 123, 0.3)" }}
    >
      {renderCurrentStep()}
    </div>
  );
};

// Wrapper component for consistent styling and progress bar
const StepWrapper = ({ step, totalSteps, onClose, children }) => {
  // Define specific dimensions for each step
  const getDimensions = (currentStep) => {
    switch (currentStep) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "w-[520px] h-[520px] max-h-[560px]";
      default:
        return "w-[520px] h-[520px] max-h-[560px]";
    }
  };

  return (
    <div
      className={`${getDimensions(step)} bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 shadow-xl mx-auto flex flex-col overflow-hidden`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-800">Log your mood.</h1>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-8 flex-shrink-0">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full flex-1 ${
              index < step ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Content area - flex-1 to fill remaining space but constrained by container height */}
      <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
        {children}
      </div>
    </div>
  );
};

// Individual step content components
const BasicMoodSelectorContent = ({ onNext, moodData }) => {
  const [selectedMood, setSelectedMood] = useState(
    moodData.basicMood || "Very Happy",
  );

  const moodOptions = [
    {
      id: "very-happy",
      label: "Very Happy",
      emoji: "😊",
      bgColor: "bg-orange-100",
    },
    { id: "happy", label: "Happy", emoji: "😄", bgColor: "bg-green-100" },
    { id: "neutral", label: "Neutral", emoji: "😐", bgColor: "bg-blue-100" },
    { id: "sad", label: "Sad", emoji: "😢", bgColor: "bg-purple-100" },
    { id: "very-sad", label: "Very Sad", emoji: "😭", bgColor: "bg-pink-100" },
  ];

  const handleContinue = () => {
    onNext({ basicMood: selectedMood });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        How was your mood today?
      </h2>

      <div className="space-y-1.5 mb-4 flex-1">
        {moodOptions.map((mood) => (
          <label
            key={mood.id}
            className={`flex items-center justify-between p-1.5 rounded-lg border-2 cursor-pointer transition-all hover:shadow-sm ${
              selectedMood === mood.label
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setSelectedMood(mood.label)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedMood === mood.label
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedMood === mood.label && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-800">
                {mood.label}
              </span>
            </div>
            <div
              className={`w-6 h-6 rounded-full ${mood.bgColor} flex items-center justify-center text-sm`}
            >
              {mood.emoji}
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm mt-auto"
      >
        Continue
      </button>
    </div>
  );
};

const DetailedFeelingsSelectorContent = ({ onNext, onPrevious, moodData }) => {
  const [selectedMoods, setSelectedMoods] = useState(
    moodData.detailedMoods || [],
  );

  const moodOptions = [
    "Joyful",
    "Down",
    "Anxious",
    "Calm",
    "Excited",
    "Frustrated",
    "Lonely",
    "Grateful",
    "Overwhelmed",
    "Motivated",
    "Irritable",
    "Peaceful",
    "Tired",
    "Hopeful",
    "Confident",
    "Stressed",
    "Content",
    "Disappointed",
    "Optimistic",
    "Restless",
  ];

  const handleMoodToggle = (mood) => {
    setSelectedMoods((prev) => {
      if (prev.includes(mood)) {
        return prev.filter((m) => m !== mood);
      } else if (prev.length < 3) {
        return [...prev, mood];
      }
      return prev;
    });
  };

  const handleContinue = () => {
    onNext({ detailedMoods: selectedMoods });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800 mb-1">
          How did you feel?
        </h2>
        <p className="text-xs text-gray-600">Select up to three tags:</p>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mb-4 flex-1">
        {moodOptions.map((mood) => {
          const isSelected = selectedMoods.includes(mood);
          return (
            <button
              key={mood}
              onClick={() => handleMoodToggle(mood)}
              className={`
                flex items-center gap-1 p-2 rounded border transition-all duration-200 h-fit
                ${
                  isSelected
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-300"
                }
              `}
            >
              <div
                className={`
                w-2.5 h-2.5 rounded border flex items-center justify-center
                ${isSelected ? "bg-white border-white" : "border-gray-300"}
              `}
              >
                {isSelected && (
                  <div className="w-1 h-1 bg-blue-500 rounded"></div>
                )}
              </div>
              <span className="font-medium text-xs leading-tight">{mood}</span>
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-2 rounded transition-colors text-xs"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded transition-colors text-xs"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const JournalEntryContent = ({ onNext, onPrevious, moodData }) => {
  const [journalText, setJournalText] = useState(moodData.journalEntry || "");
  const maxLength = 150;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setJournalText(e.target.value);
    }
  };

  const handleContinue = () => {
    onNext({ journalEntry: journalText });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        What happened today?
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Write a short note about your day (optional)
      </p>

      <div className="mb-4 flex-1">
        <textarea
          value={journalText}
          onChange={handleTextChange}
          placeholder="Today was..."
          className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl resize-none focus:border-blue-500 focus:outline-none transition-colors"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">Optional</span>
          <span className="text-sm text-gray-500">
            {journalText.length}/{maxLength}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const SleepTrackerContent = ({ onNext, onPrevious, moodData }) => {
  const [selectedSleep, setSelectedSleep] = useState(moodData.sleepHours || "");

  const sleepOptions = [
    "9+ hours",
    "7-8 hours",
    "5-6 hours",
    "3-4 hours",
    "0-2 hours",
  ];

  const handleSubmit = () => {
    onNext({ sleepHours: selectedSleep });
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        How many hours did you sleep today?
      </h2>

      <div className="space-y-2 mb-4 flex-1">
        {sleepOptions.map((option) => (
          <label
            key={option}
            className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
              selectedSleep === option
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="relative">
              <input
                type="radio"
                name="sleep"
                value={option}
                checked={selectedSleep === option}
                onChange={(e) => setSelectedSleep(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 transition-all ${
                  selectedSleep === option
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedSleep === option && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-700 font-medium flex-1">
              {option}
            </span>
          </label>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onPrevious}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MoodLogger;
