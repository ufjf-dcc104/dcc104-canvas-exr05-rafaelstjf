function Map(w, h){
    this.w = w;
    this.h = h;
    this.level = 1;
    this.blocks = [];
}
Map.prototype.generateMap = function(){
    this.blocks = [];
    var b;
    if(this.level==1){
        b = new Block(0,0, 32,this.h, "blue");
        this.blocks.push(b);
        b = new Block(this.w-32,0, 32,this.h, "blue");
        this.blocks.push(b);
        b = new Block(this.w/4, this.h/2, 128, 32, "red");
        this.blocks.push(b);
        b = new Block(this.w/2, this.h-32, 128, 32, "red");
        this.blocks.push(b);
        b = new Block(this.w/2, this.h-160, 32, 128, "yellow");
        this.blocks.push(b);
        b = new Block(this.w/3, this.h/7, 32, 128, "blue");
        this.blocks.push(b);
        b = new Block(this.w - this.w/5, this.h/3, 32, 256, "red");
        this.blocks.push(b);
        b = new Block(this.w/2, this.h/10, 256, 32, "yellow");
        this.blocks.push(b);
        b = new Block(this.w/9, this.h - this.h/3, 192, 32, "yellow");
        this.blocks.push(b);
        
    }
}
Map.prototype.draw = function(ctx){
    for(var i = 0; i < this.blocks.length; i++){
        this.blocks[i].draw(ctx);
    }
}