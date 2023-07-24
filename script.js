/* eslint-disable indent */
window.onload = function () {
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
            color.addEventListener('click', function () {
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
            pixel.addEventListener('click', function () {
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