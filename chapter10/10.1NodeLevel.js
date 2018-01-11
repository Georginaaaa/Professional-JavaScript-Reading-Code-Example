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
//