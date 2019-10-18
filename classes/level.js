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
