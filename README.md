# Vue 3 TextView

一个基于 vue3.x 版本的文本展开收起组件

<p>
  <a href="https://npm-stat.com/charts.html?package=text-view"><img src="https://img.shields.io/npm/dm/text-view.svg" alt="npm"/></a>
  <a href="https://www.npmjs.com/package/text-view"><img src="https://img.shields.io/npm/v/text-view.svg" alt="npm"/></a>
  <a href="https://packagequality.com/#?package=text-view"><img src="https://packagequality.com/shield/text-view.svg" alt="Package Quality"/></a>
</p>

## 文档链接

https://au1996.github.io/text-view/

## 使用指南

### 安装

第一步是使用 `npm` 或 `yarn` 安装它：

```bash
npm install text-view --save

# 或者使用 yarn
yarn add text-view
```

### 用法

`main.js`

```js
import { createApp } from 'vue'
import TextView from 'text-view'
import App from './App.vue'

const app = createApp(App)
app.use(TextView)
```

`App.vue`

```vue
<template>
  <TextView :content="text" :rows="1" />
</template>

<script setup>
import { ref } from 'vue'

const text = ref('这里是很长的一段文本')
</script>
```

| 参数              | 说明                                                  | 类型    | 默认值  |
| :---------------- | :---------------------------------------------------- | :------ | :------ |
| content           | 文本内容                                              | string  | -       |
| rows              | 控制多少行出现按钮                                    | number  | 2       |
| open-text         | 控制展开按钮文本                                      | string  | 展开    |
| close-text        | 控制收起按钮文本                                      | string  | 收起    |
| link              | 控制是否跳转外部链接                                  | string  | -       |
| is-click          | 为`true`时，不会展开收起，只会向外传递`btn-click`事件 | boolean | false   |
| content-color     | 文本颜色                                              | string  | -       |
| button-color      | 按钮字体颜色                                          | string  | #077fef |
| button-background | 按钮背景颜色                                          | string  | #fff    |
