//Number是与数值对应的引用类型
var numberOject=new Number(10);
//继承 toString()方法传递一个表示基数的参数，返回几进制数值的字符串形式
var num=10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));
//将数值格式化为字符串
var num=10;
console.log(num.toFixed(2));
//如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值就会舍入,适合处理货币
var num=10.005;
console.log(num.toFixed(2));
//另外可用于格式化数值
var num=10;
console.log(num.toExponential(1));
//返回某个数值的最合适格式
var num=99;
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
//typeof和instanceof操作符测试基本类型数值与引用类型数值时，得到完全不同的结果
var numberObject=new Number(10);
var numberValue=10;
console.log(typeof numberObject);
console.log(typeof numberValue);
console.log(numberObject instanceof Number);
console.log(numberValue instanceof Number);



