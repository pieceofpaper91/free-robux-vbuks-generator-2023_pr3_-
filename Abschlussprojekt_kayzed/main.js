
let matrix = createMatrix(50,110);
console.log(matrix);
let objekteArray = [];


function setup() {
    createCanvas(2600, 1700);
    frameRate(60);
    //objekteArray.push(new virus(20,20));
    objekteArray.push(new RasenDestroyer(25,25));
    objekteArray.push(new Gras(24,25));
    objekteArray.push(new Gras(23,25));
    objekteArray.push(new Gras(22,25));
    objekteArray.push(new Gras(25,24));
    objekteArray.push(new Gras(25,23));
    objekteArray.push(new Gras(25,22));
    objekteArray.push(new Gras(26,25));
    objekteArray.push(new Gras(27,25));
    objekteArray.push(new Gras(28,25));
    objekteArray.push(new Gras(25,26));
    objekteArray.push(new Gras(25,27));
    objekteArray.push(new Gras(25,28));
}

let i = 0;
let duration = 10000;
function draw() {
    drawpausebutton()
    if(i < duration) {
        zeichneMatrix();
        for (let i = 0; i < objekteArray.length; i++) {
            objekteArray[i].spielzug();
        }
        //console.log(objekteArray.length);
    } i++;
    
}
function drawpausebutton(){
    fill(255,255,255)
    rect(1,1270,50,50)
    fill(0,0,0)
    rect(10,1275,10,40)
}
