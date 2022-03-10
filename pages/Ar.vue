<script setup lang="ts">
const MainButton = ref<String[]>(['识别体验', '点击下载识别图', '立即体验'])
</script>

<template>
  <div id="ar-container">
    <div v-for="btnTitle in MainButton" :key="btnTitle">
      <van-button type="primary">
        {{ btnTitle }}
      </van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#ar-container {
   overflow: hidden;
   background-image: url('https://img.1ppt.com/uploads/allimg/1907/1_190718215305_4.jpg');
   width: 100vw;
   height: 100vh;
   background-size: right bottom;
}
</style>
