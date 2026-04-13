# Productivity Dashboard Configuration Guide

## Environment Setup

This project now uses a centralized configuration file for managing API keys and constants. Follow the steps below to set up your environment:

### Step 1: Copy and Configure config.js

The `config.js` file contains all your API keys and constants. By default, it includes:
- OpenWeather API Key
- City name
- Pomodoro timer durations
- Daily planner hours
- Storage keys for localStorage

**Current configuration in `config.js`:**
```javascript
const CONFIG = {
  WEATHER: {
    API_KEY: "c2f58ae7e08467e31fbabe6dce96a1d2",
    CITY: "Meerut",
    BASE_URL: "https://api.openweathermap.org/data/2.5"
  },
  // ... other config
};
```

### Step 2: For Production Deployment

**⚠️ IMPORTANT SECURITY NOTES:**

1. **Never commit API keys** to version control
2. **Move config.js to .gitignore** before pushing to GitHub
3. **Use a backend proxy** for API calls instead of exposing keys on the frontend
4. **Consider using a build tool** like Vite or Webpack to properly handle `.env` files

### Step 3: Change Your City

To change the city for the weather widget:

```javascript
// In config.js
WEATHER: {
  CITY: "Your City Name"  // Change this
}
```

### Step 4: Update Your API Key

If you want to use your own OpenWeather API key:

1. Sign up at [openweathermap.org](https://openweathermap.org/)
2. Get your API key from your account
3. Update in `config.js`:

```javascript
WEATHER: {
  API_KEY: "your_new_api_key_here"
}
```

## What Changed

All hardcoded values have been moved to `config.js`:

| Before | After |
|--------|-------|
| `var city = "Meerut"` | `CONFIG.WEATHER.CITY` |
| `var apiKey = "..."` | `CONFIG.WEATHER.API_KEY` |
| `25 * 60` (pomodoro work) | `CONFIG.POMODORO.WORK_DURATION` |
| `5 * 60` (pomodoro break) | `CONFIG.POMODORO.BREAK_DURATION` |
| `"currentTasks"` (localStorage) | `CONFIG.STORAGE_KEYS.TASKS` |
| `"dayPlannerData"` (localStorage) | `CONFIG.STORAGE_KEYS.DAY_PLANNER` |
| `"theme"` (localStorage) | `CONFIG.STORAGE_KEYS.THEME` |

## Best Practices

✅ **DO:**
- Keep sensitive keys in config files
- Use .gitignore to prevent committing config files
- Use a backend server for API calls in production
- Rotate API keys regularly

❌ **DON'T:**
- Commit config.js with real API keys to GitHub
- Share API keys in public repositories
- Use HTTP for API calls (always use HTTPS)
- Expose API keys in frontend code for production apps

## Future Improvements

For a production application, consider:

1. **Backend Proxy**: Create a backend API endpoint that handles all external API calls
2. **Build Tool Integration**: Use Vite or Webpack with proper `.env` file handling
3. **API Rate Limiting**: Implement rate limiting on your backend
4. **Authentication**: Add user authentication and authorization
