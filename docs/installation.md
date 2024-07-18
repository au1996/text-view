# 快速开始

本节将介绍如何在项目中使用 `text-view`

## 安装

第一步是使用 npm 或 yarn 安装它：

```bash
npm install text-view --save

# 或者使用 yarn
yarn add text-view
```

## 用法

main.js

```js
import { createApp } from 'vue'
import TextView from 'text-view'
import App from './App.vue'

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
