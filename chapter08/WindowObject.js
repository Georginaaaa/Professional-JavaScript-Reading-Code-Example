//8.1window对象
//8.1.1全局作用域
var age=29;
function sayAge(){
    console.log(this.age);
}
console.log(window.age);
sayAge();
window.sayAge();
//全局对象(this)不能通过delete操作符删除，但是直接在window对象上的定义的属性可以
var age=29;
window.color="red";
delete window.age;
delete window.color;
console.log(window.age);
console.log(window.color);
//尝试访问未声明的变量会抛出错误，但是通过查询window对象，可以知道某个可能未声明的变量是否存在
//这里会抛出错误，因为oldValue未定义
var newValue=oldValue;
//这里不会抛出错误，因为这是一次属性查询
//newValue的值是undefined
var newValue=window.oldValue;
//8.1.2窗口关系及框架
//一个包含框架的页面
/*<html>
    <head>
        <title>Frameset Example</title>
        </head>
        <frameset rows="160,*">
        <frame src="frame.htm" name="topFrame">//第一个框架集
        <frameset cols="50%,50%">
        <frame src="anotherframe.htm" name="leftFrame">//第二个框架集
        <frame src="yetanotherframe.htm" name="rightFrame">//第三个框架集
        </frameset>
        </frameset>
</html>
*/
//8.1.3窗口位置
//跨浏览器取得窗口左边和上边的位置
var leftPos=(typeof window.screenLeft=="number")?
window.screenLeft:window.screenX;
var leftPos=(typtof window.screenTop=="number")?
window.screenTop:window.screenY;
//将窗口精确地移动到一个新位置
//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗口向下移动100像素
window.moveBy(0,100);
//将窗口移动到(200,300)
window.moveTo(200,300);
//将窗口向左移动50像素
window.moveBy(-50,0);
//8.1.4窗口大小
//取得页面视口大小
var pageWidth=window.innerWidth,
pageHeigth=window.innerHeight;
if(typeof pageWidth !="number"){
    if(document.compatMode=="CSS1Compat"){
        pageWidth=document.documentElement.clientWidth;
        pageHeigth=document.documentElement.clientHeight;
    }else{
        pageWidth=document.bodu.clientWidth;
        pageHeigth=document.body.clientHeight;
    }
}
