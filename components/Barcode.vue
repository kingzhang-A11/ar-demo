<script setup lang='ts'>
onMounted(() => {
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    width: 100,
    height: 100,
  })

  function makeCode() {
    const elText = document.getElementById('text')
    if (!elText.value) {
    //   alert('Input a text')
      elText.focus()
      return
    }
    qrcode.makeCode(elText.value)
  }

  makeCode()

  document.getElementById('text')
    .addEventListener('blur', () => { makeCode() })
    .addEventListener('keydown', (e) => { if (e.keyCode === 13) makeCode() })
})
</script>

<template>
  <div class="ar-container">
    <input id="text" type="text" value="https://kingzhang-a11.github.io./" style="width:80%">
    <br>
    <div id="qrcode" style="width:100px; height:100px; margin-top:15px;" />
  </div>
</template>

<style lang="scss" scoped>
.ar-container{
  width: 100%;
  height: 100%;
  #qrcode {
    width:160px;
    height:160px;
    margin-top:15px;
  }
}
</style>
