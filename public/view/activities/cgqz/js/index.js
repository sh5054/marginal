(function($){
	var tools = {
		getQueryParams: function(name, url) {
		    if (!url) url = location.href;
		    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		    var regexS = "[\\?&]" + name + "=([^&#]*)";
		    var regex = new RegExp(regexS);
		    var results = regex.exec(url);
		    return results == null ? null : results[1];
		},
		isBrowser: function(){
			return !(this.getQueryParams('platform') === 'ios' || this.getQueryParams('platform') === 'android');
		},
		isWeiXin: function(){
			var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
		}
	};
	var page = {
        bullets:["前方核能","这是今年分量最重的膝盖","我读书少你不要骗我","趴在坑底求产粮","求锤得锤","一鹿彤行","欣欣向蓉","小板凳已搬好","进入火眼金睛分析模式"],
        questions:[
            {
                type:1,
                ansLong:true,
                ques:"防火防盗防闺蜜是今年哪部国产名剧的衍生梗？",
                ans:["我的前半生","我的下半身","我的上半身","我的后半生"],
                res:"0"
            },{
                type:1,
                ansLong:true,
                quLong:true,
                ques:"以下哪些词汇能精致描述刘墙咚，王舰琳，麻花疼，马芸这四位大佬？",
                ans:[" 不知妻美，一无所有，普通家庭，悔创阿里"," 不知妻美，悔创阿里，一无所有，普通家庭"," 非常有钱，非常有钱，非常有钱，非常有钱"],
                res:"0"
            },{
                type:1,
                ques:"2017年秋，经过大量的实证，发现铁锤的主要成分是：",
                ans:[" 锂与铜"," 扎心了的老铁"," 小拳拳"],
                res:"0"
            },{
                type:1,
                ques:"怎样守护达康书记的GDP",
                ans:["去看他演的战狼2","在吕州购买房产","做好吃瓜群众及时举报不良现象","为达康书记打CALL"],
                res:"1"
            },{
                type:1,
                quLong:true,
                ansLong:true,
                ques:"网友看完电影《三生三世十里桃花》直呼被夜华的厨艺惊呆，那么请问夜华的厨艺是向谁学的？",
                ans:["夜华他妈","白浅","海底捞拉面小哥","神仙有法术"],
                res:"2"
            },{
                type:1,
                quLong:true,
                ques:"玩《王者荣耀》的人都说“最怕大乔突然的关心”，那么大乔会怎么表现她的关心？",
                ans:["送你回家","喂你吃饭","爱的抱抱"],
                res:"0"
            },{
                type:1,
                quLong:true,
                ansLong:true,
                ques:"知名网文APP追书神器表示，今年有大量网文改编的影视剧都已上线。以下哪部不是网文改编的作品？",
                ans:["白夜追凶","三生三世十里桃花","择天记","醉玲珑"],
                res:"0"
            },{
                type:2,
                ansLong:true,
                ques:"DISS是中国有嘻哈开播后开始流行的交流方，以下哪种属于DISS？",
                ans:["我从未见过如此厚颜无耻之人","本是同根生相煎何太急","宁教曹操天下人，不教天下人操曹操","言出如直，以上皆是（双押）"],
                res:"0_1"
            },{
                type:2,
                ansLong:true,
                ques:"为王俊凯庆生打CALL的正确方式是什么？",
                ans:["买十八颗星星祝贺","包下各种LED屏喊XXXX","在时代广场包下大屏","在土耳其包下热气球"],
                res:"0_1_2_3"
            },{
                type:3,
                quLong:true,
                ques:"美国新任总统特朗普通过推特治国，时时关注民生动态，拉近了和群众的关系。这一举动广受媒体和美国人民的喜爱，并称为美国的骄傲。",
                res:"1"
            },{
                type:3,
                ques:"“我吃火锅你吃火锅底料”这句话来源于《中国有嘻哈》节目中PGONE的一首歌。",
                res:"1"
            },{
                type:3,
                ques:"近日有一位罪犯于家中被抓，要求走之前再玩一把阴阳师。",
                res:"1"
            },{
                type:4,
                ques:"传说中的原谅色是一种怎样的颜色？",
                ans:["ans12_1","ans12_2","ans12_3"],
                res:"1"
            },{
                type:4,
                quLong:true,
                ques:"娱乐圈“抢C位”事件闹得沸沸扬扬，下图哪种才是C位？",
                ans:["ans13_1","ans13_2","ans13_3"],
                res:"2"
            },{
                type:4,
                ansLong:true,
                ques:"图中X姓男艺人手里提的箱子里面装了什么？ ",
                ans:["Taylor swift","行李","现金巨款"],
                ans_pic:"ans14",
                res:"2"
            }
        ],
        data:{
            BulletsIndex:0,
            questionType:1,
            questionIndex:0,
            score:0
        },
        Init:function(){
            //userNum
            var self = this;
            var time = Math.floor((new Date()-1508947200000)/60000);
            $("#userNum").html(time)
            this.pagePaint_initBullets(); 
            this.Evt_set();  
            this.pagePaint_question();
            var play = function () {
		        document.getElementById('audio').play();
		    };
			document.addEventListener("WeixinJSBridgeReady", function () {
		//		音乐播放
		        play();
            }, false);
            
            $.ajax({
                type:"get",
                url:"http://api.zhuishushenqi.com/wechats/jssdk_init?url=" + encodeURIComponent(location.href.split('#')[0]),
                dataType:"json",
                success:function(response){						
                    wx.config({
                        debug: response.jsApi.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: response.jsApi.appId, // 必填，公众号的唯一标识
                        timestamp: response.jsApi.timestamp, // 必填，生成签名的时间戳
                        nonceStr: response.jsApi.nonceStr, // 必填，生成签名的随机串
                        signature: response.jsApi.signature, // 必填，签名，见附录1
                        jsApiList: response.jsApi.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                  });
                  self.wx_share();
                }
            });
        },
        wx_share:function(isfinsh){
            var self = this;
			wx.ready(function(){
	        	wx.onMenuShareTimeline({
				    title: '吃得了这些瓜，你才是超神的吃瓜群众。', // 分享标题
				    link: 'http://h5.zhuishushenqi.com/public/activities/cgqz/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: 'http://h5.zhuishushenqi.com/public/activities/cgqz/img/share_icon.jpg', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
				wx.onMenuShareAppMessage({
			        title: '全国吃瓜群众神级鉴定，全程高能', // 分享标题
			        desc: '吃得了这些瓜，你才是超神的吃瓜群众。', // 分享描述
			        link: "http://h5.zhuishushenqi.com/public/activities/cgqz/index.html", // 分享链接
			        imgUrl: 'http://h5.zhuishushenqi.com/public/activities/cgqz/img/share_icon.jpg', // 分享图标
			        type: 'link', // 分享类型,music、video或link，不填默认为link
			        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			        success: function() {
			            // 用户确认分享后执行的回调函数
			        },
			        cancel: function() {
			            // 用户取消分享后执行的回调函数
			        }
			    })
	        })
		},
        pagePaint_initBullets:function(){
            var html = ["<div id='bullets_" + this.data.BulletsIndex + "'>"];
            var self = this;
            for(var i=0; i< 20; i++){
                html.push("<span class='item top_" + Math.floor(Math.random()*6) + "'>" + self.bullets[Math.floor(Math.random()*9)] + "</span>");
            }
            html.push("</div>");
            $("#bullets").append(html.join(""));
            this.startFadeBullets();
        },
        startFadeBullets:function(){
            var item = 0;
            var self = this;
            var start = self.data.BulletsIndex;
            for(var i=0; i< 20; i++){
                var randomTime = Math.floor((i - Math.random())*1000)+1000;
                setTimeout(function(){
                    $("#bullets_" + start + " .item").eq(item).addClass("fadeIn");
                    item++;
                    if(item == 20){
                        self.data.BulletsIndex = start+1;
                        self.pagePaint_initBullets();
                    }
                },randomTime);
            }
        },
        pagePaint_question:function(){
            var self = this;
            var temp = ["A.","B.","C.","D."]
            var index = self.data.questionIndex;
            var type = self.data.questionType;
            var question = self.questions[index];
            $("#p3 .question_type img").attr("src","img/a_type_"+ question.type +".png");
            if(self.questions.length == (index+1)){
                $("#p3 .btn_next").addClass("submit");
            }
            $("#p3 .question_wrap .inner").addClass(question.quLong ? 'font-min' : '').html(question.ques);
            if(question.type==1 || question.type==2){
                $("#p3 .btn_next").css("display","block");
                var ansHtml = ["<ul class='" + (question.ansLong ? 'font-min' : '') + "'>"];
                for(var i=0;i<question.ans.length;i++){
                    ansHtml.push("<li index='" + i + "'><i>"+ temp[i] + "</i>" + question.ans[i]+ "</li>");
                };
                ansHtml.push("</ul>");
                $("#p3 .answer_wrap").html(ansHtml.join(""));
            }else if(question.type == 3){
                $("#p3 .btn_next").css("display","none");
                $("#p3 .answer_wrap").html("<div class='type3'><div index='0' class='btn_yes'></div><div class='btn_no' index='1'></div></div>");
            }else if(question.type == 4){
                $("#p3 .btn_next").css("display","block");
                var ansHtml = ["<div class='type4 qu-" + index + "'>"];
                if(question.ans_pic){
                    ansHtml.push("<div><img src='img/" + question.ans_pic + ".png' /></div>");
                    ansHtml.push("<ul class='" + (question.ansLong ? 'font-min' : '') + "'>");
                    for(var i=0;i<question.ans.length;i++){
                        ansHtml.push("<li index='" + i + "'><i>"+ temp[i] + "</i>" + question.ans[i]+ "</li>");
                    };
                    ansHtml.push("</ul>");
                }else{
                    for(var i=0;i<question.ans.length;i++){
                        ansHtml.push("<div class='img_ans ans_"+ i +"' index='" + i +"'><div class='mask'></div><img src='img/" + question.ans[i] + ".png'></div>");
                    }
                }
                ansHtml.push("</div>");
                $("#p3 .answer_wrap").html(ansHtml.join(""));
            }
            self.data.questionType = question.type;
            self.pagePaint_person();
            //
        },
        pagePaint_person:function(){
            var self = this;
            var index = self.data.questionIndex;
            // console.log(index);
            if(index == 3){
                $("#p3 .persons .p_1").addClass("fadeRight");
                setTimeout(function(){
                    $("#p3 .persons .p_2").addClass("fadeRight");
                },1200);
            }else if(index>6){
                $("#p3 .persons .p_" + (index-4)).addClass("bounceInLeft");
            }
        },
        pagePaint_lastPage:function(){
            var score = this.data.score;
            $("#p4 .score .num").html(score);
            setTimeout(function(){
                $("#p4 .score").addClass("bounceInDown");
            },1500);
            if(score >= 90){
                $("#p4 .top_text img").attr("src","img/p3_newtop1_1.png");
                $("#p4 .mid_text img").attr("src","img/p3_newmid_1.png");
                $("#p4 .mid_person .person").attr("src","img/p3_person_1.gif");
                return;
            }else if(score >= 70){
                $("#p4 .top_text img").attr("src","img/p3_newtop1_2.png");
                $("#p4 .mid_text img").attr("src","img/p3_newmid_2.png");
                $("#p4 .mid_person .person").attr("src","img/p3_person_2.gif");
                return;
            }else if(score >= 50){
                $("#p4 .top_text img").attr("src","img/p3_newtop1_3.png");
                $("#p4 .mid_text img").attr("src","img/p3_newmid_3.png");
                $("#p4 .mid_person .person").attr("src","img/p3_person_3.gif");
                return;
            }else if(score >= 30){
                $("#p4 .top_text img").attr("src","img/p3_newtop1_4.png");
                $("#p4 .mid_text img").attr("src","img/p3_newmid_4.png");
                $("#p4 .mid_person .person").attr("src","img/p3_person_4.gif");
                return;
            }else{
                $("#p4 .top_text img").attr("src","img/p3_newtop1_5.png");
                $("#p4 .mid_text img").attr("src","img/p3_newmid_5.png");
                $("#p4 .mid_person .person").attr("src","img/p3_person_5.gif");
                return;
            }
        },
        count_score:function(dom){
            var self = this;
            var score = self.data.score;
            var quIndex = self.data.questionIndex;
            var question = self.questions[quIndex];
            var ansArr = [];
            var activeDom = $("#p3 .answer_wrap .active");
            if(dom){
                activeDom = dom;
            }
            activeDom.map(function(index,dom){
                ansArr.push($(dom).attr("index"))
            });
            if(question.res == ansArr.join("_")){
                $("#p3 .right").addClass("show");
                if(question.type == 1){
                    self.data.score = score+6;
                }else if(question.type == 2){
                    self.data.score = score+8;
                }else if(question.type == 3){
                    self.data.score = score+4;
                }else if(question.type == 4){
                    self.data.score = score+10;
                }
            }else{
                $("#p3 .wrong").addClass("show");
            }
            console.log(self.data.score);
        },
        isActive:function(){
            if($("#p3 .answer_wrap .active").length > 0) return true;
            $("#p3 .c-modal").css("display","block");
            setTimeout(function(){
                $("#p3 .c-modal").css("display","none");
            },1500);
            return false;
        },
        Evt_set:function(){
            var self = this;
            $("#p1 .btns div").on("click",function(){
                $("#p1").addClass("hide_page");
            });
            $("#p2 .btns").on("click",function(){
                $("#p2").addClass("hide_page");
                self.pagePaint_question();  
            });
            $("#p3 .btn_next").on("click",function(){
                if(!self.isActive()) return;
                self.count_score();
                if($(this).hasClass("submit")){
                    setTimeout(function(){
                        self.pagePaint_lastPage();
                        $("#p3").addClass("hide_page"); 
                    },800);  
                    return;
                }
                self.data.questionIndex = self.data.questionIndex + 1;   
                setTimeout(function(){
                    $("#p3 .right").removeClass("show");
                    $("#p3 .wrong").removeClass("show");
                    self.pagePaint_question();  
                },800);  
                          
            });
            $("#p3 .answer_wrap").on("click",".btn_yes,.btn_no",function(){
                // if(!self.isActive()) return;
                self.count_score($(this));
                self.data.questionIndex = self.data.questionIndex + 1;   
                setTimeout(function(){
                    $("#p3 .right").removeClass("show");
                    $("#p3 .wrong").removeClass("show");
                    self.pagePaint_question();  
                },1000);
            });
            $("#p3 .answer_wrap").on("click","li,.img_ans",function(){
                if(self.data.questionType == 1 || self.data.questionType == 4){
                    $("#p3 .answer_wrap li").removeClass('active');
                    $("#p3 .answer_wrap .img_ans").removeClass('active');
                    $(this).addClass('active');
                }else if(self.data.questionType == 2){
                    $(this).toggleClass('active');
                }
            });
            $("#p4 .share").on("click",function(){
                $(".mask").css("display","block");
                _czc.push(["_trackEvent", "吃瓜群众h5", "share", "分享", 1, "share"]);
            });
            $(".mask").on("click",function(){
				$(".mask").css("display","none");
			})
            $('.music').on('tap',function(){
                $(this).toggleClass('pause');
                var audio = document.getElementById('audio');
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
        }
	}
	page.Init();
})(window.Zepto)