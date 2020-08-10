<template>
  <div id="post-section">
    <FileSelectionBtn v-on:register-data="registerPostData"/>
    <SubmissionBtn/>
  </div>
</template>

<script>
import FileSelectionBtn from "./post/FileSelectionBtn.vue"
import SubmissionBtn from "./post/SubmissionBtn.vue"

export default {
  name: "PostSection",
  data: function() {
    return {
      postData: ""
    }
  },
  components: {
    FileSelectionBtn,
    SubmissionBtn
  },
  methods: {
    registerPostData: function(data) {
      this.postData = data
    }
  }
}
</script>

<style scoped>
</style>
