# Productivity Dashboard

Minimal productivity dashboard built with HTML, CSS, and vanilla JavaScript.

![Dashboard Preview](./img/screenshots/demo1.png)

## Overview

This is a client-side project that combines:
- task management
- daily planner
- pomodoro timer
- weather widget
- motivational quotes
- light/dark theme toggle

No build tools are required. Open `index.html` to run.

## Screenshots

![Main Dashboard](./img/screenshots/demo1.png)
![Feature View](./img/screenshots/demo2.png)

## Features

- Add and remove tasks with localStorage persistence
- Hourly daily planner with auto-save
- Pomodoro timer with work and break states
- Weather data from OpenWeather API
- Random quote from Quotable API
- Theme toggle with saved preference
- Time-based header background image

## Responsiveness

Current status:
- desktop-first layout
- large-screen optimization available (`@media (min-width: 1600px)`)
- mobile responsiveness is partial and can be improved

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- localStorage API
- OpenWeather API
- Quotable API

## Project Structure

```text
Productivity-Dashboard/
├── index.html
├── style.css
├── script.js
├── config.example.js
├── config.js
├── CONFIG_SETUP.md
├── .env.example
├── .gitignore
├── fonts/
└── img/
    └── screenshots/
```

## Quick Start

```bash
git clone https://github.com/Rwtchinu007/Productivity-Dashboard.git
cd Productivity-Dashboard
```

Create local config:

```bash
cp config.example.js config.js        # macOS/Linux
Copy-Item config.example.js config.js # Windows PowerShell
```

Then:
1. Add your OpenWeather API key in `config.js`.
2. Open `index.html` in a browser (or use VS Code Live Server).

## Configuration

Example:

```js
const CONFIG = {
  WEATHER: {
    API_KEY: "your_openweather_api_key_here",
    CITY: "Meerut",
    BASE_URL: "https://api.openweathermap.org/data/2.5",
  },
  QUOTES: {
    BASE_URL: "https://api.quotable.io",
  },
};
```

## Troubleshooting

- Weather not loading: verify `WEATHER.API_KEY` and `WEATHER.CITY` in `config.js`.
- Quotes not loading: temporary API/network issue, refresh and retry.
- Theme not updating: hard refresh the page (`Ctrl + F5`).
- Data missing: localStorage may have been cleared.

## Notes

- `config.js` should stay local and is gitignored.
- Do not commit real API keys.
- API widgets require an internet connection.

## Contributing

Issues and pull requests are welcome:
- Issues: https://github.com/Rwtchinu007/Productivity-Dashboard/issues
- Pull requests: https://github.com/Rwtchinu007/Productivity-Dashboard/pulls

## Author

Kshitiz Rawat
- GitHub: https://github.com/Rwtchinu007
- Email: rwtchinu007@gmail.com
