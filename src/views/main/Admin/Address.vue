<template>
  <div>
    <h2>收货地址</h2>
    <br>
    <hr style="border-style:dotted">
    <ul v-for="(i,index) in list" :key="i.id">
      <li style="list-style: none">
        <br>
        <br>
        <h2>收货地址{{index+1}}</h2>
        姓名：{{i.receiverName}}
        <br>
        手机号：{{i.receiverMobile}}
        <br>
        家庭住址：{{i.province}}{{i.city}}{{i.area}}{{i.addr}}
        <br>
        邮箱：{{i.postCode}}
        <el-radio  class="select" v-model="radio" :label="index">选择{{index+1}}</el-radio>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "address",
  data(){
    return{
      userId:[],
      token:[],
      radio: [],
      list:[]
    }
  },
mounted() {

//从token中获取uid和token参数值
  const da =window.sessionStorage.getItem('data')
  const d = JSON.parse(da)
  this.userId = d.data.userId
  this.token = d.msg

  axios.get('http://tianxaingbook.top:6198/useraddr/list',{
    params:{
      userId:this.userId,
    },
    headers:{
      token:this.token
    }
  }).then(res=>{
    this.list = res.data.data
  }).catch(err=>{
    console.log(err)
  })
  }
}
</script>

<style scoped>
.select{
  float: right;
}
</style>
