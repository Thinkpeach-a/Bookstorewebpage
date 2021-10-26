<template>
  <div class="home">
    <Carousel></Carousel>
    <List></List>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import List from "@/components/List";
export default {
  name: 'Home',
  components: {
    Carousel,
    List
    }
  }
</script>

