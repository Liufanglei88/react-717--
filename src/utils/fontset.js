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
// (function flexible (window, document) {
//     let docEl = document.documentElement
//     let dpr = window.devicePixelRatio || 1
//     // adjust body font size
//     function setBodyFontSize () {
//         if (document.body) {
//             document.body.style.fontSize = (12 * dpr) + 'px'
//         }
//         else {
//             document.addEventListener('DOMContentLoaded', setBodyFontSize)
//         }
//     }
//     setBodyFontSize();
//     // set 1rem = viewWidth / 10
//     function setRemUnit () {
//         let rem = docEl.clientWidth / 10
//         docEl.style.fontSize = rem + 'px'
//     }
//     setRemUnit()
//     // reset rem unit on page resize
//     window.addEventListener('resize', setRemUnit)
//     window.addEventListener('pageshow', function (e) {
//         if (e.persisted) {
//             setRemUnit()
//         }
//     })
//     // detect 0.5px supports
//     if (dpr >= 2) {
//         var fakeBody = document.createElement('body')
//         var testElement = document.createElement('div')
//         testElement.style.border = '.5px solid transparent'
//         fakeBody.appendChild(testElement)
//         docEl.appendChild(fakeBody)
//         if (testElement.offsetHeight === 1) {
//             docEl.classList.add('hairlines')
//         }
//         docEl.removeChild(fakeBody)
//     }
// }(window, document))
// ;(function () {
//     var fontScale=100;
//     if(document.documentElement.clientWidth>750){
//         document.documentElement.style.fontSize="100px";
//     }else{
//         fontScale=document.documentElement.clientWidth/7.5;
//         document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
//     }
// })(); 