//8.5history对象
//向后退一页
history.go(-1);
//前进一页
history.go(1);
//前进两页
history.go(2);
//跳到最近的georginajhong.com页面
history.go("georginajhong.com");
//后退一页
history.back();
//前进一页
history.forward();

//保存历史记录的数量
if(history.length==0){
    //这应该是用户打开窗口后的第一个页面
}