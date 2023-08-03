function rgbColorGenerator() {
	const randomValue = () => Math.floor(Math.random() * 254) + 1;
	return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function changeBackgroundColor(element, color) {
	element.style.backgroundColor =  color;
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
	changeBackgroundColor(event, color);
}

function selectColor(event) {
  
}

function mountBoard(boardSize) {
	if (boardSize < 5) return mountBoard(5);
	if (boardSize > 50) return mountBoard(50);
	const board = document.getElementById('pixel-board');
	while (board.children.length !== 0) board.removeChild(board.children[0]);
	for (let i = 0; i < boardSize; i += 1) {
		const divLine = document.createElement('div');
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
	const newSize = Number.parseInt(document.getElementById('board-size').value, 10);
	mountBoard(newSize);
}

function setColorPalette(colors) {
	const paletteElements = [...document.getElementsByClassName('color')];
	colors[0] = 'rgb(0, 0, 0)';
	if (!colors.every((color) => color.startsWith('rgb('))) {
		throw new Error('There is an invalid color in the new palette');
	}
	paletteElements.forEach((element, index) => {
		changeBackgroundColor(element, colors[index]);
	});
}









































window.onload = () => {
	setColorPalette((arrayGenerator(4).map(() => rgbColorGenerator())));
	mountBoard(5);
};
/* window.onload = function () {
	function newColors() {
		let allColors = document.getElementById('color-palette').children;
		let count;

		if (localStorage.getItem('count') != undefined) {
			count = localStorage.getItem('count');
			count++;
			localStorage.setItem('count', count);
			for (let color of allColors) {
				if (allColors[0] == color) {
					color.style.backgroundColor = 'rgb(0, 0, 0)';
				} else {
					let r = Math.floor(Math.random() * 255) + 1;
					let g = Math.floor(Math.random() * 255) + 1;
					let b = Math.floor(Math.random() * 255) + 1;
					color.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
				}
			}
		} else {
			localStorage.setItem('count', 0);
			count = 0;
		}
	}

	newColors();

	function sizeBoard() {
		let size = 5;
		let board = document.getElementById('pixel-board');

		for (let i = 0; i < size; i++) {
			let div = document.createElement('div');
			for (let j = 0; j < size; j++) {
				let pixel = document.createElement('div');
				pixel.className = 'pixel';
				div.appendChild(pixel);
			}
			board.appendChild(div);
		}

		document.getElementById('generate-board').addEventListener('click', function () {
			let size = parseInt(document.getElementsByTagName('input')[0].value);
			let board = document.getElementById('pixel-board');
			let boardChildren = document.querySelectorAll('#pixel-board div');
			let lastsize = size;

			if (size < 5) {
				size = 5;
			} else if (size > 50) {
				size = 50;
			}

			if (document.getElementsByTagName('input')[0].value === '') {
				alert('Board inválido!');
				size = lastsize;
			}

			for (let son of boardChildren) {
				if (son.classList == '') {
					board.removeChild(son);
				}
			}

			for (let i = 0; i < size; i++) {
				let div = document.createElement('div');
				for (let j = 0; j < size; j++) {
					let pixel = document.createElement('div');
					pixel.className = 'pixel';
					div.appendChild(pixel);
				}
				board.appendChild(div);
			}

			painter();

		});
	}

	sizeBoard();

	document.getElementById('first').className = 'color selected';

	function colorSelect() {
		let colors = document.getElementsByClassName('color');
		for (let color of colors) {
			color.addEventListener('click', function (event) {
				let items = document.getElementsByClassName('color');
				for (let item of items) {
					item.setAttribute('class', 'color');
				}
				event.target.setAttribute('class', 'color selected');
			});
		}
	}

	colorSelect();

	function painter() {
		let pixels = document.getElementsByClassName('pixel');
		for (let pixel of pixels) {
			pixel.addEventListener('click', function (event) {
				let idColor = document.getElementsByClassName('selected')[0].getAttribute('id');
				event.target.setAttribute('id', idColor);
			});
		}
	}

	painter();

	function colorClear() {
		document.getElementById('clear-board').addEventListener('click', function () {
			let pixels = document.getElementsByClassName('pixel');
			for (let pixel of pixels) {
				pixel.removeAttribute('id');
			}
		});
	}

	colorClear();

};
*/
