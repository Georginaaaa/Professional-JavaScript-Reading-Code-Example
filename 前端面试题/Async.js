// 这是一个普通的函数，它会返回一个promise
// 该promise于2秒后解决为"MESSAGE"
function getMessage(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("MESSAGE"),2000);
    });
}
async function start(){
    const message=await getMessage();
    return 'The message is :${message}';
}
start().then(msg=>console.log(msg));
// Promise {<pending>}
//     __proto__: Promise
//     [[PromiseStatus]]: "resolved"
//     [[PromiseValue]]: undefined
//  The message is :${message}


// 语法结构是try...catch
async function fetchWrapper(){//创建一个异步函数async function，只需要在函数申明前加上async即可
    return fetch('/api/url/');
}
const fetchWrapper=async()=>fetch('/api/url/');
const obj={
    async fetchWrapper(){
        //...
    }
}
// Await关键字
async function updateBlogPost(postId,modifiedPost){
    const oldPost=await getPost(postId);//赋予异步函数getPost返回的解决值(resolved value)给oldPost
    const updatedPost={...oldPost,...modifiedPost};//用对象展开操作符对oldPost和modifiedPost进行一次浅层次合并(shallow merge)
    const savedPost=await savedPost(updatedPost);//保存修改过的文章，再一次使用await关键词就收savePost函数异步执行返回promise对象
    return savedPost;
}

//EXAMPLE&COMMON PROBLEM
//异步调用fetch返回了某种错误，利用catch捕获，处理错误
async function tryToFetch(){
    try{
        const response=await fetch('/api/data',options);
        return response.json();
    }catch(err){
        console.log('An error occured:${err}');
        //Instead of rethrowing the error
        //Let's return a regular object with no data
        return{data:[]};
    }
}
tryToFetch().then(data=>console.log(data));

// ‼  async/await vs callbacks/promises
//假设要异步地fetchSomeData获取某些数据，得到数据后再异步地processSomeData处理这些数据，如果出现错误，只简单返回一个对象

//we have fetchSomeDataCB,and processSomeDataCB
//NOTE:CB stands for callback
function doWork(callback){
    fetchSomeDataCB((err,fetchedData)=>{
        if(err){
            callback(null,[])
        }
        processSomeDataCB(fetchedData,(err2,processedData)=>{
            if(err2){
                callback(null,[]);
            }
            //return the processedData outside of doWork
            callback(null,processedData);
        });
    });
}
doWork((err,processedData)=>console.log(processedData));

//we have fetchSomeDataP,and processSomeDataP
//NOTE:P means that this function returns a Promise
function doWorkP(){
    return fetchSomeDataP()
    .then(fetchedData=>processSomeDataP(fetchedData))
    .catch(err=>[]);
}
doWorkP().then(processedData=>console.log(processedData));

//处理并发
//如果想要异步过程被顺序地处理，只要简单使用多行await语句
//将调用的输出结果传给另一个异步调用，就像平时Promises那样
//使用Promise.all处理并发，让3个异步动作同时执行（并发地）
//让await这些promises前，让它们全部执行

//Not ideal:This will happen sequentially
async function sequentially(){
    const output1=await task1();
    const output2=await task2();
    const output3=await task3();
    return combineEverything(output1,output2,output3);
}

//Ideal：This will happen concurrently
async function parallel(){
    const promises=[
        task1(),
        task2(),
        task3(),
    ];
    const[output1,output2,output3]=await promises.all(promises);

    return combineEverything(output1,output2,output3);
}

//当你使用await时，它只会在async function异步函数内产生暂停效果
const timeoutP=async(s)=>new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(s*1000),s*1000)
});
[1,2,3].forEach(async function(time){
    const ms=await timeoutP(time);
    console.log('This took ${ms} milliseconds');
});
console.log('wanna race?');const timeoutP=async(s)=>new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(s*1000),s*1000)
});
[1,2,3].forEach(async function(time){
    const ms=await timeoutP(time);
    console.log('This took ${ms} milliseconds');
});
console.log('wanna race?');
//This took ${ms} milliseconds
//这些 promises 进入等待状态 awaited-ed 之后，执行流程会回到主线程， forEach 语句外面的 console.log 就会被执行