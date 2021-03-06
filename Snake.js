function Snake(x, y) {
    this.x = x;
    this.y = y;
    this.speed = scl;
    this.dr = createVector(0, 1);
    this.length = 0;
    this.tail = [];
    this.hitWall = false;

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.length >= 1) {
            this.tail[this.length - 1] = createVector(this.x, this.y);
        }
        this.x += this.dr.x * this.speed;
        this.y += this.dr.y * this.speed;
        if (!wallCollision) {
            if (this.x < 0) {
                this.x = width - scl;
            }
            if (this.x > width - scl) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = height - scl;
            }
            if (this.y > height - scl) {
                // console.log(tick);
                this.y = 0;
            }
        } else {
            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.hitWall = true;
            }
        }

    }

    this.show = function() {
        push();
        fill(200);
        for (i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
        pop();
    }

    this.die = function() {
        if (this.hitWall && wallCollision) {
            tick = 0;
            gamePaused = true;
            console.log("Dead");

        }
        for (i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y)
            if (d < 1) {
                tick = 0;
                gamePaused = true;
                console.log("Dead");
            }
        }
    }

    this.changeDir = function(dir, snakePos) {
        if (dir.x != this.dr.x && dir.y != this.dr.y) {
            this.dr.mult(0);
            this.dr.add(dir);
            lastTick = tick;
        }
    }
}