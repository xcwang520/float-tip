// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueScrollTo from 'vue-scrollTo'
import 'font-awesome/css/font-awesome.min.css'
import Tip from '../'

Vue.config.productionTip = false

Vue.use(vueScrollTo);
Vue.use(Tip);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
