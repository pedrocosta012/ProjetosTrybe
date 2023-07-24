function randomNum() {
  return Math.floor(Math.random() * 255);
}

function setColors() {
  const colors = document.getElementsByClassName('ball');
  for (let i = 0; i < colors.length; i += 1) {
    const dataColor = {
      r: randomNum(),
      g: randomNum(),
      b: randomNum(),
    };
    colors[i].style.backgroundColor = `rgb(${dataColor.r}, ${dataColor.g}, ${dataColor.b})`;
  }
}

function setAnswer() {
  const balls = document.getElementsByClassName('ball');
  const chosenBall = balls[Math.floor(Math.random() * 5)];
  chosenBall.className = 'ball chosen';
  let text = chosenBall.style.backgroundColor.toString();
  text = text.slice(3, chosenBall.style.backgroundColor.length);
  document.getElementById('rgb-color').innerText = text;
}

function setStart() {
  const aviso = document.getElementById('answer');
  aviso.innerText = 'Escolha uma cor';
  if (localStorage.getItem('points') === undefined) {
    localStorage.setItem('points', 0);
    document.getElementById('points').innerText = '0';
  } else if (localStorage.getItem('points') == null || localStorage.getItem('points').isNaN) {
    localStorage.removeItem('points');
    localStorage.setItem('points', 0);
    document.getElementById('points').innerText = '0';
  } else {
    document.getElementById('points').innerText = localStorage.getItem('points');
  }
}

function addPoints() {
  const answer = document.getElementById('answer').innerText;
  if (answer === 'Acertou! Novas Cores!') {
    let points = parseInt(localStorage.getItem('points'), 10);
    points += 3;
    document.getElementById('points').innerText = points;
    localStorage.setItem('points', points);
  }
}

function checkAnswer(event) {
  const label = document.getElementById('answer');
  const balls = document.getElementsByClassName('ball');
  if (event.target.className === 'ball chosen') {
    label.innerText = 'Acertou! Novas Cores!';
    addPoints();
  } else {
    label.innerText = 'Errou! Tente novamente!';
  }
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].removeEventListener('click', checkAnswer);
  }
}

function setClickEvent() {
  const options = document.getElementsByClassName('ball');
  for (let i = 0; i < options.length; i += 1) {
    options[i].addEventListener('click', checkAnswer);
  }
}

function resetGame() {
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', setStart);
  resetButton.addEventListener('click', setColors);
  resetButton.addEventListener('click', setAnswer);
  resetButton.addEventListener('click', setClickEvent);
}

window.onload = function loadPage() {
  setStart();
  setColors();
  setAnswer();
  setClickEvent();
  resetGame();
  addPoints();
};
