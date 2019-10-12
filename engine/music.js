var bpmInterval = window.setInterval(addTempoBar, bpmToInterval(130));
var isPlaying = false;

var tempoBars = [];
var audio;

function addTempoBar () {
    tempoBars.push(new tempoBar());
}

class tempoBar {
    constructor () {
        this.life = 1;
    }

    Draw () {
        context.fillStyle = "black";
        context.fillRect(window.innerWidth/2 - this.life*window.innerWidth*0.35 , window.innerHeight - 50*cScale, 5*cScale, 20*cScale);
        context.fillRect(window.innerWidth/2 + this.life*window.innerWidth*0.35 , window.innerHeight - 50*cScale, 5*cScale, 20*cScale);
        this.life = this.life - speed(0.5);
        if(this.life <= 0.05 ) {
          tempoBars.splice(tempoBars.indexOf(this), 1);
          beat();
        }
    }
}

function updateTempoBars () {
    var i;
    for (i = 0; i < tempoBars.length; i++) {
        tempoBars[i].Draw();
    }
}

function bpmToInterval (bpm) {
    return 1000/(bpm/60);
}

function playMusic(path, volume) {
    audio = new Audio(path);
    audio.load();
    audio.volume = volume;
    audio.play();
    isPlaying = true;
}

function beat() {
    if (!isPlaying) {
      playMusic("music.mp3", 0.02);
    }
}
