# 717网上商城项目介绍（项目启动 npm run dev 打包 npm run build）


  #1.1 项目开发流程简介

    1.1.1  项目经理提出项目需求（也有可能是客户端要求） --需求说明会(分工 评估工时)

    1.1.2  由产品经理或者UE 出产品原型图

    1.1.3  由UI设计根据原型出设计图 | 后端开始搭建数据库，开发接口

    1.1.4  前端开始实现页面布局，功能

    1.1.5  前端和后端进行联调 测试接口是否正常，前端页面是否正常

    1.1.6  测试人员进行黑盒或者白盒测试,提bug

    1.1.7  开发人员解决BUG，打包上线

    1.1.8  产品完成

 # 1.2. 技术栈

  React  redux  react-redux  react-router-dom redux-saga swiper nodeJS

  fetch封装 jsonp封装 cookie封装  

  1.2.1 - nodeJs搭建的一个简单的静态服务器，并有一些模拟接口
  
  1.2.2 - 脚手架 -webpack 自行搭建可以切换不同环境的脚手架
  
  1.2.3 - 仿vue搭建路由，实现路由的跳转，及路由的权限管理

  # 1.3 - Mobile端自适应

     (function (doc, win, image_width) {

    var docEl = doc.documentElement, //获取html标签

		//orientationchange方向改变事件
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',

	recalc = function () {
			//当前设备视口宽度

	    var clientWidth = docEl.clientWidth;

	    if (!clientWidth) return;
	    docEl.style.fontSize = 100 * (clientWidth / image_width) + 'px';
	};

    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window, 640);

# 1.4 页面

      首页 
          搜索页 
      分类页
      购物车
      我的
         登陆
         注册

    2 common组件封装

       轮播图模块

       商品模块

       路由模块(具有权限管理)
        routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              render={location => {
                return item.authorization && !ISlOGIN() ? (
                  <Redirect to={{pathname:"/login",state:{from:item.path}}} />//state 由进来的路由所决定
                ) : (
                  <item.component {...location} routes={item.children} />
                );
              }}
            />
          );
        })
       购物车商品模块

       loading模块

   3  插件 

      react-toast-mobile 实现提示效果
      
      react-lazyload  实现懒加载

# 1.5   知识点介绍

  # 1.5.1 fetch请求 

   Fetch 是 window 的一个方法 

   主要特点是 :
     1、第一个参数是 URL 
     2、第二个参数可选参数 可以控制不同的 init 对象
     3、使用了 js 中的 promise 对象  

   fetch 的第二参数中

      1、默认的请求为 get 请求 可以使用 method:post 来进行配置  

      2、第一步中的 response 有许多方法 json() text() formData() 

      3、Fetch 跨域的时候默认不会带 cookie ，如果你想在 fetch 请求里附带 cookies 之类的凭证信息，
        可以将 credentials 参数设置成 “include” 值。还有就是 fetch 返回的 promise 在某些错误的 http 状态下如 400、500 等不会 reject 的错误状 态，相反它会被 resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；所以一般会对 fetch 请求做一层封装，在 resolve 中真对于大于 200 和 小于 300 的状态返回正确信息，其他则返回错误信息所有的 IE 浏览器都不会支持 fetch() 方法  
    
   # 1.5.2  浏览器本地存储 (在项目中也有使用 例如搜索页)

     介绍

     在较高版本的浏览器中，js 提供了 sessionStorage 和 globalStorage。
     在 HTML5 中提供了 localStorage 来取代 globalStorage。
     html5 中的 Web Storage 包括了两种存储方式：sessionStorage 和 localStorage。 
     sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在同一 个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储 而 localStorage 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。  
    