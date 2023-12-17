let pontos = [];
let selecionado = null;

function setup() {
    createCanvas(600,600);
}  

function ponto(A) {
    circle(A.x,A.y,10);
}

function draw() {
    background(200);
    let vmouse = createVector(mouseX,mouseY);
    selecionado = null;
    for(let p of pontos) {
        if(vmouse.dist(p)<10) {
            selecionado = p;
            fill("#ff0000");
        } else {
            fill("#ffffff");
        }
        ponto(p);
    }
}

function mouseDragged()
{
    if(selecionado) {
        selecionado.set(mouseX, mouseY);
    }
}

function mouseClicked() {
    if(selecionado == null) {
        pontos.push(createVector(mouseX,mouseY));
    }
}

