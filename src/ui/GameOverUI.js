/**
 * Created by yanglei on 2018/3/21.
 */

var GameOverUI = cc.Layer.extend({

    _distanceText:null,
    _scoreText:null,
    _gameScene:null,

    ctor:function(gameScene){
        this._super();
        this._gameScene = gameScene;

        var winSize = cc.director.getWinSize();
        var bg = new cc.LayerColor(cc.color(0,0,0,200), winSize.width, winSize.height);
        this.addChild(bg);

        if (parseInt(Game.user.distance) > 1500 && parseInt(Game.user.score) > 500) {
            var result = new cc.LabelTTF("本关通过！，你可以进入下一关", "新宋体", 38);
            this.addChild(result)
            result.setColor(cc.color(243,231,95));
            result.x = winSize.width / 2;
            result.y = winSize.height - 120;
        }
        else {
            var title = new cc.LabelTTF("游戏结束！", "新宋体", 48);
            this.addChild(title);
            title.setColor(cc.color(255, 0, 0, 255));
            title.x = winSize.width / 2;
            title.y = winSize.height - 120;
        }

        this._distanceText = new cc.LabelTTF("飞行距离：", "新宋体",38);
        this.addChild(this._distanceText);
        this._distanceText.setColor(cc.color(243,231,95))
        this._distanceText.x = winSize.width/2;
        this._distanceText.y = winSize.height - 220;

        this._scoreText = new cc.LabelTTF("本次得分：","新宋体",38);
        this.addChild(this._scoreText);
        this._scoreText.setColor(cc.color(243,231,95))
        this._scoreText.x = winSize.width/2;
        this._scoreText.y = winSize.height - 270;


        var replayBtn = new cc.MenuItemImage("#gameOver_playAgainButton.png", "#gameOver_playAgainButton.png", this._replay.bind(this));
        var aboutBtn = new cc.MenuItemImage("#gameOver_aboutButton.png", "#gameOver_aboutButton.png", this._about);
        var mainBtn = new cc.MenuItemImage("#gameOver_mainButton.png", "#gameOver_mainButton.png", this._return);
        var menu = new cc.Menu(replayBtn, mainBtn, aboutBtn);
        menu.alignItemsVertically();
        this.addChild(menu);
        menu.y = winSize.height/2 - 100;
    },

    init:function(){
        this._distanceText.setString("飞行距离：" + parseInt(Game.user.distance));
        this._scoreText.setString("本次得分：" + parseInt(Game.user.score));
    },

    _replay:function(){
        this._gameScene.init();
    },

    _about:function(){
        cc.director.runScene(new AboutScene());
    },

    _return:function(){
        cc.director.runScene(new MenuScene());
    }

});