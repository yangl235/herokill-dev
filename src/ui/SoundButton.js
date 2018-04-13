/**
 * Created by yanglei on 2018/3/20.
 */

var SoundButton = cc.MenuItemToggle.extend({

    ctor:function(){
        var sprite = new cc.Sprite("#soundOn0000.png");
        var animation = new cc.Animation();
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));
        animation.setDelayPerUnit(1/3);
        var action = cc.animate(animation).repeatForever();
        sprite.runAction(action);

        this._super(new cc.MenuItemSprite(sprite, null, null), new cc.MenuItemImage("#soundOff.png"));
        this.setCallback(this._soundOnOff, this);
    },

    _soundOnOff:function() {
        Sound.toggleOnOff();
    }
});