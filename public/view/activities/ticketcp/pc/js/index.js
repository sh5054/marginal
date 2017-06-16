(function($){
	var protocol = location.protocol.split(':')[0]+'://';
	var url = protocol + "api.zhuishushenqi.com";
	var fw = {
		"showCodeConf":function(show,code){	
			$("#mask").css("display",(show ? "block" : "none"));
			$("#codeConf input").val(code || "");
			$("#codeConf").css("display",(show ? "block" : "none"));
		},
		"showReConf":function(show,text){
			$("#reConf span").text(text);
			$("#reConf").css("display",(show ? "block" : "none"));
		},
		"GetQueryString":function(name){
		    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		    var r = window.location.search.substr(1).match(reg);
		    if(r!=null)return  unescape(decodeURI(r[2])); return null;
		}
	};
	$("#packet-btn,#ticket-btn").on("click",function(){
		_czc.push(["_trackEvent", "书券", "领取", "PC", 1, "receive"]);
		$.ajax({
			type:"get",
			url: url + "/activity/code",
			data:{
				tag:fw.GetQueryString("tag")
			},
			success:function(data){
				if(data.ok){
					fw.showCodeConf(true,data.code);
				}else{
					fw.showReConf(true,data.msg);
				}
			},
			error:function(){
				fw.showReConf(true,"网络错误");
			}
		});
		$("#codeConf .close-btn,#reConf .close-btn").on("click",function(){
			fw["show" + $(this).parent().attr("tip")](false);
		});
	});
})(window.jQuery)