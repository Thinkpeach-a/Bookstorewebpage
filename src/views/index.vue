<template>
  <div id="app">
    <div class="left"><LeftBar></LeftBar></div>

    <div class="right">
      <Search></Search>
      <hr>
      <router-view></router-view>

      <hr>
      <FootBar></FootBar>
      <hr>
    </div>

  </div>
</template>

<script>
import LeftBar from "../components/LeftBar";
import Search from "../components/Search";
import FootBar from "../components/FootBar";
export default {
  name: "index",
  components: {LeftBar,Search,FootBar},
}
</script>

<style scoped>
#app{
  width: 100%;
  display: inline-flex;
}
.left{
  width: 20%;
}
.right{
  width: 70%;
}
</style>
