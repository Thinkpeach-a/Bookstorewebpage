<template>
  <div>
    <!-- 搜索框-->
    <el-select
        class="app"
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <!--购物车-->
    <div class="car">
      <router-link to="/Shop"><el-button icon="el-icon-shopping-cart-full" circle class="by_car"></el-button></router-link>
    </div>

    <!--登录按钮-->
    <div class="button">
      <el-button round ><router-link to="/Login">登录</router-link></el-button>
    </div>

  </div>
</template>

<script>

export default {
  name:'Search',
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "天堂旅行团（张嘉佳亲笔签名加赠精编小册子！继《全世界》《云边》之后，张嘉佳2021全新长篇力作，随书赠旅行地图折页+手绘主题明信片）",
        "张嘉佳 著,博集天卷 出品",

        "张嘉佳作品集：天堂旅行团+云边有个小卖部（当当亲笔签名+卡通贴纸）",
        "张嘉佳 著,博集天卷 出品",

        "六层楼先生 怀孕呵护指南 第十一诊室",
         "六层楼先生 著",

        "张嘉佳畅销作品全四册：天堂旅行团+云边有个小卖部+让我留在你身边+从你的全世界路过（当当亲笔签名+金句卡片（随机一款）+卡通贴纸）",
        "张嘉佳 著,博集天卷 出品",


         "鲜衣怒马少年时2：唐宋诗章里的盛世残梦（当当专享签名本，少年怒马《鲜衣怒马少年时》重磅续作）",
        "少年怒马 著,博集天卷 出品",


        "家有三宝（当当专享签名本）",
        "宋玉",

       "黎明前的那一夜（当当专享签名版+手账本，青年作家卢思浩新书，2021年长篇新作）",
        "卢思浩 著,博集天卷 出品",

        "即兴表达：轻松掌控关键时刻",
        "[日]渡边龙太",

        "东野圭吾：无名之町（2021年高能新作！神尾大侦探首秀！）",
        "（日）东野圭吾  著 ，新经典  出品",

        "好莱坞往事",
        "[美]文森特・布廖西，科特・金特里　著；房小然，赵奂　译",

        "好好生好好美（跟知名孕产瑜伽导师王昕：学孕期养护瑜伽）",
        "王昕 著",
    ]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
}
</script>

<style scoped>
.app{
  margin: 20px 20px;
  width: 400px;
}

.button{
  float: right;
  margin: 20px;
  white-space: nowrap;
  list-style: none;
}
a{
  text-decoration: none;
}
.car{
  float: right;
  margin: 20px;
}
.by_car{
  width: 40px;
  height: 40px;
}
a{
  color: #8cc5ff;
}
</style>
