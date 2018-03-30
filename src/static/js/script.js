
$(function(){
    var num_cate1=1;
    var num_cate2=1;
    var num_cate3=1;
    var num_cate4=1;
    var num_cate5=1;
    var num_cate6=1;
    var num_cate7=1;
    var num_cate8=1;
 
         //console.log($('#main').scrollTop());
     $('.maintop').scroll(function(){
         var w = $(".maintop").scrollTop(); //获取 卷上去的距离 
         var h4one = document.getElementById('h4one').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4two =  document.getElementById('h4two').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4three =  document.getElementById('h4three').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4four =  document.getElementById('h4four').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4five =  document.getElementById('h4five').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4six =  document.getElementById('h4six').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4seven =  document.getElementById('h4seven').offsetTop;  //获取 H4标签距离 顶部的距离
         var h4eight =  document.getElementById('h4eight').offsetTop;  //获取 H4标签距离 顶部的距离
 
         var sum =  h4one - w -90 ;
         var sumtow =  h4two - w -90 ;
         var sumfree =  h4three - w - 90 ;
         var sumfour =  h4four - w - 90 ;
         var sumfive =  h4five - w - 90 ;
         var sumsix =  h4six - w - 90 ;
         var sumseven =  h4seven - w - 90 ;
         var sumeight =  h4eight - w - 90 ;
         if (w > sum ){
             if(num_cate1==1)
             {
                 num_cate1=0;
                 channels(2,'#homelandlrt_one') //调用加载数据
             }
         }
         if( w >sumtow){
             if(num_cate2== 1 )
             {
                  num_cate2=0;
                 channels(3,'#homelandlrt_tow') //调用加载数据
             }
         }
         if( w >sumfree){
             if(num_cate3 == 1 )
             {
                  num_cate3=0;
                 channels(4,'#homelandlrt_tree') //调用加载数据
             }
         }
         if( w >sumfour){
 
             if(num_cate4 == 1 )
             {
                  num_cate4=0;
                 channels(5,'#homelandlrt_four') //调用加载数据
             }
         }
         if( w >sumfive){
 
             if(num_cate5 == 1 )
             {
                  num_cate5=0;
                 channels(6,'#homelandlrt_five') //调用加载数据
             }
         }
         if( w >sumsix){
 
             if(num_cate6 == 1 )
             {
                  num_cate6=0;
                 channels(7,'#homelandlrt_six') //调用加载数据
             }
         }
         if( w >sumseven){
 
             if(num_cate7 == 1 )
             {
 
                  num_cate7=0;
                 channels(8,'#homelandlrt_seven') //调用加载数据
             }
         }
         if( w >sumeight){
 
             if(num_cate8 == 1 )
             {
                  num_cate8=0;
                 channels(9,'#homelandlrt_eight') //调用加载数据
             }
         }
     });
 
 function  channels(cid,names){
 
 $.ajax({
             url:'/mall/index/getGoodsChannel',
             async:false,
             data:{'channel_id':cid},
             dataType:'json',
             type:'post',
             success:function(data)
             {
                 var str='';
                 //console.log(data.data);
                 $.each(data.data.data,function(i,val){
                 
 
 
                     str +='<a href="/mobile/goods/index.html?goods_id='+val.goods_id+'&key_code=282735872313188137&from_uid=86823"><dl>'
                             +'<dt><img src="http://www.lb717.com/'+val.obj_data+'"></dt>'
                             +'<dd>'
                                 +'<p>'+val.goods_name+'</p>'
                                 +'<p><span class="bg_monery">￥<label>'+val.discount_price+'</label></span><img class="cart" src="/static/mobile/images/homeImg/homeland3.png"></p>'
                                 +'<input type="hidden" id="goods_id"  value="'+val.goods_id+'">'
                                 +'<input type="hidden" id="attr_id" value="1">'
                             +'</dd>'
                         +'</dl></a>'
                 
                 })
                 $(names).append(str);
             }
           
         })
     }
 
 
 })