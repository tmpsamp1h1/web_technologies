function Opening() {
    document.querySelector('.start').style.width = "100%";
    document.querySelector('.start').style.height = "100%";
    document.querySelector('.start').style.position = "absolute";
    document.querySelector('.start').style.zIndex = "3";
    document.querySelector('.start').style.animation = "3s opening";
    document.querySelector('.start').style.animationIterationCount = "1";
    document.querySelector('.start').style.animationFillMode = "forwards";
    document.querySelector('.start').style.transform = "translateY(-5%)";
}

function OnDown() {
    document.querySelector('.switch').style.marginTop = "-3%";
    document.querySelector('.switch').style.transition = "0.5s";
}

var value = 0;

function OnUp() {
    document.querySelector('.switch').style.marginTop = "-5%";
    document.querySelector('.switch').style.transition = "0.5s";
    if (value == 0) {
        value = 1;
        document.querySelector('.on').style.display = "block";
        document.querySelector('.wizard').style.display = "block";
        document.querySelector('.hat').style.display = "block";
        document.querySelector('.rabbit').style.display = "block";
        document.querySelector('.bird').style.display = "block";
        return;
    } 
    value = 0;
    document.querySelector('.on').style.display = "none";
    document.querySelector('.wizard').style.display = "none";
    document.querySelector('.hat').style.display = "none";
    document.querySelector('.rabbit').style.display = "none";
    document.querySelector('.bird').style.display = "none";
}

var animal = 1;

function Focus() {
    if (animal == 1) {
        animal = 0;
        document.querySelector('.rabbit').style.marginTop = "33%";
        document.querySelector('.rabbit').style.transition = "0.5s";
        document.querySelector('.bird').style.marginTop = "25%";
        document.querySelector('.bird').style.transition = "0.5s";
        return;
    }
    animal = 1;
    document.querySelector('.bird').style.marginTop = "33%";
    document.querySelector('.bird').style.transition = "0.5s";
    document.querySelector('.rabbit').style.marginTop = "25%";
    document.querySelector('.rabbit').style.transition = "0.5s";
}