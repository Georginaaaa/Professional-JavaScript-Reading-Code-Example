//函数内部特殊对象arguments→callee属性，该属性是一个指针，指向拥有这个arguments对象的函数
function factorial(num){
    if(num<=1){
        return;
    }else{
        return num*factorial(num-1);
    }
}

//消除执行与函数名factorial紧紧耦合在一起得arguments.callee

function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}

//重写后没有再引用函数名factorial

var trueFactorial=factorial;
factorial=function(){
    return 0;
};
console.log(trueFactorial)
console.log(factorial(5))

//函数内部另一对象this
Window.color="red";
var o={color:"blue"};
function sayColor(){
    alert(this.color);
}
sayColor();
o.sayColor=sayColor;
o.sayColor();

//ES5规范另一个函数对象的属性
function outer(){
    inner();
}
function inner(){
    alert(inner.caller);
}
outer();
//==
function outer(){
    inner();
}
function inner(){
    alert(arguments.callee.caller);
}
outer();

