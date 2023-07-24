// Requisito 03
document.getElementById('login-button').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (email !== 'tryber@teste.com' && password !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
// Requisito 18
const agreeCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
agreeCheckBox.addEventListener('input', (e) => {
  if (e.target.checked === true) submitBtn.disabled = false;
  else submitBtn.disabled = true;
});

// Requisito 20
const counterSpan = document.getElementById('counter');
const textArea = document.getElementById('textarea');
textArea.addEventListener('input', (e) => {
  counterSpan.textContent = `${500 - e.target.value.length}`;
});

// Requisito 21
const formFirstPart = document.querySelector('.forms__first');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const formSecondPart = document.querySelector('.forms__second');
const familyChosen = document.querySelectorAll('input[name="family"]');
const subjects = document.querySelectorAll('.subject');
const formsThirdPart = document.getElementById('forms__third--replace');
const rate = document.querySelectorAll('input[name="rate"]');
const textarea = document.getElementById('textarea');

function printInputsPart1() {
  const html1 = `<p>Nome: ${inputName.value} ${inputLastName.value}</p>
  <p>Email: ${email.value}</p>
  <p>Casa: ${house.value}</p>`;
  formFirstPart.innerHTML = '';
  formFirstPart.insertAdjacentHTML('afterbegin', html1);
}

let familyValue;

const subjectsChosen = [];

function printInputsPart2b() {
  formSecondPart.innerHTML = '';
  formSecondPart.insertAdjacentHTML(
    'afterbegin',
    `
  <p>Família: ${familyValue}</p>
  <p>Matérias: ${subjectsChosen.join(', ')}</p>`,
  );
  formSecondPart.style.gap = '2rem';
}

let chosenRate;

function printInputsPart3() {
  const html3 = `
  <p>Avaliação: ${chosenRate}</p>
  <p>Observações: ${textarea.value}</p>
  `;
  formsThirdPart.innerHTML = '';
  formsThirdPart.insertAdjacentHTML('afterbegin', html3);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  printInputsPart1();
  familyChosen.forEach((choice) => {
    if (choice.checked) {
      familyValue = choice.value;
    }
  });
  subjects.forEach((subject) => {
    if (subject.checked) subjectsChosen.push(subject.value);
  });
  printInputsPart2b();
  rate.forEach((r) => {
    if (r.checked) chosenRate = r.value;
  });
  printInputsPart3();
});
