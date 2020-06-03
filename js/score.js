// Form
const btsForm = document.getElementById("btsForm");

// Content
const contentScore = document.querySelector(".content-score");

// Score value
const scoreValue = document.querySelector(".score-value");
// Select
const correctSelect1 = document.getElementById("select-1-b");
const correctSelect2 = document.getElementById("select-2-d");
const correctSelect3 = document.getElementById("select-3-d");
const correctSelect4 = document.getElementById("select-4-a");
const correctSelect5 = document.getElementById("select-5-a");
const correctSelect6 = document.getElementById("select-6-b");
const correctSelect7 = document.getElementById("select-7-c");
const correctSelect8 = document.getElementById("select-8-c");
const correctSelect9 = document.getElementById("select-9-b");
const correctSelect10 = document.getElementById("select-10-c");
// DISQUS
const disqusContainer = document.getElementById("disqus-container");
const resetBtn = document.getElementById("btn-reset");
const scoreText = document.getElementById("scoreText");

let OTAKU_SCORE = 0;
const FINALSCORE_LS = "fianlScore";

function deleteScore() {
  localStorage.removeItem(FINALSCORE_LS);
}

function saveScore(finalScore) {
  localStorage.setItem(FINALSCORE_LS, finalScore);
}

function paintScoreText(score) {
  if (score === 100) {
    scoreText.innerText = "うおおっ！出た、最強のオタク！！";
  } else if (score >= 78) {
    scoreText.innerText = "おー結構やるじゃん！";
  } else if (score >= 50) {
    scoreText.innerText = "惜しいな。。もっと頑張ろう！";
  } else if (score > 40) {
    scoreText.innerText = "微妙。。";
  } else {
    scoreText.innerText = "え、、なんも知らないじゃん～勉強しよう！";
  }
}

function paintScore(finalScore) {
  scoreValue.innerHTML = `<span>${finalScore}<small>点</small></span>`;
  paintScoreText(finalScore);
}

function paintScoreContainer(finalScore) {
  if (localStorage.getItem(FINALSCORE_LS) !== null) {
    contentMain.className = "content content-main hide";
    contentScore.className = "container content-score";
    disqusContainer.className = "container";
    paintScore(finalScore);
  } else {
    setTimeout(function () {
      loadingPage.className = "loading-page hide";
      contentScore.className = "container content-score";
      disqusContainer.className = "container";
      paintScore(finalScore);
      saveScore(OTAKU_SCORE);
    }, 3000);
  }
}

function handleSubmit(e) {
  e.preventDefault();

  if (correctSelect1.checked) {
    OTAKU_SCORE += 8;
  }

  if (correctSelect2.checked) {
    OTAKU_SCORE += 9;
  }

  if (correctSelect3.checked) {
    OTAKU_SCORE += 8;
  }

  if (correctSelect4.checked) {
    OTAKU_SCORE += 8;
  }

  if (correctSelect5.checked) {
    OTAKU_SCORE += 8;
  }

  if (correctSelect6.checked) {
    OTAKU_SCORE += 11;
  }

  if (correctSelect7.checked) {
    OTAKU_SCORE += 11;
  }

  if (correctSelect8.checked) {
    OTAKU_SCORE += 12;
  }

  if (correctSelect9.checked) {
    OTAKU_SCORE += 12;
  }

  if (correctSelect10.checked) {
    OTAKU_SCORE += 13;
  }

  paintScoreContainer(OTAKU_SCORE);
}

function loadScore() {
  const currentScore = localStorage.getItem(FINALSCORE_LS);
  if (currentScore !== null) {
    paintScoreContainer(currentScore);
  }
}

function init() {
  loadScore();
  btsForm.addEventListener("submit", handleSubmit);
  resetBtn.addEventListener("click", function () {
    deleteScore();
    window.location.reload(true);
  });
}
init();
