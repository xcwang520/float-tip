<template>
  <div id="app">
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
          text: "顶部"
        }
      }
    }
  },
  components: {

  }
}
</script>

<style>

</style>
