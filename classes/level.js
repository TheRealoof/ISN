var gravel = new Image();
gravel.src = "classes/assets/gravel.png";

class Block extends floor {
    constructor (x, y) {
        super(x, y, gravel);

    }

    Update () {
      super.Update();
    }
}

function updateBlocks() {
    var i;
    for (i = 0; i < blocks.length; i++) {
        disableImageSmoothing();
        blocks[i].Update();
    }
}
