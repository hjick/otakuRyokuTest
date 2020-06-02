const body = document.querySelector("body");

const MONDAI_NUMBER = 3;

function setPage(randomNumber) {
  if (randomNumber < 4) {
    fetch("3.txt").then(function (response) {
      response.text().then(function (text) {
        body.innerHTML = text;
      });
    });
  }
  //   if (randomNumber === 1) {

  //   } else if (randomNumber === 2) {
  //   } else {
  //   }
}

function genRandomNumber() {
  const number = Math.floor(Math.random() * MONDAI_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = genRandomNumber();
  setPage(randomNumber);
}
init();
