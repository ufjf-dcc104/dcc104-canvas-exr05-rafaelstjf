function Player(id, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 0;
    this.vy = 0;
    this.id = id;
    this.position = "right";
    this.bullets = [];
    this.fireRate = 1;
    this.time = 2;
    this.lifes = 3;
}
Player.prototype.draw = function (ctx) {
    if (this.id == 1)
        ctx.fillStyle = "blue";
    if (this.id == 2)
        ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
}
Player.prototype.drawBullets = function (ctx) {
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].draw(ctx);
    }
}
Player.prototype.move = function (dt) {
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
    this.time = this.time + dt;

}
Player.prototype.checkCollision = function (target) {
    if (target.x + target.w < this.x) return false;
    if (target.x > this.x + this.w) return false;
    if (target.y + target.h < this.y) return false;
    if (target.y > this.y + this.h) return false;
    return true;
}
Player.prototype.checkCollisionPlayerMap = function (target) {
    for (var i = 0; i < target.blocks.length; i++) {
        if (this.x <= target.blocks[i].x + target.blocks[i].w) {
            if (this.y >= target.blocks[i].y + target.blocks[i].h) {
                this.x = target.blocks[i].x + target.blocks[i].w;

            }
        }
    }
}

Player.prototype.checkCollisionBulletsPlayer = function (target) {
    for (var i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].checkCollision(target)) {
            if (target instanceof Player && target.id != this.id) {
                audioController.play(4,0.5);
                this.bullets.splice(i, 1);
                target.lifes--;
            }
        }
    }
}
Player.prototype.checkCollisionBulletsMap = function (target) {
    if (target instanceof Map) {
        for (var i = 0; i < this.bullets.length; i++) {
            for (var j = 0; j < target.blocks.length; j++) {
                if (this.bullets[i].checkCollision(target.blocks[j])) {
                    this.bullets.splice(i, 1);
                    break;
                }
            }
        }
    }
}

Player.prototype.checkCollisionBulletsBullets = function (target) {
    for (var i = 0; i < this.bullets.length; i++) {
        for (var j = 0; j < target.length; j++) {
            if (this.bullets[i].checkCollision(target[j])) {
                this.bullets.splice(i, 1);
                target.splice(j, 1);
            }

        }
    }
}
Player.prototype.boundaries = function (w, h) {
    if (this.x + this.w >= w)
        this.x = w - this.w;
    if (this.x <= 0)
        this.x = 0;
    if (this.y + this.h >= h)
        this.y = h - this.h;
    if (this.y <= 40)
        this.y = 40;
    for (var i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].checkBoundaries(w, h)) {
            this.bullets.splice(i, 1);
        }
    }
}
Player.prototype.shoot = function (dt) {
    if (this.time >= this.fireRate) {
        audioController.play(this.id, 0.5);
        b = new Bullet();
        b.spawn(this.x, this.y, this.id, this.position);
        this.bullets.push(b);
        this.time = 0;
    }
}
Player.prototype.moveBullets = function (dt) {
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].move(dt);
    }
}