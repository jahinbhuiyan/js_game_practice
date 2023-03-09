 let canvas = document.getElementById("canvas");

 let context = canvas.getContext("2d");

 var window_height = window.innerHeight;
 var window_width  = window.innerWidth;

 canvas.width = window_width;
 canvas.height = window_height;
 canvas.style.background = "#ff8";

//  context.fillStyle = "red";  // rectangle
//  context.fillRect(0, 0, 100, 200);

//  context.fillStyle = "green";  // rectangle
//  context.fillRect(500, 200, 100, 200);

//  context.beginPath();   // circ;le start
//  context.strokeStyle = "blue";
//  context.lineWidth = 5;
//  context.arc(200,100, 50, 0, Math.PI * 2, false);
//  context.stroke();
//  context.closePath();   // circle end

class Circle {
    constructor(xpos, ypos, radius, color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context){
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
        context.stroke();
    }
}


let myCircle = new Circle(100,100,5)




