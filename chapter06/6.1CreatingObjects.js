//创建自定义对象>创建一个Object实例>添加属性和方法
var person=new Object();
person.name="Nicholas";
person.age=29;
person.job="Sofeware Engineer";
person.sayName=function(){
    console.log(this.name);
}
//对象字面量语法
var person={
    name:"Nicholas",
    age:19,
    job:"Sofeware Engineer",

    sayName:function(){
        console.log(this.name);
    }
}
//6.1.1属性类型
//1.数据类型[Configurable][Enumerable][Wtirable][Value]
var person={};
Object.defineProperty(person,"name",{
    writable:false,
    value:"Nicholas",
});
console.log(person.name);
person.name="Grey";
console.log(person.name);
//2.访问器属性[Configurable][Enumerable][Get][Set]
var book={
    _year:2004,
    edition:1
};
Object.defineProperty(book,"year",{
    get:function(){
        return this._year;
    },
    set:function(newValue){
        if(newValue>2004){
            this._year=newValue;
            this.edition += newValue -2004;
        }
    }
});
book.year=2005;
console.log(book.edition);

//6.1.2定义多个属性
var book={};
Object.defineProperties(book,{
    _year:{
        writable:true,
        value:2004
    },
    edition:{
        writable:true,
        value:1
    },
    year:{
        get:function(){
            return this._year;
        },
        set:function(newValue){
            if(newValue>2004){
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});


//6.1.3读取属性的特性
var book={};
Object.defineProperties(book,{
    _year:{                           //数据属性
        writable:true,
        value:2004
    },
    edition:{
        writable:true,
        value:1
    },
    year:{                              //访问器属性
        get:function(){
            return this._year;
        },
        set:function(newValue){
            if(newValue>2004){
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});

var descriptor=Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

var descriptor=Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(typeof descriptor.get);