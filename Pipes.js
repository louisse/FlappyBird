class Pipes {
    constructor() {
        this.pipes = [];
        this.pipes.push(new Pipe(width / 2));
        this.pipes.push(new Pipe(width / 2 + 225));
        this.pipes.push(new Pipe(width / 2 + 450));
    }

    show() {
        for (let pipe of this.pipes) {
            pipe.show();
        }
    }

    update() {
        for (let pipe of this.pipes) {
            pipe.update();
        }
        if (this.pipes[0].isReachedEnd() === true) {
            let p = this.pipes.shift();
            this.pipes[this.pipes.length] = p;
        }
        this.pipes[0].checkCollisionWithBird();
    }
}
