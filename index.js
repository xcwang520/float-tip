import Tip from './src/components/Tip.vue';

Tip.version = '1.0.2';

Tip.install = (Vue) => {
  Vue.component('tip', Tip);
};

if (typeof window !== 'undefined') {
  window.Tip = Tip;
}

export default Tip;
