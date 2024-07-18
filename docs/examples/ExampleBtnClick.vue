<template>
  <TextView
    ref="textRef"
    :content="text"
    :is-click="true"
    open-text="打开弹窗"
    @btn-click="btnClick"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TextView from '../../src/components/TextView.vue'

const originText = '风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap'
const textRef = ref(null)
const text = ref(originText)

onMounted(() => {
  const { clientWidth } = textRef.value.$el
  for (let i = 0; i <= clientWidth / 8 / originText.length; i++) {
    text.value += originText
  }
})

const btnClick = () => {
  window.alert(text.value)
}
</script>
