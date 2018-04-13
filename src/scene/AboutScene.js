/**
 * Created by yanglei on 2018/3/20.
 */

var AboutScene = cc.Scene.extend({

    ctor:function () {
        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.director.getWinSize();
        var bgWelcome = new cc.Sprite("res/graphics/bgWelcome.jpg");
        bgWelcome.x = winSize.width/2;
        bgWelcome.y = winSize.height/2;
        layer.addChild(bgWelcome);

        var aboutText = "    英雄击杀是一款横屏动作游戏，游戏中控制英雄\n" +
                        "角色移动来吸收可能多的物品在飞行过程中要注意躲\n" +
                        "避飞机的伤害，受到飞机撞击会使生命值减1\n";
        var helloLabel = new cc.LabelTTF(aboutText, "新宋体", 35);
        helloLabel.setColor(cc.color(255,255,255))
        helloLabel.x = winSize.width/2;
        helloLabel.y = winSize.height/2 + 80;
        layer.addChild(helloLabel);

        var backButton = new cc.MenuItemImage("#about_backButton.png", "#about_backButton.png", this._back);
        backButton.x = 150;
        backButton.y = -70;
        var menu = new cc.Menu(backButton);
        layer.addChild(menu);

        return true;
    },

    _back:function() {
        Sound.playCoffee();
        cc.director.runScene(new MenuScene());
    }

});
