<template>
  <div>
    <br>
    <h1>图书分类</h1>
    <br>
    <div class="app">
    <BookBar></BookBar>
    <router-view/>
    </div>
  </div>
</template>
<script>
import BookBar from "../../components/BookBar";
export default {
  name: "About",
  components: {BookBar},
}
</script>
<style scoped>
.app{
  display: flex;
}
</style>




