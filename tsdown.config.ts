import { defineConfig } from "tsdown";

export default defineConfig({
 entry: {
    "Button/index": "src/Button/index.ts",
    "Card/index": "src/Card/index.ts",
    "Code/index": "src/Code/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"]
});
