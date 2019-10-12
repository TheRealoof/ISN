var canvas, context;
var squares = []; // tableau qui recevra les rectangles rouges
var blocks = []; // tableau qui recevra les blocs de graviers à dessinber en fond
var height = 30, width = 50; // l'espace (en blocks de 16 x 16) occuppé par le gravier

window.onload = function ()
{
    // initialisation du canvas 
    canvas=document.getElementById('canvas1'); // Récup de l’objet canvas
    context=canvas.getContext('2d'); // Récup du context graphique du canvas
    
    // démarre le calcul du framerate et les fonctions associées (voir frametime.js)
    this.getFrameTime();

    playMusic("music.mp3", 0.1); // joue la musique music.mp3 avec un volulme 0.1 (10 %)

    // crée le joueur
    squares.push(new Rectangle (5, 5, 1, 1))


    // crée les blocs de graviers à leur position (x; y)
    for (var y = 0; y < height; y++) { // pour chaque ligne y
        for (var x = 0; x < width; x++) { // pour chaque x dans cette ligne y
            blocks.push (new Block (x, y)); // ajoute un block
        }
    }
}