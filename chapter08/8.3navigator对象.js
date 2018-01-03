//8.3navigator对象
function hasPlugin(name){
    name=name.toLowerCase();
    for(var i=0;i<navigator.plugins.length;i++);{
        if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
            return true;
        }
    }
    return false;
}
//检测Flash
alert(hasPlugin("Flash"));
//检测QuickTime
alert(hasPlugin("QuickTime"));

//检测IE中的插件
functiong hasIEPlugin(name){
    try{
        new ActiveXObject(name);
        return true;
    }catch(ex){
        retrun false;
    }
}
//检测Flash
alert(hasIEPlugin("ShockwaveFlash.ShocKwaveFlash"));
//检测QuickTime
alert(hasIEPlugin("QuickTime.QuickTime"));

//检测所有浏览器中的Flash
function hasFlash(){
    var result=hasFlash("Flash");
    if(!result){
        result=hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
    }
    return result;
}

//检测所有浏览器中的QuickTime
function hasQuickTime(){
    var result=hasPlugin("QuickTime");
        if(!result){
            result=hasIEPlugin("QuickTime.QuickTime");
        }
        return result;
    }
//8.3.2注册处理程序
navigator.registerConentHandler("application/rss+xml","http://www.somereader.com?feed=%s","Some Reader");
navigator.registerProtocolHandlre("mailto","http://www.somemailclient.com?cmd=%s","Some Mail Client");

