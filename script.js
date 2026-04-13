function openFeatures() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemsPage = document.querySelectorAll(".fullElem");
  var backbtn = document.querySelectorAll(".fullElem .back");
  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      // console.log(elem.id);
      fullElemsPage[elem.id].style.display = "block";
    });
  });

  backbtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemsPage[back.id].style.display = "none";
    });
  });
}

openFeatures();
function todoList() {
  var currentTasks = [];
  if (localStorage.getItem(CONFIG.STORAGE_KEYS.TASKS)) {
    // null is falsy value.
    currentTasks = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.TASKS));
  } else {
    console.log("Task List is Empty");
  }

  function renderTasks() {
    let allTasksDiv = document.querySelector(".allTask");
    let sum = "";
    currentTasks.forEach(function (elem, idx) {
      sum += `<div class="task">
    <h5>${elem.task}<span class = ${elem.important}>Imp</span></h5>
    <button id=${idx}>Mark as Completed</button>
    </div>`;
    });
    allTasksDiv.innerHTML = sum;
    localStorage.setItem(
      CONFIG.STORAGE_KEYS.TASKS,
      JSON.stringify(currentTasks),
    );
    var markCompletedBtn = document.querySelectorAll(".task button");
    // console.log(markCompletedBtn);
    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        // console.log(btn.id);
        currentTasks.splice(btn.id, 1);
        renderTasks();
      });
    });
  }
  renderTasks();

  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let markImpCheckbox = document.querySelector(".addTask form #check");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTasks.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      important: markImpCheckbox.checked,
    });
    renderTasks();
    form.reset();
  });
}
todoList();

function dailyPlanner() {
  var dayPlanner = document.querySelector(".day-planner");
  var dayPlannerData =
    JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.DAY_PLANNER)) || {};
  var hours = Array.from(
    { length: CONFIG.DAILY_PLANNER.TOTAL_HOURS },
    (_, idx) =>
      `${idx + CONFIG.DAILY_PLANNER.START_HOUR}:00-${idx + CONFIG.DAILY_PLANNER.START_HOUR + 1}:00`,
  );
  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlannerData[idx] || "";
    wholeDaySum += `  <div class="day-planner-time">
  <p>${elem}</p>
  <input id=${idx} type="text" placeholder="..." value="${savedData}">
          </div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  var dayPlannerInput = document.querySelectorAll(".day-planner input");
  // console.log(dayPlannerInput);
  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlannerData[elem.id] = elem.value;
      localStorage.setItem(
        CONFIG.STORAGE_KEYS.DAY_PLANNER,
        JSON.stringify(dayPlannerData),
      );
    });
  });
}
dailyPlanner();

function motivationalQuote() {
  var motivationQuote = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    let response = await fetch(`${CONFIG.QUOTES.BASE_URL}/random`);
    let data = await response.json();
    console.log(data.content);
    motivationQuote.innerHTML = data.content;
    motivationAuthor.innerHTML = `- ${data.author}`;
  }
  fetchQuote();
}
motivationalQuote();

function pomodoroTimer() {
  let timer = document.querySelector(".pomo-timer h1");
  let startBtn = document.querySelector(".start-timer");
  let pauseBtn = document.querySelector(".pause-timer");
  let resetBtn = document.querySelector(".reset-timer");
  let sessionType = document.querySelector(".session");
  let isWorkSession = true;
  let totalSeconds = CONFIG.POMODORO.WORK_DURATION;
  let timerInterval = null;
  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`;
    // console.log(minutes,seconds);
  }
  updateTimer();

  function startTimer() {
    clearInterval(timerInterval);
    if (isWorkSession) {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          sessionType.innerHTML = "Break-Session";
          sessionType.style.color = "var(--ter1)";
          sessionType.style.backgroundColor = "var(--ter2)";
          timer.innerHTML =
            String(Math.floor(CONFIG.POMODORO.BREAK_DURATION / 60)).padStart(
              2,
              "0",
            ) + ":00";
          totalSeconds = CONFIG.POMODORO.BREAK_DURATION;
        }
      }, 1000);
    } else {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          sessionType.innerHTML = "Work-Session";
          isWorkSession = true;
          clearInterval(timerInterval);
          timer.innerHTML =
            String(Math.floor(CONFIG.POMODORO.WORK_DURATION / 60)).padStart(
              2,
              "0",
            ) + ":00";
          totalSeconds = CONFIG.POMODORO.WORK_DURATION;
          sessionType.style.color = "var(--ter2)";
          sessionType.style.backgroundColor = "var(--ter1)";
        }
      }, 1000);
    }
  }
  startBtn.addEventListener("click", startTimer);

  function pauseTimer() {
    clearInterval(timerInterval);
  }
  pauseBtn.addEventListener("click", pauseTimer);

  function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = CONFIG.POMODORO.WORK_DURATION;
    updateTimer();
  }
  resetBtn.addEventListener("click", resetTimer);
}
pomodoroTimer();

function weatherWidget() {
  var city = CONFIG.WEATHER.CITY;
  var apiKey = CONFIG.WEATHER.API_KEY;
  var data = null;
  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  // var header1City = document.querySelector(".header1 h4");
  var header2Precipitation = document.querySelector(".header2 .precipitation");
  var header2Humidity = document.querySelector(".header2 .humidity");
  var header2Wind = document.querySelector(".header2 .wind");

  async function weatherAPIcall() {
    var response = await fetch(
      `${CONFIG.WEATHER.BASE_URL}/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    data = await response.json();
    header2Temp.innerHTML = `${data.main.temp} °C`;
    header2Condition.innerHTML = `${data.weather[0].description}`;
    header2Precipitation.innerHTML = `Precipitation: ${data.rain?.["1h"] || 0} mm`;
    header2Humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
    header2Wind.innerHTML = `Wind: ${(data.wind.speed * 3.6).toFixed(1)} Km/hr`;
  }
  weatherAPIcall();

  function timeAndDate() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var dayOfWeek = daysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var currentDate = date.getDate();
    var currentMonth = monthsOfYear[date.getMonth()];
    var year = date.getFullYear();
    header1Date.innerHTML = `${currentDate} ${currentMonth} ${year}`;

    var ampm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours = hours - 12;
    }
    header1Time.innerHTML = `${dayOfWeek},${String(hours).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} ${ampm}`;
  }
  setInterval(timeAndDate, 1000);
}
weatherWidget();

function changeTheme() {
  var themeBtn = document.querySelector(".theme");
  var rootElement = document.documentElement;

  // Load saved theme from localStorage, default to 0 (light theme)
  var flag = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME)
    ? parseInt(localStorage.getItem(CONFIG.STORAGE_KEYS.THEME))
    : 0;

  function applyTheme() {
    if (flag === 0) {
      rootElement.style.setProperty("--pri", "#e5e5cb");
      rootElement.style.setProperty("--ter2", "#d5cea3");
      rootElement.style.setProperty("--ter1", "#3c2a21");
      rootElement.style.setProperty("--sec", "#1a120b");
      themeBtn.querySelector("i").className = "ri-sun-line";
    } else {
      rootElement.style.setProperty("--pri", "#9290C3");
      rootElement.style.setProperty("--ter2", "#535C91");
      rootElement.style.setProperty("--ter1", "#1B1A55");
      rootElement.style.setProperty("--sec", "#070F2B");
      themeBtn.querySelector("i").className = "ri-moon-line";
    }
  }

  // Apply saved theme on page load
  applyTheme();

  themeBtn.addEventListener("click", function () {
    flag = flag === 0 ? 1 : 0;
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, flag);
    applyTheme();
  });
}
changeTheme();

function changeHeaderImage() {
  var header = document.querySelector(".allElems header");
  var hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    // Morning 5am - 12pm
    header.style.backgroundImage = "url(./img/sunrise.jpg)";
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  } else if (hours >= 12 && hours < 18) {
    // Afternoon 12pm - 6pm
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "top";
    header.style.backgroundImage = "url(./img/afternoon.jpg)";
  } else {
    // Night 6pm - 5am
    header.style.backgroundImage = "url(./img/night.jpg)";
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
  }
}
changeHeaderImage();
