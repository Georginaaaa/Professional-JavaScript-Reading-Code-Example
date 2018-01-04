//9.客户检测
//9.1能力检测
//浏览器的能力基本模式
if(object.propertyInQuestion){
    //使用object.propertyInQuestion
}
//类似能力检测代码
function getElement(id){
    if(document.getElementById){
        return document.getElementById(id);
    }else if(document.all){
        return document.all[id];
    }else{
        throw new Error("No way to retrieve element!");
    }
}
//9.1.1更可靠的能力检测/检测某个属性是否存在并不能确定对象是否支持排序
var result=isSortable({sort:true});
//这样更好：检查sort是不是函数
function isSortable(object){
    return typeof object.sort=="function";
}
//在浏览器环境下测试任何对象的某个特性是否存在
functiong isHostMethod(object,property){
    var t=typeof object[property];
    retruen t=='function'||
    (!!(t=='object'&&object[property]))||
    t=='unknwon';
}
//使用这个函数
result=isHostMethod(xhr,"open");
result=isHostMethod(xhr,"foo");
//9.1.2能力检测，不是浏览器检测
//确定浏览器是否支持netscape风格的插件
var hasNSPlugins=!!(navigator.plugins&&navigator.plugins.length);
//确定浏览器是否具有DOM1级规定的能力
var hasDOM1=!!(document.getElementById&&document.createElement&&
document.getElementsByTagName);