// Configuration file for API keys and constants
// NOTE: For production, use a backend proxy or environment variables with a build tool

const CONFIG = {
  WEATHER: {
    API_KEY: "c2f58ae7e08467e31fbabe6dce96a1d2",
    CITY: "Meerut",
    BASE_URL: "https://api.openweathermap.org/data/2.5",
  },
  QUOTES: {
    BASE_URL: "https://api.quotable.io",
  },
  POMODORO: {
    WORK_DURATION: 25 * 60, // 25 minutes in seconds
    BREAK_DURATION: 5 * 60, // 5 minutes in seconds
  },
  DAILY_PLANNER: {
    START_HOUR: 6,
    END_HOUR: 24,
    TOTAL_HOURS: 18,
  },
  STORAGE_KEYS: {
    TASKS: "currentTasks",
    DAY_PLANNER: "dayPlannerData",
    THEME: "theme",
  },
};

// Export for use in modules (if using ES6 imports)
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
