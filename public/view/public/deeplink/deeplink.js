(function(){
    function getQueryParams(name, url){
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results == null ? null : results[1];
    }
    function deepLinkParams(){
        return window.location.search;
    }
    function isOutTime(date){
        var nowTime = (new Date()).getTime();
        if(nowTime > (new Date(date.replace(/-/g,'/'))).getTime()){
            return true;
        }else{
            return false;
        }
    }
    var  createIframe=(function(){
        var iframe;
        return function(){
            if(iframe){
                return iframe;
            }else{
                iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                return iframe;
            }
        }
    })()
    function pageInit(doms){
        // if(isOutTime(getQueryParams('endTime',decodeURIComponent(window.location.href)))){
        //     document.getElementsByTagName('body')[0].innerHTML = '<p>此活动已过期~</p>';
        //     return;
        // }

        var deepLink = 'http://th5.zhuishushenqi.com/deeplink';

        var ua = navigator.userAgent.toLowerCase();
        if(/iphone|ipad|ipod/.test(ua)) {
            console.log('iOS');
            deepLink += deepLinkParams();
            for(var i=0;i<doms.length;i++){
                doms[i].href = deepLink;
            }
            // dom.href = deepLink;
        } else if(/android/.test(ua)) {
            console.log('Android');
            var isInstalled;
            var jumpLink = 'http://app.qq.com/#id=detail&appid=100892131';
            var ifrSrc = 'zssqdeeplink://deeplink' + deepLinkParams();


            var openApp=function(){
                var openIframe=createIframe();
                var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
                //判断是否是android，具体的判断函数自行百度
                if (isChrome) {
                    window.location.href = ifrSrc;
                } else {
                    //抛出你的scheme
                    openIframe.src = ifrSrc;
                }
                setTimeout(function () {
                    window.location.href =jumpLink;  
                }, 500);
            }
            for(var i=0;i<doms.length;i++){
                // doms[i].href = ifrSrc;
                doms[i].onclick = function(){
                    openApp(function(opened){
                        // alert(opened);
                    })
                }
            }
        }
    }
    window.deepLink = pageInit;
    // pageInit();
})()


// if ([funcName isEqualToString:@"forumdetail"]) {
//     //社区帖子详情
//     NSString *forumId = [dict valueForKey:@"forumid"];
//     if (forumId.length) {
//         [rootView jumpToForumWithId:forumId];
//     }
// } else if ([funcName isEqualToString:@"booklist"]) {
//     //主题书单
//     NSString *listId = [dict valueForKey:@"booklistid"];
//     if (listId.length) {
//         [rootView jumpToBookListWithId:listId];
//     }
// } else if ([funcName isEqualToString:@"bookdetail"]) {
//     //书籍详情
//     NSString *bookId = [dict valueForKey:@"bookid"];
//     if (bookId.length) {
//         [rootView jumpToBookDetailWithId:bookId];
//     }
// } else if ([funcName isEqualToString:@"recharge"]) {
//     //充值页面
//     [rootView jumpToRecharge];
// } else if ([funcName isEqualToString:@"monthlypay"]) {
//     //包月页面
//     [rootView jumpToOpenVIP];
// } else if ([funcName isEqualToString:@"bookcity"]) {
//     //书城主页
//     [rootView jumpToBookCity];
// } else if ([funcName isEqualToString:@"bindphone"]) {
//     //绑定手机
//     [rootView jumpToBindPhone];
// } else if ([funcName isEqualToString:@"welfare"]) {
//     //福利中心
//     [rootView jumpToWelfare];
// } else if ([funcName isEqualToString:@"innerurl"]) {
//     //跳转网页
//     NSString *url = [dict valueForKey:@"url"];
//     if (url.length) {
//         [rootView jumpToWeb:url];
//     }
// }