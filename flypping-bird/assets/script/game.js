cc.Class({
    extends: cc.Component,

    properties: {
        bird: {
            default: null,
            type: cc.Node
        },
        treePart: {
            default: null,
            type: cc.Prefab
        },
        score: {
            default: null,
            type: cc.Label
        },
        maxNum: 0,
        minNum: 0,
        times: 0
    },
    createNum: function (max, min) {
        return min + cc.random0To1() * max
    },
    createPartTree: function(num, pos) {
        var tree = cc.instantiate(this.treePart)
        tree.getComponent('treePart').pos = pos
        tree.getComponent('treePart').game = this
        this.node.addChild(tree)
        if(pos === 'top'){
            tree.height = 186 + num
            tree.setPosition(cc.p(479,208 - num))
        } else{
            tree.height = 387 - num
            tree.setPosition(cc.p(479,-329))
        }
    },
    createTree: function(num) {
      var top = this.createPartTree(num, 'top')
      var bottom = this.createPartTree(num, 'bottom')
    },
    stopActions: function(){
      this.node.emit('score', {
          score: 1
      })
      this.node.children.forEach(function(val) {
          val.stopAllActions()
      })  
      window.Global = {
          score: this.score.string
      }
      cc.director.loadScene('fail');
    },

    // use this for initialization
    onLoad: function () {
        this.bird.zIndex = 1000000
        // this.score.zIndex = 1000000
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.times % 150){
            this.times ++
        }else {
            var self = this
            var nowNum = this.createNum(this.maxNum, this.minNum)
            setTimeout(function() {self.createTree(nowNum)}, 0);
            this.times ++
        }
    },
});
