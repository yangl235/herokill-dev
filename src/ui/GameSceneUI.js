/**
 * Created by yanglei on 2018/3/21.
 */

var GameSceneUI = cc.Layer.extend({

    _lifeText:null,
    _distanceText:null,
    _scoreText:null,

    ctor:function () {
        this._super();

        var winSize = cc.director.getWinSize();
        var lifeLabel = new cc.LabelTTF("生命值","新宋体",38);
        this.addChild(lifeLabel);
        lifeLabel.setColor(cc.color(243,231,95))
        lifeLabel.x = 360;
        lifeLabel.y = winSize.height - 25;

        this._lifeText = new cc.LabelTTF("0","新宋体",38);
        this.addChild(this._lifeText);
        this._lifeText.setColor(cc.color(243,231,95))
        this._lifeText.x = 360;
        this._lifeText.y = winSize.height - 60;

        var distanceLabel = new cc.LabelTTF("飞行距离","新宋体",38);
        this.addChild(distanceLabel);
        distanceLabel.setColor(cc.color(243,231,95))
        distanceLabel.x = 680;
        distanceLabel.y = winSize.height - 25;

        this._distanceText = new cc.LabelTTF("0","新宋体",38);
        this.addChild(this._distanceText);
        this._distanceText.setColor(cc.color(243,231,95))
        this._distanceText.x = 680;
        this._distanceText.y = winSize.height - 60;

        var scoreLabel = new cc.LabelTTF("得分", "新宋体",38);
        this.addChild(scoreLabel);
        scoreLabel.setColor(cc.color(243,231,95))
        scoreLabel.x = 915;
        scoreLabel.y = winSize.height - 25;

        this._scoreText = new cc.LabelTTF("0", "新宋体",38);
        this.addChild(this._scoreText);
        this._scoreText.setColor(cc.color(243,231,95))
        this._scoreText.x = 915;
        this._scoreText.y = winSize.height - 60;

        var pauseButton = new cc.MenuItemImage("#pauseButton.png", "#pauseButton.png", this._pauseResume);
        var soundButton = new SoundButton();
        var menu = new cc.Menu(soundButton, pauseButton);
        menu.alignItemsHorizontallyWithPadding(30);
        menu.x = 80;
        menu.y = winSize.height - 45;
        this.addChild(menu);

        return true;
    },

    _pauseResume:function() {
        if(cc.director.isPaused())
            cc.director.resume();
        else
            cc.director.pause();
    },

    update:function() {
        this._lifeText.setString(Game.user.lives.toString());
        this._distanceText.setString(parseInt(Game.user.distance).toString());
        this._scoreText.setString(Game.user.score.toString());
    }

});