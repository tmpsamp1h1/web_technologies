function equal() {
    document.querySelector(".input").value = eval(
        document.querySelector(".input").value
    );
}

function clear_() {
    document.querySelector(".input").value = "";
}

function digit(value) {
    document.querySelector(".input").value = document.querySelector(".input").value + value;
}

function operation(value) {
    let end = document.querySelector(".input").value.slice(-1);
    if (end == '') {
        return;
    }
    let operations = ['-', '+', '*', '/'];
    if (operations.indexOf(end) != -1) {
        let str = document.querySelector(".input").value;
        document.querySelector(".input").value = str.substring(0, str.length - 1);
    }
    document.querySelector(".input").value = document.querySelector(".input").value + value;
}

function deleteSymbol() {
    let value = document.querySelector(".input").value;
    document.querySelector(".input").value = value.substring(0, value.length - 1);
}

function containtsPoint() {
    let str = document.querySelector(".input").value;
    let end = str.slice(-1);
    if (end == '.') {
        return true;
    }
    let badValues = ['-', '+', '*', '/', ''];
    while (badValues.indexOf(end) == -1) {
        str = str.substring(0, str.length - 1);
        end = str.slice(-1);
        if (end == '.') {
            return true;
        }
    }
    return false;
}

function point() {
    let badValues = ['-', '+', '*', '/', '.', ''];
    let end = document.querySelector(".input").value.slice(-1);
    if ((badValues.indexOf(end) != -1) || containtsPoint()) {
        return;
    } 
    document.querySelector(".input").value = document.querySelector(".input").value + '.';
}
