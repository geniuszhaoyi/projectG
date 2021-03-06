var Global = require('Global').storage;
var Game = require('Game/Game.js');
var Player = require('Player/Player.js');
var Battle = require('Battle/Battle.js');
// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
//doc for color
// player name using color #3933FF
// enemy name using color #F57C22
// skill name using color #17AC54
// win color #EAF23B
// damage color #FF1D2B
// magic color #7caeff

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        context:{
            default:null,
            type:cc.Prefab,
        },
        button:{
            default:null,
            type:cc.Prefab,
        },
        count:51,
        num:0,
        battle:null,
        playerHp:null,
        enemyHp:null,
        playerMp:null,
        enemyMp:null,
        skillfresh:true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.battle = Global.Memory.battles.currentBattle;
        this.playerHp=cc.find("Canvas/Allhp");
        this.enemyHp=cc.find("Canvas/enhp");
        this.playerMp=cc.find("Canvas/playerMp");
        this.enemyMp=cc.find("Canvas/enMp");
        console.log(this.battle);
        this.count = 100;
        //  while(this.battle.hasNext()) {
        //      var event = this.battle.next();
        //      console.log(event);
        //  }
    },

    start () {

    },
    reFormString(event){
        console.log(event);
        var result="";
        switch(event.event){
            case "wins":
                if(event.winner=="player"){
                    result+="你取得了"+"<color=#EAF23B>"+"胜利"+"</color>"+"!";
                    var dlist=Global.Memory.battles.dropItems.win;
                    for(var item in dlist){
                        result+="\n"+"得到了<color=#2255a5>"+Global.Game.items[dlist[item].itemid].name+"</color> <color=#367015>x"+dlist[item].quantity+"</color>";
                    }
                }
                else
                    result+="<color=#FF1D2B>你失败了</color>";
                console.log("hi");
                break;
            case "new round":
                result+="回合 "+"<color=#EAF23B>"+event.round+"</color>"+" 开始:";
                break;
            case "skill":
                console.log(Global.Game.skills);
                result+="<color="+(event.from=="player"?"#3933FF>玩家":"#F57C22>敌人")+"</color>"+"释放"+"<color=#17AC54>"+Global.Game.skills[event.skill].name+"</color>";
                
                if(event.res.message!=undefined){
                    result+="，"+event.res.message+"，使"+"<color="+(event.from=="enemy"?"#3933FF>玩家":"#F57C22>敌人")+"</color>"+"受到了<color=#FF1D2B>";
                    if(event.res.attack!=0)
                        result+=parseInt(event.res.attack,10)+"</color>点物理伤害";
                    else
                        result+=parseInt(event.res.magic,10)+"</color>点魔法伤害";
                }else
                
                if(event.res.status=="hit"){
                    result+="，"+"精准的命中了"+"<color="+(event.from=="enemy"?"#3933FF>玩家":"#F57C22>敌人")+"</color>"+"，使其受到了<color=#FF1D2B>";
                    if(event.res.attack!=0)
                        result+=parseInt(event.res.attack,10)+"</color>点物理伤害";
                    else
                        result+=parseInt(event.res.magic,10)+"</color>点魔法伤害";
                }else if(event.res.status=="critical"){
                    result+="，"+"命中了要害，对"+"<color="+(event.from=="enemy"?"#3933FF>玩家":"#F57C22>敌人")+"</color>";
                    if(event.res.attack!=0)
                        result+="造成了<color=#FF1D2B>"+parseInt(event.res.attack,10)+"</color>点物理伤害";
                    else
                        result+="造成了<color=#FF1D2B>"+parseInt(event.res.magic,10)+"</color>点魔法伤害";
                }
                else{
                    result+="，"+"<color="+(event.from=="enemy"?"#3933FF>玩家":"#F57C22>敌人")+"</color>"+"很灵巧的躲了过去";
                }
                break;
            case "buff":
                result+=Global.Game.buffs[event.buff].name+"使"+"<color="+(event.target=="player"?"#3933FF>玩家":"#F57C22>敌人")+"</color>"+"受到了";
                if(event.res.attack!=0){
                    result+=parseInt(event.res.attack,10)+"</color>点物理伤害";
                }else{
                    result+=parseInt(event.res.magic,10)+"</color>点魔法伤害";
                }
                result+="，剩余<color=#88d8ba>"+event.ttl+"</color>回合";
                break;
        }
        if(event.event=="new round"&&event.round==0){
            this.playerHp.getComponent('HpUI').initHp(event.currentStatus.player.derivedAttributes[0],event.currentStatus.player.hp);
            this.enemyHp.getComponent('HpUI').initHp(event.currentStatus.enemy.derivedAttributes[0],event.currentStatus.enemy.hp);
            this.playerMp.getComponent('HpUI').initHp(event.currentStatus.player.derivedAttributes[1],event.currentStatus.player.mp);
            this.enemyMp.getComponent('HpUI').initHp(event.currentStatus.enemy.derivedAttributes[1],event.currentStatus.enemy.mp);
        }
        else{
            this.playerHp.getComponent('HpUI').setCurHp(event.currentStatus.player.hp);
            this.enemyHp.getComponent('HpUI').setCurHp(event.currentStatus.enemy.hp);
            this.playerMp.getComponent('HpUI').setCurHp(event.currentStatus.player.mp);
            this.enemyMp.getComponent('HpUI').setCurHp(event.currentStatus.enemy.mp);
        }
        return result;
    },

    loadSkill(curstats){
        var pSlist=curstats.player.skills;
        console.log(pSlist);
        var eSlist=curstats.enemy.skills;
        for(var i in pSlist){
            var skill=new cc.Node();
            
            skill.addComponent(cc.Sprite);
            cc.loader.loadRes("Texture/Item/" + pSlist[i].skill.id + "", function(err, data) {
                this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(skill.getComponent(cc.Sprite)));
            skill.getComponent(cc.Sprite).sizeMode=cc.Sprite.SizeMode.CUSTOM;
            cc.find("Canvas/playerSkillLayout").addChild(skill);
            skill.height=75;
            skill.width=75;
        }
        for(var i in eSlist){
            var skill=new cc.Node();
            
            skill.addComponent(cc.Sprite);
            cc.loader.loadRes("Texture/Item/" + eSlist[i].skill.id + "", function(err, data) {
                this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(skill.getComponent(cc.Sprite)));
            skill.getComponent(cc.Sprite).sizeMode=cc.Sprite.SizeMode.CUSTOM;
            cc.find("Canvas/enemySkillLayout").addChild(skill);
            skill.height=75;
            skill.width=75;
        }
       
        
    },
    loadBuff(curstats){
        var pBlist=curstats.player.buffs;
        console.log(pBlist);
        var eBlist=curstats.enemy.buffs;
        var pblayout=cc.find("Canvas/playerBuffLayout");
        var eblayout=cc.find("Canvas/enemyBuffLayout");
        pblayout.removeAllChildren();
        eblayout.removeAllChildren();
        for(var i in pBlist){
            var buff=new cc.Node();
            
            buff.addComponent(cc.Sprite);
            cc.loader.loadRes("Texture/Item/" + pBlist[i].buff.id + "", function(err, data) {
                this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(buff.getComponent(cc.Sprite)));
            buff.getComponent(cc.Sprite).sizeMode=cc.Sprite.SizeMode.CUSTOM;
            var ttl=new cc.Node();
            ttl.addComponent(cc.Label);
            ttl.getComponent(cc.Label).string=pBlist[i].ttl;
            ttl.color=new cc.Color(0,0,0);
            buff.addChild(ttl);
            ttl.x=20;
            ttl.y=-20
            pblayout.addChild(buff);
            buff.height=75;
            buff.width=75;
        }
        for(var i in eBlist){
            var buff=new cc.Node();
            
            buff.addComponent(cc.Sprite);
            cc.loader.loadRes("Texture/Item/" + eBlist[i].buff.id + "", function(err, data) {
                this.spriteFrame = new cc.SpriteFrame(data);
                }.bind(buff.getComponent(cc.Sprite)));
            buff.getComponent(cc.Sprite).sizeMode=cc.Sprite.SizeMode.CUSTOM;
            var ttl=new cc.Node();
            ttl.addComponent(cc.Label);
            ttl.getComponent(cc.Label).string=eBlist[i].ttl;
            ttl.color=new cc.Color(0,0,0);
            buff.addChild(ttl);
            ttl.x=20;
            ttl.y=-20
            eblayout.addChild(buff);
            buff.height=75;
            buff.width=75;
        }
    },

    update (dt) {
        this.count++;
        //console.log(dt);
        if(this.count>50&&this.battle.hasNext()){

            this.count=0;
            var battleinfo=this.battle.next();

            if(this.skillfresh){
                this.skillfresh=false;
                this.loadSkill(battleinfo.currentStatus);

            }
            this.loadBuff(battleinfo.currentStatus);
            var cont=cc.find("Canvas/scrollview/view/content");
            if(battleinfo.event=="new round"&&battleinfo.round!=0){
                var block=new cc.Node();
                block.height=12.5;
                block.width=20;
                cont.addChild(block);
            }
            var newText=cc.instantiate(this.context);

            cont.addChild(newText);

            newText.getComponent(cc.RichText).string=this.reFormString(battleinfo);
            if(battleinfo.event=="wins"){
                //console.log("sssssssssssss!!!!");
                var returnbutton=cc.instantiate(this.button);
                cont.addChild(returnbutton);
            }
            var scroll=cc.find("Canvas/scrollview");
            scroll.getComponent(cc.ScrollView).scrollToBottom(0.001);
        }
    },
});
