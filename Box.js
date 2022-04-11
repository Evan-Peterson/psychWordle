class Box {

    constructor(x, y, answer) {
        this.x = x;
        this.y = y;
        this.answer = answer;
        // 0 default, 1 (full grey) not in word, 2 (full yellow) in word wrong place, 3 (full green) right letter right place
        this.status = 0;
    }

    display() {
        strokeWeight(2);
        stroke('#3a3a3c');
        fill('#121213');
        rect(this.x, this.y, 60);
    };
}