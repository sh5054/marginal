(function($){
	var ENV = "test";
	var protocol = location.protocol.split(':')[0]+'://';
	var url = {
		"api" : protocol + (ENV == "pro" ? "api.zhuishushenqi.com" : "106.75.55.60"),
		"statice" : protocol + (ENV == "pro" ? "statics.zhuishushenqi.com" : "zhui-test.qiniudn.com"),
	}
//	var url = {
//		"api" : "http://192.168.26.60:8808"
//	}
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
		}
	}
	var initPacket = function(){
		var randomPack = (function(){
			var arr = ['packet_1','packet_2','packet_3','packet_1'];
			arr.sort(function(){return 0.5 - Math.random()});
			return arr;
		})();
		var packets = {
			firUl:randomPack,
			secUl:randomPack
		};
		var html = [];
		for(var a in packets){
			html.push("<ul class='anim " + a + "'>");
			packets[a].map(function(item){ 
				html.push("<li class='" + item + "'></li>");
			})
			html.push("</ul>")			
		}	
		return html.join("");
	}
	var nowPacket = 2;
	var timer = null;
	var startGame = function(){
		if(timer) clearInterval(timer);
		timer = setInterval(function(){
			nowPacket += 1;
		},1250);
		
	}
	var page = {
		pageInit:function(data){
			this.allgetpacket = 0;
			this.initData = data;
			this.pagePaint();
			startGame();
			this.evtSet();
		},
		refreshGame:function(times){
			this.pagePaint(times);
			nowPacket = 2;
			startGame();
		},
		pagePaint:function(times){
			var c = this;
			var isBrow = tools.isBrowser();
			$("#packet-list").html(initPacket());
			$(".anim").css({"-webkit-animation": "looper-s 5s linear infinite","animation": "looper-s 5s linear infinite"});
			
			this.startLoop = new Date();	
			$("#board .times").addClass('times-' + (times || this.initData.detail.chance));
			$("#all-packet").text(this.initData.redPacketCount);
			if(this.initData.detail.chance == "0"){
				$("#packet-list,#catch-packet").css("display","none");
				$("#board").addClass("noGame").find(".style-2");
				if(this.initData.detail.share == "no"){
					$("#board .style-2").removeClass("again").addClass("share");
					c.textPaint("<p>分享增加 <em>3</em> 次机会哦~</p>");
					return;
				}else{
					$("#board .style-2").removeClass("again").addClass("sharegame");
					c.textPaint("<p>今日机会已用完</p><p>逛逛主会场，有更多惊喜哦~</p>");
					return;
				}
			}
		},
		textPaint:function(str){
			$("#text").html(str).css("display","block");
		},

		confirmPaint:function(msg,times,data){
			$("#mask .loading").css("display","none");
			$("#msg").html(msg)
			if(data) $("#ticket-num").css("display","block").find("em").html(data.voucher);
			else $("#ticket-num").css("display","none");
			$("#nums").html(times);
			$("#mask .con-text").css("display","block");
		},
		loadData:function(){
			var c = this;
			$.ajax({
				type:"get",
				url:url.api + "/book-discount/game/info?token=" + tools.getQueryParams("token") + "&t=" + Math.random(),
				dataType:"json",
				success:function(res){
					c.pageInit(res)
				}
			});
		},
		fetchTicket:function(times){
			var c = this;
			$("#mask").css("display","block");
			$("#mask .loading").css("display","block");
			$.ajax({
				type:"get",
				url:url.api + "/book-discount/game/draw?token=" + tools.getQueryParams("token") + "&t=" + Math.random(),
				dataType:"json",
				success:function(res){					
					if(res.ok){
						c.confirmPaint("抢到了~",times,res);
						c.allgetpacket += res.voucher;
					}else{
						if(res.code == 1){
							c.confirmPaint("没抢到，再接再厉哦~",times);
						}
					}	
				}
			});
			
		},
		evtSet:function(){	
			var c = this;
			var packetClass = "";
			var gameTimer = null;
			var times = Number(this.initData.detail.chance);//剩余次数
			var isShare = this.initData.detail.share === "yes";
			var isBrow = tools.isBrowser();
			var catchReady = function(){
				var catchPacket = $("#packet-list li").eq(nowPacket%8);
				packetClass = catchPacket.attr("class");
				$("#packet-list ul").addClass("paused");
				$("#hand").css("display","none");
				var x = ((new Date() - c.startLoop)%5000) * 0.002304 + 'rem';//paused
				$("#packet-list ul").css({"-webkit-transform":"translateX(-"+x+")","transform":"translateX(-"+x+")","-webkit-animation": "none","animation":"none"});//paused
				var eq = nowPacket%4;
				$("#packet-list .firUl li").eq(eq).removeClass();
				$("#packet-list .secUl li").eq(eq).removeClass();
				$("#catch-packet").addClass("catch_"+packetClass);
				$("#timeSlip").addClass("start");
				gameTimer = setTimeout(function(){
					$("#packet-list,#catch-packet").css("display","none");
					times--;
					$("#board .times").removeClass("times-"+(times+1)).addClass("times-"+times);
					c.textPaint("<p>游戏时间到了，再玩一次吧~</p>");
					$("#board").addClass("noGame").find(".style-2").addClass("again");					
				},8000);
				return true;
			}
			var start = false;
			var pullNum = 0;
			var catchDom = $("#catch-packet .pull");
			var timers;
			var bools = true;
			$("#game_btn,#hand").on("touchstart",function(){				
				if(!start) start = catchReady();
				catchDom.css({"-webkit-transform":"translateY("+ pullNum +"rem)","transform":"translateY("+ pullNum +"rem)"})
				pullNum+=0.5;
				if(pullNum == 5){
					times--;
					c.fetchTicket(times);
					clearTimeout(gameTimer);
					$("#board .times").removeClass("times-"+(times+1)).addClass("times-"+times);
				}
			});
			$("#again-btn").on("click",function(){
				if(times == 0 && isBrow){
					$("#board .more-btn .share-game").css("display","none");
					$("#board .more-btn .download-app").css("display","inline-block");
					$("#board .style-2").removeClass("again").addClass("more");
					c.textPaint("<p>您共获得 <em>"+ c.allgetpacket +"</em> 个红包书券</p><p>使用追书APP还有 <em>3</em> 次机会，</p><p>暑期大酬宾，更多奖励等你拿</p>");
					return;
				}else if(times == 0 && !isShare){
					$("#board .style-2").removeClass("again").addClass("share");
					c.textPaint("<p><i class='icon'></i>分享增加 <em>3</em> 次机会哦~</p>");
					return;
				}else if(times == 0 && isShare){
					$("#board .style-2").removeClass("again").addClass("sharegame");
					c.textPaint("<p>今日机会已用完</p><p>逛逛主会场，有更多惊喜哦~</p>");
					return;
				}
				c.refreshGame(times);
				$("#packet-list").css("display","block");
				$("#catch-packet").removeClass("catch_"+packetClass).css("display","block");
				$("#text").css("display","none");
				$("#board").removeClass("noGame");
				$("#timeSlip").removeClass("start");
				start = false;
				pullNum = 0;
			});
			$("#board .share-evt").on("click",function(){
				HybridApi.share({
		            title: '拼手速 抢红包',
		            content: '拼手速 抢红包',
		            link: 'http://twechat.zhuishushenqi.com/wechats/activity/596342d99888330de28aa2b3',
		            icon: 'https://statics.zhuishushenqi.com/invite/shareIcon.jpg'
		        });
				$.ajax({
					type:"get",
					url:url.api + "/book-discount/game/addChance?token=" + tools.getQueryParams("token") + "&t=" + Math.random(),
					dataType:"json",
					success:function(res){
						if(res.ok){
							isShare = true;
							times = 3;
							c.initData.detail.chance = "3";
							$("#board .style-2").removeClass("sharegame").removeClass("share").addClass("again");
							$("#board .times").removeClass("times-0").addClass("times-3");
						}	
					}
				});
			});
			$("#con-btn").on("click",function(){
				$("#mask").css("display","none");
				$("#mask .con-text").css("display","none");
				if(times == 0){
					$("#packet-list,#catch-packet").css("display","none");
					$("#board").addClass("noGame").find(".style-2");
					if(isBrow){
						$("#board .more-btn .share-game").css("display","none");
						$("#board .more-btn .download-app").css("display","inline-block");
						$("#board .style-2").removeClass("again").addClass("more");
						c.textPaint("<p>您共获得 <em>"+ c.allgetpacket +"</em> 个红包书券</p><p>使用追书APP还有 <em>3</em> 次机会，</p><p>暑期大酬宾，更多奖励等你拿</p>");
						return;
					}else if(!isShare){
						$("#board .style-2").removeClass("again").addClass("share");
						c.textPaint("<p><i class='icon'></i>分享增加 <em>3</em> 次机会哦~</p>");
						return;
					}else if(isShare){
						$("#board .style-2").removeClass("again").addClass("sharegame");
						c.textPaint("<p>今日机会已用完</p><p>逛逛主会场，有更多惊喜哦~</p>");
						return;
					}
				}
				c.refreshGame(times);
				$("#catch-packet").removeClass("catch_"+packetClass).css("display","block");
				$("#timeSlip").removeClass("start");
				start = false;
				pullNum = 0;
			});
			$("#m-sure").on("click",function(){
				$(".m-mask").css("display","none");
				window.history.back();
			})
			$("#back-act").on("click",function(){
				if(isBrow) window.location.href = protocol + 'm.zhuishushenqi.com/summersale?token=' + tools.getQueryParams("token");
				else{
					HybridApi.request({
			            action: 'jump',
			            param: {
			            	"link":protocol + location.origin +"/summersale?token=" + tools.getQueryParams("token"),
			                "jumpType": "webview",
			                "pageType": "summersale",
			                "title": "暑期大促"
			            }
			       });
				}
			})
		}
	};
	page.loadData();
})(window.Zepto)
