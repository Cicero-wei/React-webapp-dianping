let express=require('express');
let app=express();

app.listen(3000,function(){
	console.log('服务端启动')
});
//广告的接口
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
let ad=require('./home/ad.js');
app.get('/api/ad',function(req,res){
	res.send(ad);
})
let list=require('./home/list.js')
//需要传递城市,需要传递页码
app.get('/api/list/:city/:page',function(req,res){
	res.send(list);
})
let info=require('./detail/info.js');
//商户详情
app.get('/api/detail/info/:id',function(req,res){
	res.send(info);
})
let comment=require('./detail/comment.js');
//评价列表 id 页码
app.get('/api/detail/comment/:id/:page',function(req,res){
	res.send(comment);
})
//订单列表 用户名username
let orderList=require('./orderlist/orderList');
app.get('/api/orderlist/:username',function(req,res){
	res.send(orderList);
})
//提交论论 
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'});
});
let search=require('./search/list');
app.get('/api/search/:id/:page',function(req,res){
	res.send(search);
})