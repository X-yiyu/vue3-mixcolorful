import { reactive } from "vue";
export const theme = reactive({
  baseColor: "#009a9a",
  SetColor(setting) {
    this.baseColor = setting.baseColor;
  }
});
