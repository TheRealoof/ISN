var steve = new Image();
steve.src = "classes/assets/steve.png";

class Player extends defaultDrawable {
  constructor (x, y) {
    super(x, y, steve);
    super.xScale = 0.8;
    super.yScale = 1.6;
    this.yOffset = 0.1;
    this.targetX = this.x;
    this.targetY = this.y;
    this.speed = 5;
  }

  Update () {
    this.updatePos();
    this.Draw();
  }

  Draw () {
    context.drawImage(this.image,
        window.innerWidth/2 - this.xScale*cScale/2,
        window.innerHeight/2 - 0.5*cScale - (this.yScale - 1)* cScale - this.yOffset*cScale,
        cScale*this.xScale, cScale*this.yScale);
  }

  updatePos () {
    if (nearlyEquals(this.x, this.targetX, 0.05)) {
      this.x = this.targetX;
    } else {
      this.x = this.x + speed(this.speed) * Math.sign(this.targetX - this.x);
      //document.write(this.x + "</br>");
    }

    if (nearlyEquals(this.y, this.targetY, 0.05)) {
      this.y = this.targetY;
    } else {
      this.y = this.y + speed(this.speed) * Math.sign(this.targetY - this.y);
      //document.write(this.x + "</br>");
    }

    this.yOffset = 0.1 +
      (1 - (Math.abs( (this.x%1) - 0.5)*2 ))*0.4 +
      (1 - (Math.abs( (this.y%1) - 0.5)*2 ))*0.4 ;
  }

}
