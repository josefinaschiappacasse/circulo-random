//basado en https://p5js.org/es/examples/motion-bounce.html

let rad = 60; // El ancho de la forma
let xpos, ypos; // Posición inicial de la forma

let xspeed = 5; // La velocidad de la forma
let yspeed = 5; // La velocidad de la forma

let xdirection = 4; // Izquierda o derecha
let ydirection = 1; // De arriba a abajo

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  noStroke();
  
  frameRate(30);
  ellipseMode(RADIUS);
  // Establecer la posición de partida de la forma
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(255);    
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Prueba para ver si la forma excede los límites de la pantalla
  // Si lo hace, invierta su dirección multiplicando por -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  fill(random(255, 30), random(255, 30), random(255, 30));
  ellipse(xpos, ypos, 180);
 fill(255);
  ellipse(xpos, ypos,100);
  
  fill(random(255, 30), random(255, 30), random(255, 30));
  ellipse( ypos,xpos, 180);
  fill(255);
  ellipse( ypos,xpos, 100);

}







 
 


