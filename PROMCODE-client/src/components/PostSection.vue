<template>
  <div id="post-section">
    <FileSelectionBtn v-on:register-data="registerPostData"/>
    <SubmissionBtn v-on:post-file="postFile"/>
  </div>
</template>

<script>
import FileSelectionBtn from "./post/FileSelectionBtn.vue"
import SubmissionBtn from "./post/SubmissionBtn.vue"

export default {
  name: "PostSection",
  data: function() {
    return {
      postData: null
    }
  },
  components: {
    FileSelectionBtn,
    SubmissionBtn
  },
  methods: {
    registerPostData: function(data) {
      this.postData = data
    },
    postFile: function() {
      console.log(this.postData)
    }
  }
}
</script>

<style scoped>
</style>
