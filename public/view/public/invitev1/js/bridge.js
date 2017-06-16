var HybridApi = {
    getQueryParams: function( name, url ) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    },
    _bridgePostMsg : function (url) {
        console.log(url)
        var self = this;
        if (self.getQueryParams('platform') && self.getQueryParams('platform')==='ios') {
            window.location = url;
        } else {
            var iframe = document.createElement("IFRAME");
            iframe.setAttribute("src", url);
            // For some reason we need to set a non-empty size for the iOS6 simulator...
            iframe.setAttribute("height", "1px");
            iframe.setAttribute("width", "1px");
            document.documentElement.appendChild(iframe);
            setTimeout(function(){
                iframe.parentNode.removeChild(iframe);
                iframe = null;
            },10)
        }
    },
    _getHybridUrl : function (params) {
        var k, paramStr = '', url = 'jsbridge://';
        url += params.action + '?t=' + new Date().getTime(); //时间戳，防止url不起效
        if (params.callback) {
            url += '&callback=window.HybridCallBack.' + params.callback;
            delete params.callback;
        }
        if (params.param) {
            paramStr = typeof params.param == 'object' ? JSON.stringify(params.param) : params.param;
            url += '&param=' + encodeURIComponent(paramStr);
        }
        return url;
    },
    request : function (params) {
        var self = this;
        //生成唯一执行函数，执行后销毁
        var tt = (new Date().getTime());
        var t = 'hybrid' + tt;
        var tmpFn;

        //友盟埋点
        if(params.source === 'originalBanner'){
            _czc.push(["_trackEvent", "banner", "点击", params.title , 0, params.id]);
        }else if(params.source === 'originalList'){
            _czc.push(["_trackEvent", "list", "点击", params.title , 0, params.id]);
        }

        //处理有回调的情况
        if (params.callback) {
            tmpFn = params.callback;
            params.callback = t;
            window.HybridCallBack[t] = function (data) {
                tmpFn(data);
                delete window.HybridCallBack[t];
            }
        }
        self._bridgePostMsg(self._getHybridUrl(params));
    },
    setUserBehavior:function(code){
        var self = this;
        self.request({
            action:'userBehavior',
            param:JSON.stringify({"code":code})
        })
    },
    login:function(fn){
        var self = this;
        self.request({
            action:'login',
            callback:function(data){
                fn && fn(data);
            }
        })
    },
    getUserInfo : function( fn ){
        var self = this;
        self.request({
            action:'getUserInfo',
            callback:function(data){
                fn && fn(data);
            }
        })
    },
    share : function(params){
        var self = this;
        self.request({
            action:'share',
            param:JSON.stringify(params)
        })
    },
    setBurialPoint : function(params){
        var self = this;
        self.request({
            action:'setBurialPoint',
            param:JSON.stringify(params)
        })
    },
    setBounces : function( flag ){
        var self = this;
        self.request({
            action:'setBounces',
            param:JSON.stringify({"enabled": flag })
        })
    },
    init:function(){
        window.HybridApi = HybridApi;
        window.HybridCallBack = window.HybridCallBack || {};
    }
}
