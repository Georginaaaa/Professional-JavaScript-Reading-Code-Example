//交换函数
Array.prototype.swap=function(i,j){
    var temp=this[i];
    this[i]=this[j];
    this[j]=temp;
}
//JS内置排序
Array.prototype.jsSort=function(){
    return this.sort(function(a,b){
        return a-b;
    });
}

//生成随机数
function generate(){
    var max=parseInt(txtMax.value),
    count=parseInt(txtCount.value);
    if(isNaN(max)||isNaN(count))
    {
        alert("随机数个数和最大值必须是整数");
        return
    }
    var array=[];
    for(var i=0;i<count;++i)
    array.push(Math.round(Math.random()*max));
    txtInput.value=array.join(",");
    txtOutput.value="";
}
//返回排序时间
function sortAlgorithm(type){
    var timer=0;
    var array=txtInput.value==""?[]:txtInput.value.replace().split(",");
    for(var i=o;i<array.length;i++)
    array[i]=parseInt(array[i]);
    var t1=new Date();
    //eval()函数可计算某个字符串，并执行其中的js代码
    eval("array."+type+"Sort()");
    var t2=new Date();
    timer=t2.valueOf()-t1.valueOf();
    txtOutput.value=array.join(",");
    return timer;
}

//前端控制路由
export default function(router){
    router.map({
        '/':{
            component:function(resolve){
                require(['./PC.vue'],resolve)
            }
        },
        '/m/:params':{
            component:function(resolve){
                require(['./Mobile.vue'],resolve)
            }
        },
        '/p':{
            component:function(resolve){
                require(['./PC.vue'],resolve)
            },
            subRoutes:{
                '/process/:username':{
                    require(['./componests/Process.vue'],resolve)
                }
            }
        }
    })
}

//通用的事件监听器函数
//Event工具集，from:github.com/markyunmarkyun.
Event={
    //页面加载完成后
    readyEvent:function(fn){
        if(fn==null){
            fn=document;
        }
        var oldonload=window.onload;
        if(typeof window.onload !='function'){
            window.onload=fn;
        }else{
            window.onload=function(){
                oldonload();
                fn()
            };
        }
    },
    //视能力分别使用demo0\demo1\IE方式来绑定事件
    //参数：操作的元素，事件名称，事件处理程序
    addEvent:function(element,type,handler){
        if(element.addEventListener){//事件类型、需要执行的函数、是否捕捉
        element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,function(){

            })
        }
    }
}