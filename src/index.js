import vueScrollTo from 'vue-scrollTo'
import Tip from './components/Tip.vue';
import 'font-awesome/css/font-awesome.min.css'

Tip.version = '1.0.2';

Tip.install = (Vue) => {
  Vue.use(vueScrollTo);
  Vue.component('tip', Tip);
};

if (typeof window !== 'undefined') {
  window.Tip = Tip;
}

export default Tip;
