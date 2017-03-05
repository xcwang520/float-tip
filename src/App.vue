<template>
  <div id="app">
    <div class="content" id="header">
      手机/微信:17074221129 EMAIL:xcwang@vip.qq.com
    </div>
    <tip :opts="opts"></tip>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      opts: {
        top: {
          text: "返回顶部"
        }
      }
    }
  },
  components: {

  }
}
</script>

<style >
.content {
  background: #00FF00 url(./assets/test.jpg) top;
  height: 2000px;
}
</style>
