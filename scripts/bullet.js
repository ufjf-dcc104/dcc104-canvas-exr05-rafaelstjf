function Bullet() {
    this.x = 0;
    this.y = 0;
    this.w = 32;
    this.h = 32;
    this.owner = 0;
    this.vx = 0;
    this.vy = 0;
    this.speed = 200;
}

Bullet.prototype.draw = function (ctx) {
    if (this.owner == 1)
        ctx.fillStyle = "green";
    if (this.owner == 2)
        ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.h);
}

Bullet.prototype.move = function (dt) {
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}
Bullet.prototype.checkBoundaries = function (w, h) {
    if (this.x >= w || this.x <= 0)
        return true;
    if (this.y >= h || this.y <= 0)
        return true;
}
Bullet.prototype.checkCollision = function (target) {
    if (target.x + target.w < this.x) return false;
    if (target.x > this.x + this.w) return false;
    if (target.y + target.h < this.y) return false;
    if (target.y > this.y + this.h) return false;
    return true;
}
Bullet.prototype.spawn = function (x, y, owner, position) {
    this.x = x;
    this.y = y;
    this.owner = owner;
    switch (position) {
        case "up":
            this.vy = -this.speed;
            break;
        case "down":
            this.vy = this.speed;
            break;
        case "left":
            this.vx = -this.speed;
            break;
        case "right":
            this.vx = this.speed;
            break;
    }
}