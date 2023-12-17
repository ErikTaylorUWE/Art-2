function setup() {

  let canvas = createCanvas(400, 500);
  canvas.parent('canvas-frame');

}

function draw() {
  background(0); // black background
  
  //rgb object starting at red
  let colour={
    r : 255,
    g : 0,
    b : 0
  };

  // for loop 
  for (let i = 0; i < height-i; i = i+3) {
    //colour fading from red to black
    stroke(colour.r-i, colour.g, colour.b);
    //two opposing triangles with common baseline
    //the apex of each triangle moves towards the baseline
    triangle(200,i, 400,height/2, 0,height/2);
    triangle(200,height-i, 400,height/2, 0,height/2);
  } 
}
