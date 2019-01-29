class Bird {
    constructor(y) {
        this.x = width * 0.10;
        this.y = y;
        this.yAcc = 0;
        this.ySpeed = 0;
        this.size = 20;
        this.flap = false;
    }

    show() {
        push();
        translate(this.x, this.y);
        fill(255, 255, 100, 250);
        noStroke();
        ellipse(0, 0, this.size, this.size);
        fill(200);
        ellipse(-7, 5, 15, 10);
        fill(255);
        ellipse(0, -7, 7, 10);
        ellipse(7, -7, 7, 10);
        fill(0);
        ellipse(9, -7, 3, 5);
        ellipse(4, -7, 3, 5);
        fill(255, 165, 0);
        ellipse(7, 0, 15, 10);
        pop();
    }

    update() {
        this.doFlap();
        this.ySpeed += this.yAcc;
        this.ySpeed = constrain(this.ySpeed, -5, 5);
        this.y -= this.ySpeed;
        if (this.y >= height - groundHeight) {
            noLoop();
        }
        this.flap = false;
    }

    doFlap() {
        if (this.flap === false) {
            this.yAcc -= G;
            return;
        }
        this.yAcc = 5;
    }

    setFlap() {
        this.flap = true;
    }
}
