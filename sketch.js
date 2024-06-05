function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
  }function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("purple");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  