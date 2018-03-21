//10.1DOM节点层次
//10.1.1Node类型
if(someNode.nodeType==Node.ELEMENT_NODE){
    alert("Node is an element");
}//比较someNode.nodeType与Node.ELEMENT_NODE常量
if(someNode.nodeType==1){
    alert("Node is an element");
}//数字比较比较好
//1.nodeName和nodeValue属性
if(someNode.nodeType==1){
    value=someNode.nodeName;//nodeName是元素标签名
}
//2.节点关系
var firstChild=someNode.childNodes[0];
var secondChild=someNode.childNodes.item(1);
var count=someNode.childNodes.length;
//将NodeList对象转换为数组
var arrayOfNodes=Array.prototype.slice.call(someNode.childNodes,0);
//检测怪癖
function convertToArray(nodes){
    var array=null;
    try{
        array=Array.prototype.slice.call(nodes,0);
    }catch(ex){
        array=new Array();
        for(var i=0,len=nodes.length;i<len;i++){
            array.push(nodes[i]);
        }
    }
    return array
}
//访问节点
if(someNode.nextSibling===null){
    alert("Last node in the parent's childNodes list.");
}else if(someNode.previousSibling===null){
    alert("First node in the parent's childNodes list.");
}
//3.操作节点
var retuenNode=someNode.appendChild(newNode);
alert(returnedNode==newNode);
alert(someNode.lastChild==newNode);
//someNode有很多子节点
var returnedNode=someNode.appendChild(someNode.firstChild);
alert(returnedNode==someNode.firstChild);
alert(returnedNode==someNode.lastChild);
//insertBefore()方法
//插入后成为最后一个子节点
returnedNode=someNode.inserBefore(newNode,null);
alert(newNode==someNode.lastChild);
//插入后成为一个子节点
var returnedNode=someNode.inserBefore(newNode,someNode.firstChild);
alert(returnedNode==newNode);
alert(newNode==someNode.firstChild);
//插入到最后一个子节点前面
returnedNode=someNode.inserBefore(newNode,lastChild);
alert(newNode==someNode.childNodes[someNode.childNodes.length-2]);
//替换第一个子节点
var returnedNode=someNode.replaceChild(newNode,someNode.firstChild);
//替换最后一个子节点
returnedNode=someNode.replaceChild(newNode,someNode.lastChild);
//移除第一个子节点
var formerFirstChild=someNode.removeChild(someNode,firstChild);
//移除最后一个子节点
var formerLastChild=someNode.removeChild(someNode.lastChild);
//4.其他方法
var deepList=myList.cloneNode(true);
alert(deepList.childNodes.length);
var shallowList=myList.cloneNode(false);
alert(shallowList.childNodes.length);
//10.1.2Document类型
//1.文档的子节点
var html=document.documentElement;//取得对<html>的引用
alert(html===document.childNodes[0]);
alert(html===document.firstChild);

var body=document.body;//取得对<body>的引用

var doctype=document.doctype;//取得对<!DOCTYPE>的引用
//2.文档信息
//取得文档标题
var originalTitle=document.title;
//设置文档的标题
document.title="New page title";

//取得完整的URL
var url=document.URL;
//取得域名
var domain=document.domain;
//取得来源页面的URL
var referrer=document.referrer;

//domain可设置
document.domain="worx.com";

//3.查找元素
//取得ID元素
var div=document.getElementById("myDiv");//取得<div>元素的引用
//HTMLCollection对象
var images=document.getElementsByTagName("img");
//item()方法访问
alert(images.length);//输出图像的数量
alert(images[0].src);//输出第一个图像元素的src特性
alert(image.item(0).src);//输出第一个图像的src特性
//nameItem()方法
var myImage=images.namedItem("my Image");
//按名称访问项
var myImage=images["myImages"];
//取得所有元素
var allElement=document.getElementsByClassName("*");
//返回name特性的所有元素
