<template>
    <div class="app">
      <template>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(i,index) in img" :key="index">
            <img :src="i.imgUrl" alt="" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Carousel",
  data(){
    return{
      img:[]
    }
  },
  mounted(){
    axios.get('http://tianxaingbook.top:6198/index/indexImg').then(res=>{
      this.img = res.data.data
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.app{
  margin: 40px auto;
  width: 83%;
}
.el-carousel__item h3 {
  text-align: center;
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
