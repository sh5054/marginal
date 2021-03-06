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

(function(){
	var imgBase = "http://h5.zhuishushenqi.com/public/activities/cgqz/img/";
	var loader = new resLoader({
		resources : [
			imgBase+'bg1_1.jpg',
			imgBase+'bg2_1.jpg',
			imgBase+'bg3.jpg',
			imgBase+'bg4_1.jpg',
			imgBase+'page1_person_1.png',
			imgBase+'p3_person_1.gif',
			imgBase+'p3_person_2.gif',
			imgBase+'p3_person_3.gif',
			imgBase+'p3_person_4.gif',
			imgBase+'p3_person_5.gif',
			imgBase+'p3_p1.gif',
			imgBase+'p3_p2.gif',
			imgBase+'p3_newmid_1.png',
			imgBase+'p3_newmid_2.png',
			imgBase+'p3_newmid_3.png',
			imgBase+'p3_newmid_4.png',
			imgBase+'p3_newmid_5.png',
			imgBase+'p3_person.png',
			imgBase+'p3_newtop1_1.png',
			imgBase+'p3_newtop1_2.png',
			imgBase+'p3_newtop1_3.png',
			imgBase+'p3_newtop1_4.png',
			imgBase+'p3_newtop1_5.png',
			imgBase+'start_1.png',
			imgBase+'start_2.png'
		],
		onStart : function(total){
		},
		onProgress : function(current, total){
			var percent = Math.floor(current/total*100);
			$("#loadNum").text(percent);
		},
		onComplete : function(total){
			$("#perLoad").css("display","none");
			$("#pageMain .act_1 .inner").addClass("fadeIn");
		}
	});
	loader.start();
})()
