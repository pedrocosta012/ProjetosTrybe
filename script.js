function rgbColorGenerator() {
	const randomValue = () => Math.floor(Math.random() * 254) + 1;
	return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function changeBackgroundColor(element, color) {
	element.style.backgroundColor = color;
}

function arrayGenerator(size) {
	const resultArray = [];
	for (let i = 0; i < size; i += 1) {
		resultArray.push('');
	}
	return resultArray;
}

function pixelColorize(event) {
	const color = document.getElementsByClassName('selected')[0].style.backgroundColor;
	changeBackgroundColor(event.target, color);
}

function selectColor(event) {
	const colorPalette = [...document.getElementsByClassName('color')];
	colorPalette
		.forEach((element) => element.className = 'color');
	event.target.className += ' selected';
}

function mountBoard(boardSize) {
	const board = document.getElementById('pixel-board');
	while (board.children.length !== 0) board.removeChild(board.children[0]);
	for (let i = 0; i < boardSize; i += 1) {
		const divLine = document.createElement('div');
		divLine.className = 'board-line';
		for (let j = 0; j < boardSize; j += 1) {
			const pixel = document.createElement('div');
			pixel.className = 'pixel';
			pixel.addEventListener('click', pixelColorize);
			divLine.appendChild(pixel);
		}
		board.appendChild(divLine);
	}
}

function resizeBoard() {
	const input = document.getElementById('board-size');
	const newSize = Number.parseInt(input.value, 10);
	if (!newSize || newSize < 5 || newSize > 50) {
		alert('Board inválido!');
		return newSize < 5 || !newSize ? mountBoard(5) : mountBoard(50);
	} else {
		mountBoard(newSize);
	}
	input.value = '';
}

function setColorPalette(colors) {
	const paletteElements = [...document.getElementsByClassName('color')];
	colors[0] = 'rgb(0, 0, 0)';
	paletteElements[0].className += ' selected';
	if (!colors.every((color) => color.startsWith('rgb('))) {
		throw new Error('There is an invalid color in the new palette');
	}
	paletteElements.forEach((element, index) => {
		element.addEventListener('click', selectColor);
		changeBackgroundColor(element, colors[index]);
	});
}

function clearBoard() {
	[...document.getElementsByClassName('pixel')]
		.forEach((element) => changeBackgroundColor(element, 'rgb(255, 255, 255)'));
}

window.onload = () => {
	setColorPalette((arrayGenerator(4).map(() => rgbColorGenerator())));
	mountBoard(5);
	document.getElementById('generate-board').addEventListener('click', resizeBoard);
	document.getElementById('clear-board').addEventListener('click', clearBoard);
};
