var stringObject=new String("hello world");
//length属性
var stringValue="hello world";
console.log(stringValue.length);
//1.字符方法：chatAt()和charCodeAt()
var stringValue="hello world";
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
//ES5访问个别字符方法
var stringValue="hello world";
console.log(stringValue[1]);
//2.字符串操作方法,concat()用于将一或多个字符串拼接起来，返回拼接得到的新字符串
var stringValue="hello ";
var result=stringValue.concat("world");
console.log(result);
console.log(stringValue);
//拼接任意多个字符串
var stringValue="hello ";
var result=stringValue.concat("world","!");
console.log(result);
console.log(stringValue);
//ES提供三个基于字符串创建新字符串方法:slice()、substr()、substring()
var stringValue="hello world";
console.log(stringValue.slice(3));
console.log(stringValue.substring(3));
console.log(stringValue.substr(3));
console.log(stringValue.slice(3,7));
console.log(stringValue.substring(3,7));
console.log(stringValue.substr(3,7));
//slice()会将传入的负值与字符串的长度相加，substr()会将第一个参数加上字符串的长度，将第二个参数转化为0，substring()会将负值参数转化为0
var stringValue="hello world";
console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.slice(3,-4));
console.log(stringValue.substring(3,-4));
console.log(stringValue.substr(3,-4));
//3.字符串位置法,找子子符串方法indexOf()从头开始搜索，lastIndexOf()从后面开始搜索
var stringValue="hello world";
console.log(stringValue.indexOf("o"));
console.log(stringValue.lastIndexOf("o"));
console.log(stringValue.indexOf("o",6));
console.log(stringValue.lastIndexOf("o",6));
//通过循环调用来找到所有匹配子字符串
var stringValue="Lorem ipsum door sit amet,consectetur adipisicing elit";
var positions=new Array();
var pos=stringValue.indexOf("e");
while(pos>-1){
    positions.push(pos);
    pos=stringValue.indexOf("e",pos+1) ;

}
console.log(positions);
//4.trim()方法，创建字符串副本，删除前置及后缀所有空格，返回结果
var stringValue="   hello world    ";
var trimmedStringValue=stringValue.trim();
console.log(stringValue);
console.log(trimmedStringValue);
//5.字符串大小写转换方法：toLowCase(),toLocalLowerCase(),toUpperCase(),toLocalUpperCase()
console.log(stringValue.toLocaleUpperCase());
console.log(stringValue.toUpperCase());
console.log(stringValue.toLocaleLowerCase());
console.log(stringValue.toLocaleLowerCase());
//6.字符串的模式匹配方法：match(),search()
var text="cat,bat,sat,fat";
var pattern=/.at/;
var matches=text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

var pos=text.search(/at/);
console.log(pos);
//ES提供了replace()方法/替换/(g)全局模式
var result=text.replace("at","ond");
console.log(result);
result=text.replace(/at/g,"ond");
console.log(result);
//利用特殊字符序列使用最近匹配结果内容
result=text.replace(/(.at)/g,"word($1)");
console.log(result);
//7.localeCompare()方法：比较2个字符串
var stringValue="yellow";
console.log(stringValue.localeCompare("brick"));
console.log(stringValue.localeCompare("yellow"));
console.log(stringValue.localeCompare("zoo"));
//localeCompare返回的数值取决于现实
function determineOrder(value){
    var result=stringValue.localeCompare(value);
    if(result<0){
        console.log("the string 'yellow' comes before the string...");
    }else if(result>0){
        console.log("the string...");

    }else{
        console.log(the);

    }
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
//8.fromCharCode()方法：接受一或多个字符编码，然后转换成一个字符串
console.log(String.fromCharCode(104,101,108,108,111));
//9.HTML方法