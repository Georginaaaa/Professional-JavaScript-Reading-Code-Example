var booleanObject=new Boolean(true);
//Boolean类型实例重写了valueOf()方法，基本返回类型值true或false；重写了toString()方法，返回字符串"true"和"false"
var falseOject=new Boolean(false);
var result=falseOject && true;
console.log(result);

var falseValue=false;
result=falseValue && true;
console.log(result);
//基本类型与引用类型的布尔值还有两个区别
console.log(typeof falseOject);
console.log(typeof falseValue);
console.log(falseOject instanceof Boolean);
console.log(falseValue instanceof Boolean);
