var gravel = new Image();
gravel.src = "classes/assets/gravel.png";

class Block {
    constructor (x, y) {
        this.x = x;
        this.y = y;

    }

    Draw () {
        //console.log("draw");
        context.drawImage(gravel,
          (this.x*cScale) + window.innerWidth/2 - cScale/2 - squares[0].x*cScale,
          (this.y*cScale) + window.innerHeight/2 - cScale/2 - squares[0].y*cScale,
          cScale, cScale);
    }
}

function updateBlocks() {
    var i;
    for (i = 0; i < blocks.length; i++) {
        disableImageSmoothing();
        blocks[i].Draw();
    }
}
