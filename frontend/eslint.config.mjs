import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        // Konfiguracja dla plików aplikacji (CommonJS)
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
            "no-undef": "error",
        },
    },
    {
        // Specyficzna konfiguracja dla testów (dodajemy Mocha)
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.mocha,
            },
        },
    },
    {
        // Konfiguracja dla samego pliku config (ESM)
        files: ["eslint.config.mjs"],
        languageOptions: {
            sourceType: "module",
            globals: {
                ...globals.node,
            },
        },
    }
];