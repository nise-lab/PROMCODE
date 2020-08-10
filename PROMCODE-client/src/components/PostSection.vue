<template>
  <div id="post-section">
    <FileSelectionBtn/>
    <SubmissionBtn/>
  </div>
</template>

<script>
import FileSelectionBtn from "./post/FileSelectionBtn.vue"
import SubmissionBtn from "./post/SubmissionBtn.vue"

export default {
  name: "PostSection",
  data: {
    postData: ""
  },
  components: {
    FileSelectionBtn,
    SubmissionBtn
  }
}
</script>

<style scoped>
</style>
