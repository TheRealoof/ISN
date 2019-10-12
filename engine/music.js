var bpmInterval = window.setInterval(addTempoBar, bpmToInterval(130));
var beat = new Event('beat');

var tempoBars = [];
var audio;

function addTempoBar () {
    tempoBars.push(new tempoBar());
}

class tempoBar {
    constructor () {
        this.x = 0;
    }

    Draw () {
        context.fillStyle = "black";
        context.fillRect(this.x * cScale, window.innerHeight - 50*cScale, 5*cScale, 20*cScale);
        context.fillRect(window.innerWidth - this.x * cScale, window.innerHeight - 50*cScale, 5*cScale, 20*cScale);
        this.x = this.x + speed(200);
        if(this.x*cScale > ((window.innerWidth)/2)-10*cScale ) {

          tempoBars.splice(tempoBars.indexOf(this), 1);
          document.dispatchEvent(beat);
          this.destroy();
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
    document.audio.play();
}

document.addEventListener('beat', function (e) {
  console.log("beat");
}, false);
