function HUD(screenWidth) {
    this.x = 0;
    this.y = 0;
    this.screenWidth = screenWidth;

}

HUD.prototype.draw = function (ctx, lifesP1, lifesP2) {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 128, 40);
    ctx.fillRect(this.screenWidth - this.screenWidth/5, 0, 128, 40)
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, 128, 40);
    ctx.strokeRect(this.screenWidth - this.screenWidth/5, 0, 128, 40)
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Player 1: " + lifesP1+ " lifes", 10, 30);
    ctx.fillText("Player 2: " + lifesP2 + " lifes", this.screenWidth - this.screenWidth/5+2, 30);
}