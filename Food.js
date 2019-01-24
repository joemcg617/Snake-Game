function Food(x, y) {
    this.pos = createVector(x, y);
    this.pos.mult(snake.speed);

    this.update = function(snakePos) {
        let d = dist(this.pos.x, this.pos.y, snakePos.x, snakePos.y);
        if (d < scl) {
            newFood();
            snake.length++;
        }
    }

    this.show = function() {
        push();
        fill(248, 30, 149);
        rect(this.pos.x, this.pos.y, scl, scl);
        pop();
    }
}

function newFood() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = new Food(floor(random(cols)), floor(random(rows)));
}