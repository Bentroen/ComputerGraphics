
function setup() {
    createCanvas(600,600);
}  

function segmento(A,B) {
    line(A.x, A.y, B.x, B.y);
}

function ponto(A) {
    circle(A.x,A.y,10);
}

function combina(A,B,t) {
    return createVector((1-t)*A.x+t*B.x,(1-t)*A.y+t*B.y);
}

function roda(O,P,ang)
{
    let x = ((P.x-O.x)*cos(ang)+(P.y-O.y)*sin(ang))+O.x;
    let y = (-(P.x-O.x)*sin(ang)+(P.y-O.y)*cos(ang))+O.y;
    return createVector(x,y);
}

function koch(A,B,nivel)
{
    let C, D, E;
    if(nivel == 0) {
        segmento(A,B);
    } else {
        C = combina(A,B,1/3);
        D = combina(A,B,2/3);
        E = roda(D,C,-PI/3);
        koch(A,C,nivel-1);
        koch(C,E,nivel-1);
        koch(E,D,nivel-1);
        koch(D,B,nivel-1);
    }
}

function draw() {
    let A, B;
    background(200);
    A = createVector(10,height/2);
    B = createVector(width-10,height/2);
    let n = ~~map(mouseX,0,width,0,6);
    koch(A,B,n);
}
