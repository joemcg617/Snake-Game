function UI() {
    this.isSettingsVisible = false;
    this.showUI = function(hideGrid, hideScore) {
        this.showGrid(hideGrid);
        this.showScore(hideScore);
    }

    this.showGrid = function(isHidden) {
        if (!isHidden) {
            for (i = 0; i < width; i += scl) {
                line(i, 0, i, height);
                for (j = 0; j < height; j += scl) {
                    line(0, j, width, j);
                }
            }
        }
    }

    this.showScore = function(isHidden) {
        if (!isHidden) {
            push();
            fill(255, 50);
            textSize(64);
            text(snake.length, 16, 64);
            pop();
        }
    }

    this.pauseMenu = function() {
        push();
        fill(255, 200);
        textAlign(CENTER, CENTER);
        textSize(128);
        text("MENU", width / 2, height / 7);
        textSize(84);
        text("Settings", width / 2, height / 3);
        text("New Game", width / 2, height / 2);
        textSize(28);
        text("Created By: Joey McGroarty", width / 2, height / 1.025);
        pop();

        if (mouseX < 560 && mouseX > 245 && mouseY > 225 && mouseY < 300) {
            push();
            fill(255, 200);
            textSize(84);
            textAlign(CENTER, CENTER);
            text("Settings", width / 2, height / 3);
            pop();
        }

        if (mouseX > 195 && mouseX < 605 && mouseY > 360 && mouseY < 420) {
            push();
            fill(255, 200);
            textSize(84);
            textAlign(CENTER, CENTER);
            text("New Game", width / 2, height / 2);
            pop();
        }

    }

    this.settingsMenu = function() {
        push();
        textSize(128);
        textAlign(CENTER, CENTER);
        fill(255, 200);
        text("SETTINGS", width / 2, height / 7);
        textSize(48);
        textAlign(LEFT, CENTER);
        rectMode(CENTER);
        text("Wall Collision", floor(width / 7), height / 2);
        text("Back", floor(width / 1.5), height / 1.125);
        strokeWeight(4);
        stroke(255, 50);
        if (!wallCollision) {
            fill(255, 0);
        } else {
            fill(255, 200);
        }
        rect(width / 14, height / 2, 48, 48);
        pop();

        if (mouseX > 33 && mouseX < 400 && mouseY > 376 && mouseY < 424) {
            push();
            fill(255, 200);
            textSize(48);
            textAlign(LEFT, CENTER);
            text("Wall Collision", width / 7, height / 2);
            pop();
        }

        if (mouseX > 535 && mouseX < 640 && mouseY > 690 && mouseY < 720) {
            push();
            fill(255, 200);
            textSize(48);
            textAlign(LEFT, CENTER);
            text("Back", floor(width / 1.5), height / 1.125);
        }

    }
}


function mousePressed() {
    if (gamePaused) {
        if (keyIsDown(17)) {
            console.log(mouseX, mouseY);
        }

        if (mouseX < 560 && mouseX > 245 && mouseY > 225 && mouseY < 300) {
            if (!ui.isSettingsVisible) {
                ui.isSettingsVisible = true;
                ui.settingsMenu();
            }
        }
        if (ui.isSettingsVisible) {
            if (mouseX > 33 && mouseX < 400 && mouseY > 376 && mouseY < 424) {
                if (!wallCollision) {
                    wallCollision = true;
                } else {
                    wallCollision = false;
                }
            }
            if (mouseX > 535 && mouseX < 640 && mouseY > 690 && mouseY < 720) {
                if (ui.isSettingsVisible) {
                    ui.isSettingsVisible = false;
                }
            }
        }

        if (mouseX > 195 && mouseX < 605 && mouseY > 360 && mouseY < 420 && !ui.isSettingsVisible) {
            gamePaused = false;
            tick = 0;
            lastTick = 0;
            setup();
        }


    }
}