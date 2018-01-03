//8.1window对象
//8.1.1全局作用域
var age=29;
function sayAge(){
    alert(this.age);
}
alert(window.age);
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
var leftPos=(typeof window.screenTop=="number")?
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
//调整浏览器窗口大小
//调整到100*100
window.resizeTo(100,100);
//调整到200*150
window.resizeBy(100,50);
//调整到300*300
window.resizeTo(300,300);
//8.1.5导航和打开窗口
window.innerHeight
647
window.location
Location {replace: ƒ, assign: ƒ, href: "http://weixin.sogou.com/weixin?query=%E9%9D%99%E6%…sst0=1514380548824&page=2&ie=utf8&w=01019900&dr=1", ancestorOrigins: DOMStringList, origin: "http://weixin.sogou.com", …}ancestorOrigins: DOMStringList {length: 0}assign: ƒ ()hash: ""host: "weixin.sogou.com"hostname: "weixin.sogou.com"href: "http://weixin.sogou.com/weixin?query=%E9%9D%99%E6%80%81%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F&_sug_type_=&sut=17971&lkt=1%2C1514380548705%2C1514380548705&s_from=input&_sug_=n&type=2&sst0=1514380548824&page=2&ie=utf8&w=01019900&dr=1"origin: "http://weixin.sogou.com"pathname: "/weixin"port: ""protocol: "http:"reload: ƒ reload()replace: ƒ ()search: "?query=%E9%9D%99%E6%80%81%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F&_sug_type_=&sut=17971&lkt=1%2C1514380548705%2C1514380548705&s_from=input&_sug_=n&type=2&sst0=1514380548824&page=2&ie=utf8&w=01019900&dr=1"toString: ƒ toString()valueOf: ƒ valueOf()Symbol(Symbol.toPrimitive): undefined__proto__: Location
window.menubar
BarProp {visible: true}visible: true__proto__: BarProp
window.resizable
undefined
window.scrollbars
BarProp {visible: true}
window.status
""
window.toolbar
BarProp {visible: true}
window.top
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
window.width
undefined
window.outerWidth
1366
window.screenLeft
0

//等同于<a href="http://www.wrox.com" target="topFrame"></a>
window.open("http://www.wrox.com/","topFrame");
//1.弹出窗口
window.open("http://www.wrox.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
//通过window.open()控制新窗口
var wroxWin=window.open("http://www.worx.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
//调整大小
wroxWin.resizeTo(500,500);
//移动位置
wroxWin.moveTo(100,100);
//调用close()关闭新打开的窗口
wroxWin.close();
//调用top.close()关闭自己
wroxWin.close();
console.log(wroxWin.closed);
//window对象有一个opener属性
var wroxWin=window.open("http://www.worx.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
console.log(wroxWin.opener==window);
//手动实现跟踪弹出窗口
var wroxWin=window.open("http://www.worx.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
window.opener=null;
//2.安全限制
//3.弹出窗口屏蔽程序
var wroxWin=window.opener("http://www.wrox.com","_blank");
if(wroxWin==null){
    console.log("The popup was blocked!");
}
//将对window.open()的调用封装在一个try-catch中
var blocked=false;
try{
    var wroxWin=window.opener("http://www.wrox.com","_blank");
if(wroxWin==null){
    blocked=true;
}
}catch(ex){
    blocked=true;
}
if(blocked){
    console.log("The popup was blocked!");
}
//8.1.6间歇调用和超时调用
//不建议传递字符串！
setTimeout("console.log('Hello world!')",1000);
//推荐的调用方式
setTimeout(function(){
    console.log("Hello world!");
},1000
);
//设置超时调用
var timeoutId=setTimeout(function(){
    console.log("Hello world!");
},1000);
//注意：把它取消
clearTimeout(timeoutId);

//不建议传递字符串
setInterval("console.log('Hello world')",1000);
//推荐调用方式
setInterval(function(){
    console.log("Hello world!");
},1000);
//间歇调用会一直调用到页面卸载
var num=0;
var max=10;
var intervalId=null;
function incrementNumber(){
    num++;
    //如果执行次数达到了max设定的值，则取消后续尚未执行的调用
    if(num==max){
        clearInterval(intervalId);
        console.log("Done");
    }
}
intervalId=setInterval(incrementNumber,500);
//超时调用实现
var num=0;
var max=10;
function incrementNumber(){
    num++;
    //如果执行次数未达到max设定的值，则设置另一次超时调用
    if(num<max){
        setTimeout(incrementNumber,500);
    }else{
        alert("Done");
    }
}
setTimeout(incrementNumber,500);
//8.1.7系统对话框
confirm("Are you sure?")

if(confirm("Are you sure?")){
    alert("I'm so glad you're sure!");
}else{
    alert("I'm sorry to hear you're not sure.");
}

prompt("what is your name?","Georgina")

var result=prompt("what is your name?","");
if(result !==null){
    alert("welcome,"+result);
}
//显示“打印”对话框
window.print();
//显示“查找”对话框
window.find();