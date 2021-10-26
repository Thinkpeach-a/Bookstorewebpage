<template>
  <div class="app">
      <div id="box">
        <el-card class="box-card">
          <div class="img"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>
          <el-form :model="login_form" status-icon ref="login_form">
            <el-form-item label="用户名" label-width="90px"><el-input type="text" v-model="login_form.name"></el-input> </el-form-item>
            <el-form-item label="密码 " label-width="90px"><el-input type="password" v-model="login_form.password"></el-input> </el-form-item>
           <el-form-item><el-button type="primary" @click="submitForm('login_form')">登录</el-button></el-form-item>
            <p>没有账号? <router-link :to="{name:'Register'}">立即注册</router-link></p>
          </el-form>
        </el-card>
      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "layout",
  data(){
    return {
      circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //登录数据
      login_form:{
        name:'',
        password:''
      },
    }
  },

  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            //登录界面
            axios.get('http://tianxaingbook.top:6198/user/login',{
              params: {
                username:this.login_form.name ,
                password:this.login_form.password,
              }
            }).then((rep)=>{
              if(rep.data.code === 10000){
                // console.log(this.setUser)
                //存放token到sessionStorage中
                sessionStorage.setItem('token',JSON.stringify(rep.data.msg))
                //将信息存入浏览器缓存之中
                sessionStorage.setItem('data',JSON.stringify(rep.data))
                this.$message('登录成功');
                this.$router.push('/')
              }else {
                this.$message('登录失败，请检测账号密码并重新登录');
                return false;
              }
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>

.app{
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#box{
  width: 500px;
  text-align: center;
}
.img{
  margin-bottom: 10px;
}
</style>

