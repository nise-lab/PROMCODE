<template>
  <div class="file-selection-button">
    <input type="file" name="ファイルを選択" v-on:change="select">
  </div>
</template>

<script>
export default {
  name: "FileSelectionBtn",
  methods: {
    select: function(e) {
      this.$emit("register-data", e.target.files[0])
    }
  }
}
</script>

<style scoped>
</style>
