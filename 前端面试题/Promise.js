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