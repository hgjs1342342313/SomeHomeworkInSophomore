function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        default:
            return 0;
    }
}
function getWelcome(){
    let str;
    switch (randomNum(1,9)){
        case 1:{
            str = String("欢迎!");
            break;
        }
        case 2:{
            str = String("Welcome!");
            break;
        }
        case 3:{
            str = String("ようこそ!");
            break;
        }
        case 4:{
            str = String("Добро пожаловать!");
            break;
        }
        case 5:{
            str = String("Bienvenidas!");
            break;
        }
        case 6:{
            str = String("어서 오세요!");
            break;
        }
        case 7:{
            str = String("Herzlich willkommen!");
            break;
        }
        case 8:{
            str = String("Bienvenue!");
            break;
        }
        case 9:{
            str = String("Benvenuti!");
            break;
        }
    }
    return str;
}
function getSentence() {
    let str;
    switch (randomNum(1,21)){
        case 1:{
            str = String("给岁月以文明，而不是给文明以岁月。 —— 三体");
            break;
        }
        case 2:{
            str = String("接天莲叶无穷碧，映日荷花别样红。 —— 晓出净慈寺送林子方");
            break;
        }
        case 3:{
            str = String("她爱海只爱海的惊涛骇浪，爱青草仅仅爱青草遍生于废墟之间。 —— 包法利夫人");
            break;
        }
        case 4:{
            str = String("爱与友情以及勇气改变不了一个人，只有受伤才能让人成长 —— 我的青春恋爱物语果然有问题");
            break;
        }
        case 5:{
            str = String("有时你飞到了头，却发现还不如中间掉下来 —— 球状闪电");
            break;
        }
        case 6:{
            str = String("我不会去统治这片大海，在这片大海上，最自由的人就是海贼王！ —— 海贼王");
            break;
        }
        case 7:{
            str = String("你还是这么冷漠啊。不过，仅此而已的话，我是不会泄气的。 —— 银魂");
            break;
        }
        case 8:{
            str = String("墙外行人，墙里佳人笑。 —— 蝶恋花·春景");
            break;
        }
        case 9:{
            str = String("憧憬是距离理解最遥远的感情 —— BLEACH");
            break;
        }
        case 10:{
            str = String("我命令你，喜欢我！ —— 加油大魔王");
            break;
        }
        case 11:{
                str = String("虽有遗憾，绝不后悔。 —— 古剑奇谭");
                break;
        }
        case 12:{
            str = String("人总是贪婪的，就像最开始，我也只是想知道你的名字。 —— 你的名字");
            break;
        }
        case 13:{
            str = String("乱花渐欲迷人眼，浅草才能没马蹄。 —— 钱塘湖春行");
            break;
        }
        case 14:{
            str = String("我从没有爱过这世界，它对我也一样 —— 拜伦诗集");
            break;
        }
        case 15:{
            str = String("正因为生来什么都没有，因此我们能拥有一切。 —— 游戏人生");
            break;
        }
        case 16:{
            str = String("井蛙不可以语于海者，拘于虚也；夏虫不可以语于冰者，笃于时也 —— 庄子·外篇·秋水");
            break;
        }
        case 17:{
            str = String("不管你说再多的慌，只有自己的内心，是无法欺骗的啊。 —— 七大罪");
            break;
        }
        case 18:{
            str = String("成年人的世界没有容易二字。 —— 天气预报员");
            break;
        }
        case 19:{
            str = String("一件事物与其自身完全一致 —— 《逻辑哲学论》");
            break;
        }
        case 20:{
            str = String("隔着屏幕轻易产生感情的你，肯定很孤独吧。 —— YOU'RE SOMEBODY ELSE");
            break;
        }
        case 21:{
            str = String("奇怪的是，当他死去，所有人才开始爱他。 —— 哲学");
            break;
        }
    }
    return str;
}
window.onload = function () {
    document.getElementById('welcome').innerText = getWelcome();
    document.getElementById('sentence').innerText = getSentence();
}