//106.75.55.60
//106.75.52.167
//api.zhuishushenqi.com

var baseUrl = location.protocol.split(':')[0]+'://' + 'api.zhuishushenqi.com';

var config = {
    getBookDetail: baseUrl+'/book/',
    getPrentices:location.protocol.split(':')[0]+'://' + 'goldcoin.zhuishushenqi.com'+'/shitu/prentices/by-group'
}

var getQueryParams = function(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

var bullets = [
    {
        'height': 0,
        'avatar': 'u_0713041.jpg',
        'content': '主角这是无脑开后宫啊！'
    },
    {
        'height': 0,
        'avatar': 'u_0713042.jpg',
        'content': '配角已死，有事烧纸！'
    },
    {
        'height': 0,
        'avatar': 'u_0713043.jpg',
        'content': '又给美女按摩，喜欢！'
    },
    {
        'height': 0,
        'avatar': 'u_0713044.jpg',
        'content': '猥琐的男人都爱看。'
    },
    {
        'height': 0,
        'avatar': 'u_0713000.jpg',
        'content': '治病是最佳借口啊'
    },
    {
        'height': 0,
        'avatar': 'u_0713001.jpg',
        'content': '美女需要医疗服务吗？'
    },
    {
        'height': 0,
        'avatar': 'u_0713002.jpg',
        'content': '美女不理你，不就尴尬了。'
    },
    {
        'height': 0,
        'avatar': 'u_0713003.jpg',
        'content': '主角在哪座城市，美女很多啊！'
    },
    {
        'height': 0,
        'avatar': 'u_0713004.jpg',
        'content': '城市套路深啊！'
    },
    {
        'height': 0,
        'avatar': 'u_0713005.jpg',
        'content': '自古套路留人心！'
    },
    {
        'height': 0,
        'avatar': 'u_0713006.jpg',
        'content': '又是美女倒贴？？'
    },
    {
        'height': 0,
        'avatar': 'u_0713007.jpg',
        'content': '主角，你节操掉了！'
    },
    {
        'height': 1,
        'avatar': 'u_0713008.jpg',
        'content': '文明观球！！'
    },
    {
        'height': 1,
        'avatar': 'u_0713009.jpg',
        'content': '克制，主角你要克制！'
    },
    {
        'height': 1,
        'avatar': 'u_0713010.jpg',
        'content': '好套路。。。'
    },
    {
        'height': 1,
        'avatar': 'u_0713011.jpg',
        'content': '猥琐医生和美女病人，这个。。。'
    },
    {
        'height': 1,
        'avatar': 'u_0713012.jpg',
        'content': '作者你是真的会装逼。。。'
    },
    {
        'height': 1,
        'avatar': 'u_0713013.jpg',
        'content': '爽文男主的日常'
    },
    {
        'height': 1,
        'avatar': 'u_0713014.jpg',
        'content': '没有妹子不能活的男主'
    },
    {
        'height': 2,
        'avatar': 'u_0713015.jpg',
        'content': '活好，功夫好。。。'
    },
    {
        'height': 2,
        'avatar': 'u_0713016.jpg',
        'content': '男主就是色狼'
    },
    {
        'height': 2,
        'avatar': 'u_0713017.jpg',
        'content': '这些女的就是有病'
    },
    {
        'height': 2,
        'avatar': 'u_0713018.jpg',
        'content': '好书，挺好看的'
    },
    {
        'height': 2,
        'avatar': 'u_0713019.jpg',
        'content': '爽文还能要求啥。。。'
    },
    {
        'height': 2,
        'avatar': 'u_0713020.jpg',
        'content': '看着爽，停不下来！'
    },
    {
        'height': 2,
        'avatar': 'u_0713021.jpg',
        'content': '槽点太多'
    },
    {
        'height': 3,
        'avatar': 'u_0713022.jpg',
        'content': '情节有点老套啊'
    },
    {
        'height': 3,
        'avatar': 'u_0713023.jpg',
        'content': '就喜欢看男主装逼'
    },
    {
        'height': 3,
        'avatar': 'u_0713024.jpg',
        'content': '开挂的人生不用解释'
    },
    {
        'height': 3,
        'avatar': 'u_0713025.jpg',
        'content': '这本书让我深深陷进去了！作者太牛叉了！请收下我的膝盖'
    },
    {
        'height': 3,
        'avatar': 'u_0713026.jpg',
        'content': '开挂的人生不用解释'
    },
    {
        'height': 3,
        'avatar': 'u_0713027.jpg',
        'content': '这本书让我深深陷进去了！作者太牛叉了！请收下我的膝盖'
    },
    {
        'height': 3,
        'avatar': 'u_0713028.jpg',
        'content': '一本好书就是一顿美食，既能饱眼福，又是营养丰富的每餐。'
    },
    {
        'height': 4,
        'avatar': 'u_0713029.jpg',
        'content': '主角这是要逆天的节奏啊'
    },
    {
        'height': 4,
        'avatar': 'u_0713030.jpg',
        'content': '主角太多情了，遇到是个妹子就帮忙，到处留情。'
    },
    {
        'height': 4,
        'avatar': 'u_0713031.jpg',
        'content': '女主可以不入男主坑吗？'
    },
    {
        'height': 4,
        'avatar': 'u_0713032.jpg',
        'content': '想打死主角的扣1'
    },
    {
        'height': 4,
        'avatar': 'u_0713033.jpg',
        'content': '比男主更帅的男人飘过。。。'
    },
    {
        'height': 4,
        'avatar': 'u_0713034.jpg',
        'content': '男主就是曾小贤啊。。。'
    },
    {
        'height': 4,
        'avatar': 'u_0713035.jpg',
        'content': '支持女主出轨的扣1'
    },
    {
        'height': 0,
        'avatar': 'u_0713036.jpg',
        'content': '读网文好几年了，也算是个老书虫了，这本书文笔不错，情节紧凑，代入感强。读起来非常爽！'
    },
    {
        'height': 0,
        'avatar': 'u_0713037.jpg',
        'content': '超级爽的都市文，第一本都市小说，情节爽到爆，各种女神妹子，YY正合适。'
    },
    {
        'height': 1,
        'avatar': 'u_0713038.jpg',
        'content': '女主是个美女模特，美女倒贴，开后宫，修真，炼丹，开公司制霸全世界。'
    },
    {
        'height': 1,
        'avatar': 'u_0713039.jpg',
        'content': '获得传承主角呆的地方有点乱啊，各种英雄救美，不过妹子挺漂亮的也就不吐槽了。'
    },
    {
        'height': 2,
        'avatar': 'u_0713040.jpg',
        'content': '爽文神作，各种屌丝YY，虽然不像承认，但是真的是爽到停不下来。看他装逼，看他飞！'
    },
    {
        'height': 2,
        'avatar': 'u_0713041.jpg',
        'content': '看的第一本网文，超级爽快的剧情让人欲罢不能，各种YY套路让人不忍吐槽。'
    }
];

Vue.use(VueResource);

new Vue({
    el: '#J_pageHotBookWraper',
    data: {
        cdn: 'https://statics.zhuishushenqi.com',
        origin: location.origin+'/public/hotbook', 
       token: getQueryParams('token'),
       isNative: getQueryParams('platform') || 'android',
       bookId: getQueryParams('bookId') || '52adad2b834bd7c466023d9a',
       acId: getQueryParams('acId'),
       isFetching: true,
       bookInfo:null,
       prenticesList: [],
       bullets: [],
       hotCount: 0,
       hasZan: window.localStorage.getItem('hotbook-xyxy'),
       modalMsg: '',
       showDownload: false
    },
    http: {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    },
    created: function() {
        var self = this;
        HybridApi.init();
        self.callNative({
            "name":"setTopBarColor",
            "params":{
                "color":"#FFFFFF",
                "background":"#100909",
                "back":"white"
            },
            callback:function(){
            }
        })
        setTimeout(function(){
            HybridApi.setBounces(0); 
        },500); 
        self.initBullets();
        self.initHotCount();
    },
    mounted: function() {
        _czc.push(["_trackEvent", "推书活动", "爆款书", "访问", 1, "active"]);
    },
    methods: {
        callNative:function( data,action ){
            var self = this;
            if(action){
                self.umeng(action);
            }
            HybridApi.request({
                action: data.name,
                param: data.params
            });
        },
        jump: function(params,action){
            var self = this;
            if(action){
                self.umeng(action);
            }
    		if (this.isNative) {
                HybridApi.request({
                    action: 'jump',
                    param: params
                });
            } else {
                if (params.link) {
                    location.href = params.link
                }
            }
        },
        initHotCount: function(){
            var self = this;
            var baseDate = new Date('2018/08/06').getTime();
            var count = new Date().getTime() - baseDate;
            self.hotCount = parseInt(count/10000)
        },
        initBullets: function(){
            var self = this;  
            var randomBullets = bullets;
            randomBullets.sort(function(a, b) {
                return Math.random()>.5 ? -1 : 1;
            });
            var loop = function(){
                self.bullets=[];
                var randomIndex = 0;
                for(var j=0;j<randomBullets.length;j++){
                    var randomTime = parseInt((Math.random()*1)*1000,10) + j*2500;
                    setTimeout(function(index){
                        self.bullets.push(randomBullets[randomIndex]);
                        randomIndex++;
                        if(randomIndex==randomBullets.length){
                            setTimeout(loop,3000);
                        }
                    },randomTime);
                }
            }  
            loop();
            
        },
        getBookInfo: function(){
            var self = this;
            self.$http.get(config.getBookDetail + self.bookId).then(function(data){
    			self.isFetching = false;
    			var res = data.data;       		
                self.bookInfo = res;        		
        	})
        },
        getPrenticesList: function(){
            var self = this;
            self.isFetching = true;
            // userId=59f6ace10b0fb62461985888
            // config.getDetail + "?token=" + self.token+"&group=bookAc"
    		self.$http.get(config.getPrentices + "?token=" + self.token+"&group=bookAc&params="+self.acId).then(function(data){
    			self.isFetching = false;
    			var res = data.data;
        		if(res.ok){
                    self.prenticesList = res.data;
        		}else{
        			self.showModal('网络错误');
        		}
        	})
        },

        showModal:function(msg){
            var self = this;
            self.modalMsg = msg;
            setTimeout(function(){
                self.modalMsg = '';
            },2000);
        },
        onShare: function(action){
            var self = this;
            this.umeng(action);
            if( !self.token ){
                HybridApi.getUserInfo(function( data ){
                    // self.token = data.token;
                    window.location.href = location.href+'&token='+data.token;
                })
            }
            if(getQueryParams('form')=='activity'){
                var ua = navigator.userAgent.toLowerCase();
                var platform;
                if(/iphone|ipad|ipod/.test(ua)) {
                    platform = "ios";
                } else if(/android/.test(ua)) {
                    platform = "android";
                }else{
                    platform = "android";
                }
                if((platform=='ios' && getQueryParams('version')<7) || (platform=='android'&&getQueryParams('version')<8)){
                    // self.showModal('分享失败,当前版本不支持此活动');
                    self.showDownload = true;
                    return;
                };
            }
            
            HybridApi.request({
                action: "sharespread",
                param: { 
                    group:'bookAc',
                    acId: self.acId
                },
                callback: function(data){
                    if (data.result === 'success') {
                        self.umeng('分享成功');
                    } else { 
                        if(getQueryParams('platform')=='android'){
                            self.showDownload = true;
                        }
                        console.log('分享失败');
                    }
                }
            });
        },
        onZan: function(){
            var self = this;
            var hasZan = window.localStorage.getItem('hotbook-xyxy');
            if(hasZan) return;
            self.hasZan = true;
            self.hotCount = self.hotCount+1;
            window.localStorage.setItem('hotbook-xyxy',true);
        },
        umeng: function(action){
            _czc.push(["_trackEvent", "推书活动", "爆款书籍", action, 1, "active"]);
        },
        imgError:function(event){
            event.target.src = this.origin+'/img/default.png';
        }
    },
    watch: {
        
    }
});