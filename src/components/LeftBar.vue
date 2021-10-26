<template>
  <div id="app">
    <div class="a">

      <p><img src="../assets/img/logo.jpg" alt=""></p>
        <div class="list">
          <p><router-link to="/"><i class="el-icon-s-home">首页</i></router-link></p>

          <p><router-link :to="{name:'Book'}"><i class="el-icon-s-order">图书</i></router-link></p>

          <p><router-link :to="{name:'Admin'}"><i class="el-icon-user-solid">个人中心</i></router-link></p>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
  data(){
  return{
    active:'/',
  }
  }
}
</script>

<style scoped>
#app{
  width: 100%;
}
.a{
  width: 80%;
  display: inline;

}
p{
  line-height: 4vh;
}
img{
  width: 100%;
  height: 120px;
}
.list a{
  margin: 30%;
  color: black;
  text-decoration: none;
}
.list a.router-link-exact-active {
  color: #42b983;
}
</style>
