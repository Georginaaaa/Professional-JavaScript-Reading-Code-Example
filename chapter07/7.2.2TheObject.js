//7.函数表达式FunctionName
//函数声明
function functionName(){
    //函数体
}
console.log(functionName.name);
//函数声明提升
sayHi();
function sayHi(){
    console.log("Hi!");
}
//函数表达式
var functionName=function(arg0,arg1,arg2){
    //函数体
};
//匿名函数function(){}
//7.1递归：通过名字调用自身
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
//arguments.callee是一个指向正在执行函数的指针，实现对函数的递归调用
function factorial(num){
    if(num<=1){
        return -1;
    }else{
        return num*arguments.callee(num-1);

    }
}
//函数表达式达成同样结果
var factorial=(function f(num){//创建f()命名函数表达式
    if(num<=1){
        return 1;
    }else{
        return num*f(num-1);
    }
});
//7.2闭包(有权访问另一个函数作用域中的变量的函数)
function creatComarisonFunction(propertyName){
    return function(object1,object2){
        var value1=object1[propertyName];
        var value2=object2[propertyName];
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    };
}
//执行完后，活动对象不会被销毁
//创建函数
var compareNames=creatComarisonFunction("name");
//调用函数
var result=compareNames({name:"Nicholas"},{name:"Grey"});
//解除对匿名函数的引用
compareNames=null;
//7.2.1闭包与变量
function creatFunctions(){
    var result=new Array();
    for(var i=0;i<10;i++){
        result[i]=function(){
            return i;
        };
    }
    return result;
}
//===>创建另一个匿名函数让闭包的行为符合预期
/*functon createFunctions(){
    var result=new Array();
    for(var i=0;i<10;i++){
        result[1]=function(num){
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}*/
//7.2.2关于this对象
var name="The Window";
var object={
    name:"My Object",
    getNameFunc:function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());
//===>
var name="The Window";
var object={
    name:"My Object",
    getNameFunc:function(){
        var that=this;
        return function(){
            return that.name;
        };
    }
};
console.log(object.getNameFunc()());
//特殊情况
var name="The Window";
var object={
    name:"My Object",
    getName:function(){
        return this.name;
    }
};
object.getName();
(object.getName)();
(object.getName=object.getName)();
