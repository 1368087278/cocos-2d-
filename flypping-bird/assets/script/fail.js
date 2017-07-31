cc.Class({
    extends: cc.Component,

    properties: {
        score: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function () {
      this.score.string = window.Global.score
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
