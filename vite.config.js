// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// اگر می‌خوای همان aliasهایی که گفتی (src, components, pages ...) فعال باشند:
const paths = [
  "src",
  "assets",
  "components",
  "configs",
  "pages",
  "router",
  "services",
  "styles",
  "utils",
  "reduxs",
  "data",
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ساخت aliasها به صورت خودکار
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        {}
      ),
    },
  },
});
