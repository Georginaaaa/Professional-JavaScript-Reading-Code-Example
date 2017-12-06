//1.math对象的属性
//2.min()和max()方法：确定数组中的最大值和最小值
var max=Math.max(3,54,32,16);
console.log(max);
var min=Math.min(3,54,32,16);
console.log(min);
//数组中最大值或最小值apply()
var values=[1,2,3,4,5,6,7,8];
var max=Math.max.apply(Math,values);
//3.舍入方法Math.ceil()向上舍入为最近的整数，Math.floor()向下舍入最近的整数，Math.round()四舍五入最近的整数
console.log(Math.ceil(25.9));
console.log(Math.round(25.9));
console.log(Math.round(25.1));
console.log(Math.floor(25.9));
//4.Math.random()方法返回大于等于0小于1的一个随机数
值=Math.floor(Math.random()*10+1);
console.log(值);
//函数计算
function selectForm(lowerValue,upperValue){
    var chioes=upperValue-lowerValue+1;
    return Math.floor(Math.random()*chioes+lowerValue);
}
var num=selectForm(2,10);
console.log(num);
//5.其他方法
