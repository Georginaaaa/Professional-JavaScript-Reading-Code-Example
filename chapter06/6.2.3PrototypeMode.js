//6.2.3原型模式：使用构造函数的prototype属性来来指定那些应该共享的属性和方法。
function Person(){

}
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
    console.log(this.name);
};
var person1=new Person();
person1.sayName();
var person2=new Person();
person2.sayName();
console.log(person1.sayName==person2.sayName);
//1.理解原型对象
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));//与构造函数有没有直接关系

console.log(Object.getPrototypeOf(person1)==Person.prototype);
console.log(Object.getPrototypeOf(person1).name);//这个方法返回[[Prototype]]的值
//实例中创建属性，该属性将会屏蔽原型中的那个属性
function Person(){

};
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
    console.log(this.name);
};
var person1=new Person();
person1.sayName();
var person2=new Person();
person1.name="Grey";
console.log(person1.name);
console.log(person2.name);
//delete操作符完全删除实例属性，重新访问原型中属性
function Person(){
    
    };
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
console.log(this.name);
};
var person1=new Person();
person1.sayName();
var person2=new Person();
person1.name="Grey";
console.log(person1.name);
console.log(person2.name);

delete person1.name;
console.log(person1.name);
//hasOwnProperty()方法检测属性来自于实例还是原型
function Person(){

}
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
console.log(this.name);
};
var person1=new Person();
var person2=new Person();
console.log(person1.hasOwnProperty("name"));
person1.name="Grey";
console.log(person1.name);//来自实例
console.log(person1.hasOwnProperty("name"));
console.log(person2.name);//来自原型
console.log(person2.hasOwnProperty("name"));
delete person1.name;
console.log(person1.name);//来自原型
console.log(person1.hasOwnProperty("name"));
//2.原型与in操作符：通过对象能够访问给定属性是返回true
function Person(){
    
    }
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
console.log(this.name);
};
var person1=new Person();
var person2=new Person();

console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);
person1.name="Grey";
console.log(person1.name);//来自实例
console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);
console.log(person2.name);//来自原型
console.log(person2.hasOwnProperty("name"));
console.log("name" in person2);
delete person1.name;
console.log(person1.name);//来自原型
console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);
//for-in循环时，返回的是所有能够通过对象访问的、可枚举的属性，其中既包括在于原型中的属性
//Object.key()获取可枚举的实例属性
function Person(){
    
    }
Person.prototype.name="Nicholas";
Person.prototype.age=29;
Person.prototype.job="Software Engineeer";
Person.prototype.sayName=function(){
console.log(this.name);
};
var keys=Object.keys(Person.prototype);
console.log(keys);

var p1=new Person();
p1.name="Rob";
p1.age=31;
var p1keys=Object.keys(p1);
console.log(p1keys);
//得到所有实例属性
var keys=Object.getOwnPropertyNames(Person.prototype);
console.log(keys);
//3.更简单的原型语法：对象字面量
function Person(){

}
Person.prototype={
    name:"Nicholas",
    age:29,
    job:"Software Engineer",
    sayName:function(){
        console.log(this.name);
    }
};//重写了prototyp对象
var friend=new Person();
console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor==Person);
console.log(friend.constructor==Object);//新对象不再指向原型，指向构造函数
//如果constructor值真的很重要,添加constructor属性
function Person(){

};
Person.prototype={
    constructor:Person,
    name:"Nicholas",
    age:29,
    job:"Software Engineer",
    sayName:function(){
        console.log(this.name);
    }
};
//重设构造函数，只适用于ES5
function Person(){
    
    };
    Person.prototype={
        name:"Nicholas",
        age:29,
        job:"Software Engineer",
        sayName:function(){
            console.log(this.name);
        }
    };
Object.defineProperty(Person.prototype,"constructor",{
    enumerable:false,
    value:Person
});
//4.原型的动态性
function Person(){
    
    };
    Person.prototype={
        name:"Nicholas",
        age:29,
        job:"Software Engineer",
        sayName:function(){
            console.log(this.name);
        }   
    };
    friend.sayName();
//5.原生对象的原型
console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.substring);//获取默认方法的引用
//修改原生对象原型，添加方法
String.prototype.startsWith=function (text){//String添加starsWith方法
    return this.indexOf(text)==0;
};

var msg="Hello world!";
console.log(msg.startsWith("Hello"));
//6.原型对象的问题
function Person(){
    
    };
    Person.prototype={
        name:"Nicholas",
        age:29,
        job:"Software Engineer",
        friends:[
            "Shelly","Court"
        ],
        sayName:function(){
            console.log(this.name);
        }   
    };
var person1=new Person;
var person2=new Person;
person1.friends.push("Van");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends==person2.friends);
//最大问题是共享的本质所致，实例一般都要有属于自己的全部属性