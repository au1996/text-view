# Getting started

## Installation

First step is to install it using `npm` or `yarn`:

```bash
npm install text-view

# or use yarn
yarn add text-view
```

## Basic Using

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
