<template>
  <div id="app">
    <PostSection/>
  </div>
</template>

<script>
import PostSection from "./components/PostSection.vue"

export default {
  name: 'App',
  components: {
    PostSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
