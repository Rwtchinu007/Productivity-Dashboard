<div align="center">

<img src="./img/icons/logo.svg" alt="Logo" width="80" height="80">

# Productivity Dashboard

**A unified, theme-able productivity platform — built entirely with vanilla web technologies.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/Rwtchinu007/productivity-dashboard/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Browser Support](https://img.shields.io/badge/browsers-Chrome%20%7C%20Firefox%20%7C%20Safari%20%7C%20Edge-orange.svg)](#browser-support)

[Live Demo](https://Rwtchinu007.github.io/productivity-dashboard) · [Report Bug](https://github.com/Rwtchinu007/productivity-dashboard/issues) · [Request Feature](https://github.com/Rwtchinu007/productivity-dashboard/issues)

![Dashboard Preview](./img/screenshots/demo1.png)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Data Persistence](#data-persistence)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Productivity Dashboard is a zero-dependency, client-side productivity platform that consolidates task management, time-blocking, focus sessions, live weather, and motivational content into a single, beautifully designed interface.

Built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools, no bundlers. Just open `index.html` and it works.

> **Why vanilla?** This project demonstrates that a polished, feature-rich product doesn't require a framework. Every interaction is engineered using native browser APIs, keeping the bundle size at exactly zero bytes.

![Dashboard Features](./img/screenshots/demo2.png)

---

## Features

### Task Management
- Create tasks with optional importance flags and rich detail fields
- One-click completion with automatic list removal
- Persistent storage across sessions via `localStorage`

### Daily Planner
- Hour-by-hour time-blocking from **6 AM to midnight** (configurable)
- Autosaves on keystroke — no manual save required
- Plans survive page refreshes and browser restarts

### Pomodoro Timer
- Configurable work/break intervals (default: 25 min work / 5 min break)
- Automatic session transitions with visual state indicators
- Pause and reset controls for flexible focus management

### Live Weather Widget
- Real-time conditions via **OpenWeatherMap API**
- Displays temperature, humidity, precipitation, and wind speed
- City is configurable in `config.js` — defaults to Meerut, IN

### Motivational Quotes
- Random quotes fetched live from the **Quotable API**
- Includes author attribution and a glassmorphism-styled card UI
- Fresh quote surfaced on every module visit

### Time & Context Awareness
- Live clock updating every second
- **Dynamic header backgrounds** based on time of day:

  | Time Range | Theme |
  |---|---|
  | 5 AM – 12 PM | Sunrise / Morning |
  | 12 PM – 6 PM | Afternoon |
  | 6 PM – 5 AM | Evening / Night |

### Theme System
- Light / dark toggle with smooth CSS transitions
- Preference persisted across sessions
- Semantic CSS custom properties for easy token overrides

### Responsive Design
- Fluid layouts across mobile, tablet, desktop, and 4K (`1600px+`)
- Fluid typography via `clamp()` — scales without breakpoint hacks
- Optimized grid reflow for every viewport

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — Flexbox, Grid, custom properties, `clamp()` |
| Logic | Vanilla JavaScript (ES6+) — async/await, DOM APIs |
| Persistence | `localStorage` API |
| Weather Data | [OpenWeatherMap API](https://openweathermap.org/api) |
| Quotes | [Quotable API](https://api.quotable.io) |
| Icons | [Remixicon](https://remixicon.com) |
| Typography | Aeonik TRIAL (Light / Regular / Bold) |

---

## Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, or Edge — latest stable)
- An [OpenWeatherMap](https://openweathermap.org/api) API key (free tier)
- Internet connection for live API data

### Installation

**Option 1 — Clone**
```bash
git clone https://github.com/Rwtchinu007/productivity-dashboard.git
cd productivity-dashboard
```

**Option 2 — Download ZIP**

Download from [Releases](https://github.com/kshitizrawat/productivity-dashboard/releases) and extract.

**Run locally**
```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for hot-reload during development.

### Configuration

#### 1. Create your local config

```bash
cp config.example.js config.js        # macOS / Linux
Copy-Item config.example.js config.js  # Windows PowerShell
```

> ⚠️ `config.js` is gitignored. Never commit real API keys.

#### 2. Add your OpenWeather API key

```javascript
// config.js
const CONFIG = {
  WEATHER: {
    API_KEY: "your_openweather_api_key_here",
    CITY: "Meerut",                                      // Change to your city
    BASE_URL: "https://api.openweathermap.org/data/2.5",
  },
  POMODORO: {
    WORK_DURATION: 25 * 60,   // seconds
    BREAK_DURATION: 5 * 60,   // seconds
  },
  DAILY_PLANNER: {
    START_HOUR: 6,            // 6 AM
    END_HOUR: 24,             // Midnight
    TOTAL_HOURS: 18,
  },
};
```

Get a free API key at [openweathermap.org/api](https://openweathermap.org/api).

---

## Usage

### Task Management
1. Open the **To-do List** card
2. Enter a task title, optional details, and set importance if needed
3. Click **Add Task** — tasks appear instantly below
4. Click **Mark as Completed** to remove a finished task

### Daily Planner
1. Open the **Daily Planner** card
2. Click any hourly slot and type your schedule
3. Changes autosave — no manual action required

### Pomodoro Timer
1. Open the **Pomodoro Timer** card
2. Click **Start** to begin a work session
3. The session indicator shifts automatically to **Break** when work time ends
4. Use **Pause** / **Reset** as needed

### Theme Toggle
Click the ☀️ icon (top-right) to switch between light and dark mode. Your choice persists on the next visit.

---

## Architecture

```
productivity-dashboard/
├── index.html              # Application shell
├── style.css               # Design system and component styles
├── script.js               # Feature modules and event orchestration
├── config.js               # Local config — gitignored (create from example)
├── config.example.js       # Committed config template
├── fonts/
│   ├── AeonikTRIAL-Light.otf
│   ├── AeonikTRIAL-Regular.otf
│   └── AeonikTRIAL-Bold.otf
└── img/
    ├── screenshots/
    ├── todo.jpg            # Feature card thumbnails
    ├── goals.jpg
    ├── moto.jpg
    ├── pomo.jpg
    ├── sunrise.jpg         # Time-of-day backgrounds
    ├── afternoon.jpg
    └── night.jpg
```

**Design principles:**
- **Single-file modules** — each feature (timer, planner, tasks) is a self-contained function group in `script.js`
- **Config-driven behaviour** — all tuneable values live in `config.js`, never scattered through logic
- **Progressive enhancement** — core layout renders instantly; API-dependent widgets populate asynchronously

---

## API Reference

### OpenWeatherMap

| Property | Value |
|---|---|
| Endpoint | `GET /data/2.5/weather?q={city}&appid={key}` |
| Free tier | 1,000 calls / day |
| Response fields used | `temp`, `weather.description`, `humidity`, `rain`, `wind.speed` |

### Quotable

| Property | Value |
|---|---|
| Endpoint | `GET https://api.quotable.io/random` |
| Auth | None |
| Response fields used | `content`, `author` |

---

## Data Persistence

All user data is stored **locally in the browser** via `localStorage`. Nothing is transmitted to external servers beyond the two API calls above.

| Feature | Storage Key | Format |
|---|---|---|
| Tasks | `currentTasks` | JSON array |
| Daily plans | `dayPlannerData` | JSON object keyed by hour |
| Theme preference | `theme` | Integer — `0` light, `1` dark |

---

## Customization

### Design Tokens (Light Theme)

Override CSS custom properties in the `:root` block of `style.css`:

```css
:root {
  --pri:   #e5e5cb;   /* Primary surface */
  --sec:   #1a120b;   /* Primary text / dark surface */
  --ter1:  #3c2a21;   /* Secondary accent */
  --ter2:  #d5cea3;   /* Secondary surface */
  --white: #ffffff;
}
```

### Dark Theme Tokens

Modify inside the `changeTheme()` function in `script.js`:

```javascript
rootElement.style.setProperty("--pri",  "#9290C3");
rootElement.style.setProperty("--ter2", "#535C91");
rootElement.style.setProperty("--ter1", "#1B1A55");
rootElement.style.setProperty("--sec",  "#070F2B");
```

### Custom Fonts

Replace the `@font-face` declarations in `style.css`:

```css
@font-face {
  font-family: aeonik;
  src: url(./fonts/YourFont.otf);
  font-weight: 400;
}
```

---

## Browser Support

| Browser | Minimum Version | Status |
|---|---|---|
| Chrome | Latest stable | ✅ Fully supported |
| Firefox | Latest stable | ✅ Fully supported |
| Safari | Latest stable | ✅ Fully supported |
| Edge | Latest stable | ✅ Fully supported |
| Chrome Mobile | Latest stable | ✅ Fully supported |
| Mobile Safari | Latest stable | ✅ Fully supported |

---

## Roadmap

**Near-term**
- [ ] Data export as CSV / JSON
- [ ] Keyboard navigation and ARIA label improvements
- [ ] Offline mode via Service Worker + cache-first strategy

**Mid-term**
- [ ] Task categories, tags, and priority tiers
- [ ] Recurring tasks and browser notifications
- [ ] Module-based JS refactor (ES Modules without a bundler)

**Long-term**
- [ ] Cloud sync via Firebase or a lightweight backend
- [ ] Customisable colour palette UI
- [ ] Multi-language (i18n) support
- [ ] Progressive Web App (PWA) packaging

---

## Contributing

Contributions are welcome. Please follow the steps below:

1. Fork the repository and create a feature branch

```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes with a clear message

```bash
git commit -m "feat: add keyboard navigation to task list"
```

3. Push to your fork and open a Pull Request against `main`

**Code standards:**
- 2-space indentation
- Descriptive variable names — avoid single-letter identifiers outside loop counters
- Comment non-obvious logic
- Test across Chrome, Firefox, and mobile Safari before submitting

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the full guidelines.

---

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for full terms.

---

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org) — weather data
- [Quotable](https://api.quotable.io) — quotes API
- [Remixicon](https://remixicon.com) — icon set
- [Aeonik TRIAL](https://fontshare.com) — typeface

---

<div align="center">

Made with care by **Kshitiz Rawat**

[GitHub](https://github.com/Rwtchinu007) · [Email](mailto:rwtchinu007@gmail.com)

</div>
