(function($){
	var protocol = location.protocol.split(':')[0]+'://';
	var url = protocol + 'api.zhuishushenqi.com/user/invite/info/';
	var GetQueryString = function(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}

	$.ajax({
		type:"get",
		url:url + GetQueryString("userId"),
		dataType:"json",
		success:function(data){
			if(!data.ok) return;
			var inviteNum = data.data.inviteNum;
			var users = data.data.inviteUser;
			var html = ["<h5>已邀请" + (inviteNum ? ("<em>" + inviteNum + "</em>") : "0") + "个朋友</h5><div class='inviteList'>"];
			if(!users.length){
				html.push("<div class='explain'><i class='gift'></i><span>邀请好友满7位，送<em>1000书券</em>大礼包</span></div>");
			}else{
				html.push("<ul class='userList'>");
				for(var i=0;i<users.length;i++){
					html.push("<li><i><img src='" + (users[i].avatar || 'img/avatar.jpg') + "'/></i>");
					html.push("<span class='userName'>" + users[i].name + "</span>");
					html.push("<span class='info" + (users[i].status ? "" : " noReceive") + "'>");
					html.push("<em>" + users[i].reward + "书券</em>" + (users[i].status ? "已入账" : "未入账") + "</span></li>");
				}
				html.push("</ul></div><div class='rule'><a href='rule.html'>了解详细规则</a></div>");
			}
			$("#inviteUser").html(html.join(""));
		}
	});
	$("#shareBtn").on("click",function(){
		_czc.push(["_trackEvent", "invite", "share", "v2", 1, "share"]);
		HybridApi.share({
			title:"送你200书券，我在追书神器等你！",
			content:"送你200书券，我在追书神器等你！",
			link: window.location.origin + "/public/invitev2/receive.html" + window.location.search,
			icon:"http://statics.zhuishushenqi.com/invite/shareIcon.jpg"
		});
	});
})(window.Zepto);
