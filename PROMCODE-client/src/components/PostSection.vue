<template>
  <div id="post-section">
    <FileSelectionBtn v-on:register-data="registerPostData"/>
    <SubmissionBtn v-on:post-file="postFile"/>
  </div>
</template>

<script>
import axios from "axios";
import FileSelectionBtn from "./post/FileSelectionBtn.vue";
import SubmissionBtn from "./post/SubmissionBtn.vue";

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
      console.log("breakpoint")
      if (this.postData != null) {
        console.log("breakpoint2")
        const params = new FormData()
        params.append("file", this.postData)
        axios.post(
          "http://localhost:3000",
          params,
          {
            headers: {
              "content-type": "text/turtle"
            }
          }
        ).then(function() {
          console.log("post success");
        }).catch(function() {
          console.log("post failure");
        })
        this.postData = null
      }
    }
  }
};
</script>

<style scoped>
</style>
