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
  if (localStorage.getItem("currentTasks")) {
    // null is falsy value.
    currentTasks = JSON.parse(localStorage.getItem("currentTasks"));
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
    localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
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
  var dayPlannerData = JSON.parse(localStorage.getItem("dayPlannerData")) || {};
  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${idx + 6}:00-${idx + 7}:00`,
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
      localStorage.setItem("dayPlannerData", JSON.stringify(dayPlannerData));
    });
  });
}
dailyPlanner();

function motivationalQuote() {
  var motivationQuote = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");
  async function fetchQuote() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    // console.log(data.content);
    motivationQuote.innerHTML = data.content;
    motivationAuthor.innerHTML = `- ${data.author}`;
  }
  fetchQuote();
}
motivationalQuote();

let timer = document.querySelector(".pomo-timer h1");
let startBtn = document.querySelector(".start-timer");
let pauseBtn = document.querySelector(".pause-timer");
let resetBtn = document.querySelector(".reset-timer");
let sessionType = document.querySelector(".session");
let isWorkSession = true;
let totalSeconds = 25 * 60;
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
  if(isWorkSession){
    timerInterval = setInterval(() => {  
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      }
      else{
        isWorkSession = false;
        clearInterval(timerInterval);
        sessionType.innerHTML = "Break-Session";
        sessionType.style.color = 'var(--ter1)';
        sessionType.style.backgroundColor = 'var(--ter2)';
        timer.innerHTML = "05:00";
        totalSeconds = 5 * 60;
      }
    }, 1000 );
  }
  else{
    timerInterval = setInterval(() => {  
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      }
      else{
        sessionType.innerHTML = "Work-Session";
        isWorkSession = true;
        clearInterval(timerInterval);
        timer.innerHTML = "25:00";
        totalSeconds = 25 * 60;
          sessionType.style.color = 'var(--ter2)';
        sessionType.style.backgroundColor = 'var(--ter1)';
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
  totalSeconds = 25 * 60;
  updateTimer();
}
resetBtn.addEventListener("click", resetTimer);
