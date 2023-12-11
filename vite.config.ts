import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/bikepark-banovo-brdo/",
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.gpx"],
});
