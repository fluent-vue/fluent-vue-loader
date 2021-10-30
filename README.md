fluent-vue-loader
=================

`fluent-vue-loader` is Webpack loader that allows to use Vue custom blocks with locale messages in `fluent-vue`

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
