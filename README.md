# Vue 3 TextView

一个基于 vue3.x 版本的文本展示收起组件

<p>
  <a href="https://npm-stat.com/charts.html?package=text-view"><img src="https://img.shields.io/npm/dm/text-view.svg" alt="npm"/></a>
  <a href="https://www.npmjs.com/package/text-view"><img src="https://img.shields.io/npm/v/text-view.svg" alt="npm"/></a>
  <a href="https://packagequality.com/#?package=text-view"><img src="https://packagequality.com/shield/text-view.svg" alt="Package Quality"/></a>
</p>

## Getting started

### Installation

First step is to install it using `yarn` or `npm`:

```bash
npm install text-view

# or use yarn
yarn add text-view
```

### Basic Using

main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import TextView from 'text-view'

const app = createApp(App)
app.use(TextView)
```

App.vue

```vue
<template>
  <TextView :content="text" :rows="1" />
</template>

<script setup>
import { ref } from 'vue'

const text = ref('这里是很长的一段文本')
</script>
```

| 参数              | 说明                 | 类型   | 默认值  |
| :---------------- | :------------------- | :----- | :------ |
| content           | 文本内容             | string | -       |
| rows              | 控制多少行出现按钮   | number | 2       |
| open-text         | 控制展开按钮文本     | string | 展开    |
| close-text        | 控制收起按钮文本     | string | 收起    |
| link              | 控制是否跳转外部链接 | string | -       |
| content-color     | 文本颜色             | string | -       |
| button-color      | 按钮字体颜色         | string | #077fef |
| button-background | 按钮背景颜色         | string | #fff    |
