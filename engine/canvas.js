var cScale = 1;
/*
cScale est l'echelle du canvas,
elle varie selon la taille de la fenetre et est géreée par la fonction resizeCanvas.
Multiplier la position et la taille de n'importe quel objet par cette valeur
pour le redimentionner en fonction de la taille de la fenetre.
*/

function updateCanvas () {
    clearCanvas();
    resizeCanvas();
    render();
}

function clearCanvas () {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function resizeCanvas () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    cScale = window.innerHeight*0.08;
}

function render () {
    // Place functions to update here
    updateDrawables();
    updateRectangles();
    tempo.Draw();
    updateTempoBars();
}

function disableImageSmoothing () {
    canvas.getContext('2d').imageSmoothingEnabled = false;
    canvas.getContext('2d').mozImageSmoothingEnabled = false;
    canvas.getContext('2d').webkitImageSmoothingEnabled = false;
    canvas.getContext('2d').msImageSmoothingEnabled = false;
}
