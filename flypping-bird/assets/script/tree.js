cc.Class({
    extends: cc.Component,

    properties: {
        treePart: {
            default: null,
            type: cc.Prefab
        },
        speed: 0,
        maxNum: 0,
        minNum: 0
    },

    // use this for initialization
    onLoad: function () {
        var nowNum = this.createNum(this.maxNum, this.minNum)
        this.createTree(nowNum)
        this.node.runAction(this.move())
    },
    createNum: function (max, min) {
        return min + cc.random0To1() * max
    },
    move: function (){
        var move = cc.moveBy(1, cc.p(- this.speed * 1, 0))
        return cc.repeatForever(move)
    },
    createPartTree: function(num, pos) {
        var tree = cc.instantiate(this.treePart)
        tree.getComponent('treePart').pos = pos
        cc.log(this.game.bird)
        tree.getComponent('treePart').game = this.game
        this.node.addChild(tree)
        if(pos === 'top'){
            tree.height = 78 + num
            tree.setPosition(cc.p(0,358 - num))
        } else{
            tree.height = 600 - num
            tree.setPosition(cc.p(0,-321))
        }
    },
    createTree: function(num) {
      this.createPartTree(num, 'top')
      this.createPartTree(num, 'bottom')
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.node && this.node.x<= -500){
            this.node.destroy();
        }
        if(this.node && this.node.x - 50 <= this.game.bird.x && this.node.x + 50 >= this.game.bird.x){
            this.node.children.forEach(function(val){
                val.getComponent('treePart').ready = true
            })
        } else {
            this.node.children.forEach(function(val){
                val.getComponent('treePart').ready = false
            })
        }
    }
});
