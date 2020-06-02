// Content DOM
const contentMain = document.querySelector(".content-main");
const content1 = document.querySelector(".content-1");
const content2 = document.querySelector(".content-2");
const content3 = document.querySelector(".content-3");
const content4 = document.querySelector(".content-4");
const content5 = document.querySelector(".content-5");
const content6 = document.querySelector(".content-6");
const content7 = document.querySelector(".content-7");
const content8 = document.querySelector(".content-8");
const content9 = document.querySelector(".content-9");
const content10 = document.querySelector(".content-10");

// Content Main button DOM
const btnMainStart = document.getElementById("btn-main-start");
// Content 1 - 10 button DOM
const btnPreContent1 = document.getElementById("btn-pre-content1");
const btnNextContent1 = document.getElementById("btn-next-content1");

const btnPreContent2 = document.getElementById("btn-pre-content2");
const btnNextContent2 = document.getElementById("btn-next-content2");

const btnPreContent3 = document.getElementById("btn-pre-content3");
const btnNextContent3 = document.getElementById("btn-next-content3");

const btnPreContent4 = document.getElementById("btn-pre-content4");
const btnNextContent4 = document.getElementById("btn-next-content4");

const btnPreContent5 = document.getElementById("btn-pre-content5");
const btnNextContent5 = document.getElementById("btn-next-content5");

const btnPreContent6 = document.getElementById("btn-pre-content6");
const btnNextContent6 = document.getElementById("btn-next-content6");

const btnPreContent7 = document.getElementById("btn-pre-content7");
const btnNextContent7 = document.getElementById("btn-next-content7");

const btnPreContent8 = document.getElementById("btn-pre-content8");
const btnNextContent8 = document.getElementById("btn-next-content8");

const btnPreContent9 = document.getElementById("btn-pre-content9");
const btnNextContent9 = document.getElementById("btn-next-content9");

const btnPreContent10 = document.getElementById("btn-pre-content10");
const btnNextContent10 = document.getElementById("btn-next-content10");

// Progress
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

const loadingPage = document.querySelector(".loading-page");
// Main-start button
btnMainStart.addEventListener("click", function (e) {
  e.preventDefault();
  contentMain.className = "content content-main hide";
  content1.className = "content content-1 show";
  progressBar.style.width = "10%";
  progressBar.innerText = "10%";
  progressBar.setAttribute("aria-valuenow", "10");
});

// Content1 button
btnPreContent1.addEventListener("click", function () {
  content1.className = "content content-1 hide";
  contentMain.className = "content content-main show";
  progressBar.style.width = "0%";
  progressBar.innerText = "0%";
  progressBar.setAttribute("aria-valuenow", "0");
});
btnNextContent1.addEventListener("click", function () {
  content1.className = "content content-1 hide";
  content2.className = "content content-2 show";
  progressBar.style.width = "20%";
  progressBar.innerText = "20%";
  progressBar.setAttribute("aria-valuenow", "20");
});

// Content2 button
btnPreContent2.addEventListener("click", function () {
  content2.className = "content content-2 hide";
  content1.className = "content content-1 show";
  progressBar.style.width = "10%";
  progressBar.innerText = "10%";
  progressBar.setAttribute("aria-valuenow", "10");
});

btnNextContent2.addEventListener("click", function () {
  content2.className = "content content-2 hide";
  content3.className = "content content-3 show";
  progressBar.style.width = "30%";
  progressBar.innerText = "30%";
  progressBar.setAttribute("aria-valuenow", "30");
});

// Content3 button
btnPreContent3.addEventListener("click", function () {
  content3.className = "content content-3 hide";
  content2.className = "content content-2 show";
  progressBar.style.width = "20%";
  progressBar.innerText = "20%";
  progressBar.setAttribute("aria-valuenow", "20");
});

btnNextContent3.addEventListener("click", function () {
  content3.className = "content content-3 hide";
  content4.className = "content content-4 show";
  progressBar.style.width = "40%";
  progressBar.innerText = "40%";
  progressBar.setAttribute("aria-valuenow", "40");
});

// Content4 button
btnPreContent4.addEventListener("click", function () {
  content4.className = "content content-4 hide";
  content3.className = "content content-3 show";
  progressBar.style.width = "30%";
  progressBar.innerText = "30%";
  progressBar.setAttribute("aria-valuenow", "30");
});

btnNextContent4.addEventListener("click", function () {
  content4.className = "content content-4 hide";
  content5.className = "content content-5 show";
  progressBar.style.width = "50%";
  progressBar.innerText = "50%";
  progressBar.setAttribute("aria-valuenow", "50");
});

// Content5 button
btnPreContent5.addEventListener("click", function () {
  content5.className = "content content-5 hide";
  content4.className = "content content-4 show";
  progressBar.style.width = "40%";
  progressBar.innerText = "40%";
  progressBar.setAttribute("aria-valuenow", "40");
});

btnNextContent5.addEventListener("click", function () {
  content5.className = "content content-5 hide";
  content6.className = "content content-6 show";
  progressBar.style.width = "60%";
  progressBar.innerText = "60%";
  progressBar.setAttribute("aria-valuenow", "60");
});

// Content6 button
btnPreContent6.addEventListener("click", function () {
  content6.className = "content content-6 hide";
  content5.className = "content content-5 show";
  progressBar.style.width = "50%";
  progressBar.innerText = "50%";
  progressBar.setAttribute("aria-valuenow", "50");
});

btnNextContent6.addEventListener("click", function () {
  content6.className = "content content-6 hide";
  content7.className = "content content-7 show";
  progressBar.style.width = "70%";
  progressBar.innerText = "70%";
  progressBar.setAttribute("aria-valuenow", "70");
});

// Content7 button
btnPreContent7.addEventListener("click", function () {
  content7.className = "content content-7 hide";
  content6.className = "content content-6 show";
  progressBar.style.width = "60%";
  progressBar.innerText = "60%";
  progressBar.setAttribute("aria-valuenow", "60");
});

btnNextContent7.addEventListener("click", function () {
  content7.className = "content content-7 hide";
  content8.className = "content content-8 show";
  progressBar.style.width = "80%";
  progressBar.innerText = "80%";
  progressBar.setAttribute("aria-valuenow", "80");
});

// Content8 button
btnPreContent8.addEventListener("click", function () {
  content8.className = "content content-8 hide";
  content7.className = "content content-7 show";
  progressBar.style.width = "70%";
  progressBar.innerText = "70%";
  progressBar.setAttribute("aria-valuenow", "70");
});

btnNextContent8.addEventListener("click", function () {
  content8.className = "content content-8 hide";
  content9.className = "content content-9 show";
  progressBar.style.width = "90%";
  progressBar.innerText = "90%";
  progressBar.setAttribute("aria-valuenow", "90");
});

// Content9 button
btnPreContent9.addEventListener("click", function () {
  content9.className = "content content-9 hide";
  content8.className = "content content-8 show";
  progressBar.style.width = "80%";
  progressBar.innerText = "80%";
  progressBar.setAttribute("aria-valuenow", "80");
});

btnNextContent9.addEventListener("click", function () {
  content9.className = "content content-9 hide";
  content10.className = "content content-10 show";
  progressBar.style.width = "99%";
  progressBar.innerText = "99%";
  progressBar.setAttribute("aria-valuenow", "99");
});

// Content10 button
btnPreContent10.addEventListener("click", function () {
  content10.className = "content content-10 hide";
  content9.className = "content content-9 show";
  progressBar.style.width = "90%";
  progressBar.innerText = "90%";
  progressBar.setAttribute("aria-valuenow", "90");
});

btnNextContent10.addEventListener("click", function () {
  content10.className = "content content-10 hide";
  progress.classList.add("hide");
  loadingPage.className = "loading-page show";
});
