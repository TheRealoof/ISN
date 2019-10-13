var gravel = new Image();
gravel.src = "classes/assets/gravel.png";

class Block {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.disntance = 1;
        if (isEven(this.x)) {
          this.color = isEven(this.y);
        } else {
          this.color = !isEven(this.y);
        }

    }

    Draw () {
        //console.log("draw");
        this.disntance = Math.sqrt(Math.pow(this.x - squares[0].x, 2) + Math.pow(this.y - squares[0].y, 2));
        context.drawImage(gravel,
          (this.x*cScale) + window.innerWidth/2 - cScale/2 - squares[0].x*cScale,
          (this.y*cScale) + window.innerHeight/2 - cScale/2 - squares[0].y*cScale,
          cScale, cScale);

        // Dessine de la couleur en fonction de la disntance au joueur et de la musique
        if (this.disntance <5) {
          if(beatIndex != -1) {
            if (beatIndex == 0) {
              context.fillStyle = 'rgba(0, 255, 120, ' + ((1-(this.disntance/5))*0.3) + ')';

              if(!this.color) {
                context.fillRect(
                  (this.x*cScale) + window.innerWidth/2 - cScale/2 - squares[0].x*cScale,
                  (this.y*cScale) + window.innerHeight/2 - cScale/2 - squares[0].y*cScale,
                  cScale, cScale
                );
              }
            } else {
              context.fillStyle = 'rgba(255, 0, 120, ' + ((1-(this.disntance/5))*0.3) + ')';

              if(this.color) {
                context.fillRect(
                  (this.x*cScale) + window.innerWidth/2 - cScale/2 - squares[0].x*cScale,
                  (this.y*cScale) + window.innerHeight/2 - cScale/2 - squares[0].y*cScale,
                  cScale, cScale
                );
              }
            }



          }
        }
    }
}

function updateBlocks() {
    var i;
    for (i = 0; i < blocks.length; i++) {
        disableImageSmoothing();
        blocks[i].Draw();
    }
}

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}
