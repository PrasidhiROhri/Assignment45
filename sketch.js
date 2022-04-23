var canvas
var blast, fuel,coin,allPlayers,fuels,coins;
var absorptionHearts, reset,track;
var database, gameState;
var form, player, playerCount;
var obstacle1Image, obstacle2Image,obstacles;
var rocket1,rocket2,rocket3,spaceStation;
var rockets = []

function preload(){
    
    blastImg = loadImage("assets/blast.png")
    fuelImg = loadImage("assets/fuel.png")
    coinImg = loadImage("assets/Coin.png")
    absorptionHearts = loadImage("assets/absorption_hearts.gif")
    resetImg = loadImage("assets/reset.png")
    rocket1 = loadImage("assets/Rocket_1.png")
    rocket2 = loadImage("assets/Rocket_2.png")
    rocket3 = loadImage("assets/Rocket_3.png")
    spaceStation = loadImage("assets/Sri_Hari_Kota.jpg")
    obstacle1Image = loadImage("assets/obstacle1.png")
    obstacle2Image = loadImage("assets/Obstacle2.png")
    trackImg = loadImage("assets/track.jpg")

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }
  
  function draw() {
    background(spaceStation);
    if (playerCount === 2) {
      game.update(1);
    }
  
    if (gameState === 1) {
      game.play();
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  