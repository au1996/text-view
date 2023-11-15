<template>
  <TextView ref="textRef" :content="text" :link="link" open-text="跳转链接" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import distCom from '../../dist/text-view.es'

const TextView = distCom.TextView
const originText = '风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap'
const textRef = ref(null)
const text = ref(originText)
const link = 'https://au1996.gitee.io/blog/'

onMounted(() => {
  const { clientWidth } = textRef.value.$el
  for (let i = 0; i <= clientWidth / 8 / originText.length; i++) {
    text.value += originText
  }
})
</script>
