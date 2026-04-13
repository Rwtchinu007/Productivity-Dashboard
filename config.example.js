// Copy this file to config.js and fill your own values.
// Do not commit real API keys.

const CONFIG = {
  WEATHER: {
    API_KEY: "your_openweathermap_api_key_here",
    CITY: "Meerut",
    BASE_URL: "https://api.openweathermap.org/data/2.5",
  },
  QUOTES: {
    BASE_URL: "https://api.quotable.io",
  },
  POMODORO: {
    WORK_DURATION: 25 * 60,
    BREAK_DURATION: 5 * 60,
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
