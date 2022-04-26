
let questions = [
    "What does the I in IO Pysch stand for?", 
    "A type of information gathering from written records",
    "Human qualities and skills",
    "Federal Agency to administer and enforce rights laws against workplace discrimination (abbreviation)",
    "The Civil Rights Act protects against descrimination on the basis of race, sex, religion, color and ",
    "What level of accommodation does the ADA require?",
    "You are exempt from the Family Medical Leave Act if you are in the top what percent of a company?",
    "What is the most effective method of recruiting?",
    "What is the most common employee selection test?",
    "What is it called when an interviewer makes the interviewee do something similar to the job?",
    "What will predict job performance in the first few years after graduation?",
    "The three dimensions of evaluating job performance are objective, personnel, and",
    "Focusing on one thing is what kind of performance evaluation error?",
    "Fill in the blank: Training -> P(_____) -> P(Performance)",
    "The ERG theory describes needs for relatedness, growth, and",
    "According to this theory, motivation is equal to E(I * V)",
    "What type of justice is when there is a perceived fairness of methods used to arrive at a decision?",
    "What is a consequence of low job morale, burnout, stress, and disengagement with the company?",
    "What is a consequence of lack of trust, respect, autonomy, and a bad manager?",
    "What type of communication is subordinates to supervisors?",
    "What type of communication consists of bulletin boards, policy manuals, and newsletters?",
    "What type of office design leads to increased socialization and collaboration, but decreased satisfaction?",
    "A typical leader has strong needs for power, affiliation, and",
    "Fill in the blank: A group should strive to be _____ heterogeneous"
];
let answers = [
    "INDUSTRIAL", 
    "ARCHIVAL",
    "KSAO",
    "EEOC",
    "National Origin",
    "REASONABLE",
    "10",
    "Referral Programs",
    "Interview",
    "Work Sample",
    "GPA",
    "Judgemental",
    "Single Dimension",
    "Learning",
    "Existence",
    "Expectancy",
    "Procedural",
    "Absenteeism",
    "Turnover",
    "Upward",
    "Downward",
    "Open",
    "Achievement",
    "Slightly"
];

let boxes = [];
let keys = [];
let currentGuess = 0;
let letter = 0;
let length = answers[0].length;
let won = false;
let next = false;
let curQuestion = getRandom(0, questions.length - 1);

function setup() {
    createCanvas(windowWidth - 50, windowHeight);
    background('#121213');

    generate();

}


function draw() {
    for(var i = 0;i < boxes.length;i++) {
        for(var k = 0;k < boxes[0].length;k++) {
            boxes[i][k].display();
        }   
    }

    for(var i = 0;i < keys.length;i++) {
        for(var j = 0;j < keys[i].length;j++) {
            keys[i][j].display();
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

            for(var k = 0;k < boxes[currentGuess].length;k++) {

                for(var i = 0;i < keys.length;i++) {
                    for(var j = 0;j < keys[i].length;j++) {
                        if(keys[i][j].getLetter() === boxes[currentGuess][k].getTemp()) {
                            keys[i][j].setStatus(boxes[currentGuess][k].getStatus());
                        }
                    }
                }
            }

    
            if(gameOver) {
                won = true;
            }

            if(currentGuess == 5 && !won) {
                alert("Answer: " + answers[curQuestion]);
                won = true;
            }
    
            currentGuess++;
            letter = 0;
        }

    } else if (key === "Backspace" && !won) {

        if(boxes[currentGuess][letter].getTemp() === "") {
            if(letter - 1 >= 0) {
                if(boxes[currentGuess][letter - 1].getAnswer() !== " ") {
                    boxes[currentGuess][letter - 1].setTemp("");
                }
                
                letter--;
            }
             
        } else {
            if(boxes[currentGuess][letter - 1].getAnswer() !== " ") {
                boxes[currentGuess][letter].setTemp("");
            }
            
        }

    } else if(!won){
        if((letter < length) && ("abcdefghijklmnopqrstuvwxyz0123456789".includes(key))) {
            boxes[currentGuess][letter].setTemp(key.toUpperCase());
            if(letter + 1 < length) {
                letter++;

                if(boxes[currentGuess][letter].getAnswer() === " ") {
                    letter++;
                }
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
    for(var i = 0;i < 6;i++) {
        boxes[i] = [];
    }

    // Remove the current question answer pair from list
    questions.splice(curQuestion, 1);
    answers.splice(curQuestion, 1);

    curQuestion = getRandom(0, questions.length - 1);
    length = answers[curQuestion].length;

    let split = answers[curQuestion].split("");

    fill('#FFFFFF');
    
    textSize(42);
    text(questions[curQuestion], windowWidth / 2  - (questions[curQuestion].length * 8), windowHeight / 6, windowWidth - 200, windowHeight);

    let offset = (answers[curQuestion].length  / 2) * 60; 

    for(var k = 0;k < 6;k++) {
        var y = (windowHeight / 4) + (60 * k) + (10 * k);
        for(var i = 0;i < answers[curQuestion].length;i++) {
            var x = (windowWidth / 2) + (60 * i) + (5 * i) - offset;

            boxes[k][i] = new Box(x, y, split[i], answers[curQuestion]);
        }
    }

    resetKeys();

}

function resetKeys() {
    for(var i = 0;i < 3;i++) {
        keys[i] = [];
    }

    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    
    let pos = [300, 270, 250];

    for(var j = 0;j < keys.length;j++) {
        let offset = (rows[j].length  / 2) * 40; 
        var y = (windowHeight - pos[j]) + (40 * j) + (10 * j);
        for(var i = 0;i < rows[j].length;i++) {
            var x = (windowWidth / 2) + (40 * i) + (5 * i) - offset;
            keys[j][i] = new Key(x, y, rows[j].charAt(i));
        }
    }


    for(var i = 0;i < keys.length;i++) {
        for(var j = 0;j < keys[i].length;j++) {
            keys[i][j].display();
        }
        
    }
}