<script setup>
import {
  ref,
  reactive,
  watch,
  computed,
  onMounted,
  getCurrentInstance
} from "vue";
const { proxy } = getCurrentInstance();
const theme = proxy.$theme;
function getRandomColor() {
  return (
    "#" + (("00000" + Math.random() * 0x1000000) << 0).toString(16).slice(-6)
  );
}
function changeColor() {
  proxy.$theme.SetColor({
    baseColor: getRandomColor()
  });
}
// setInterval(() => {
//   changeColor();
// }, 1000);
</script>
<template>
  <div class="test">10</div>
</template>
<style lang="scss" scoped>
.test {
  height: 100%;
  width: 100%;
  background-color: v-bind("theme.baseColor");
}
</style>
