
let questions = [
    "What does the I in IO Pysch stand for?", 
    "A type of information gathering information from written records",
    "Human qualities and skills"
];
let answers = [
    "INDUSTRIAL", 
    "ARCHIVAL",
    "KSAO"
];

let boxes = [];
let currentGuess = 0;
let letter = 0;
let length = answers[0].length;
let won = false;
let next = false;
let curQuestion = getRandom(0, questions.length - 1);

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#121213');

    generate();

}


function draw() {
    for(var i = 0;i < boxes.length;i++) {
        for(var k = 0;k < boxes[0].length;k++) {
            boxes[i][k].display();
        }   
    }

    if(next) {
        generate();
        won = false;
        next = false;
        currentGuess = 0;
        letter = 0;
    }
}


function keyPressed() {
    if(key === "Enter") {

        if(won) {
            next = true;
        } else {
            let gameOver = true;

            for(var i = 0;i < boxes[currentGuess].length;i++) {
                boxes[currentGuess][i].setGuess(boxes[currentGuess][i].getTemp());
    
                if(boxes[currentGuess][i].getStatus() != 3) {
                    gameOver = false;
                }
            }
    
            if(gameOver) {
                won = true;
            }
    
            currentGuess++;
            letter = 0;
        }

    } else if (key === "Backspace" && !won) {

        if(boxes[currentGuess][letter].getTemp() === "") {
            if(letter - 1 >= 0) {
                boxes[currentGuess][letter - 1].setTemp("");
                letter--;
            }
             
        } else {
            boxes[currentGuess][letter].setTemp("");
        }

    } else if(!won){
        if((letter < length) && ("abcdefghijklmnopqrstuvwxyz".includes(key))) {
            boxes[currentGuess][letter].setTemp(key.toUpperCase());
            if(letter + 1 < length) {
                letter++;
            }
            
        }
        
    }
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generate() {

    background('#121213');

    // Reset the rows of boxes
    for(var i = 0;i < 5;i++) {
        boxes[i] = [];
    }

    // Remove the current question answer pair from list
    questions.splice(curQuestion, 1);
    answers.splice(curQuestion, 1);

    curQuestion = getRandom(0, questions.length - 1);

    let split = answers[curQuestion].split("");

    fill('#FFFFFF');
    textSize(42);
    text(questions[curQuestion], windowWidth / 2  - (questions[curQuestion].length * 8), windowHeight / 6);

    let offset = (answers[curQuestion].length  / 2) * 60; 

    for(var k = 0;k < 5;k++) {
        var y = (windowHeight / 4) + (60 * k) + (10 * k);
        for(var i = 0;i < answers[curQuestion].length;i++) {
            var x = (windowWidth / 2) + (60 * i) + (5 * i) - offset;

            boxes[k][i] = new Box(x, y, split[i], answers[curQuestion]);
        }
    }
}