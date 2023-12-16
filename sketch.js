function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(0);
  
  let colour={
    r : 255,
    g : 0,
    b : 0
  };

  for (let i = 0; i < height-i; i = i+3) {
    stroke(colour.r-i, colour.g, colour.b);
    triangle(200,i, 400,height/2, 0,height/2);
    triangle(200,height-i, 400,height/2, 0,height/2);
  } 
}
