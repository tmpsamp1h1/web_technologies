const heightCtrlBlock = document.getElementsByClassName('mainBlock')[0].offsetHeight + document.getElementsByClassName('mainBlock')[0].offsetTop;
const widthCtrlBlock = document.getElementsByClassName('mainBlock')[0].offsetWidth + document.getElementsByClassName('mainBlock')[0].offsetLeft;

const heightWindow = window.innerHeight - 2 * document.getElementsByClassName('mainBlock')[0].offsetTop;
const widthWindow = window.innerWidth - 2 * document.getElementsByClassName('mainBlock')[0].offsetLeft;

const minSize = Math.min(widthWindow, heightWindow) / 50;
const maxSize = Math.min(widthWindow, heightWindow) / 4;

let selectedElem = document.body;

function randPx(min, max) {
	return String(Math.floor(Math.random() * (max - min + 1) + min)) + 'px';
}

function clickEvent() {
	if (selectedElem == this) {
		document.body.removeChild(this);
		return;
	}

	selectedElem.id == 'defaultTriangle' ?
		selectedElem.style.borderBottomColor = ''  :
		selectedElem.style.background = '';
	selectedElem = this;

	selectedElem.id == 'defaultTriangle' ?
		selectedElem.style.borderBottomColor = 'yellow' :
		selectedElem.style.background = 'yellow';
}

function generateSquare() {
	let input = document.getElementsByTagName('input')[0];
	for (let i = 0; i < input.value; i++) {
		let newElem = document.createElement('div');
		newElem.id = 'defaultSquare';
		newElem.style.width = newElem.style.height = randPx(minSize, maxSize);
		newElem.style.left = randPx(0, widthWindow - parseInt(newElem.style.width));
		parseInt(newElem.style.left) <= widthCtrlBlock ?
			newElem.style.top = randPx(heightCtrlBlock, heightWindow - parseInt(newElem.style.height)) :
			newElem.style.top = randPx(0, heightWindow - parseInt(newElem.style.height));
		newElem.onclick = clickEvent;
		document.body.appendChild(newElem);
	}
}

function generateTriangle()
{
	let input = document.getElementsByTagName('input')[0];
	for (let i = 0; i < input.value; i++)
	{
		let newElem = document.createElement('div');
		newElem.id = 'defaultTriangle';
		let size = randPx(minSize, maxSize);
		newElem.style.border = size + ' solid transparent';
		newElem.style.borderBottom = size + ' solid blue';
		let sizeNum = parseInt(size.replace('px', ''))
		newElem.style.left = randPx(0, widthWindow - 2*sizeNum);
		parseInt(newElem.style.left) <= widthCtrlBlock ?
			newElem.style.top = randPx(heightCtrlBlock - sizeNum, heightWindow - 2*sizeNum) :
			newElem.style.top = randPx(-sizeNum, heightWindow - 2*sizeNum);
		newElem.onclick = clickEvent;
		document.body.appendChild(newElem);
	}
}

function generateCircle()
{
	let input = document.getElementsByTagName('input')[0];
	for (let i = 0; i < input.value; i++) {
		let newElem = document.createElement('div');
		newElem.id = 'defaultCircle';
		newElem.style.width = newElem.style.height = randPx(minSize, maxSize);
		newElem.style.left = randPx(0, widthWindow - parseInt(newElem.style.width));
		parseInt(newElem.style.left) <= widthCtrlBlock ?
			newElem.style.top = randPx(heightCtrlBlock, heightWindow - parseInt(newElem.style.height)) :
			newElem.style.top = randPx(0, heightWindow - parseInt(newElem.style.height));
		newElem.onclick = clickEvent;
		document.body.appendChild(newElem);
	}
}
