<h1 align="center">
  fluent-vue-loader
</h1>

<p align="center">
  <a href="https://github.com/fluent-vue/fluent-vue-loader/actions">
    <img src="https://img.shields.io/github/workflow/status/fluent-vue/fluent-vue-loader/Test" alt="GitHub Workflow Status">
  </a>
  <a href="https://codecov.io/gh/fluent-vue/fluent-vue-loader">
    <img src="https://codecov.io/gh/fluent-vue/fluent-vue-loader/branch/main/graph/badge.svg?token=0JSSE94EGJ" alt="codecov">
  </a>
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide">
  </a>
  <a href="https://github.com/fluent-vue/fluent-vue-loader/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/fluent-vue/fluent-vue-loader" alt="GitHub license">
  </a>
</p>

<p align="center">
  Webpack loader that allows to use Vue custom blocks for locale messages in <a href="https://github.com/Demivan/fluent-vue">fluent-vue</a>
</p>

- [Installation](#installation)
- [Example](#example)

## Installation

**Add `fluent-vue-loader` to your dev-dependencies:**

For `npm` users:
```
npm install fluent-vue-loader --save-dev
```

For `yarn` users:
```
yarn add fluent-vue-loader --dev
```

**Add loader to your Webpack config**

```js
module.exports = {
  module: {
    rules: [
      // ...
      {
        resourceQuery: /blockType=fluent/,
        loader: 'fluent-vue-loader',
      },
      // ...
    ]
  }
}
```

## Example

Example of `App.vue` with custom block:

```vue
<template>
  <p>{{ $t('hello') }}</p>
</template>

<script>
export default {
  name: 'app'
}
</script>

<fluent locale="en">
hello = hello world!
</fluent>
```
