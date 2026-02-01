import { defineConfig } from "tsdown";

export default defineConfig({
entry: {
  button: "src/Button/index.ts",
  card: "src/Card/index.ts",
  code: "src/Code/index.ts"
},
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"]
});
