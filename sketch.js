
let questions = ["How long can i make this question and the centering still work"];
let answers = ["ANSWER"];
let boxes = [];
let currentGuess = 0;
let letter = 0;
let length = answers[0].length;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#121213');
    // background('#FFFFFF');

    

    let split = answers[0].split("");

    for(var i = 0;i < 5;i++) {
        boxes[i] = [];
    }

    fill('#FFFFFF');
    textSize(42);
    text(questions[0], windowWidth / 2  - (questions[0].length * 8), windowHeight / 6);

    let offset = (answers[0].length  / 2) * 60; 
    
    for(var k = 0;k < 5;k++) {
        var y = (windowHeight / 4) + (60 * k) + (10 * k);
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
    if(key === "Enter") {
        for(var i = 0;i < boxes[currentGuess].length;i++) {
            boxes[currentGuess][i].setGuess(boxes[currentGuess][i].getTemp());
        }
        currentGuess++;
        letter = 0;
    } else if (key === "Backspace") {

        if(boxes[currentGuess][letter].getTemp() === "") {
            if(letter - 1 >= 0) {
                boxes[currentGuess][letter - 1].setTemp("");
                letter--;
            }
             
        } else {
            boxes[currentGuess][letter].setTemp("");
        }

    } else {
        if((letter < length) && ("abcdefghijklmnopqrstuvwxyz".includes(key))) {
            boxes[currentGuess][letter].setTemp(key.toUpperCase());
            if(letter + 1 < length) {
                letter++;
            }
            
        }
        
    }
}