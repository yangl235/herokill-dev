/**
 * Created by yanglei on 2018/3/20.
 */
var GameConstants = {

    // 游戏玩家面对的状态 -------------
    GAME_STATE_IDLE: 0, //空闲状态
    GAME_STATE_FLYING: 1, //飞行状态
    GAME_STATE_OVER: 2, //结束状态

    // 英雄的状态

    HERO_STATE_IDLE: 0, //空闲状态
    HERO_STATE_FLYING: 1, // 飞行状态
    HERO_STATE_HIT: 2, //撞击状态
    HERO_STATE_FALL: 3, //死亡状态

    // Food item types -----------------------------------------

    ITEM_TYPE_1: 1,
    ITEM_TYPE_2: 2,
    ITEM_TYPE_3: 3,
    ITEM_TYPE_4: 4,
    ITEM_TYPE_5: 5,

    /** Special Item - Coffee. */
    ITEM_TYPE_COFFEE: 6,

    /** Special Item - Mushroom. */
    ITEM_TYPE_MUSHROOM: 7,

    // Obstacle types ------------------------------------------

    /** Obstacle - Aeroplane. */
    OBSTACLE_TYPE_1: 1,

    /** Obstacle - Space Ship. */
    OBSTACLE_TYPE_2: 2,

    /** Obstacle - Airship. */
    OBSTACLE_TYPE_3: 3,

    /** Obstacle - Helicopter. */
    OBSTACLE_TYPE_4: 4,

    // Particle types ------------------------------------------

    /** Particle - Sparkle. */
    PARTICLE_TYPE_1: 1,

    /** Particle - Wind Force. */
    PARTICLE_TYPE_2: 2,

    // Hero properties -----------------------------------------

    /** Hero's initial spare lives. */
    HERO_LIVES: 5,

    /** Hero's minimum speed. */
    HERO_MIN_SPEED: 650,

    /** Hero's maximum speed when had coffee. */
    HERO_MAX_SPEED: 1400,

    /** Movement speed - game/player/items/obstacles speed. */
    GRAVITY: 10,

    // Obstacle properties -------------------------------------

    /** Obstacle frequency. */
    OBSTACLE_GAP: 1200,

    /** Obstacle speed. */
    OBSTACLE_SPEED: 300,

    GAME_AREA_TOP_BOTTOM: 100,

    /** 游戏通过第1关需要达到的条件*/
    LEVEL_ONE_THRESHOLD_DISTANCE: 2000,
    LEVEL_ONE_THRESHOLD_SCORE: 800,

    /** 游戏通过第2关需要达到的条件*/
    LEVEL_TWO_THRESHOLD_DISTANCE: 4000,
    LEVEL_TWO_THRESHOLD_SCORE: 1600,

    /** 游戏通过第3关需要达到的条件*/
    LEVEL_THREE_THRESHOLD_DISTANCE: 6000,
    LEVEL_THREE_THRESHOLD_SCORE: 2400

};