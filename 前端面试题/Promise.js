//回调地狱
console.log('start');
setTimeout(function(){
    console.log('continue1');
    setTimeout(function(){
        console.log('continue2');
        setTimeout(function(){
            console.log('done');
        },1000);
    },1000);
},1000);

//what about promise
var defer={
    then:function(cb){
        this.queue.push(cb);
        return defer;//同步结束时返回这个代理
    },
    resolve:function(){
        var func=this.queue.shift();//异步完成时通知这个代理
        func();
    },
    queue:[]//代理调度算法
};

function start(){
    console.log('start');
    setTimeout(function(){
        defer.resolve();
    },1000);
    return defer;
}

start()
    .then(function(){
        console.log('continue1');
        setTimeout(function(){
            defer.resolve();
        },1000);
    })
    .then(function(){
        console.log('continue2');
        setTimeout(function(){
            defer.resolve();
        },1000);
    })
    .then(function(){
        console.log('done');
    });

//给函数加上参数，通过这个方式在promise之间传递值，
// 把前面的网络请求拿到的值传递给后面的逻辑，以此为基础发出新的网络请求
var defer={
    then:function(cb){
        this.queue.push(cb);
        return defer;
    },
    resolve:function(data){
        var func=this.queue.shift();
        func(data);
    },
    queue:[]
};

function start(){
    console.log('start');
    setTimeout(function(){
        defer.resolve(1);
    },1000);
    return defer;
}

start()
    .then(function(data){
        console.log('continue1 with',data);
        setTimeout(function(){
            defer.resolve(++data);
        },1000);
    })
    .then(function(data){
        console.log('continue2 with',data);
        setTimeout(function(){
            defer.resolve(++data);
        },1000);
    })
    .then(function(data){
        console.log('done with',data);
    });

//promise类型方法，实现复用
function start(){
    console.log('start');
    setTimeout(function(){
        defer.resolve(1);
    },1000);
    return defer;
}

function _continue(data){
    console.log('continue with',data);
    setTimeout(function(){
        defer.resolve(++data);
    },1000);
    return defer;
}

start()
    .then(function(data){
        return _continue(data);
    })
    .then(function(data){
        return _continue(data);
    })
    .then(function(data){
        return _continue(data);
    })
    .then(function(data){
        return _continue(data);
    })
    .then(function(data){
        console.log('done with',data);
    });

//Promise对象是一个构造函数，通过new创建实例
const promise=new Promises(function(resolve,reject){
    //...some code

    if(/*异步操作成功 */){
        resolve(value);
    }else{
        reject(error);
    }
});

promise.then(function(value){//then方法接受两个回调函数作为参数
    //success
},function(error){
    //failure
});

//FOR EXAMPLE
function timeout(ms){
    return new Promises((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value)=>{
    console.log(value);
});
//Promise新建后就会立即执行

let promise=new Promise(function(resolve){
    console.log('Promise');
    resolve();
});

promise.then(function(){
    console.log('resolve.');//then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以最后输出
});

console.log('Hi!');
//Promise
//Hi!
//resolved

//异步加载图片
function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image=new Image();

        image.onload=function(){
            resolve(image);
        };

        image.onerror=function(){
            reject(new Error('Could not load image at'+url));
        };

        image.src=url;
    });
}

//用Promise对象实现Ajax的操作
const getJSON=function(url){//getJSON是对XMLHttpRequest对象的封装，用于发出一个针对JSON数据的HTTP请求
    const promise=new Promise(function(resolve,reject){//并返回一个Promise对象
        const handler=function(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);//内部resolve调用带有参数，传递给回调函数
            }else{
                reject(new Error(this.statusText));//内部reject调用带有参数，传递给回调函数
            }
        };
        const client=new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange=handler;
        client.responseType="json";
        client.setRequestHeader("Accept","application/json");
        client.send();
    });
    return promise;
};

getJson("/posts.json").then(function(json){
    console.log('Contents:'+json);
},function(error){
    console.error('出错了',error);
});
//reject函数的参数通常是Error对象的实例，表示抛出错误
//resolve函数的参数除了正常的值以外，还可能是另一个Promise实例
const p1=new Promise(function(resolve,reject){//p1状态决定p2状态
    //...
});
const p2=new Promise(function(resolve,reject){//将p1作为参数，一个异步操作的结果是返回另一个异步操作
    //...
    resolve(p1);
});


const p1=new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error('fail')),3000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve,1000)
})

p2
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
    //Error:fail
//调用resolve或reject并不会终结Promise的参数函数的执行

new Promise((resolve,reject)=>{
    resolve(1);//resolve最后打印
    console.log(2);
}).then(r=>{
    console.log(r);
});
//2
//1
//调用resolve或reject后，Promise的使命就完成了
//后续操作应该放在then方法里面，最好在resolve或then前加上return语句
new Promise((resolve,reject)=>{
    return resolve(1);
    //后面的语句不会执行
    console.log(2);
})

//Promise.prototype.then()
//为Promise实例添加状态改变时的回调函数(resolve,reject)
//返回一个新的Promise实例
getJSON("/posts.json").then(function(json){
    return json.post;
}).then(function(post){
    //...
});
//then方法指定的回调函数，返回的是另一个Promise对象
//采用链式的then，可以指定一组按照次序调用的回调函数
getJSON("/post/1.json").then(function(post){
    return getJSON(post.commentURL);
}).then(function funcA(comments){
    console.log("resolved:",comments);
},function funcB(err){
    console.log("rejected:",err);
});
//then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。
//采用箭头函数
getJSON("/post/1.json").then(
    post=>getJSON(post.commentURL)
).then(
    comments=>console.log("resolved:",comments),
    err=>console.log("rejected:",err)
);

//Promise.prototype.catch()
//此方法是.then(null,rejection)别名，用于指定发生错误时的回调函数
getJSON('/posts.json').then(function(posts){
    //...
}).catch(function(error){
    //处理getJSON和前一个回调函数运行时发生的错误
    console.log('发生错误！',error);
});
//then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获
p.then((val)=>console.log('fulfulled:',val))
    .catch((err)=>console.log('rejected',err));

//等同于
p.then((val)=>console.log('fulfulled:',val))
    .then(null,(err)=>console.log("rejected:",err));
//下面是一个例子
const promise=new Promise(function(resolve,reject){
    throw new Error('test');
});
promise.catch(function(error){
    console.log(error);
});
//Error:test
//promise抛出一个错误，就被catch方法指定的回调函数捕获

//另外的写法一（等价）
const promise=new Promise(function(resolve,reject){
    try{
        throw new Error('test');
    }catch(e){
        reject(e);
    }
});
promise.catch(function(error){
    console.log(error);
});

//另外的写法二（等价）
const promise=new Promise(function(resolve,reject){
    reject(new Error('test'));
});
promise.catch(function(error){
    console.log(error);
});

//如果Promise状态已经变成resolved,再抛出错误是无效的
const promise=new Promise(function(resolve,reject){
    resolve('ok');
    throw new Error('test');
});
promise
    .then(function(value){console.log(value)})
    .catch(function(error){console.log(error)});
//resolve语句后面再抛出错误，不会被捕获，等于没有抛出
//Promise的状态一旦改变，就永久保持状态，不会再变了

//Promise对象的错误总是会被下一个catch语句捕获
getJSON('/post/1.json').then(function(post){
    return getJSON(post.commentURL);
}).then(function(comments){
    //some code
}).catch(function(error){
    //处理前面三个Promise产生的错误
});
//上面一共有3个Promise对象：一个由getJSON产生，2个由then产生
//它们之中任何一个抛出错误，都会被最后一个catch捕获

//不要在then里定义Reject状态的回调函数，而用catch方法
//bad
promise
    .then(function(data){
        //success
    },function(err){
        //error
    });

//good
promise
    .then(function(data){//cb
        //success
    })
    .catch(function(err){
        //error
    });
//good写法可以捕获前面then方法执行中的错误，也更接近同步的写法(try/catch)
