//6.3继承
//6.3.1原型链
function SuperType() {
        this.property= true;
    }
SuperType.prototype.getSuperValue=function(){
        return this.property;//true
    };
function SubType(){
    this.Subproperty=false;
}
//继承SuperType
SubType.prototype=new SuperType();//true
SuperType.prototype.getSubValue=function(){//重写原型对象
    return this.Subproperty;
};
var instance=new SubType();
console.log(instance.getSuperValue());
//1.别忘记默认的原型：Object.prototype
//2.确定圆形和实例的关系
//instanceof操作符
console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);
//isPrototypeOf()方法
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));
//3.谨慎地定义方法
function SuperType() {
    this.property= true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};
function SubType(){
this.Subproperty=false;
}
//继承SuperType
SubType.prototype=new SuperType();
//添加新方法
SubType.prototype.getSubValue=function(){
    return this.Subproperty;
};
//重写新类型中方法
SubType.prototype.getSuperValue=function(){
    return false;
};
var instance=new SubType();
console.log(instance.getSuperValue());
//不能使用原型链创建原型方法
//4.原型链的问题：实例属性共享
function SuperType(){
    this.colors=["red","green","yellow"];
}
function SubType(){

}
//继承了SperType
SubType.prototype=new SuperType;
var instance1=new SubType;
//instance1.colors.push("black");
console.log(instance1.colors);
var instance2=new SubType;
console.log(instance2.colors);
//6.3.2借用构造函数(子类型构造函数调用超类型构造函数)
function SuperType(){
    this.colors=["red","green","yellow"];
}
function SubType(){
    SuperType.call(this);
}
//继承了SperType
SubType.prototype=new SuperType;
var instance1=new SubType;
//instance1.colors.push("black");
console.log(instance1.colors);
var instance2=new SubType;
console.log(instance2.colors);
//1.传递参数
function SuperType(name){
    this.name=name;
}
function SubType(){
    //继承SuperType同时传递参数
    SuperType.call(this,"Nicholas");
    //实例属性
    this.age=29;
}
var instance=new SubType();
console.log(instance.name);
console.log(instance.age);
//2.借用构造函数的问题（函数无法复用）