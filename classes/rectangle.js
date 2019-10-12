class Rectangle {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 16

        //rectangeleLoop(this);
        
    }  

    // fonction qui dessine le rectangle dans le canvas
    Draw() {
        context.fillStyle = "red";
        context.fillRect(this.x*cScale*16, this.y*cScale*16, this.width*cScale*16, this.height*cScale*16);
    }

    // fonction qui met a jour la position (x; y) du rectangle en fonction de la fleche du clavier appuyée
    updatePos() {
        switch (key[key.length-1]) { //
            default : 
                break;
    
            case 37 : this.x = this.x - speed(this.speed);
                break;
    
            case 38 : this.y = this.y - speed(this.speed);
                break;
    
            case 39 : this.x = this.x + speed(this.speed);
                break;
    
            case 40 : this.y = this.y + speed(this.speed);
                break;
    
        }   
    }
}

function updateRectangles() {
    var i;
    for (i = 0; i < squares.length; i++) {
        squares[i].updatePos();
        squares[i].Draw();
    }
}