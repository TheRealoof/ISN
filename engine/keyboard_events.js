var key = [0];

window.onkeydown = function (event) {
    if(key.indexOf(event.keyCode) == -1) {
        key.push(event.keyCode);
        setPlayerPosition();
    }
};

window.onkeyup = function (event) {
    key.splice(key.indexOf(event.keyCode), 1);
};

function setPlayerPosition () {

  switch (key[key.length-1]) { //
      default :
          break;

      case 37 : players[0].targetX = players[0].targetX - 1;
          break;

      case 38 : players[0].targetY = players[0].targetY - 1;
          break;

      case 39 : players[0].targetX = players[0].targetX + 1;
          break;

      case 40 : players[0].targetY = players[0].targetY + 1;
          break;

  }


}
