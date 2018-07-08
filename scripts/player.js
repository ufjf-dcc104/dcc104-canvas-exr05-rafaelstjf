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
    this.fireRate = 0.5;
    this.time = 2;
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
Player.prototype.boundaries = function (w, h) {
    if (this.x + this.w >= w)
        this.x = w - this.w;
    if (this.x <= 0)
        this.x = 0;
    if (this.y + this.h >= h)
        this.y = h - this.h;
    if (this.y <= 0)
        this.y = 0;
    for (var i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].checkBoundaries(w, h)) {
            this.bullets.splice(i, 1);
        }
    }
}
Player.prototype.shoot = function (dt) {
    if (this.time >= this.fireRate) {
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