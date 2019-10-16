var bpmInterval = window.setInterval(addTempoBar, bpmToInterval(129.8));
var isPlaying = false;
var tempo;
var tempoBars = [];
var audio;
var musicpath;
var volume = 0.05;
var beatIndex = -1;

function addTempoBar () {
    tempoBars.push(new tempoBar());
}

class tempoBar {
    constructor () {
        this.life = 1;
        this.scale = this.scale = window.innerWidth*0.04;
    }

    Draw () {
        this.scale = this.scale = window.innerWidth*0.03;
        context.fillStyle = "black";
        context.fillRect(window.innerWidth/2 - this.life*window.innerWidth*0.35 - this.scale*0.2*0.5, window.innerHeight - 100 - this.scale*0.5, this.scale*0.2, this.scale);
        context.fillRect(window.innerWidth/2 + this.life*window.innerWidth*0.35 - this.scale*0.2*0.5, window.innerHeight - 100 - this.scale*0.5, this.scale*0.2, this.scale);
        this.life = this.life - speed(0.5);

    }
}

class tempoCube {
  constructor() {
    this.scalemultiplier = 1;
    this.scale = window.innerWidth*0.06*this.scalemultiplier;
  }

  Draw () {
    this.scale = window.innerWidth*0.06*this.scalemultiplier;
    context.fillStyle = "darkgrey";
    context.fillRect(
      window.innerWidth*0.5 - this.scale*0.5,
      window.innerHeight - 100 - this.scale*0.5,
      this.scale, this.scale);
  }
}

function updateTempoBars () {
    var i;
    for (i = 0; i < tempoBars.length; i++) {
        tempoBars[i].Draw();
    }

    if(tempoBars[0] != null && tempoBars[0].life <= 0.01 ) {
      tempoBars.splice(0, 1);
      beat();
    }

}

function bpmToInterval (bpm) {
    return 1000/(bpm/60);
}

function loadMusic (path) {
  audio = new Audio(path);
  audio.load();
}

function playMusic () {
    audio.volume = volume;
    audio.play();
    isPlaying = true;
}

function beat() {
    if (!isPlaying) {
      playMusic(0.02);
    }
    if(beatIndex == 0) {
      beatIndex = 1;
    } else {
      beatIndex = 0;
    }

    setCubeScale(0.9);

    setTimeout(function () {setCubeScale(1);}, 80);
}

function setCubeScale(scale) {
  tempo.scalemultiplier = scale;
}
