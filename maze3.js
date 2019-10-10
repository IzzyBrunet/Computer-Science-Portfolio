var food1;
var food2;
var food3;
var food4;
var food5;

function setup(){
  createCanvas(600, 400);
  var choice;
  choice = confirm("Try to collect all the food (colorful squares) and make it through the maze.");
  textSize(20);
  strokeWeight(.001);
}

if (choice == true){

var weight = 1;
function mouseMoved(){
  weight += .009;
};
function draw(){
  background("#fff")
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


  if(mouseY >= 132.5 && mouseY <= 147.5 && mouseX >= 82.5 && mouseX <= 97.5){
    food1 = 0;
  }

  if (food1 == 0){
  }
  else{
    strokeWeight(0)
    fill("#99e")
    rect(82.5, 132.5, 15, 15);
  }

  if(mouseY >= 192.5 && mouseY <= 207.5 && mouseX >= 202.5 && mouseX <= 217.5){
    food2 = 0;
  }

  if (food2 == 0){
  }
  else{
    strokeWeight(0)
    fill("#e99")
    rect(202.5, 192.5, 15, 15);
  }

  if(mouseY >= 312.5 && mouseY <= 327.5 && mouseX >= 82.5 && mouseX <= 97.5){
    food3 = 0;
  }

  if (food3 == 0){
  }
  else{
    strokeWeight(0)
    fill("#9e9")
    rect(82.5, 312.5, 15, 15);
  }

  if(mouseY >= 132.5 && mouseY <= 147.5 && mouseX >= 442.5 && mouseX <= 457.5){
    food4 = 0;
  }

  if (food4 == 0){
  }
  else{
    strokeWeight(0)
    fill("#9ee")
    rect(442.5, 132.5, 15, 15);
  }

  if(mouseY >= 192.5 && mouseY <= 207.5 && mouseX >= 562.5 && mouseX <= 577.5){
    food5 = 0;
  }

  if (food5 == 0){
  }
  else{
    strokeWeight(0)
    fill("#ebe")
    rect(562.5, 192.5, 15, 15);
  }

  if(mouseY >= 350 && mouseY <= 400 && mouseX >= 540 && mouseX <= 600){
    confirm("Congratulations! You've made it out of the maze!");
    mouseX = 0;
    mouseY = 0;
    background("#fff");
    weight = 1;
  }

}
}
