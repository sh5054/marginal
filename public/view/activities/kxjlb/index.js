/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

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
		pageData:{
			"time":["巫妖大战之时","羽化飞升前","突然失忆后","三皇五帝之时","大学军训时","求婚成功后","月黑风高夜","搓完澡后","黄道吉日时","修道出关后"],
			"person":["白浅","方木","张小凡","凤卿尘","楚乔","唐晶","小河神","胡八一","无心法师","陈长生"],
			"place":["四海八荒","狐狸洞的软塌","三十三天外的上清界","宇文家的茅房","唐门的马厩","雪老城的城门口","酱子日料的吧台","天津卫的大河里","西方极乐净土","皇宫里的净身房"],
			"thi":["打盗洞","伏妖除魔","秀恩爱","点烟辩冤","大战丧尸","讲台湾腔","隐居生活","谈三界大事","跪地拜师","庆贺生辰"]
		},
		user:{
			"nickname":"",
			"shareInfo":"",
			"isfinsh":false
		},
		Init:function(){
			var self= this;
			var light = $("#light");
			setInterval(function(){
				light.toggleClass("dark");
			},1000);
			this.getUserInfo();
			this.pagePaint_initPage();
			this.pagePaint_act2();
//			this.pagePaint_finsh();
			this.Evt_set();
			
			var play = function () {
		        document.getElementById('audio').play();
		    };
			document.addEventListener("WeixinJSBridgeReady", function () {
		//		音乐播放
		        play();
		    }, false);
		},
		getUserInfo:function(){
			var self = this;
			var token = Cookies.get("_account") ? JSON.parse(Cookies.get("_account")).token : null;
			$.ajax({
				type:'get',
				url:'http://api.zhuishushenqi.com/user/info?token=' + token,
				dataType:'json',
				success:function(data){
					if( data && data.ok ){
		                self.user.nickname = data.nickname;
		            }
				},
				complete:function(){
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
					self.pagePaint_finsh();
				}
			})
		},
		refresh_page:function(){
			setTimeout(function(){
				$("#pageMain").removeClass("hideAct1").removeClass("showAct2");
			},1500);			
		},
		wx_share:function(isfinsh){
			var self = this;
			wx.ready(function(){
	        	wx.onMenuShareTimeline({
				    title: '「' + (self.user.nickname ? self.user.nickname : "你的好友") + '」刚编的神剧，这脑洞突破天际！', // 分享标题
				    link: 'http://api.zhuishushenqi.com/wechats/event/kxjlb' + (isfinsh ? self.user.shareInfo : "") , // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: 'http://statics.zhuishushenqi.com/icon.png?imageView2/1/w/80/h/80/q/100', // 分享图标
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
				wx.onMenuShareAppMessage({
			        title: '想编一部属于你的旷世神剧？', // 分享标题
			        desc: '「' + (self.user.nickname ? self.user.nickname : "你的好友") + '」刚编的神剧，这脑洞突破天际！', // 分享描述
			        link: 'http://api.zhuishushenqi.com/wechats/event/kxjlb' + (isfinsh ? self.user.shareInfo : ""), // 分享链接
			        imgUrl: 'http://statics.zhuishushenqi.com/icon.png?imageView2/1/w/80/h/80/q/100', // 分享图标
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
		Evt_set:function(){
			var self = this;
			$("#startBtn").on("click",function(){
				var pageMain = $("#pageMain");
				pageMain.addClass("hideAct1");
				setTimeout(function(){//第二页动画
					pageMain.addClass("showAct2");
				},1000);
				self.wx_share(true);
				setTimeout(function(){//完成页
					$("#finshPage").removeClass("hide");					
					self.refresh_page();
				},6000);
				
			});
			$("#finshPage .share").on("click",function(){
				$("#finshPage .mask").css("display","block");
			});
			$("#finshPage .again").on("click",function(){
				$("#finshPage").addClass("hide");
				$("#finshPage .top_btns").removeClass("sharePage");
				self.pagePaint_act2();
			    self.pagePaint_finsh();
			})
			$("#finshPage .mask").on("click",function(){
				$("#finshPage .mask").css("display","none");
			});
			$('.music').on('tap',function(){
                $(this).toggleClass('pause');
                var audio = document.getElementById('audio');
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            });
		},
		pagePaint_initPage:function(){
			var self = this;
			var shareInfo = tools.getQueryParams("titlekey");
			if(shareInfo){
				var token = tools.getQueryParams("nickname");
				$.ajax({
					type:'get',
					url:'http://api.zhuishushenqi.com/user/info?token=' + token,
					dataType:'json',
					success:function(data){
						if( data && data.ok ){
			                var userName = data.nickname;
			                var base = self.pageData;
							var textData = ["你这剧票房一定突破50亿","这片有人能坚持看完算我输","我墙都不扶就服你的神剧","果然是天下无敌创世大片","23333脑洞惊奇魔幻到底","做人呐就要开心，你开心就好","我觉得OK我觉得真的可以"];
							var title = tools.getQueryParams("titlekey");
							var keys = tools.getQueryParams("keys").split("");
							var finshtext = base.time[keys[0]] + userName + "和" + base.person[keys[1]] + "在" + base.place[keys[2]] + base.thi[keys[3]];
							$("#finshPage .top_text").html(textData[title]);
							$("#finshPage .finsh_daban span").text(finshtext);
							$("#finshPage .top_btns").addClass("sharePage");
							$("#finshPage").removeClass("hide");
			            }
					}
				})
			}
		},
		pagePaint_act2:function(){
			return;
			var self = this;
			var items = $("#act2 .item");
			items.each(function(index,item){
				var dom = $(item);
				dom.html("<span>"+ self.pageData[dom.attr("tag")][Math.floor(Math.random()*10)] +"</span>")
			})
		},
		pagePaint_finsh:function(){
			var self = this;
			var userName = self.user.nickname ? self.user.nickname : "你的好友";
			var base = this.pageData;
			var textData = ["你这剧票房一定突破50亿","这片有人能坚持看完算我输","我墙都不扶就服你的神剧","果然是天下无敌创世大片","23333脑洞惊奇魔幻到底","做人呐就要开心，你开心就好","我觉得OK我觉得真的可以"];
			var titlekey = Math.floor(Math.random()*8);
			$("#finshPage .top_text").html(textData[titlekey]);
			var timekey = Math.floor(Math.random()*10);
			var personkey = Math.floor(Math.random()*10);
			var placekey = Math.floor(Math.random()*10);
			var thikey = Math.floor(Math.random()*10);
			var finshtext = base.time[timekey] + userName + "和" + base.person[personkey] + "在" + base.place[placekey] + base.thi[thikey];
			var keys = ""+timekey+personkey+placekey+thikey;
			var token = Cookies.get("_account") ? JSON.parse(Cookies.get("_account")).token : null;
			$("#finshPage .finsh_daban span").text(finshtext);
			self.user.shareInfo = "?titlekey=" + titlekey +"&keys="+keys + "&nickname=" +token;
		}
	}
	page.Init();
})(window.Zepto)
