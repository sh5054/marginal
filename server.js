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