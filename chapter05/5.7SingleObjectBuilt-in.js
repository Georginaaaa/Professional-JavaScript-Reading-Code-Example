//5.7ObjectURIEncoding
//5.7.1GobalObjectURIEncoding
//1.URI编码方法
//2.eval()方法
eval("console.log('hi')");
//等价于console.log('hi');
var msg="hello world";
eval("console.log(msg)");
//内部定义，外部调用
eval("function sayHi(){console.log('hi')}");
sayHi();
eval("var msg='hello world';");

eval("var msg='hello world';");
console.log(msg);

"use strict"
eval="hi";

//3.global对象的属性(特殊的值undefined,NaN,Infinity/构造函数object,function)
//4.window对象
var color="red";
function sayColor(){
    console.log(window.color);
}
window.sayColor();
//取得global对象方法
var global=function(){
    return this;
}();


