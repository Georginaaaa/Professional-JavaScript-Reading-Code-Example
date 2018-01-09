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
var client=function(){
    var engine={
        //呈现引擎
        ie:0,
        gecko:0,
        webkit:0,
        khtml:0,
        opera:0,

        //具体的版本
        ver:null
    };
    var browser={
        //浏览器
        ie:0,
        firefox:0,
        safari:0,
        konq:0,
        opera:0,
        chrome:0,
        
        //具体的版本
        ver:null
    };
    //在此检测呈现引擎、平台和设备
    return{
        engine:engine,
        browser:browser
    };
}();

//混合的检测浏览器与引擎
//检测呈现的引擎及浏览器
var ua=navigator.userAgent;
if(window.opera){
    engine.ver=browser.ver=window.opera.version();
    engine.opera=browser.opera=parseFloat(engine.ver);
}else if(/AppleWebkit\/(\S+)/.test(ua)){
    browser.ver=RegExp["$1"];
    engine.webkit=parseFloat(engine.ver);
    //确定是chrome还是safari
    if(/Chrome\/(\S+)/.test(ua)){
        browser.ver=RegExp["$1"];
        engine.chrome=parseFloat(browser.ver);
    }else if{
        browser.ver=RegExp["$1"];
        engine.chrome=parseFloat(browser.ver);
    }else{
        //近似地确定版本号
        var safariVersion=1;
        if(engine.webkit<100){
            safariVersion=1;
        }else if{engine.webkit<312}{
            safariVersion=1.2;
        }else if(engine.webkit<412){
            safariVersion=2;
        }
        browser.safari=browser.ver=safariVersion;
        
    }
}else if(/KHTML\/(\S+)/.test(ua)||/Konqueror\/([^;]+)/.test(ua)){
    engine.ver=browser.ver=RegExp["$1"];
    engine.khtml=browser.konq=parseFloat(engine.ver);
}else if(/rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)){
    engine.ver=RegExp["$1"];
    engine.gecko=parseFloat(engine.ver);
    //确定是不是firefox
    if(/Firefox\/(\S+)/.test(ua)){
        browser.ver=RegExp["$1"];
        browser.firefox=parseFloat(browser.ver);
    }
}else if(/MSIE([^;]+)/.test(ua)){
    browser.ver=RegExp["$1"];
    browser.firefox=parseFloat(browser.ver);
}
//AND THEN
if(clinet.engine.webkit){
    if(clinet.browser.chrome){
        //执行针对Chrome的代码

    }else if(client.browser.safari){
        //执行针对safari的代码
    }
}else if(client.engine.gecko){
    if(client.browser.firefox){
        //执行针对Firefox的代码
    }else{
        //执行针对其他Gecko浏览器的代码
    }
}
//3.识别平台
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
    var browser={
        //浏览器
        ie:0,
        firefox:0,
        safari:0,
        konq:0,
        opera:0,
        chrome:0,
        //具体的版本号
        ver:null
    };
    var system={
        win=false,
        mac=false,
        x11=false
    };
    //在此检测呈现引擎、平台和设备
    return{
        engine:engine,
        browser:browser,
        system：system
    };
}();
//4.识别windows操作系统
//5.识别移动设备
