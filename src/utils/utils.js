// export function(name, value, options) {
//     // 如果第二个参数存在
//     if (typeof value != 'undefined') {
//       options = options || {};
//       if (value === null) {
//         // 设置失效时间
//         options.expires = -1;
//       }
//       var expires = '';
//       // 如果存在事件参数项，并且类型为 number，或者具体的时间，那么分别设置事件
//       if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
//         var date;
//         if (typeof options.expires == 'number') {
//           date = new Date();
//           date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
//         } else {
//           date = options.expires;
//         }
//         expires = '; expires=' + date.toUTCString();
//       }
//       var path = options.path ? '; path=' + options.path : '', // 设置路径
//         domain = options.domain ? '; domain=' + options.domain : '', // 设置域
//         secure = options.secure ? '; secure' : ''; // 设置安全措施，为 true 则直接设置，否则为空
  
//       // 把所有字符串信息都存入数组，然后调用 join() 方法转换为字符串，并写入 Cookie 信息
//       document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
//     } else { // 如果第二个参数不存在
//       var CookieValue = null;
//       if (document.cookie && document.cookie != '') {
//         var Cookie = document.cookie.split(';');
//         for (var i = 0; i < Cookies.length; i++) {
//           var Cookie = (Cookie[i] || "").replace( /^\s+|\s+$/g, "");
//           if (Cookie.substring(0, name.length + 1) == (name + '=')) {
//             CookieValue = decodeURIComponent(Cookie.substring(name.length + 1));
//             break;
//           }
//         }
//       }
//       return CookieValue;
//     }
//   };


//   　写入cookie信息：
	
// // 简单写入一条 Cookie 信息
// cookie("user", "baidu");
// // 写入一条 Cookie 信息，并且设置更多选项
// cookie("user", "baidu", {
//   expires: 10, // 有效期为 10 天
//   path: "/", // 整个站点有效
//   domain: "www.baidu.com", // 有效域名
//   secure: true // 加密数据传输
// });

// 　　读取：
// 1
	
// cookie("user");

// 　　删除：
// 1
	
// cookie("user", null);

export function getCookie(name){
    let cookieStr = document.cookie;
    if(cookieStr.length==0)return;
    let arr;
    let res=null;
    if(cookieStr.indexOf(';')>-1){
        arr = cookieStr.split(';');
        arr.forEach((cookie,index)=>{
            let tmp_arr = cookie.split('=')
            if(tmp_arr[0]==name){
                res=tmp_arr[1]
            }
        })
    }else{
        let tmp_arr=cookieStr.split('=')
        if(tmp_arr[0]==name){
            res=tmp_arr[1]
        }
    }
    return res;
}

// 退出登录
export function loginout(){
    let t=new Date();
    t.setTime(t.getTime()-1)
    document.cookie="token="+getCookie('token')+'; expires='+t.toUTCString()
}