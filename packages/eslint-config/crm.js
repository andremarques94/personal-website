import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import globals from "globals";
import tseslint from "typescript-eslint";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for Strapi applications.
 *
 * @type {import("eslint").Linter.Config}
 */
export const crmConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    // CRM-specific rules
    rules: {
      // Allow console.log in CRM (useful for debugging)
      "no-console": "warn",
      // Allow require() in CRM config files
      "@typescript-eslint/no-var-requires": "off",
      // Allow any type in CRM (common in CMS contexts)
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow unused vars in CRM (common in plugin development)
      "@typescript-eslint/no-unused-vars": "warn",
      // Allow require() in CRM
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      ".strapi/**",
      "node_modules/**",
      "public/uploads/**",
    ],
  },
];
