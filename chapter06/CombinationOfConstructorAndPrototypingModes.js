//6.2.4组合使用构造函数模式和原型模式
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["Shelly","Court"];
}//构造函数
Person.prototype={
    constructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}//原型模式
var person1=new Person("Nicholas",29,"Software Engineer");
var person2=new Person("Grey",27,"Doctor");//不同的数组
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends==person2.friends);
console.log(person1.constractor==person2.constractor);
//6.2.5动态原型模式
function Person(name,age,job){//属性
    this.name=name;
    this.age=age;
    this.job=job;
}
//方法
if(typeof this.sayName !="function"){
    Person.prototype.sayName=function(){
        console.log(this.name);
    };
}

var friend=new Person("Nicholas",29,"Software Engineer");
friend.sayName();
//if语句检查
//6.2.6寄生构造函数模式：封装创建对象的代码，返回新创建的对象
function creatPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        console.log
        (this.name);
    };
    return o;
}
var friend=new Person("Nicholas",29,"Software Engineer");
friend.sayName();


function SpecialArray(){
    //创建数组
    var values=new Array;
    //添加值
    values.push.apply(values,arguments);
    //添加方法
    values.toPipedString=function(){
        return this.join("|");
    };
    //返回数组
    return values;
}
var colors=new SpecialArray("red","blue","green");
console.log(colors.toPipedString());
//6.2.7稳妥构造函数模式：没有公共属性，其方法不引用this的对象
function Person(name,age,job){
    //创建要返回的对象
    var o=new Object;
    //可以在这里定义私有变量和函数

    //添加方法
    o.sayName=function(){
        console.log(name);
    };
    //返回对象
    return o;
}
//适合某些安全执行环境
