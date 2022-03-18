<script setup>
import { onUnmounted, getCurrentInstance, onUpdated, ref } from "vue";
const { proxy } = getCurrentInstance();
const theme = proxy.$theme;
const colorTimer = ref(undefined);
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

function runColorTimer() {
  colorTimer.value = setInterval(() => {
    changeColor();
  }, 1000);
}
runColorTimer();
const clearColorTimer = () => {
  if (colorTimer.value) {
    clearInterval(colorTimer.value);
  } else {
    return;
  }
};
onUpdated(() => {
  clearColorTimer();
  runColorTimer();
});
onUnmounted(() => {
  clearColorTimer();
});
</script>
<template>
  <div class="test">123456789</div>
</template>
<style lang="scss" scoped>
.test {
  height: 100%;
  width: 100%;
  background-color: v-bind("theme.baseColor");
}
</style>
