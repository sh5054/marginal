//resLoader
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(factory);
    } else if (typeof exports === 'object') {
        //Node, CommonJS之类的
        module.exports = factory();
    } else {
        //浏览器全局变量(root 即 window)
        root.resLoader = factory(root);
    }
}(this, function () {
    var isFunc = function(f){
        return typeof f === 'function';
    }
    //构造器函数
    function resLoader(config){
        this.option = {
            resourceType : 'image', //资源类型，默认为图片
            baseUrl : './', //基准url
            resources : [], //资源路径数组
            onStart : null, //加载开始回调函数，传入参数total
            onProgress : null, //正在加载回调函数，传入参数currentIndex, total
            onComplete : null //加载完毕回调函数，传入参数total
        }
        if(config){
            for(i in config){
                this.option[i] = config[i];
            }
        }
        else{
            alert('参数错误！');
            return;
        }
        this.status = 0; //加载器的状态，0：未启动   1：正在加载   2：加载完毕
        this.total = this.option.resources.length || 0; //资源总数
        this.currentIndex = 0; //当前正在加载的资源索引
    };

    resLoader.prototype.start = function(){
        this.status = 1;
        var _this = this;
        var baseUrl = this.option.baseUrl;
        for(var i=0,l=this.option.resources.length; i<l; i++){
            var r = this.option.resources[i], url = '';
            if(r.indexOf('http://')===0 || r.indexOf('https://')===0){
                url = r;
            }
            else{
                url = baseUrl + r;
            }

            var image = new Image();
            image.onload = function(){_this.loaded();};
            image.onerror = function(){_this.loaded();};
            image.src = url;
        }
        if(isFunc(this.option.onStart)){
            this.option.onStart(this.total);
        }
    }

    resLoader.prototype.loaded = function(){
        if(isFunc(this.option.onProgress)){
            this.option.onProgress(++this.currentIndex, this.total);
        }
        //加载完毕
        if(this.currentIndex===this.total){
            if(isFunc(this.option.onComplete)){
                this.option.onComplete(this.total);
            }
        }
    }

    //暴露公共方法
    return resLoader;
}));

var loader = new resLoader({
	resources : [
		'http://h5.zhuishushenqi.com/public/summersale/game/img/bg.jpg',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/back_act.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/board_1.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/board_2.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/btn_game_active.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/btn_game.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/caidai.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/catched_1.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/catched_2.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/catched_3.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/cloud.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/confirm.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/envelop_1.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/envelop_2.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/envelop_3.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/envelop_4.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/packet_1.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/packet_2.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/packet_3.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/paly_again.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/rope.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/share_game.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/share_now.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/surplus_0.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/surplus_1.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/surplus_2.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/surplus_3.png',
		'http://h5.zhuishushenqi.com/public/summersale/game/img/title.png'
	],
	onStart : function(total){
	},
	onProgress : function(current, total){
		var percent = Math.floor(current/total*100);
		$("#progress-num").text(percent);
		$("#bar").css("width",percent+"%");
	},
	onComplete : function(total){
		$("#perLoad").css("display","none");
	}
});

loader.start();