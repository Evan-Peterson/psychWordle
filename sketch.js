
let questions = ["this is a test question"];
let answers = ["answer"];
let boxes = [];
let currentGuess = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#121213');
    // background('#FFFFFF');

    

    let split = answers[0].split("");

    for(var i = 0;i < 5;i++) {
        boxes[i] = [];
    }

    let offset = (answers[0].length  / 2) * 60; 
    
    for(var k = 0;k < 5;k++) {
        var y = (windowHeight / 6) + (60 * k) + (10 * k);
        for(var i = 0;i < answers[0].length;i++) {
            var x = (windowWidth / 2) + (60 * i) + (5 * i) - offset;
    
            
            boxes[k][i] = new Box(x, y, split[i], answers[0]);
        }
    }



}


function draw() {
    for(var i = 0;i < boxes.length;i++) {
        for(var k = 0;k < boxes[0].length;k++) {
            boxes[i][k].display();
        }
        
    }
}


function keyPressed() {
    console.log(key);
}