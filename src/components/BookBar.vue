<template>
  <div>

    <ul id="u1">
      <li>
        <router-link :to="{name:'Book02'}">计算机</router-link>
      </li>

      <li>
        <router-link :to="{name:'Book03'}">经济学</router-link>
      </li>
      <li>
        <router-link :to="{name:'Book04'}">历史</router-link>
      </li>

      <li>
        <router-link :to="{name:'Book05'}">文学</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "BookBar",
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style scoped>

</style>
<style scoped>
#u1 {
  list-style-type: none;
  display: inline-block;
  width: 150px;
}

li {

  display: block;
  height: 57px;
  width: 277px;
}
a{
  text-decoration: none;
  color: black;
}

</style>
