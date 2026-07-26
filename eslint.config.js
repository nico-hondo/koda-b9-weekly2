import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.js"], 
    languageOptions: { globals: globals.node },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      "no-dupe-else-if": "warn",
      "no-duplicate-case": "error",
      "valid-typeof": "warn",
      "no-unused-vars": "warn",
      "no-use-before-define": "error",
    } 
  },
]);