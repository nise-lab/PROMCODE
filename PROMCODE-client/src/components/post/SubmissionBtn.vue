<template>
  <div class="submission-button">
    <input type="button" value="送信" v-on:click="submit">
  </div>
</template>

<script>
export default {
  name: "SubmissionBtn",
  methods: {
    submit: function() {
      this.$emit("post-file");
    }
  }
}
</script>

<style scoped>
</style>
