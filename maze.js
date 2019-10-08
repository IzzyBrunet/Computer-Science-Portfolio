function setup(){
  createCanvas(600, 400);
  confirm("Make it through the maze without touching the walls. The line your cursor draws will expand the more you move.");
}

var weight = 1;
function mouseMoved(){
  weight += .009;
};
function draw(){
  stroke("#000");
  strokeWeight(10);
  line(1, 50, 1, 350);
  line(60, 50, 599, 50);
  line(599, 50, 599, 350);
  line(1, 350, 540, 350);

  //vertical lines
  line(60, 110, 60, 170);
  line(120, 170, 120, 230);
  line(180, 50, 180, 170);
  line(180, 230, 180, 290);
  line(240, 170, 240, 230);
  line(240, 290, 240, 350);
  line(300, 110, 300, 170);
  line(300, 230, 300, 290);
  line(360, 170, 360, 230);
  line(360, 290, 360, 350);
  line(420, 110, 420, 170);
  line(420, 230, 420, 290);
  line(480, 110, 480, 230);
  line(540, 170, 540, 230);

  //horizontal lines
  line(60, 110, 120, 110);
  line(240, 110, 300, 110);
  line(420, 110, 540, 110);
  line(60, 170, 240, 170);
  line(300, 170, 360, 170);
  line(540, 170, 600, 170);
  line(0, 230, 60, 230);
  line(180, 230, 240, 230);
  line(360, 230, 480, 230);
  line(60, 290, 180, 290);
  line(300, 290, 420, 290);
  line(480, 290, 600, 290);

  stroke(0, mouseX, mouseY);
  strokeWeight(weight);
  point(mouseX, mouseY);

}
