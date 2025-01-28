import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser },rules:{
    "semi": "warn",
    "no-console": "error",
    "quotes":["warn","single"]
  },plugins: ["jest"]


},
  pluginJs.configs.recommended, 
];