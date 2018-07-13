function Menu() {
    this.flag = 0;
}

Menu.prototype.draw = function (ctx, w, h, state, p1Lifes) {
    if (state == 0) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Duelo ", 250, h / 2);
        ctx.font = "30px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Press SPACE to play", 180, 60 + h / 2);
        this.flag = 0;
    } else if (state == 2) {
        if(this.flag == 0){
            audioController.play(3, 1.0);
            this.flag++;
        }
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        if (p1Lifes > 0)
            ctx.fillText("Player 1 won the duel", w / 2 - 150, h / 2);
        else
            ctx.fillText("Player 2 won the duel", w / 2 - 150, h / 2);
        ctx.font = "30px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Press SPACE to play", 180, 60 + h / 2);
    }
}