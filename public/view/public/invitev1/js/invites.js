(function($){
	var protocol = location.protocol.split(':')[0]+'://';
	var url = protocol + 'api.zhuishushenqi.com/user/invite/info/';
	var GetQueryString = function(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	var ExcRule = function(num){
		if(num == 0) return "0%";
		else if(num == 1) return "2%";
		else if(num == 2) return "4%";
		else if(num == 3) return "8%";
		else if(num == 4 || num == 5) return "12%";
		else if(num == 6 || num == 7) return "20%";
		else if(num >= 8 && num <= 10) return "35%";
		else if(num >= 10 && num <=15) return "60%";
		else if(num >= 15 && num <=25) return "80%";
		else if(num >= 26) return "90%";
	}
	$.ajax({
		type:"get",
		url:url + GetQueryString("userId"),
		dataType:"json",
		success:function(data){
			if(!data.ok) return;
			var dom = $("#inviteUser");
			var users = data.data.inviteUser;
			var inviteNum = data.data.inviteNum;
			var html = ["<h5>你已约到" + inviteNum + "个新伙伴，超越"+ ExcRule(inviteNum) +"的追书用户！</h5>"];
			html.push("<ul class='inviteList'>");
			for(var i=0; i<users.length; i++){
				html.push("<li><i class='userIcon'><img src='"+ (users[i].avatar || 'img/avatar.jpg') +"'/></i><span class='userName'>"+ users[i].name +"</span>");
				html.push("<span class='info'>" + (users[i].status ? "约到了！<em>+200书券 </em>" : "未下载，快去约ta来！") + "</span></li>");
			}
			html.push("</ul><div class='rule'><a href='rule.html'>了解详细规则</a></div>");
			dom.html(html.join("")).css("display","block");
		}
	});
	$("#shareBtn").on("click",function(){
		_czc.push(["_trackEvent", "invite", "share", "v1", 1,"share"]);
		HybridApi.share({
			title:"接受小伙伴邀请，领取书券",
			content:"接受小伙伴邀请，领取书券",
			trackKey:'task_center_invite_friend_sucess',
			link: window.location.origin + "/public/invitev1/receive.html" + window.location.search,
			icon:"http://statics.zhuishushenqi.com/invite/shareIcon.jpg"
		});
	});
})(window.Zepto);
