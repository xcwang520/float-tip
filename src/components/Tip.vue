<template>
  <div class="share">
    <ul>
      <li><i :class="sets.share.icon" aria-hidden="true"><span>{{sets.share.text}}</span></i></li>
      <li><i :class="sets.star.icon" aria-hidden="true"><span>{{sets.star.text}}</span></i></li>
      <li v-if="showTop" :v-scroll-to="sets.top.el"><i :class="sets.top.icon" aria-hidden="true"><span class="back-top">{{sets.top.text}}</span></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['opts'],
  data () {
    return {
      showTop: true,
      msg: '联系信息1111111',
      defaultOpts: {
        top: {
          type: 'always',
          el: "#header",
          icon: 'fa fa-chevron-up fa-3x',
          text: "返回顶部"
        },
        share: {
          icon: "fa fa-share-alt fa-3x",
          text: "分享"
        },
        star: {
          icon: "fa fa-star-o fa-3x",
          text: "收藏"
        }
      }
    }
  },
  computed: {
    sets() {
      let opts = this.opts || {};
      opts.top = Object.assign(this.defaultOpts.top, opts.top);
      opts.share = Object.assign(this.defaultOpts.share, opts.share);
      opts.star = Object.assign(this.defaultOpts.star, opts.star);
      return opts;
    }
  },
  methods: {
    handleScroll() {
      if(this.opts.top.type == "always") this.showTop = true;
      else this.showTop = window.scrollY > 0;
    }
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.share {
  display: inline;
  position: fixed;
  right: 10px;
  bottom: 0;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
  ul {
    margin: 0;
    li {
      background: #73D661;
      padding: 5px;
      font-size: 12px;
      margin-bottom: 5px;
      color: white;
      cursor: pointer;
      height: 36px;
      width: 36px;
      &:last-child {
        margin-bottom: 0;
      }
      i {
        span {
          display: none;
          font-size: 18px;
          &.back-top {
            line-height: 20px;
          }
        }
      }
      &:hover {
        i {
          &:before {
            content: "";
          }
          span {
            display: -webkit-inline-box;
          }
        }
      }
    }
  }
}
</style>
