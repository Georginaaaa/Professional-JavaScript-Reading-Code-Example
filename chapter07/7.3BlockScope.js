//7.2.3内存泄漏
//闭包的作用域链中保存着一个HTML元素，该元素无法被销毁
function assignHandler(){
    var element=document.getElementById("someElement");
    element.onclick=function(){
        alert(element.id);
    };
}
//消除循环引用，避免内存泄漏
function assignHandler(){
    var element=document.getElementById("someElement");
    var id=element.id;
    element.onclick=function(){
        alert(id);
    };
    element=null;//消除对DOM对象的引用，减少引用数，正常回收其占用的内存
}
//7.3模仿块级作用域
function outputNumbers(count){
    for(var i=0;i<count;i++){
        alert(i);
    }
    alert(i);//计数
}
//i定义在活动对象中，可以在函数内部随处访问
function outputNumbers(count){
    for(var i=0;i<count;i++){
        console.log(i);
    }
    var i;//重新声明变量
    console.log(i);//计数
}
//块级作用域的匿名函数（私有作用域）
(function(){
    //这里是块级作用域
})();
//===>
var count=5;
outputNumbers(count);
//5代替变量count
outputNumbers(5);
//===>
var someFunction=function(){
    //这里是块级作用域
};
someFunction();

(function(){
    var now=new Date();
    if(now.getMonth()==0&&now.getDate()==1){
        console.log("Happy new year!");
    }
})();//减少闭包占用问题
//7.4私有变量
function add(num1,num2){
    var sum=num1+num2;
    return sum;
}//3个私有变量num1、num2、sum
//有权访问私有变量和私有函数的公有方法称为特权方法
//1.在构造函数中定义私有方法
function MyObject(){
    //私有变量和私有函数
    var privateVariable=10;
    function privateFunction(){
        return false;
    }
    //特权方法
    this.publicMethod=function(){
        privateVariable++;
        return privateFunction();
    };
}
//利用私有和特权成员，可以隐藏那些不应该被直接修改的数据
function Person(name){
    this.getName=function(){
        return name;
    };
    this.setName=function(value){
        name=value;
    };
}
var person=new Person("Nicholas");
console.log(person.getName());
person.setName("Grey");
console.log(person.getName());
//7.4.1静态私有变量
//私有作用域中定义私有变量或函数，同样可以创建特权方法
(function(){
    //私有变量和私有函数
    var privateVariable=10;
    function privateFunction(){
        return false;
    }
    //构造函数
    MyObject=function(){
    };
    //公有/特权方法
    MyObject.prototype.publicMethod=function(){
        privateVariable++;
        return privateFunction();
    };
})();

(function(){
    var name="";
    Person=function(value){
        name=value;
    };
    Person.prototype.getName=function(){
        return name;
    };
    Person.prototype.setName=function(value){
        name=value;
    };
})();
var person1=new Person("Nicholas");
console.log(person1.getName());
person1.setName("Grey");
console.log(person1.getName());

var person2=new Person("Michael");
console.log(person1.getName());
console.log(person2.getName());
//7.4.2模块模式
//为单例创建私有变量和特权方法
var singleton={
//    name:value,
    method:function(){
        //这里是方法的代码
    }
};
//增强
var singleton=function(){
    //私有变量和私有函数
    var privateVariable=10;
    function privateFunction(){
        return false;
    }
    //特权/公有方法和属性
    return{
        publicProperty:true,
        publicMethod:function(){
            privateVariable++;
            return privateFunction();
        }
    };
}();
//进行某些初始化
/*var application=function(){
    //私有变量和函数
    var components=new Array();
    //初始化
    components.push(new BaseComponent());
    //公共
    return(
        getComponentCount:function(){
           return components.length;
        };
        registerComponent:function(component){
            if(typeof component=="Object"){
                components.push(compoent);
            }
        }
    );
}();
*/
//7.4.3增强的模块模式
var singleton=function(){
    //私有变量和私有函数
    var privateVariable=10;
    function privateFunction(){
        return false;
    }
    //创建对象
    var object=new CustomType();
    //添加特权/公有属性和方法
    object.publicProperty=true;
    object.publicMethod=function(){
        privateVariable++;
        return privateFunction();
    };
    //返回对象
    return object;
}();
//application必须是BaseComponent实例？
var application=function(){
    //私有变量和函数
    var components=new Array();
    //初始化
    components.push(new BaseComponent());
    //创建application的一个局部副本
    var app=new BaseComponent();
    //公共接口
    app.getComponentCount=function(){
        return components.length;
    };
    app.registerComponent=function(component){
        if(typeof component=="object"){
            components.push(component);
        }
    };
    //返回这个版本
    return app;
}();
