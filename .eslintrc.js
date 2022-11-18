module.exports = {
    root: true,
    env: {
      node: true,
      'vue/setup-compiler-macros': true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['vue', 'html', 'prettier'],
    parserOptions: {
      ecmaVersion: 8
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'no-mutating-props': 'off',
      'vue/no-v-html': 'off'
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          mocha: true
        }
      }
    ]
  };