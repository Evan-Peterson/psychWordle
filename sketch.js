
let questions = ["this is a test question"];
let answers = ["answer"];
let boxes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#121213');
    // background('#FFFFFF');

    // var tempBox = new Box(500, 500, "a");
    // tempBox.setStatus(3);
    // tempBox.display();

    let split = answers[0].split("");
    console.log(split);
    for(var i = 0;i < answers[0].length;i++) {
        var x = (windowWidth / 2) + (60 * i) + (5 * i);
        // if(i % 2 != 0) {
        //     x += 5;
        // } 
        // var y = (windowHeight / 2) + (60 * i) + 5
        boxes[i] = new Box(x, (windowHeight / 2), split[i]);
    }


}


function draw() {
    for(var i = 0;i < boxes.length;i++) {
        boxes[i].display();
    }
}