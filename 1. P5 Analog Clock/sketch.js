function setup() {
    createCanvas(width, height);
    background(200);
}

function lineFromAngle(x, y, length, angle) {
    let x2 = x + length * cos(angle);
    let y2 = y + length * sin(angle);
    return [x, y, x2, y2];
}

function draw() {
    // Draw clock face
    translate(width / 2, height / 2);
    circle(0, 0, clockRadius * 2);
    circle(0, 0, 20);

    // Draw markers
    let angle;
    for (let i = 0; i < 12; i++) {
        strokeWeight(1);
        angle = map(i, 0, 12, 0, TWO_PI);
        [x1, y1, x2, y2] = lineFromAngle(0, 0, clockRadius, angle);
        line(x1, y1, x2, y2);
    }

    // Get current hour, minute and second
    let h = hour();
    let m = minute();
    let s = second();

    // Get angle of hour and minute clock hands
    let hourFraction = m / 60;
    let hourAngle = map((h % 12) + hourFraction, 0, 12, 0, TWO_PI) - HALF_PI;
    let minuteFraction = s / 60;
    let minuteAngle =
        map((m % 60) + minuteFraction, 0, 60, 0, TWO_PI) - HALF_PI;
    let secondAngle = map(s, 0, 60, 0, TWO_PI) - HALF_PI;

    // Draw hour hand
    strokeWeight(15);
    [x1, y1, x2, y2] = lineFromAngle(0, 0, clockRadius * 0.5, hourAngle);
    line(x1, y1, x2, y2);

    // Draw minute hand
    strokeWeight(10);
    [x1, y1, x2, y2] = lineFromAngle(0, 0, clockRadius * 0.7, minuteAngle);
    line(x1, y1, x2, y2);

    // Draw second hand
    strokeWeight(5);
    [x1, y1, x2, y2] = lineFromAngle(0, 0, clockRadius * 0.9, secondAngle);
    line(x1, y1, x2, y2);
}

let width = 600;
let height = 600;
let clockRadius = 200;
