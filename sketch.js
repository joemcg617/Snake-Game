let tick = 0;
let snake;
let food;
let hideGrid = false;
let hideScore = false;
let gamePaused = false;
let scl = 20;
let dir;
let lastX;
let lastY;
let wallCollision = false;
let backgroundColor = 51;
let snakeColor = [255, 255, 255];
let lastTick = 0;
let gameSpeed = 25;

function setup() {
    tick = 0;
    dir = createVector(0, 1);
    frameRate(gameSpeed);
    createCanvas(800, 800);
    snake = new Snake(0, 0);
    snake.hitWall = false;
    ui = new UI();
    noStroke();
    newFood();
}


function draw() {
    background(51);
    ui.showUI(hideGrid, hideScore);
    if (gamePaused) {
        ui.pauseMenu();
        if (ui.isSettingsVisible) {
            background(51);
            ui.settingsMenu();
        }
    } else {
        tick++;
        snake.update();
        snake.show();
        snake.die();
        food.update(createVector(snake.x, snake.y));
        food.show();

    }
}

function keyPressed() {
    if (!gamePaused) {
        if (tick > lastTick) {
            lastTick = tick;
            switch (keyCode) {
                case LEFT_ARROW:
                case 65:
                    dir = createVector(-1, 0);
                    break;

                case UP_ARROW:
                case 87:
                    dir = createVector(0, -1);
                    break;

                case RIGHT_ARROW:
                case 68:
                    dir = createVector(1, 0);
                    break;

                case DOWN_ARROW:
                case 83:
                    dir = createVector(0, 1);
                    break;

                case 81:
                    // dir = createVector(0, 0);
                    snake.length++;
                    break;

                case 16:
                    // dir = createVector(0, 0);
                    frameRate(gameSpeed + 20);
                    break;

                case 71:
                    // dir = createVector(0, 0);
                    if (hideGrid) {
                        hideGrid = false;
                    } else {
                        hideGrid = true;
                    }
                    break;

                default:
                    dir = createVector(0, 0);
                    break;
            }
            snake.changeDir(dir);
        }
    } else if (gamePaused) {
        if (ui.isSettingsVisible) {
            switch (keyCode) {
                case 27:
                    ui.isSettingsVisible = false;
                    break;

            }
        }
    }
    switch (keyCode) {
        case 27:
            if (!gamePaused) {
                gamePaused = true;
            } else if (gamePaused) {
                gamePaused = false;
                ui.isSettingsVisible = false;
            }
            break;

        case 71:
            hideGrid = false;
            break;
    }
}

function keyReleased() {
    switch (keyCode) {
        case 16:
            frameRate(gameSpeed);
            break;
    }
}