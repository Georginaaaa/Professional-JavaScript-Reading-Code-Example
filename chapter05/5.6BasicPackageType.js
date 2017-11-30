/*
(1)创建String类型的一个实例；  var s1=new String("some text");
(2)在实例上调用指定的方法；    var s2=s1.substring(2);
(3)销毁这个实例               s1=null; 
*/
var s1="some text";
s1.color="red";
console.log(s1.color);

//所有基本包装类型对象在转化为布尔值类型时值都是true
var obj=new Object("some text");
console.log(obj instanceof String);
//使用new调用基本包装类型的构造函数，与直接调用同名的转型函数不一样
var value="25";
var number=Number(value);
console.log(typeof number);

var obj=new Number(value);
console.log(typeof obj);
