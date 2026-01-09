
/* 0) "strict mode" */
'use strict';

/* 1) Costanti DOM (riferimenti agli elementi HTML)*/
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const h1Btn = document.getElementById("h-1");
const h2Btn = document.getElementById("h-2");
const h3Btn = document.getElementById("h-3");
const g1Btn = document.getElementById("g-1");
const g2Btn = document.getElementById("g-2");
const g3Btn = document.getElementById("g-3");
const resetBtn = document.getElementById("reset-btn");

/* 2) Stato (variabili che rappresentano i dati dell’app)*/
let scoreHome = 0;
let scoreGuest = 0;

/* 3) Inizializzazione UI (sincronizzi la pagina con lo stato)*/
homeScoreEl.textContent = scoreHome;
guestScoreEl.textContent = scoreGuest;

/* 4) Funzioni (logica riutilizzabile)*/
function renderScores() {
  homeScoreEl.textContent = scoreHome;
  guestScoreEl.textContent = scoreGuest;
}

function addPoint(team, points) {
  if (team==="H") scoreHome +=points; 
  if (team==="G") scoreGuest +=points;
  renderScores();
}

function resetAll() {
  scoreHome = 0;
  scoreGuest = 0;
  renderScores();
}


/* 5) Event listeners (collegano UI → funzioni)*/
h1Btn.addEventListener("click", () => {
  addPoint("H", 1);
})

h2Btn.addEventListener("click", () => {
  addPoint("H", 2);
})

h3Btn.addEventListener("click", () => {
  addPoint("H", 3);
})

g1Btn.addEventListener("click", () => {
  addPoint("G", 1);
})

g2Btn.addEventListener("click", () => {
  addPoint("G", 2);
})

g3Btn.addEventListener("click", () => {
  addPoint("G", 3);
})

resetBtn.addEventListener("click", () => {
  resetAll();
})


/* 6) Debug / log temporanei */
// console.log("JS loaded");

