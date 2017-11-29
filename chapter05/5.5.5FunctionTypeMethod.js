//5.5.5函数属性和方法 每个函数都包含length和prototype属性
//length属性接收命名参数的个数
function sayName(name){
    alert(name);
}
function sum(num1,num2){
    return num1+num2;
}
function sayHi(){
    alert("hi");
}
console.log(sayName.length);
console.log(sum.length);
console.log(sayHi.length);

//prototype保存实例方法

//apply()接收2个参数，一个是在其中运行的作用域，另一个是参数数组
function sum(num1,num2){
    return num1+num2;
}
function callSum1(num1,num2){
    return sum.apply(this,arguments);//传入arguments对象
}
function callSum2(num1,num2){
    return sum.apply(this,[num1,num2]);//传入数组
}
console.log(callSum1(10,10));
console.log(callSum2(10,10));
//使用call()时，传递给函数的参数必须逐个列举出来
function sum(num1,num2){
    return num1+num2;
}
function callSum(num1,num2){
    return sum.call(this,num1,num2);
}
console.log(callSum(10,10));
//他们真正强大的地方是能够扩充函数赖以运行的作用域
window.color="red";
var o={color:"blue"};
function sayColor(){
    alert(this.color);
}
sayColor();
sayColor.call(this);
sayColor.call(window);
sayColor.call(o);

//this全局
//ES5方法：bind()创建一个函数的实例
window.color="red";
var o={color:"blue"};
function sayColor(){
    alert(this.color);
}
var objectSayColor=sayColor.bind(o);
objectSayColor();
