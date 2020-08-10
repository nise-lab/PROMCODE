<template>
  <div class="file-selection-button">
    <input type="file" name="ファイルを選択" v-on:change="selectFile">
  </div>
</template>

<script>
export default {
  name: "FileSelectionBtn",
  methods: {
    selectFile: function(e) {
      console.log(e);
      console.log(e.target.files);
    }
  }
}
</script>

<style scoped>
</style>
