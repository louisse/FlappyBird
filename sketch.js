let b;
let pipes;
let G = 0.4;
let groundHeight = 25;

function setup() {
    createCanvas(600, 400);
    b = new Bird(height / 2);
    pipes = new Pipes();
}

function draw() {
    drawStage();
    pipes.update();
    b.update();
    pipes.show();
    b.show();
}

function drawStage() {
    background(100, 100, 255);
    fill(155);
    noStroke();
    rect(0, height - groundHeight, width, height);
}

function keyPressed() {
    let SPACE_BAR = 32;
    if (keyCode === SPACE_BAR) {
        b.setFlap();
    }
}
