<template>
  <div>
    <h2>参数：content="测试文本"</h2>
    <TextView content="测试文本" />
    <br />
    <h2>参数：:content="text"</h2>
    <TextView :content="text" />
    <br />
    <TextViewDist :content="text" />
    <br />
    <h2>参数：:content="text" button-color="red" button-background="pink" button-color="blue"</h2>
    <TextView :content="text" content-color="red" button-background="pink" button-color="blue" />
    <br />
    <TextViewDist
      :content="text"
      content-color="red"
      button-background="pink"
      button-color="blue"
    />
    <br />
    <h2>参数：:content="text" :rows="4"</h2>
    <TextView :content="text" :rows="4" />
    <br />
    <TextViewDist :content="text" :rows="4" />
    <br />
    <h2>参数：:content="text" :rows="1" open-text="查看" close-text="关闭"</h2>
    <TextView :content="text" :rows="1" open-text="查看" close-text="关闭" />
    <br />
    <TextViewDist :content="text" :rows="1" open-text="查看" close-text="关闭" />
    <br />
    <h2>参数：:content="text" :rows="1" open-text="跳转链接"</h2>
    <TextView :content="text" :rows="1" open-text="跳转链接" link="https://au1996.gitee.io/blog/" />
    <br />
    <TextViewDist
      :content="text"
      :rows="1"
      open-text="跳转链接"
      link="https://au1996.gitee.io/blog/"
    />
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import distCom from '../../dist/text-view.es'

// const TextViewDist = distCom.TextView

const text = ref('')
const originText = '风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap'
const initText = () => {
  const windowWidth = document.documentElement.clientWidth
  const leng = originText.length
  for (let i = 0; i < windowWidth / leng / 2; i++) {
    text.value += originText
  }
}

initText()
</script>
