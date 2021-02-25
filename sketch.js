var car1,car2,car3,car4,car5, wall, gameState;

var speed1, weight1;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;
var speed5, weight5;



function setup() {
  createCanvas(1600,400);

  car1 = createSprite(50, 50, 50, 50);
    car2 = createSprite(50, 125, 50, 50);
    car3 = createSprite(50, 200, 50, 50);
    car4 = createSprite(50, 275, 50, 50);
    car5 = createSprite(50, 350, 50, 50);
    
    wall = createSprite(1500,200,60,height);
    wall.shapeColor = (80,80,80);
  
    speed1 = random(55,90);
    weight1 = random(400,1500);
  
    speed2 = random(55,90);
    weight2 = random(400,1500);
  
    speed3 = random(55,90);
    weight3 = random(400,1500);
  
    speed4 = random(55,90);
    weight4 = random(400,1500);
  
    speed5 = random(55,90);
    weight5 = random(400,1500);

  
  gameState = "play";

}

function draw() {
  background(0,0,0);

  if(gameState === "play"){

    
  car1.velocityX = speed1;

  if(wall.x - car1.x < (car1.width + wall.width)/2){

    textSize(57);
    text("Press Space to", 50, 200);
    text("Test Again!", 70, 250);
      
    car1.velocityX = 0;
    car1.x = wall.x;

    car1.depth = wall.depth;
    car1.depth = car1.depth + 1;

    var deformation1 = 0.5 * weight1 * speed1 * speed1/22900;

    if(deformation1 > 0 && deformation1 < 130){
      car1.shapeColor = "green";
      textSize(57);
      text("You are Safe!", 600,50);
    } else if(deformation1 >= 130 && deformation1 <= 210){
      car1.shapeColor = "yellow";
      textSize(57);
      text("So Close!", 600,50);
    } else if (deformation1 > 210){
      car1.shapeColor = "red";
      textSize(57);
      text("Ouch! Crash!", 600,50);
    }

    wall.shapeColor = "white";

  
    }

    car2.velocityX = speed2;

  if(wall.x - car2.x < (car2.width + wall.width)/2){
      
    car2.velocityX = 0;
    car2.x = wall.x;

    car2.depth = wall.depth;
    car2.depth = car2.depth + 1;

    var deformation2 = 0.5 * weight2 * speed2 * speed2/22500;

    if(deformation2 > 0 && deformation2 < 100){
      car2.shapeColor = "green";
      textSize(57);
      text("You are Safe!", 600,125);
    } else if(deformation2 >= 100 && deformation2 <= 180){
      car2.shapeColor = "yellow";
      textSize(57);
      text("So Close!", 600,125);
    } else if (deformation2 > 180){
      car2.shapeColor = "red";
      textSize(57);
      text("Ouch! Crash!", 600,125);
    }
    wall.shapeColor = "white";
  
    }

    car3.velocityX = speed3;

  if(wall.x - car3.x < (car3.width + wall.width)/3){
      
    car3.velocityX = 0;
    car3.x = wall.x;

    car3.depth = wall.depth;
    car3.depth = car3.depth + 1;

    var deformation3 = 0.5 * weight3 * speed3 * speed3/30500;

    if(deformation3 > 0 && deformation3 < 90){
      car3.shapeColor = "green";
      textSize(57);
      text("You are Safe!", 600,200);
    } else if(deformation3 >= 90 && deformation3 <= 120){
      car3.shapeColor = "yellow";
      textSize(57);
      text("So Close!", 600,200);
    } else if (deformation3 > 120){
      car3.shapeColor = "red";
      textSize(57);
      text("Ouch! Crash!", 600,200);
    }
    wall.shapeColor = "white";
  
    }

    car4.velocityX = speed4;

  if(wall.x - car4.x < (car4.width + wall.width)/4){
      
    car4.velocityX = 0;
    car4.x = wall.x;

    car4.depth = wall.depth;
    car4.depth = car4.depth + 1;

    var deformation4 = 0.5 * weight4 * speed4 * speed4/39500;

    if(deformation4 > 0 && deformation4 < 150){
      car4.shapeColor = "green";
      textSize(57);
      text("You are Safe!", 600,275);
    } else if(deformation4 >= 150 && deformation4 <= 180){
      car4.shapeColor = "yellow";
      textSize(57);
      text("So Close!", 600,275);
    } else if (deformation4 > 180){
      car4.shapeColor = "red";
      textSize(57);
      text("Ouch! Crahs!", 600,275);
    }
    wall.shapeColor = "white";
  
    }

    car5.velocityX = speed5;

  if(wall.x - car5.x < (car5.width + wall.width)/5){
      
    car5.velocityX = 0;
    car5.x = wall.x;

    car5.depth = wall.depth;
    car5.depth = car5.depth + 1;
   
    var deformation5 = 0.5 * weight5 * speed5 * speed5/22500;

    if(deformation5 > 0 && deformation5 < 100){
      car5.shapeColor = "green";
      textSize(57);
      text("You are Safe!", 600,350);
    } else if(deformation5 >= 100 && deformation5 <= 180){
      car5.shapeColor = "yellow";
      textSize(57);
      text("So Close!", 600,350);
    } else if (deformation5 > 180){
      car5.shapeColor = "red";
      textSize(57);
      text("Ouch! Crash!", 600,350);
    }
    wall.shapeColor = "white"; 
    
  
    }

  }

  if(keyWentDown("space")){

    setup();   
       

  }

  



  
    

  drawSprites();
}