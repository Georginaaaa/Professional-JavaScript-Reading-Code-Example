//9.2怪癖检测/识别浏览器的特殊行为
var hasDontEnumQuirk=function(){
    var o={toString:function(){}};
    for(var prop in o){
        if(prop=="toString"){
            return false;
        }
    }
    return true;
}();
//枚举会被隐藏的属性
var hasEnumShadowsQuirk=function(){
    var o={toString:function(){}};
    var count=0;
    for(var prop in o){
        if(prop=="toString"){
            count++;
        }
    }
    return(count>1);
}();