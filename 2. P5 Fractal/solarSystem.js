function setup() {
    createCanvas(600,600);
    rectMode(CENTER);
}  

function drawEarth() {
    push();

    // Earth
    rotate(frameCount * 0.02);
    translate(width/6, 0);
    fill('blue');
    circle(0, 0, 30);

    // Moon
    rotate(frameCount * 0.04);
    translate(width/24, 0);
    fill('gray');
    circle(0, 0, 10);

    pop();
}

function drawMercury() {
    push();

    // Mercury
    rotate(frameCount * 0.04);
    translate(width/16, 0);
    fill('red');
    circle(0, 0, 15);

    pop();
}

function drawSolarSystem() {
    // Sun
    fill('yellow');
    circle(0, 0, 50);

    drawEarth();
    drawMercury();
}

function drawTranslatedAndReset(func, x, y) {
    push();
    translate(x, y);
    func();
    pop();
}

function draw() {
    background(200);

    drawTranslatedAndReset(drawSolarSystem, width/4, height/4);
    drawTranslatedAndReset(drawSolarSystem, 3*width/4, height/4);
    drawTranslatedAndReset(drawSolarSystem, width/4, 3*height/4);
    drawTranslatedAndReset(drawSolarSystem, 3*width/4, 3*height/4);
}

