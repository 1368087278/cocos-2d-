cc.Class({
    extends: cc.Component,

    properties: {
       ySpeed: -10,
       speed: 0,
       accel: 0
    },

    // use this for initialization
    onLoad: function () {
        this.accTop = false
        this.setInputControl();
    },
    setInputControl: function () {
        var self = this
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event){
                switch(keyCode) {
                    case cc.KEY.w:
                        self.accTop = true
                        break;
                    case cc.KEY.top:
                        self.accTop = true
                        break;
                }
            },
            onKeyReleased: function(keyCode, event) {
                switch(keyCode){
                    case cc.KEY.w:
                        self.accTop = false
                        break;
                    case cc.KEY.top:
                        self.accTop = false
                        break;
                }
            }
        }, self.node)
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.node.y <= -318 || this.node.y >= 302){
            return
        }
        if(this.accTop){
            this.node.y += this.ySpeed *2 * dt
        } else {
            this.node.y -= this.ySpeed * dt
        }
    },
});
