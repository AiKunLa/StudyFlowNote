import js from '@eslint/js'                        // ESLint 基础配置
import globals from 'globals'                       // 浏览器/Node 全局变量
import reactHooks from 'eslint-plugin-react-hooks'   // React Hooks 规则插件
import reactRefresh from 'eslint-plugin-react-refresh' // React 热更新兼容插件
import tseslint from 'typescript-eslint'            // TypeScript ESLint 插件
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 全局忽略目录
  globalIgnores(['dist']),

  // TypeScript 和 React 文件的 ESLint 配置
  {
    // 匹配 src 目录下的所有 .ts 和 .tsx 文件
    files: ['**/*.{ts,tsx}'],

    // 继承的预设配置（可叠加多个规则集）
    extends: [
      js.configs.recommended,           // ESLint 推荐规则
      tseslint.configs.recommended,    // TypeScript 推荐规则
      reactHooks.configs.flat.recommended, // React Hooks 推荐规则
      reactRefresh.configs.vite,       // Vite 热更新兼容规则
    ],

    // 语言配置
    languageOptions: {
      ecmaVersion: 2020,               // ECMAScript 版本
      globals: globals.browser,        // 浏览器全局变量 (window, document, fetch 等)
    },
  },
])
