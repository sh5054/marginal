var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/user/likecate', function(req, res){ 
	res.header("Access-Control-Allow-Origin", "*"); 
	var data = {
	  "ok": true,
	  "likeCate": {
	    "male": [
	      "都市",
	      "历史",
	      "科幻",
	      "仙侠",
	      "奇幻"
	    ],
	    "female": [
	      
	    ],
	    "press": [
	      
	    ],
	    "picture": [
	      
	    ]
	  },
	  "code": "success"
	}
     res.send(JSON.stringify(data)); 
}); 

app.get('/user/personal-recommendation', function(req, res){ 
	res.header("Access-Control-Allow-Origin", "*"); 
	var data = {
  "ok": true,
  "booklist": [
    {
      "_id": "58f1ff09a1a9c5154d692119",
      "hasCp": true,
      "title": "主神的黑店",
      "minorCate": "西方奇幻",
      "majorCate": "奇幻",
      "author": "流年往事",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1506906%2F_1506906_290408.jpg%2F",
      "shortIntro": "楚河开了家一个特殊的店铺，专门将特殊的物品贩卖给各种各样的人。",
      "lastChapter": "第446章 人生何处不青山 下",
      "retentionRatio": 56.94,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 50235,
      "wordCount": 1287141,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "581097bc14daf6a52fe4b4f9",
      "hasCp": true,
      "title": "无敌战斗力系统",
      "minorCate": "未来世界",
      "majorCate": "科幻",
      "author": "不敢打游戏",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1252347%2F_1252347_301351.jpg%2F",
      "shortIntro": "简介：因见义勇为，被捅死的学生宁天林，在地府偶获战斗力系统，重新还阳。什么，你的战斗力只有五十，那你还跟我装！我一万点战斗力都不好意跟你说！什么，你修习古武内功二十年，是大世家传人？战斗力五百？那跟我有毛关系，我不会告诉你，我身上穿着的衣服，可是战斗力装备！单单一个内裤，都能给我增加一千战斗力！什么，美女，你要我带你离开地球去宇宙看看？可以是可以，但无名无份的，我为什么要带你去啊，那么多人还排队等着呢，我看你貌美荣华，不如从了我吧......",
      "lastChapter": "第773章 如看逗猴！",
      "retentionRatio": 55.06,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 8226,
      "wordCount": 1661699,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "590ebcd29f4a07193883333d",
      "hasCp": true,
      "title": "诸天最强BOSS",
      "cat": "无限",
      "minorCate": "时空穿梭",
      "majorCate": "科幻",
      "author": "渡红尘",
      "site": "zhuishuvip",
      "cover": "/agent/http://qidian.qpic.cn/qdbimg/349573/1009352060/180",
      "shortIntro": "莫尘本以为，只是穿越到单纯的星际时代。可当游戏系统苏醒，他发现一切都变了！ 什么，系统你让我开着游戏外挂穿越诸天万界，这是要从一开始就无敌啊！ 等等，你这节日活...",
      "lastChapter": "第306章 银河系形势，人族大局",
      "retentionRatio": 66.58,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 31060,
      "wordCount": 792866,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "58b492da2b873edc7ddb3149",
      "hasCp": true,
      "title": "唐朝好舅子",
      "cat": "历史",
      "minorCate": "穿越历史",
      "majorCate": "历史",
      "author": "晨风天堂",
      "site": "qidian",
      "cover": "/cover/150424646325755",
      "shortIntro": "大唐如诗篇、长安美如画。 苦力级写手穿越大唐，吟不得诗，提不动槊，上不得马，种不了田。 发现野生单身翼国公一只，嫁了姐姐扒上豪门。 家中还有姐妹四人，寻觅长安可...",
      "lastChapter": "第546章 暴怒",
      "retentionRatio": 54.71,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 1812,
      "wordCount": 1108800,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "584e93af12e24e9d55c149f1",
      "hasCp": true,
      "title": "未来天王",
      "minorCate": "未来世界",
      "majorCate": "科幻",
      "author": "陈词懒调",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1382625%2F_1382625_075187.jpg%2F",
      "shortIntro": "知名作曲人方召在事业正辉煌的时候，末世来了；好不容易经历万险快将末世熬到头的时候，人倒了；一睁眼，重生在末世结束五百年后的新世界，一个刚毕业被甩、刚工作被宰的学生身上……未来世界，虚拟偶像PK现实偶像。————————————————已创作三本小说，《星级猎人》、《回到过去变成猫》、《原始战记》。",
      "lastChapter": "第252章 耳朵又升值",
      "retentionRatio": 43.52,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 16495,
      "wordCount": 850489,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "57dfd8870449b8493c421c66",
      "hasCp": true,
      "title": "重生之最强人生",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "俊秀才",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1188349%2F_1188349_994349.jpg%2F",
      "shortIntro": "一次跑步锻炼，殷俊从迷雾中穿出来时，已经回到了78年的香江。这一年，还没有霸占荧幕的综艺节目，没有熟悉的特效大片，也没有耳熟能详的歌曲。这一年，香江电视剧还没有好戏频出，香江电影也没有火遍全亚洲，香江歌曲也没有风靡内地。这一年，经典还没有成为情怀，繁华也没有凋零。这一年，英雄尚未迟暮，红颜不曾白头。青春不再，情怀常留。谨以此文，追忆这个我们曾经深深喜欢过的年代。谨以此文，纪念我们曾经的那些青葱岁月。————————————已有完本万订精品小说《美梦时代》，820多万字，精彩纷呈。喜欢的可以去看看，下面有直通车。",
      "lastChapter": "第832章 三强初争霸",
      "retentionRatio": 63.77,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 4011,
      "wordCount": 3052707,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "50864bf69dacd30e3a000014",
      "hasCp": true,
      "title": "遮天",
      "minorCate": "幻想修仙",
      "majorCate": "仙侠",
      "author": "辰东",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42216%2F_42216_203892.jpg%2F",
      "shortIntro": "冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。\n这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。\n九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？\n一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……\n登天路，踏歌行，弹指遮天。",
      "lastChapter": "第一千八百二十二章 遮天大结局",
      "retentionRatio": 60.24,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 28494,
      "wordCount": 6352116,
      "isSerial": false,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "5670e2415a48a1c275007e39",
      "hasCp": true,
      "title": "传奇再现",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "伪戒",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1103712%2F_1103712_420680.jpg%2F",
      "shortIntro": "青涩的少年负气离开家乡。四年过后，他满脸沧桑载着荣耀归来！钢筋水泥浇筑的城市里，故人不在，传奇退隐……面对家人的指责，朋友的轻视，他也曾徘徊在十字街头，与兄弟指着漆黑的天空喊道：“今天有多少人轻视我，明天就会有多少人赞美我！”这是一部用铁拳和铮铮傲骨，奋战在璀璨年华的故事！兄弟何意？我与你并肩，那你就是我的兄弟！",
      "lastChapter": "2127  谁去？",
      "retentionRatio": 68.1,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 23825,
      "wordCount": 4889517,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "53d6d771f754fa4574c44660",
      "hasCp": true,
      "title": "异常生物见闻录",
      "minorCate": "时空穿梭",
      "majorCate": "科幻",
      "author": "远瞳",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42167%2F_42167_949054.jpg%2F",
      "shortIntro": "郝仁，人如其名，是个好人，理想是平平安安过一辈子，当个穷不死但也发不了财的小房东——起码在他家里住进去一堆神经病生物之前是这样。\n一栋偏僻陈旧的大屋，一堆不怎么正常的人外生物，还有一份来自“神明”的劳动合同，三要素加起来让郝仁成为这个世界上最忙碌的房东和最高能的保姆，最混乱、最奇怪、最不正常的房客房东的故事就此开始。\n“自打在劳动合同上摁手印那天起，我就知道自己是上贼船了……”",
      "lastChapter": "第1592章 试探与接触",
      "retentionRatio": 64.84,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 38805,
      "wordCount": 4787141,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "58b5a0823c94431c52b5248b",
      "hasCp": true,
      "title": "时代巨擘",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "百刹",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1463708%2F_1463708_041348.jpg%2F",
      "shortIntro": "你的人生最大的遗憾是什么？没有当过首富？没有女神青睐？没有成为明星？没有坐过豪车？没有冒过险？人生平淡无奇，没有刺激？穿越1973年，和世界首富比尔·盖茨成为哈佛大学同学！“盖茨，跟哥一起辍学吧，咱们把微软公司建立起来，哥以后带你去纳斯达克敲钟！！！”穿越1973年，和乔布斯成为雅达利公司同事！“乔布斯，跟哥一起辞职吧，咱们把苹果公司建立起来，哥以后也带你去纳斯达克敲钟！！！”PS：已有两百万字完结小说《硅谷大帝》，感兴趣的朋友可以去看看，支持一下。",
      "lastChapter": "第368章 火爆到跟风无数！",
      "retentionRatio": 66.76,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 5215,
      "wordCount": 964158,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "5774b427f0a76e134857ab2c",
      "hasCp": true,
      "title": "美女总裁的极品高手",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "易继风",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1234117%2F_1234117_540094.jpg%2F",
      "shortIntro": "他表面上娶了一个如天仙般的老婆，是所有男人羡慕嫉妒恨的对象，暗地里却是让各方大佬闻风丧胆的过江龙，一纸婚约，让他重回都市，一个个人间尤物相继出现在他的身边，诱惑不断！看着面前莺莺燕燕的美女，叶寻欢头疼的说道：允许你诱惑我，但别睡我，喂喂喂，别趴我身上……繁华的都市，如虎如迷的男人，且看他如何铸造自己的传奇！",
      "lastChapter": "第1675章 北村千雪和邪君",
      "retentionRatio": 66.12,
      "banned": 0,
      "minRetentionRatio": 56.39,
      "latelyFollowerBase": 0,
      "latelyFollower": 8109,
      "wordCount": 3715333,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "574e781dee86b85d78282c09",
      "hasCp": true,
      "title": "暴风法神",
      "minorCate": "西方奇幻",
      "majorCate": "奇幻",
      "author": "余云飞",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1169361%2F_1169361_468918.jpg%2F",
      "shortIntro": "这是一个穿越到艾泽拉斯世界的小青年，为了爱与正义（不要变成食尸鬼），不畏牺牲（可以跑尸体复活），为了寻觅失落的正义与人性（节操），不停掉节操捡回节操的故事。本人计有275万字《暗影神座》、《深渊杀神》、《霸王之枪》、《飞云星志》等近十套完本作品，码字13年的老笔头，信心保证。",
      "lastChapter": "第1399章 绕不开的沼泽",
      "retentionRatio": 63.62,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 7297,
      "wordCount": 2919908,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "581716414c0393693617703e",
      "hasCp": true,
      "title": "梦醒细无声",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "第十个名字",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1391971%2F_1391971_504560.jpg%2F",
      "shortIntro": "由终点回到原点，洪涛又回到了他第一次重生前的时代，不过失去了三次重生穿越的所有记忆。假如没有重生过，没有记忆的金手指，他会是一个什么样子呢？在波澜壮阔的改革开放高潮期，他是屹立在潮头的弄潮儿？还是被浪潮拍碎的浪花？他的记忆还能不能回来？江竹意还会不会伴着他这一生？金月在这一世里和他又有什么交集？小舅舅还会是那个妻管炎吗？还会有哪些人会被他搅进来？这一切会不会全都是一场梦……一切答案连洪涛都回答不了，他只是在沿着一条已经略有偏离的轨道懵懵懂懂的向前走，每次接触到一个熟悉的场景都会让他似曾相识。《重生潜入梦》《南宋不咳嗽》完本作品，和本书人物也有相关，可以一起看。书友群137118014",
      "lastChapter": "第869章 跑的真快！",
      "retentionRatio": 64.99,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 1907,
      "wordCount": 2285896,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "50d151d9f13567f254000007",
      "hasCp": true,
      "title": "善良的死神",
      "minorCate": "魔法校园",
      "majorCate": "奇幻",
      "author": "唐家三少",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41901%2F_41901_422703.jpg%2F",
      "shortIntro": "血日当空，必出妖孽\n血雨撒世，劫难将成\n千年劫难即将降临大陆，谁是拯救大陆的救世主\n善良与邪恶的结合，光明与黑暗的统一\n以凤凰之血为引，穿越了重重阻隔\n以神龙之血为结，爱之永生",
      "lastChapter": "正文 第二百零八章 善良的死神（尾声）",
      "retentionRatio": 40.3,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 3253,
      "wordCount": 1728972,
      "isSerial": false,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "596b7c933c75d13b3c3561da",
      "hasCp": true,
      "title": "电影世界之旅",
      "cat": "无限",
      "minorCate": "时空穿梭",
      "majorCate": "科幻",
      "author": "一点几米",
      "site": "zhuishuvip",
      "cover": "/agent/http://qidian.qpic.cn/qdbimg/349573/1009944543/180",
      "shortIntro": "穿梭电影，改写不完美，夏杰为了他的小目标，在一个个遗憾世界里重新定义结局",
      "lastChapter": "第二十五章 矛与盾",
      "retentionRatio": 49.44,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 5344,
      "wordCount": 403751,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "592276b609423d4354618ade",
      "hasCp": true,
      "title": "最佳影星",
      "minorCate": "都市生活",
      "majorCate": "都市",
      "author": "白色十三号",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F2044733%2F2044733_24368406a917455bb31fca1f1451bd05.jpg%2F",
      "shortIntro": "我要躺在钞票堆里打滚！我要跟一群美女开趴！我要做好莱坞巨星！\r\n群：323320648。",
      "lastChapter": "第二百六十四章 风险太大（求订阅）",
      "retentionRatio": 66.82,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 10693,
      "wordCount": 868509,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "52e13475c09f68641700068d",
      "hasCp": true,
      "title": "大宋的智慧",
      "minorCate": "穿越历史",
      "majorCate": "历史",
      "author": "孑与2",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F41562%2F_41562_027272.jpg%2F",
      "shortIntro": "云峥打开了一扇门，就再也没有回头路，生活，就是这个样子，开了弓就没有回头箭，想回头已是百年身。\n这是一本讲述为师之道的小说，说的是生存智慧，讲的是人间温情，道的是兄弟情义，表的是温恭谦良，这里有最美的爱情，有最深刻的兄弟情义……\n或许，我很想把《清明上河图》徐徐的展开，给你一个不一样的大宋，不一样的人间百态……",
      "lastChapter": "第六十一章不败传说——宋人也会杀人",
      "retentionRatio": 56.18,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 3399,
      "wordCount": 3379080,
      "isSerial": false,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "58809e839a05e10e3625f046",
      "hasCp": true,
      "title": "民国之文豪崛起",
      "minorCate": "穿越历史",
      "majorCate": "历史",
      "author": "王梓钧",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1445863%2F_1445863_535591.jpg%2F",
      "shortIntro": "周赫煊回到民国时代，不会带兵打仗，不懂科学技术，不喜从政从商，那他还能干什么？唉，抄书抄诗混日子吧。谁知抄着抄着就成大文豪了，动荡的时局推着周赫煊不断向前。有人崇拜他，有人仇视他，还有人想杀他，欲除之而后快。京派海派、郭鲁骂战、西南联大……哦，对了，还有太太的客厅，林徽因先生你好。",
      "lastChapter": "第517章 516【威尔斯与银英传】",
      "retentionRatio": 71.58,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 36228,
      "wordCount": 1199729,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "5091caf08d834c0f19000027",
      "hasCp": true,
      "title": "仙逆",
      "minorCate": "幻想修仙",
      "majorCate": "仙侠",
      "author": "耳根",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F42107%2F_42107_594058.jpg%2F",
      "shortIntro": "顺为凡，逆则仙，只在心中一念间……\n请看耳根作品《仙逆》",
      "lastChapter": "后记",
      "retentionRatio": 57.8,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 26331,
      "wordCount": 7107462,
      "isSerial": false,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    },
    {
      "_id": "58fb7d9776113ea4176ace2f",
      "hasCp": true,
      "title": "文化入侵异世界",
      "minorCate": "时空穿梭",
      "majorCate": "科幻",
      "author": "姐姐的新娘",
      "site": "zhuishuvip",
      "cover": "/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1518280%2F_1518280_121545.jpg%2F",
      "shortIntro": "一群巨龙搬着小板凳日夜追看《权利游戏》。精灵大德鲁伊们因为《忠犬八公的故事》而潸然泪下。人类与矮人在《炉石传说》酒馆中为一张传说卡牌而大大出手。甚至就连神明也亲自来到凡间催更小说《福尔摩斯探案集》的连载。最终大德鲁伊们做起了‘滴滴打德’的生意，地精与侏儒全线加盟互联网商店的建设。在异世界掀起一场来自地球的文化入侵！PS：这次不走靠武力的征服胜利了，这次走文化胜利，简而言之就是以折腾互联网和游戏为主，拍电影画漫画为辅的故事。",
      "lastChapter": "第两百六十三章 相遇",
      "retentionRatio": 66.58,
      "banned": 0,
      "minRetentionRatio": 0,
      "latelyFollowerBase": 0,
      "latelyFollower": 26941,
      "wordCount": 638422,
      "isSerial": true,
      "contentType": "txt",
      "superscript": "",
      "sizetype": -1
    }
  ],
  "code": "success"
}
     res.send(JSON.stringify(data)); 
}); 

app.get('/book-discount/game/info', function(req, res){ 
	res.header("Access-Control-Allow-Origin", "*"); 
	var data = {
		ok:true,
		"redPacketCount": "6",
		"detail": {
	        "chance": "1",       // 机会次数
	        "share": "no"       // 是否分享
	    }
	}
     res.send(JSON.stringify(data)); 
}); 
app.get('/book-discount/game/addChance', function(req, res){ 
	res.header("Access-Control-Allow-Origin", "*"); 
	var data = {
		ok:true,
		"detail": {
	         "chance": "3",       // 机会次数
	         "share": "yes"       // 是否分享
	    }
	}
     res.send(JSON.stringify(data)); 
}); 

app.get('/book-discount/game/draw', function(req, res){ 
	res.header("Access-Control-Allow-Origin", "*"); 
	var data = {
		ok:true,
		"redPacketCount": "6",   // 已抢红包数
    	"voucher": 20        // 中奖书券数量
	}
//	var data = {"ok":false,"code":1,"msg":"没抢到，再接再厉"}
setTimeout(function(){
	res.send(JSON.stringify(data)); 
},2000);
     
}); 

app.get('/books',function(req, res){
	res.header("Access-Control-Allow-Origin", "*"); 
	var format = req.query.date;
	var data = {
    "ok": true,
    "doc": {
        "dicountForLimitedTime": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神1" + format,
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673,
                "discount": {
                	"priceDiscount" : 0.9,
                	"timeRemaining" : 284569137
                }
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ],
        "freeForLimitedTime": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神2",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ],
        "wholeBookFreePurchase": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神3",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ]
    }
};
	setTimeout(function(){
		res.send(JSON.stringify(data));
	},2000);
	
})
app.post('/invite/join', urlencodedParser, function(req, res){
//	console.log(req.body);
	var response = {
		'ok':true,
		'code':"success"
	};
	res.end(JSON.stringify(response));
})

var server = app.listen('80',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('访问地址为：http://%s:%s', host, port);
});