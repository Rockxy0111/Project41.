class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 150 === 0) {
                     fruits = createSprite(200, 0, 100, 100);
                     fruits.velocityY = 6;
                     fruits.lifetime=450;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage(fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup1.add(fruits);
                     
                 }
                 
                 if (frameCount % 140 === 0) {
                    fruits = createSprite(320, 0, 100, 100);
                    fruits.velocityY = 6;
                    fruits.lifetime=450;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: fruits.addImage(fruit1_img);
                        break;
                        case 2: fruits.addImage("fruit1", fruit2_img);
                        break;
                        case 3: fruits.addImage("fruit1", fruit3_img);
                        break;
                        case 4: fruits.addImage("fruit1", fruit4_img);
                        break;
                        case 5: fruits.addImage("fruit1", fruit5_img);
                        break;
                    }
                    fruitGroup2.add(fruits);
                    
                }
                if (frameCount % 130 === 0) {
                    fruits = createSprite(440, 0, 100, 100);
                    fruits.velocityY = 6;
                    fruits.lifetime=450;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: fruits.addImage(fruit1_img);
                        break;
                        case 2: fruits.addImage("fruit1", fruit2_img);
                        break;
                        case 3: fruits.addImage("fruit1", fruit3_img);
                        break;
                        case 4: fruits.addImage("fruit1", fruit4_img);
                        break;
                        case 5: fruits.addImage("fruit1", fruit5_img);
                        break;
                    }
                    fruitGroup3.add(fruits);
                    
                }

                if (frameCount % 120 === 0) {
                    fruits = createSprite(560, 0, 100, 100);
                    fruits.velocityY = 6;
                    fruits.lifetime=450;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: fruits.addImage(fruit1_img);
                        break;
                        case 2: fruits.addImage("fruit1", fruit2_img);
                        break;
                        case 3: fruits.addImage("fruit1", fruit3_img);
                        break;
                        case 4: fruits.addImage("fruit1", fruit4_img);
                        break;
                        case 5: fruits.addImage("fruit1", fruit5_img);
                        break;
                    }
                    fruitGroup4.add(fruits);
                    
                }

              
                if (frameCount % 110 === 0) {
                    fruits = createSprite(680, 0, 100, 100);
                    fruits.velocityY = 6;
                    fruits.lifetime=450;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: fruits.addImage(fruit1_img);
                        break;
                        case 2: fruits.addImage("fruit1", fruit2_img);
                        break;
                        case 3: fruits.addImage("fruit1", fruit3_img);
                        break;
                        case 4: fruits.addImage("fruit1", fruit4_img);
                        break;
                        case 5: fruits.addImage("fruit1", fruit5_img);
                        break;
                    }
                    fruitGroup5.add(fruits);
                    
                }

                if (frameCount % 100 === 0) {
                    fruits = createSprite(800, 0, 100, 100);
                    fruits.velocityY = 6;
                    fruits.lifetime=450;
                    var rand = Math.round(random(1,5));
                    switch(rand){
                        case 1: fruits.addImage(fruit1_img);
                        break;
                        case 2: fruits.addImage("fruit1", fruit2_img);
                        break;
                        case 3: fruits.addImage("fruit1", fruit3_img);
                        break;
                        case 4: fruits.addImage("fruit1", fruit4_img);
                        break;
                        case 5: fruits.addImage("fruit1", fruit5_img);
                        break;
                    }
                    fruitGroup6.add(fruits);
                    
                }



                  if (player.index !== null) {
                     //fill code here, to destroy the objects.
                  if (player1.isTouching(fruitGroup1)) {
                    fruitGroup1.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup1)) {
                    fruitGroup1.destroyEach();
                    player.score2++;
                  }
                  if (player1.isTouching(fruitGroup2)) {
                    fruitGroup2.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup2)) {
                    fruitGroup2.destroyEach();
                    player.score2++;
                  }
                  if (player1.isTouching(fruitGroup3)) {
                    fruitGroup3.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup3)) {
                    fruitGroup3.destroyEach();
                    player.score2++;
                  }
                  if (player1.isTouching(fruitGroup4)) {
                    fruitGroup4.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup4)) {
                    fruitGroup4.destroyEach();
                    player.score2++;
                  }
                  if (player1.isTouching(fruitGroup5)) {
                    fruitGroup5.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup5)) {
                    fruitGroup5.destroyEach();
                    player.score2++;
                  }
                  if (player1.isTouching(fruitGroup6)) {
                    fruitGroup6.destroyEach();
                    player.score1++;
                  }
                  if (player2.isTouching(fruitGroup6)) {
                    fruitGroup6.destroyEach();
                    player.score2++;
                  }

                stroke(255);
                textSize(22)
                text("Player1 :"+player.score1,30,80);

                stroke(255);
                textSize(22)
                text("Player2 :"+player.score2,30,120);

               








                  }


                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}