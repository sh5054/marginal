
function getQueryParams(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

function phone() {
    var userAgent = navigator.userAgent;
    var system;
    if (userAgent.indexOf('MicroMessenger') > -1) {
        system = 'weixin';
    } else if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1) {
        system = 'android';
    } else if (!!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        system = 'ios';
    }
    return system;
}

    /* 监听视频全屏 */
var $video = document.getElementById('video');
if ($video.requestFullscreen) {
    $video.addEventListener('fullscreenchange', function() {
        screen.orientation.lock('landscape-primary');
    })
} else if ($video.mozRequestFullScreen) {
    $video.addEventListener('mozfullscreenchange', function() {
        screen.orientation.lock('landscape-primary');
    })
} else if ($video.msRequestFullscreen) {
    $video.addEventListener('MSFullscreenChange', function() {
        screen.orientation.lock('landscape-primary');
    })
} else if ($video.webkitRequestFullscreen) {
    $video.addEventListener('webkitfullscreenchange', function() {
        screen.orientation.lock('landscape-primary');
    })
}
/* android mask */
if (phone() === 'ios') {
    document.getElementById('mask').style.display = 'none'
    document.getElementById('mask').style.zIndex = 1
}

/* wechat hide share */
if (phone() === 'weixin') {
    document.getElementById('normal').style.display = 'none';
    document.getElementById('weixin').style.display = 'block';
}

/* android mask */
document.getElementById('mask').addEventListener('click', function() {
        $video.click();
    })
    /* 监听视频 */
$video.addEventListener('click', function() {
        var show = $video.controls;
        var paused = $video.paused;
        var mask = document.getElementById('mask');
        mask && mask.parentNode.removeChild(mask);
        if (show) {
            $video.controls = false;
        } else {
            $video.controls = true;
        }
        if (paused) {
            $video.play();
        }
    })

$video.src = 'http://statics.zhuishushenqi.com/lwcs/' + 'lwcs' + '.mp4';
$video.poster = 'http://statics.zhuishushenqi.com/lwcs/' + 'lwcs' + '.mp4?vframe/jpg/offset/7/w/750/h/420';
