function setup() {
    createCanvas(600,600);
    rectMode(CENTER);
}  

function drawEarth() {
    push();

    // Earth
    rotate(frameCount * 0.02);
    translate(width/3, 0);
    fill('blue');
    circle(0, 0, 60);

    // Moon
    rotate(frameCount * 0.04);
    translate(width/12, 0);
    fill('gray');
    circle(0, 0, 20);

    pop();
}

function drawMercury() {
    push();

    // Mercury
    rotate(frameCount * 0.04);
    translate(width/8, 0);
    fill('red');
    circle(0, 0, 30);

    pop();
}

function draw() {
    background(200);
    translate(width/2, height/2);

    // Sun
    fill('yellow');
    circle(0, 0, 100);

    drawEarth();
    drawMercury();
}

