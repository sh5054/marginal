(function($){
	var protocol = location.protocol.split(':')[0]+'://';
	var url = protocol + "api.zhuishushenqi.com";
	var pageData = {
		ctrip:{
			cp:{
				type:1,
				img:"img/ctrip.png",
				context:""
			},
			rule:[
				"本次活动兑换码红包仅限新用户兑换使用",
				"登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取20元追书券，开始享受全站百万书籍畅读吧；",
				"赠送的追书券有效期为30天；",
				"活动时间为6月9日-6月16日，请在活动期间完成兑换；",
				"如有疑问，请联系「追书神器」微信客服；",
				"本次活动的最终解释权归追书神器所有。"
			],
			acLink:"http://jump.zhuishushenqi.com/huodong9"
		},
		ddsp:{
			cp:{
				type:2,
				img:"",
				context:"咚咚食品用户专享"
			},
			rule:[
				"本活动抢到的兑换码红包，仅限购买咚咚食品的用户使用,多购多得，可累加使用；",
				"登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取5元追书券，开始享受全站百万书籍畅读吧；",
				"赠送的追书券有效期为15天；",
				"活动时间：即日起至2017年12月31日24点截止，请在活动期间完成兑换；",
				"如有疑问，请联系「追书神器」微信客服：zssqxs；"
			],
			acLink:"http://jump.zhuishushenqi.com/huodong5"
		},
		lztv:{
			cp:{
				type:2,
				img:"img/lztv.png",
				title:"《真爱谎言之破冰者》小说上线，2000书券送不停",
				context:"《真爱谎言之破冰者》小说专享"
			},
			rule:[
				"本活动抢到的兑换码红包，每个追书帐号仅能够兑换一次；",
				"登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取20元追书券，开始享受全站百万书籍畅读吧；",
				"赠送的追书券有效期为7天；",
				"活动时间截止为2018年5月15日，请在活动期间完成兑换；",
				"如有疑问，请联系「追书神器」微信客服：zssqxs；"
			],
			outDate:(new Date('2018/05/15')).getTime(),
			acLink:"http://jump.zhuishushenqi.com/huodong20"
		},
		tcly:{
			cp:{
				type:2,
				title:"追书神器发红包啦，500追书券免费送",
				img:"",
				context:"后台咖啡用户专享"
			},
			rule:[
				"本活动抢到的兑换码红包，每个追书帐号仅能够兑换一次；",
				"登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取5元追书券，开始享受全站百万书籍畅读吧；",
				"赠送的追书券有效期为7天；",
				"活动时间为8月15日-12月31日，请在活动期间完成兑换；",
				"如有疑问，请联系「追书神器」微信客服：zssqxs；"
			],
			acLink:"http://jump.zhuishushenqi.com/huodong6"
		},
		ivvi:{
			cp:{
				type:2,
				title:"追书神器发红包啦，500追书券免费送",
				img:"",
				context:""
			},
			rule:[
				"本活动抢到的兑换码红包，每个追书帐号仅能够兑换一次；",
				"登录追书神器APP—进入个人资料页面—点击兑换中心—输入兑换码—点击右边箭头，即可领取5元追书券，开始享受全站百万书籍畅读吧；",
				"赠送的追书券有效期为7天；",
				"活动时间为2017年12月1日-2018年12月31日，请在活动期间完成兑换；",
				"如有疑问，请联系「追书神器」微信客服：zssqxs；"
			],
			acLink:"http://jump.zhuishushenqi.com/huodong4"
		}
	}
	var fw = {
		"showLoading":function(show){
			$("html")[show ? "addClass" : "removeClass"]("hidden");
			$("#c-load").css("display",(show ? "block" : "none"));
		},
		"showConfirm":function(show,code){						
			$("#c-confirm .code span").text(code || "");
			$("html")[show ? "addClass" : "removeClass"]("hidden");
			$("#c-mask").css("display",(show ? "block" : "none"));
		},
		"showModal":function(text,alwaysShow){
			var dom = $("#c-modal");
			dom.text(text);
			dom.css("display","block");
			if(alwaysShow) return;
			setTimeout(function(){dom.css("display","none");},2000);
		},
		"GetQueryString":function(name){
		    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		    var r = window.location.search.substr(1).match(reg);
		    if(r!=null)return  unescape(decodeURI(r[2])); return null;
		}
	};
	var page = {
		state:{
			lost: function(){
				return window.localStorage.getItem(fw.GetQueryString("tag")) && ( ["ddsp","tcly","lztv","ivvi"].indexOf(fw.GetQueryString("tag")) > -1);
			} 
		},
		Init:function(){
			var tag = fw.GetQueryString("tag");
			if((new Date()).getTime() > pageData[tag].outDate){
				console.log(true)
				window.localStorage.removeItem(tag);
			}
			this.paintData();
			this.evtSet();
		},
		paintCp:function(cpdata){
			switch(cpdata.cp.type)
			{
			case 1:
				return 	"<img src='" + cpdata.cp.img + "'/>";
			case 2:
				return "<div class='text'>" + cpdata.cp.context +"</div>";
			case 3:
				return "<div class='drop'><span><img src='" + cpdata.cp.img + "'/>" + cpdata.cp.context + "</span></div>"
			}
			
		},
		paintData:function(){
			var cpTag = fw.GetQueryString("tag");
			var data = pageData[cpTag];
			var cpInner = this.paintCp(data);
			var ruleInner = function(){
				var ruleData = data.rule;
				var html = [];
				for(var i=0,len=ruleData.length; i<len; i++) html.push("<p><em>" + (i+1) + "、</em>" + ruleData[i] +"</p>");
				return html.join("");
			};
			$(".acLink").attr("href",data.acLink);
			$("#cpType").html(cpInner);
			$("#rule").html(ruleInner());
			data.cp.title && $("#leadTitle").html(data.cp.title);
			// if(page.state.lost) fw.showModal("活动地址失效了哦",true); 
		},
		evtSet:function(){
			$("#receive").on("click",function(){
				if(page.state.lost() == true) {
					fw.showConfirm(true,window.localStorage.getItem(fw.GetQueryString("tag")));
					return;
				};
				_czc.push(["_trackEvent", "书券", "领取", fw.GetQueryString("tag"), 1, "receive"]);
				fw.showLoading(true);
				$.ajax({
					type:"get",
					url: url + "/activity/code",
					data:{
						tag: fw.GetQueryString("tag"),
						code: fw.GetQueryString("code")
					},
					success:function(res){
						fw.showLoading(false);
						var data = JSON.parse(res);
						if(data.ok){
							fw.showConfirm(true,data.code);
							// window.sessionStorage.removeItem("fctco");
							window.localStorage.setItem(fw.GetQueryString("tag"), data.code);
						}else{
							fw.showModal(data.msg);
						}
					},
					error:function(){
						fw.showLoading(false);
						fw.showModal("网络错误");
					}
				});
			});
			$("#confirm-close").on("click",function(){
				fw.showConfirm(false);
			});
		}
	};
	page.Init();
})(window.Zepto)
