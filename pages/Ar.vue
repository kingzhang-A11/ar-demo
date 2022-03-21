<script setup lang="ts">
const MainButton = ref<String[]>(['识别体验', '点击下载识别图', '立即体验'])
const showArComponent = ref<Boolean>(false)
const handleIdentify = () => {
  console.log('handleIdentify')
}
const handleDownload = () => {
  console.log('handleDownload')
}
const handleExperience = () => {
  showArComponent.value = true
}
const handleVanBtn = (btnTitle: String) => {
  const titleActive = {
    识别体验: handleIdentify,
    点击下载识别图: handleDownload,
    立即体验: handleExperience,
  }
  const activeFn = titleActive[btnTitle]
  activeFn()
  console.log(btnTitle, 'btnTitle')
}
</script>

<template>
  <div id="ar-container">
    <div v-for="btnTitle in MainButton" :key="btnTitle">
      <van-button type="primary" style="margin-bottom:60px" @click="handleVanBtn(btnTitle)">
        {{ btnTitle }}
      </van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#ar-container {
   padding-top: 200px;
   overflow: hidden;
   background-image: url('https://img.1ppt.com/uploads/allimg/1907/1_190718215305_4.jpg');
   width: 100vw;
   height: 100vh;
   background-size: right bottom;
}
</style>
