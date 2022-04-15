class Box {

    constructor(x, y, answer) {
        this.x = x;
        this.y = y;
        this.answer = answer.toUpperCase();
        // 0 default, 1 (full grey) not in word, 2 (full yellow) in word wrong place, 3 (full green) right letter right place
        this.status = 0;
    }

    display() {
        
        if(this.status == 0) {
            strokeWeight(2);
            stroke('#3a3a3c');
            fill('#121213');
        } else if(this.status == 1) {
            fill('#3a3a3c'); // grey
        } else if(this.status == 2) {
            fill('#b59f3b'); // yellow
        } else if(this.status == 3) {
            fill('#538d4e'); // green
        }
        
        rect(this.x, this.y, 60);
        fill('#FFFFFF');
        textSize(36);
        text(this.answer, this.x + 19, this.y + 43);
    };


    setStatus(newStatus) {
        this.status = newStatus;
    };



}