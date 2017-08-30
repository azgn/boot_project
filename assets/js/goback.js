
var u = navigator.userAgent;
var goBack=document.getElementById("goBack");
//针对ios原生浏览器处理
if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u)){
    goBack.setAttribute("onclick","javascript:window.location=document.referrer;");
}