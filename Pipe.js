class Pipe {
    constructor(x) {
        this.h = 110;
        this.w = 75;
        this.x = x;
        this.y = this.randomizeY();
        this.speed = -1.5;
    }

    randomizeY() {
        return floor(random(this.h + 25, height - groundHeight - 25));
    }

    show() {
        push();
        translate(this.x, this.y);
        fill(100, 200, 100);
        noStroke();
        rect(0, 0, this.w, height - this.y - groundHeight);
        rect(0, -this.h, this.w, -this.y + this.h);
        fill(0, 200, 0);
        rect(-5, 0, this.w + 10, 25);
        rect(-5, -this.h, this.w + 10, -25);
        pop();
    }

    update() {
        this.x += this.speed;
    }

    checkCollisionWithBird() {
        let r = b.size / 2;
        if (this.x < b.x + r && this.x + this.w > b.x - r) {
            if (this.y < b.y + r || this.y - this.h > b.y - r) {
                reset();
            }
        }
    }

    isReachedEnd() {
        let reachedEnd = this.x < -this.w;
        if (reachedEnd === true) {
            this.x = width;
            this.y = this.randomizeY();
        }
        return reachedEnd;
    }
}
