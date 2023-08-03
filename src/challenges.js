// Desafio 1
function compareTrue(operador1, operador2) {
  return operador1 && operador2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(inverso) {
  return `${inverso[inverso.length - 1]}, ${inverso[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highest = arrayNumbers[0];
  let count = 0;

  arrayNumbers.forEach((num) => {
    if (num > highest) {
      highest = num;
      count = 1;
    } else if (highest === num) {
      count += 1;
    }
  });

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const posCat1 = Math.abs(cat1 - mouse);
  const posCat2 = Math.abs(cat2 - mouse);

  if (posCat1 > posCat2) {
    return 'cat2';
  }
  if (posCat1 < posCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzzNum) {
  return arrayFizzBuzzNum.map((fb) => {
    if (fb % 3 === 0) {
      if (fb % 5 === 0) {
        return 'fizzBuzz';
      }
      return 'fizz';
    }
    if (fb % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(encrypt) {
  encrypt = encrypt.replace(/a/g, '1');
  encrypt = encrypt.replace(/e/g, '2');
  encrypt = encrypt.replace(/i/g, '3');
  encrypt = encrypt.replace(/o/g, '4');
  encrypt = encrypt.replace(/u/g, '5');
  return encrypt;
}

function decode(decrypt) {
  decrypt = decrypt.replace(/1/g, 'a');
  decrypt = decrypt.replace(/2/g, 'e');
  decrypt = decrypt.replace(/3/g, 'i');
  decrypt = decrypt.replace(/4/g, 'o');
  decrypt = decrypt.replace(/5/g, 'u');
  return decrypt;
}

// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length < 1) {
    return 'Vazio!';
  }
  return tecnologias.sort().map((tech) => ({ tech, name }));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
