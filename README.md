# Productivity Dashboard

A modern, lightweight productivity dashboard built with vanilla JavaScript, HTML5, and CSS3. Designed for focus and efficiency with task management, daily planning, and real-time weather integration.

![Dashboard Preview](./img/screenshots/demo1.png)

---

## ✨ Features

- **Task Management** - Add, complete, and delete tasks with persistent storage
- **Daily Planner** - Hourly schedule planning with auto-save functionality
- **Pomodoro Timer** - 25/5 work-break cycle for focused productivity
- **Weather Widget** - Real-time weather data for your location
- **Motivational Quotes** - Random inspiring quotes to keep you motivated
- **Theme System** - Light/dark mode toggle with persistent preferences
- **Time-Based Backgrounds** - Dynamic header images based on time of day
- **No Build Required** - Zero dependencies, pure vanilla JavaScript

---

## 📸 Screenshots

| Main Dashboard | Feature View |
|---|---|
| ![Dashboard](./img/screenshots/demo1.png) | ![Features](./img/screenshots/demo2.png) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Responsive design with custom properties and flexbox/grid |
| **JavaScript (ES6+)** | Interactive features and state management |
| **localStorage API** | Client-side data persistence |
| **OpenWeather API** | Real-time weather data |
| **Quotable API** | Random quotes functionality |
| **Remixicon** | Icon library (CDN) |

---

## 📋 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)
- Optional: VS Code with Live Server extension

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rwtchinu007/Productivity-Dashboard.git
   cd Productivity-Dashboard
   ```

2. **Create configuration file:**
   ```bash
   # macOS/Linux
   cp config.example.js config.js
   
   # Windows PowerShell
   Copy-Item config.example.js config.js
   ```

3. **Add your API key:**
   - Get a free API key from [OpenWeather](https://openweathermap.org/api)
   - Open `config.js` and update `WEATHER.API_KEY`
   - Update `WEATHER.CITY` to your preferred location (optional)

4. **Launch the app:**
   - Open `index.html` in your browser, or
   - Use VS Code Live Server for hot reload

---

## 🚀 Usage

### Task Management
- **Add Task:** Type in the input field and press Enter
- **Complete Task:** Click checkbox to mark complete
- **Delete Task:** Click trash icon to remove

### Daily Planner
- Click hourly slots to plan your day
- Data automatically saves to browser storage
- View full schedule in the planner tab

### Pomodoro Timer
- Set focus duration (default: 25 minutes)
- Click "Start" to begin work session
- Timer auto-switches between work and break cycles
- "Pause" and "Reset" controls available

### Theme Toggle
- Click sun/moon icon in top-right corner
- Preference automatically saved
- Light theme: Beige/Brown palette
- Dark theme: Dark green/Gray palette

---

## ⚙️ Configuration

Edit `config.js` to customize behavior:

```javascript
const CONFIG = {
  WEATHER: {
    API_KEY: "your_openweather_api_key",
    CITY: "Meerut",
    BASE_URL: "https://api.openweathermap.org/data/2.5",
  },
  QUOTES: {
    BASE_URL: "https://api.quotable.io",
  },
  POMODORO: {
    WORK_DURATION: 25 * 60,    // milliseconds
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
```

> **Security Note:** Never commit API keys directly. Use environment variables in production or proxy through your backend.

---

## 📁 Project Structure

```
Productivity-Dashboard/
├── index.html              # Main HTML file
├── style.css               # Complete styling
├── script.js               # Feature implementations
├── config.js               # Configuration (user-created)
├── config.example.js       # Configuration template
├── CONFIG_SETUP.md         # Setup instructions
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── fonts/                  # Custom fonts
├── img/
│   ├── todo.jpg
│   ├── goals.jpg
│   ├── moto.jpg
│   ├── pomo.jpg
│   ├── icons/
│   └── screenshots/        # Demo images
└── .env.example            # Environment template
```

---

## 💾 Storage & Persistence

All data is stored in **browser localStorage**:
- **Tasks** - List of todo items
- **Daily Schedule** - Hourly planner entries
- **Theme Preference** - Light/dark mode selection

**Note:** Data is local to the browser. Clearing browser data will reset all entries.

---

## 🎨 Responsiveness & Compatibility

| Feature | Status |
|---|---|
| Desktop (1920px+) | ✅ Full featured |
| Large Screens (1600px+) | ✅ Optimized with fluid typography |
| Tablets (768px-1024px) | ⚠️ Partial (improvable) |
| Mobile (< 768px) | ⚠️ Partial (needs enhancement) |

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Tasks persist after refresh
- [ ] Weather data loads correctly
- [ ] Pomodoro timer counts down accurately
- [ ] Theme preference saves and applies
- [ ] All images load without errors
- [ ] Quotes display on motivation card
- [ ] Responsive behavior on different screen sizes

---

## 📝 Known Limitations & Future Improvements

- **Mobile Support** - Currently desktop-focused; mobile optimization in progress
- **Error Handling** - API failures not gracefully handled; could show fallback UI
- **XSS Protection** - Task rendering uses `innerHTML` (low-risk, but should use `textContent`)
- **Cross-Tab Sync** - Local storage not synced across browser tabs
- **Offline Support** - Requires internet for API calls

### Planned Enhancements
- [ ] Progressive Web App (PWA) support
- [ ] Dark mode schedule preferences
- [ ] Custom notification sounds
- [ ] Export/import task data
- [ ] Recurring tasks
- [ ] Collaborative features

---

## 🔒 Security

- No sensitive data is transmitted
- API keys stored in `config.js` (excluded from git)
- localStorage is browser-only and not transmitted to servers
- Input sanitization recommended for production use

---

## 📄 License

This project is open source and available under the MIT License. See `LICENSE` for details.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Support & Contact

- **Issues:** Report bugs via [GitHub Issues](https://github.com/Rwtchinu007/Productivity-Dashboard/issues)
- **Author:** Kshitiz Rawat
- **GitHub:** [@Rwtchinu007](https://github.com/Rwtchinu007)
- **Repository:** [Productivity-Dashboard](https://github.com/Rwtchinu007/Productivity-Dashboard)

---

## 🙏 Acknowledgments

- Weather data provided by [OpenWeather](https://openweathermap.org)
- Quotes powered by [Quotable](https://quotable.io)
- Icons from [Remixicon](https://remixicon.com)

---

**Last Updated:** April 2026 | **Version:** 1.0.0
