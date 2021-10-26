<template>

  <div class="app">
    <div class="right">
      <ul class="ul_right">
        <li class="li_right" v-for="i in img" :key="i.id">
          <img  class="li_" :src="i.categoryIcon" alt="">
          <br>
          <router-link :to="{name:'Details'}">
          <h4>书名：{{i.categoryName}}</h4>
          <h5>作者: {{i.categorySlogan}}</h5>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data(){
    return{
      img:[]
    }
  },
  mounted(){
    axios.get('http://tianxaingbook.top:6198/index/category-list').then(res=>{
      this.img = res.data.data
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>

.ul_right{
  display:flex;
  flex-wrap: wrap;
  list-style: none;
  flex-direction: row;
}

.li_{
  width: 160px;
  height: 200px;
  margin: 20px;
  line-height: 300px;
  background: black;
}
.li_right{
  width: 225px;
  margin-left: 40px;
}
.right{
  margin-left: 10px;
}
a{
  color: #99a9bf;
  text-decoration: #42b983;
}
</style>
