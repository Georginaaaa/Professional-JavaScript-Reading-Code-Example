//前端渲染，前端通过AJAX调用后台接口，数据逻辑放在前端，由前端维护
<template>
    <select id="rander">
        <option value=''>--请选择所属业务--</option>
        <option v-for="list in lists" :value="list" v-text="list"></option>
    </select>
</template>

<script>
    export default{
        data:{
            return{
                lists:['选项一','选项二','选项三','选项四']
            }
        }，
        ready:function(){
            this.$http({
                url:'/demo/',
                method:'POST',
            })
            .then(function(reponse){
                this.lists=reponse.data.lists//获取服务器端数并渲染
            })
        }
    }
</script>

//用API接口文档调用接口
$.ajax({
    url:url(接口)
    method:'post',
    data:{
        phone:"134";(请求参数)
    },
    success:function(data){
        console.log(data)
    },
    error:function(err){
        if(err.status==403){
            console.log(err)
        }else if(err.status==422){
            console.log(err)
        }else if(err.status==500){
            console.log(err)
        }else{
            console.log(err)
        }
    }
})

//1.你需要和后端开发人员确认相关接口是什么 
// 2.向你的项目经理问清楚你的每个目录是什么模块 
// 3.对应后就可以使用ajax进行接口调用
// 4.ajax可以在页面引入jQuery后使用
$.ajax({
    type:"POST",
    url:"user/Login?username=admin",
    success:function(data){
        var dataInfo=JSON.parse(data);
        console.log(dataInfo);
    }
});
