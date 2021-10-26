<template>

    <div class="app">

    <div class="left">
    <!-- 头像信息-->
      <p style="color: cornflowerblue">我的信息:</p>
      <div class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="90"></el-avatar>
        <p>欢迎您:{{list.username}}</p>
       <el-button type="text" @click="open" style="color:#000;">退出登录</el-button>
        <hr>
        <el-menu active-text-color="#ffd04b" :default-active="active">
          <el-button type="text"><router-link to="/Admin/Address">收货地址</router-link></el-button>
        </el-menu>
        <hr>
      </div>
      <hr>
    </div>
      <div class="right">
        <router-view></router-view>
      </div>

    </div>

</template>

<script>
export default {
  name: "Admin",
  data(){
    return{
      list:[],
      active:'/Admin/Address'
    }
  },
  methods:{
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/Login')
    },
    open() {
      this.$alert('确定退出登录吗？', '退出登录', {
        confirmButtonText: '确定',
        callback: action => {
          window.sessionStorage.clear()
          this.$router.push('/Login')
          this.$message({
            type: 'info',
            message: `退出成功: ${action}`
          });
        }
      });
    }
  },
  mounted() {
    const da =window.sessionStorage.getItem('data')
    const d = JSON.parse(da)
    this.list = d.data
  }

}
</script>

<style scoped>
.app{
  width: 100%;
  height: 80vh;
  /*border: 1px black solid;*/
  display: inline-flex;
}
.left{
  width: 20%;
  margin: 40px;
  border: 1px black solid;
}
.avatar{
  width: 50%;
  margin: 50px auto;
  text-align: center;
  /*border: 1px black solid;*/
}
.right{
  width: 60%;
  margin: 40px;
  /*border: 1px black solid;*/
}
a{
  color: black;
  text-decoration: none;
}
a.router-link-exact-active {
  color: #42b983;
}
p{
  word-break:keep-all
}
</style>
