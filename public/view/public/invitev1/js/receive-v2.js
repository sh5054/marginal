(function($){
	var ENV = "pro";
	var protocol = location.protocol.split(':')[0]+'://';
	var url = {
		"api" : protocol + (ENV == "pro" ? "api.zhuishushenqi.com" : "106.75.55.60"),
		"statice" : protocol + (ENV == "pro" ? "statics.zhuishushenqi.com" : "zhui-test.qiniudn.com"),
	}
	var GetQueryString = function(name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(decodeURI(r[2])); return null;
	}
	var page = {
		"Confirm" : {
			'init':function(){
				$("#confirm .sureBtn").on("click",function(){
					$("#mask").css("display","none");
				});
			},
			'show':function(context){
				$("#confirm .text").html(context);
				$("#mask").css("display","block");
			},
			'hide':function(){
				$("#mask").css("display","none");
			}
		},
		"PagePaint" : function(){
			var inviter = {
				name: decodeURI(GetQueryString("nickname")),
				avatar: GetQueryString("avatar") && (url.statice + GetQueryString("avatar")) || 'img/avatar.jpg'
			};
			var html = ["<i class='userIcon'><img src='" + inviter.avatar +"'/></i><div class='context'>"];
			html.push("<h3>快人一步，</h3><h3 class='last'>读你想读的书！</h3></div>");
			$("#inviteInfo").html(html.join(""));
			$("#mobile").attr("placeholder",("输入手机号，接受" + inviter.name + "的邀约"));
		},
		"EventSet":function(){
			var c = this;
			$("#accept").on("click",function(){
				var val = $("#mobile").val();
				if(!(/^1(3|4|5|7|8|9)\d{9}$/.test(val)) || val === ''){
					c.Confirm.show('<p>您输入的手机号格式不正确</p><p>请重新输入。</p>');
					return;
		        }
				$.ajax({
					type:"post",
					url:url.api + "/user/invite/join/" + GetQueryString("userId"),
					dataType:"json",
					data:{
						mobile:val,
						version:1,
						userId: GetQueryString("userId")
					},
					success:function(data){
						_czc.push(["_trackEvent", "invite", "receive", "v1", 1,"receive"]);
						if(data.ok){
							if(data.code == "success"){
								window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ushaqi.zhuishushenqi";
							}
						}else{
							if(!data.code) return c.Confirm.show("<p>网络错误</p>");
							if(data.code == "MOBILE_HAS_BIND"){
								c.Confirm.show("<p>本手机已经是追书用户。</p>")
							}else if(data.code == "ALREADY_DONE"){
								c.Confirm.show("<p>本手机已经参加过活动。</p>")
							}else if(data.code == "ALREADY_GOT_REWARD"){
								c.Confirm.show("<p>本手机已领取过奖励。</p>")
							}
						}
					}
				});
			});
		}
	};
	page.PagePaint();
	page.Confirm.init();
	page.EventSet();
})(window.Zepto);
