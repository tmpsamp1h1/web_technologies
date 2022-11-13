var leftColumn = document.getElementsByClassName('contentBlock').item(0).getElementsByClassName('columnLeft').item(0);
var rightColumn = document.getElementsByClassName('contentBlock').item(0).getElementsByClassName('columnRight').item(0);

const singleWidth = '600px';
const bothWidth = '410px';

function displayLeft()
{
	leftColumn.style.width   = '99%';
     rightColumn.style.width  = '1%';

	leftColumn.firstElementChild.style.visibility     = 'visible';
	rightColumn.firstElementChild.style.visibility    = 'hidden';
	leftColumn.firstElementChild.style.width          = singleWidth;
}
function displayRight()
{
     leftColumn.style.width   = '1%';
	rightColumn.style.width  = '99%';

	rightColumn.firstElementChild.style.visibility   = 'visible';
	rightColumn.firstElementChild.style.width        = singleWidth;
	leftColumn.firstElementChild.style.visibility    = 'hidden';
}
function displayBoth()
{
	leftColumn.firstElementChild.style.visibility     = 'visible';
	rightColumn.firstElementChild.style.visibility    = 'visible';

	rightColumn.firstElementChild.style.width         = bothWidth;
	leftColumn.firstElementChild.style.width          = bothWidth;
     leftColumn.style.width   = '50%';
	rightColumn.style.width  = '50%';
}