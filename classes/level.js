var gravel = new Image();
gravel.src = "classes/assets/gravel.png";

class Block {
    constructor (x, y) {
        this.x = x;
        this.y = y;

    }

    Draw () {
        //console.log("draw");
        context.drawImage(gravel, (this.x*16*cScale), (this.y*16*cScale), 16*cScale, 16*cScale);
    }
}

function updateBlocks() {
    var i;
    for (i = 0; i < blocks.length; i++) {
        disableImageSmoothing();
        blocks[i].Draw();
    }
}
