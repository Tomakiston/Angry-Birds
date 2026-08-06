const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let canvas;

let backgroundImg;
let bg;

let ground;
let platform;
let box1, box2, box3, box4, box5;
let log1, log2, log3, log4;
let pig1, pig2;

let pigShotSound;

let score = 0;

function preload() {
    getBackgroundImg();

    pigShotSound = loadSound("audio/pig_snort.mp3");
}

function setup() {
    canvas = createCanvas(1200, 400);
    canvas.position(15,70);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height, 1200,20);
    platform = new Ground(150,305, 300,170);

    //Primeiro Andar
    box1 = new Box(700,320, 70,70);
    box2 = new Box(920,320, 70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260, 300, PI/2);

    //Segundo Andar
    box3 = new Box(700,240, 70,70);
    box4 = new Box(920,240, 70,70);
    pig2 = new Pig(810,226);
    log2 = new Log(810,130, 300, PI/2);

    //Teto
    box5 = new Box(810,100, 70,70);
    log3 = new Log(760,70, 150, PI/10);
    log4 = new Log(870,70, 150, -PI/10);
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    platform.display();
}

function getBackgroundImg() {
    let hour = new Date().getHours();

    if(hour >= 6 && hour < 18) {
        bg = "assets/bg.png";
    } else {
        bg = "assets/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}