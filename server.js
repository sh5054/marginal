var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/invite/info', function(req, res){ 
	var data = {
		"ok":true,
		code:"success",
		data:{
			voucher:400,
			inviteNum:3,
			inviteUser:[
				{
					name:'xxx1',
					avatar:'http://192.168.22.6:8808/invite/icon.jpg',
					reward:400,
					status:true
				},
				{
					name:'xxx2',
					avatar:'http://192.168.22.6:8808/invite/icon.jpg',
					reward:300,
					status:false
				},
				{
					name:'xxx3',
					avatar:'http://192.168.22.6:8808/invite/icon.jpg',
					reward:200,
					status:true
				}
			]
		}
	}
     res.send(JSON.stringify(data)); 
}); 

app.get('/activity/code', function(req, res){ 
	var data = {
		ok:false,
		code:"_abhsjsasss",
		msg:"您已领取过书券了哦~~"
	}
     res.send(JSON.stringify(data)); 
}); 

app.get('/books',function(req, res){
	res.header("Access-Control-Allow-Origin", "*"); 
	var format = req.query.date;
	var data = {
    "ok": true,
    "doc": {
        "dicountForLimitedTime": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神1" + format,
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ],
        "freeForLimitedTime": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神2",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ],
        "wholeBookFreePurchase": [
            {
                "_id": "5397018741368add18aa65b1",
                "title": "最强武神3",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2015/02/1423101036439.jpg",
                "author": "么么",
                "latelyFollower": 2673
            },
            {
                "_id": "531eb6ee3353e1f556001073",
                "title": "足下的恋人",
                "cover": "/cover/59/590de3eab0f979606ac005eed152cd54.jpg",
                "author": "易修罗",
                "latelyFollower": 0
            },
            {
                "_id": "5398da93e086ffe54e7c6e9c",
                "title": "三国之张良后人定天下",
                "cover": "",
                "author": "石头人",
                "latelyFollower": 0
            },
            {
                "_id": "52843aaaacfddf943802af1d",
                "title": "逍遥法外",
                "cover": "/agent/http://static.zongheng.com/upload/cover/2012/01/1325402745896.jpg",
                "author": "胡吹",
                "latelyFollower": 0
            },
            {
                "_id": "538d28e16f7b546941074174",
                "title": "天道裁决者",
                "cover": "/agent/http://image.cmfu.com/books/3163880/3163880.jpg",
                "author": "言若语",
                "latelyFollower": 0
            }
        ]
    }
};
	setTimeout(function(){
		res.send(JSON.stringify(data));
	},2000);
	
})
app.post('/invite/join', urlencodedParser, function(req, res){
//	console.log(req.body);
	var response = {
		'ok':true,
		'code':"success"
	};
	res.end(JSON.stringify(response));
})

var server = app.listen('8808',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('访问地址为：http://%s:%s', host, port);
});