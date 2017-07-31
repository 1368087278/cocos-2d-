cc.Class({
    extends: cc.Component,

    properties: {
       speed: 0
    },

    // use this for initialization
    onLoad: function () {
        this.node.runAction(this.move())
    },
    move: function (){
        var move = cc.moveBy(1, cc.p(- this.speed * 1, 0))
        return cc.repeatForever(move)
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.node && this.node.x<= -500){
            this.node.destroy();
        }
        if(this.node && this.node.x - 50 <= this.game.bird.x && this.node.x + 80 >= this.game.bird.x){
            if(this.node && this.node.y <= this.game.bird.y && this.node.y + this.node.height >= this.game.bird.y){
                this.game.stopActions()
            console.log(this.node.x)
            } else if(this.node.x <= -25 && !this.flag){
                var string  = +this.game.score.string + 0.5
                this.game.score.string = string
                this.flag = true
            }
        }
    }
});
