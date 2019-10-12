var key = [0];

window.onkeydown = function (event) {
    if(key.indexOf(event.keyCode) == -1) {
        key.push(event.keyCode);
    }
};

window.onkeyup = function (event) {
    key.splice(key.indexOf(event.keyCode), 1);
};
