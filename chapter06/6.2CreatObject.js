//6.2.1工厂模式：用函数来封装以特定接口创建对象的细节
function creatPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        console.log(this.name);
    };
    return o;
}
var person1=creatPerson("Nicholas",29,"Sofeware Engerineer");
var person2=creatPerson("Grey",30,"Doctor");
//6.2.2构造函数模式：创建特定类型的对象、创建自定义的构造函数
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    };
}
var person1=new Person("Nicholas",29,"Sofeware Engineer");
var person2=new Person("Grey",30,"Doctor");     //要创建Person实例，必须使用new操作符

console.log(person1 instanceof Object);   //constructor属性用来标识对象类型，instanceof操作符验证
console.log(person1 instanceof Person);
console.log(person2 instanceof Object);
console.log(person2 instanceof Person);
//将他的实例标识为一种特定的类型，胜过工厂模式的地方
//1.将构造函数当作函数：区别在于调用它们的方式不同
var person=new Person("Nicholas",29,"Software Engineer");//当作构造函数使用
person.sayName();

Person("Grey",30,"Doctor");//当作普通函数使用
window.sayName();

var o=new Object();//在另一个对象的作用域中调用
Person.call(o,"Kristen",25,"Nurse");//使用call()或者apply()在某个特殊对象的作用域中调用Person()函数
o.sayName();
//2.构造函数的问题
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=new Function("console.log(this.name)");//与声明函数在逻辑上是等价的
}
console.log(person1.sayName==person2.sayName);

//可以
function sayName(){
    console.log(this.name);
}
//共享全局作用域中定义的同一个sayName()函数
//6.2.3原型模式（prototype(原型)属性，直接将信息添加到原型对象中）
function Perosn(){

}
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){
    console.log(this.name);
};
var person1=new Person();
person1.sayName();
var person2=new Person();
person2.sayName;
console.log(person1.sayName==person2.sayName);
//1.理解原型函数
alert(Person.prototype.isPrototypeOf(person1));//都有指向Person.prototye的指针
alert(Perosn.prototype.isPrototypeOf(person2));
//ES5新方法，Object.getPrototypeOf()
console.log(Object.getPrototypeOf(person1)==Person.prototype);
console.log(Object.getPrototypeOf(person1).name);
//示例中创建constructor属性，该属性会屏蔽原型中的那个属性
function Person(){

}
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineer";
Person.prototype.sayName=function(){
    console.log(this.name);
};
var person1=new Person();
var person2=new Person();
person1.name="Grey";
console.log(person1.name);
console.log(person2.name);
//delete操纵符可以完全删除实例属性，重新访问原型中属性
delete person.name;
console.log(person1.name);
//2.原型与in操作符：单独使用和for-in循环中使用
function hasPrototypeProperty(object,name){
    return !object.hasPrototypeProperty(name)&&(name in object);
}
//3.更简单的原型语法：用一个包含所有属性和方法的对象字面量来重写整个原型对象
function Person(){

}
Perosn.prototype={
    name:"Nicholas",
    age:29,
    job:"Software Engineer",
    sayName:function(){
        console.log(this.name);
    }
};
//4.原型的动态性
//5.原生对象的原型
//6.原型对象的问题
