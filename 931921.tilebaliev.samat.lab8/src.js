var counterIdTableElem = 1;
var defaultTableElem = document.body.getElementsByClassName('tableBlock')[0].getElementsByClassName('tableElem')[0].cloneNode(true);

function toUpElem(id) {
    let currentElem = document.getElementById(id);
    let toUpElem = currentElem.previousElementSibling;
    if (!toUpElem) {
        return;
    }
    for (i = 0; i < 2; i++) {
        let buffer = currentElem.getElementsByTagName('input')[i].value;
        currentElem.getElementsByTagName('input')[i].value = toUpElem.getElementsByTagName('input')[i].value;
        toUpElem.getElementsByTagName('input')[i].value = buffer;
    }
}

function toDownElem(id) {
    let currentElem = document.getElementById(id);
    let toDownElem = currentElem.nextElementSibling;
    if (!toDownElem) {
        return;
    }
    for (i = 0; i < 2; i++) {
        let buffer = currentElem.getElementsByTagName('input')[i].value;
        currentElem.getElementsByTagName('input')[i].value = toDownElem.getElementsByTagName('input')[i].value;
        toDownElem.getElementsByTagName('input')[i].value = buffer;
    }
}

function generateNewElem() {
    let newElem = defaultTableElem.cloneNode(true);
    newElem.id = counterIdTableElem;

    newElem.getElementsByTagName('button')[0].value = newElem.id + ' up';
    newElem.getElementsByTagName('button')[1].value = newElem.id + ' down';
    newElem.getElementsByTagName('button')[2].value = newElem.id + ' del';

    document.getElementsByClassName('tableBlock')[0].appendChild(newElem);

    ++counterIdTableElem;
}

function saveResult() {
    let data = new Object();
    let i = 0;
    for (elem of document.getElementsByClassName('tableBlock')[0].getElementsByClassName('tableElem')) {
        data[elem.getElementsByTagName('input')[0].value] = elem.getElementsByTagName('input')[1].value;
        i++;
    }
    document.getElementsByClassName('jsonBlock')[0].innerHTML = JSON.stringify(data);
}

function deleteElem(id) {
	document.getElementsByClassName('tableBlock')[0].removeChild( 
        document.getElementById(id)
    );
}