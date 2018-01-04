//9.3用户代理检测
//9.3.1用户代理字符串的历史
//1.早期的浏览器
//2.Netscape Navigator 3和Internet Explorer 3
//3.Netscape Communicator 4和IE4-IE8
//4.Gecko
//5.Webkit
//6.Konqueror
//7.Chorme
//8.Opera
//9.iOS和Android
//9.3.2用户代理字符串检测技术
if(ieVer>=6){
    //代码
}
//1.识别呈现引擎
var client=function(){
    var engine={
        //呈现引擎
        ie:0,
        gecko:0,
        webkit:0,
        khtml:0,
        opera:0,
        //具体的版本号
        ver:null
    };
    //在此检测呈现引擎、平台和设备
    return{
        engine:engine
    };
}();
//作区分
if(clinet.engine.ie){
    //如果是IE，Clinet.ie的值应该大于0
    //针对IE的代码
}else if(clinet.engine.gecko>1.5){
    if(clinet.engine.ver=="1.8.1"){
        //针对这个版本执行某些操作
    }
}
//检测引擎
if(window.opera){
    engine.ver=window.opera.version();
    engine.opera=parseFloat(engine.ver);
}
//检测Wibkit用户代理字符串
var ua=navigator.userAgent;
if(window.opera){
    engine.ver=window.opera.version();
    engine.opera=parseFloat(engine.ver);
}else if(/AppleWebkit\/(\S+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.webkit=parseFloat(engine.ver);
}
//测试KHTML引擎和Webkit引擎
var ua=navigator.userAgent;
if(window.opera){
    enigne.ver=window.opera.version();
    engine.opera=parseFloat(engine.ver);
}else if(/AppleWebkit\/(\S+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.webkit=parseFloat(engine.ver);
}else if(/KHTML\/(\S+)/.test(ua)||Konqueror\/([^;]+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.khtml=parseFloat(engine.ver);
}
//测试Gecko引擎
var ua=navigator.userAgent;
if(window.opera){
    engine.ver=window.opera.version();
    engine.opera=parseFloat(engine.ver);
}else if(/AppleWebkit\/(\S+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.khtml=parseFloat(engine.ver);
}else if(/rv:([^\]+)\)Gecko\/\d{8}/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.gecko=parseFloat(engine.ver);
}
//测试IE引擎
var ua=navigator.userAngent;
if(window.opera){
    engine.ver=window.opera.version();
    engine.opera=parseFloat(engine.ver);
}else if(/AppleWebkit\/(\S+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.khtml=parseFloat(engine.ver);
}else if(/rv:([^\]+)\)Gecko\/\d{8}/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.gecko=parseFloat(engine.ver);
}else if(/MSIE([^;]+)/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.ie=parseFloat(engine.ver);
}
//2.识别浏览器
