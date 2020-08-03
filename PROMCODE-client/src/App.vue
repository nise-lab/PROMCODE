<template>
  <div id="app">
    <FileSelectionBtn/>
    <SubmissionBtn/>
  </div>
</template>

<script>
import FileSelectionBtn from "./components/FileSelectionBtn.vue"
import SubmissionBtn from "./components/SubmissionBtn.vue"

export default {
  name: 'App',
  components: {
    FileSelectionBtn,
    SubmissionBtn
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
