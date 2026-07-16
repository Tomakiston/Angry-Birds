const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let canvas;

let backgroundImg;
let bg;

function preload() {
    getBackgroundImg();
}

function setup() {
    canvas = createCanvas(1200, 400);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
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