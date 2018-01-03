//8.2location对象
/*location.hostname
"weixin.sogou.com"
location.hash
""
location.href
"http://weixin.sogou.com/weixin?query=%E9%9D%99%E6%80%81%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F&_sug_type_=&sut=17971&lkt=1%2C1514380548705%2C1514380548705&s_from=input&_sug_=n&type=2&sst0=1514380548824&page=2&ie=utf8&w=01019900&dr=1"
location.pathname
"/weixin"
location.port
""
location.protocol
"http:"
location.search
"?query=%E9%9D%99%E6%80%81%E7%A7%81%E6%9C%89%E5%8F%98%E9%87%8F&_sug_type_=&sut=17971&lkt=1%2C1514380548705%2C1514380548705&s_from=input&_sug_=n&type=2&sst0=1514380548824&page=2&ie=utf8&w=01019900&dr=1"
*/
//8.2.1查询字符串参数
function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs=(location.search.length>0?location.search.substring(1):""),
    //保存数据的对象
    args={},
    //取得每一项
    items=qs.length?qs.split("&"):[],
    item=null,
    name=null,
    value=null,
    //在for循环中使用
    i=0,
    len=items.length;
    //逐个将每一项添加到args对象中
    for(i=0;i<len;i++){
        item=items[i].split("=");
        name=decodeURIComponent(item[0]);
        value=decodeURIComponent(item[1]);
        if(name.length){
            args[name]=value;
        }
    }
    return args;
}
//假设查询字符串是？q=javascript&num=10
var args=getQueryStringArgs();
alert(args["q"]);
alert(args["num"]);
//8.2.2位置操作
location.assign="http://www.wrox.com";
window.location="http://www.worx.com";
//假设初始值URL为http://www.wrox.com/WileyCDA/

//将URL修改为“http://www.worx.com/WileyCDA/#section1”
location.hash="#section1";

location.search="?q=javascript";

location.hostname="www.yahoo.com";

location.pathname="mydir";

location.port=8080;


<!DOCTYPE html>
<html>
    <head>
       <title>You won't be able to get back here.</title>
    </head>
    <body>
       <p>
           Enjoy this page for a second,because you won't be coming back here.
       </p>
       <script type="text/javaScript">
       setTimeout(function() {
           location.replace("http://www.wrox.com/");
       }, 1000);
       </script>
        
    </body>
</html>

location.reload();//从缓存中加载
location.reload(true);//从服务器重新加载