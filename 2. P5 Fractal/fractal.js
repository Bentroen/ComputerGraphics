let theta;

function setup() {
    createCanvas(800,600);
}

function drawBranch(len) {
    // Draw main branch
    line(0, 0, 0, -len);
    
    // Translate to the end of the branch
    translate(0, -len);
    
    // Shrink length to 2/3 of current length
    len *= 0.66;

    if (len <= 2) return;

    // Draw right branch
    push();
    rotate(theta);
    drawBranch(len);
    pop();

    // Draw left branch
    push();
    rotate(-theta);
    drawBranch(len);
    pop();
}

function draw() {
    background('black');
    theta = map(mouseX, 0, width, 0, PI/2);
    translate(width/2, height);
    stroke('green');
    drawBranch(200);
}

