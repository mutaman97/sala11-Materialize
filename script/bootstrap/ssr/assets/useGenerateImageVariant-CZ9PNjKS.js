import { u as useConfigStore, l as useTheme } from "../ssr.js";
import { computed } from "vue";
const useGenerateImageVariant = (imgLight, imgDark, imgLightBordered, imgDarkBordered, bordered = false) => {
  const configStore = useConfigStore();
  const { global } = useTheme();
  return computed(() => {
    if (global.name.value === "light") {
      if (configStore.skin === "bordered" && bordered)
        return imgLightBordered;
      else
        return imgLight;
    }
    if (global.name.value === "dark") {
      if (configStore.skin === "bordered" && bordered)
        return imgDarkBordered;
      else
        return imgDark;
    }
    return imgLight;
  });
};
export {
  useGenerateImageVariant as u
};
