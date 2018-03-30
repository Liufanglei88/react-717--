const querystring=require('querystring')
const http=require('http');
const jwt=require('jsonwebtoken')
const fs=require('fs')
const _=require('lodash')
function queryApi(url,methods,params){
   return new Promise((resolve,reject)=>{
        let data="";
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
            }
          };
         
          let request=http.request(options,(response)=>{
              response.setEncoding('utf8');
              response.on('data', (chunk) => {
               data+=chunk;
              
              });
              response.on('end', () => {
                resolve(JSON.stringify(data));
              });
          })
          if(methods.toLowerCase()=='post'){
               request.write(querystring.stringify(params))
          }
         
          request.end()
    })
    

}
module.exports=function(app){
    //商品列表的接口

    app.post('/mall/index/getGoodsChannel',function(req,res){
        queryApi('/mall/index/getGoodsChannel',"post",req.body).then((data)=>{
            res.end(data)
        })
        
    })
    
    
    //注册接口
    app.post('/user/register',function(req,res){
      let user=fs.readFileSync('user.json',{encoding:"utf-8"})//读取文件
      user=JSON.parse(user);
      user.push(req.body);
      fs.writeFile('user.json',JSON.stringify(user),function(){
           res.end(JSON.stringify({
           "success":1,
           "info":"register success"
       }))
      })
      
     })
    //login接口
    app.post('/user/login',function(req,res){
      let user=fs.readFileSync('user.json',{encoding:"utf-8"})//读取文件
      user=JSON.parse(user);
      let login=req.body
      let resInfo={
          success:0,
          info:"用户名或密码错误",
          token:''
      }
      user.forEach(usr=>{
          if(usr.username==login.username&&usr.password==login.password){
             resInfo.success=1;
             resInfo.info="login success",
             resInfo.user={
                 name:usr.username,
                 time:new Date().toLocaleTimeString(),
                 nickName:"Luck"
             }
          }
      });
        if(resInfo.success==1){
           resInfo.token= jwt.sign(login,"9999",{
               expiresIn:60*60
           })
        }
        res.end(JSON.stringify(resInfo))
    })
    
    // 添加购物车
    app.post('/user/Cart/addCart',function(req,res){
        jwt.verify(req.body.token,'9999',(err,decoded)=>{
            if(err){
                console.log(err)
                res.end(JSON.stringify({
                    info:'登陆过期，请重新登录',
                    detail:err.TokenExpiredError
                }))
            }else {
                let cartInfo =JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
                if(cartInfo[decoded.username]){
                    let recordList = cartInfo[decoded.username]
                    let flag=false;// 新加商品
                    recordList.forEach((item,ind)=>{
                        if(item.goods_id==req.body.goods_info.goods_id){
                            ++item.count;
                            flag=true // 重复商品
                        }
                    })
                    if(!flag){
                        let record=req.body.goods_info;
                        record.count=1;
                        record.selected=0;
                        cartInfo[decoded.username].push(record)
                    }
                } else {
                    let record=req.body.goods_info;
                    record.count=1;
                    record.selected=0;
                    cartInfo[decoded.username]=[record]
                }
                fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartInfo),function(){
                    res.end('1')
                })
            }
        })
    })
    // 登录过后返回对应用户购物车商品列表
    app.post('/user/Cart/goodsList',function(req,res){
        jwt.verify(req.body.token,'9999',(err,decoded)=>{
            if(err){
                res.end(JSON.stringify({
                    info:"登陆过期，重新登录",
                    detail:err.TokenExpiredError,
                    error:1
                }))
            } else{
              try{
                let goodsRecord = JSON.parse(fs.readFileSync('./cart_info.json',{encoding:"utf-8"}))
                let goodsList = goodsRecord[decoded.username] || [];
                res.json(goodsList)
              }catch(error){
                  res.json(error)
              }
               
            }
        })
    })
   // 删除购物车指定商品
   app.post('/user/Cart/delGOODS',function(req,res){
       let cartRecord = JSON.parse(fs.readFileSync('./cart_info.json',{encoding:"utf-8"}))
       jwt.verify(req.body.token,'9999',function(err,decoded){
           if(err){
               res.json(err)
           } else {
               let cardList = cartRecord[decoded.username]
               let delGoods=_.remove(cardList,function(item){
                   return req.body.selectedID.indexOf(item.goods_id)>-1
               })
               cartRecord[decoded.username]=cardList;
               fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartRecord),function(){
                    res.json({
                        success:1,
                        info:'删除成功',
                        delGoods:delGoods,
                        leftGoods:cardList//删除后剩余商品返回给前端
                    })
              })
               
           }
       })
   })
}