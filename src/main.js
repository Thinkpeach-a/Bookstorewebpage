import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios插件

import VueAxiosPlugin from 'vue-axios-plugin'

Vue.config.productionTip = false

new Vue({
  router,
  config,
  VueAxiosPlugin,
  store,
  render: h => h(App),
}).$mount('#app')
