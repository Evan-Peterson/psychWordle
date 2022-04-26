class Key {

    constructor(x, y, letter) {
        this.x = x;
        this.y = y;
        this.letter = letter.toUpperCase();
        this.status = 0;
    }


    display() {

        if(this.status == 0) {
            fill('#818384');
        } else if(this.status == 1) {
            fill('#3a3a3c');
        } else if(this.status == 2) {
            fill('#b59f3b');
        } else if(this.status == 3) {
            fill('#538d4e');
        }

        rect(this.x, this.y, 40, 50, 5);
        fill('#FFFFF');
        textSize(18);
        text(this.letter, this.x + 13, this.y + 30);
    };

    setStatus(status) {
        this.status = status;
    };

    getLetter() {
        return this.letter;
    };



}