# 示例

<script setup>
import ExampleBasic from './examples/ExampleBasic.vue'
import ExampleRows from './examples/ExampleRows.vue'
import ExampleButtonText from './examples/ExampleButtonText.vue'
import ExampleLink from './examples/ExampleLink.vue'
import ExampleBtnClick from './examples/ExampleBtnClick.vue'
import ExampleColor from './examples/ExampleColor.vue'
</script>

## [基础用法](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleBasic.vue)

<ExampleBasic />

```vue
<template>
  <TextView :content="text" />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')
</script>
```

## [控制行数](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleRows.vue)

<ExampleRows />

```vue
<template>
  <TextView :content="text" :rows="1" />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')
</script>
```

## [展开/收起：按钮文本](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleButtonText.vue)

<ExampleButtonText />

```vue
<template>
  <TextView :content="text" open-text="展开文本" close-text="收起文本" />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')
</script>
```

## [链接按钮](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleLink.vue)

<ExampleLink />

```vue
<template>
  <TextView :content="text" :link="link" open-text="跳转链接" />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')
const link = 'https://au1996.gitee.io/blog/'
</script>
```

## [按钮点击事件](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleBtnClick.vue)

<ExampleBtnClick />

```vue
<template>
  <TextView :content="text" :is-click="true" open-text="打开弹窗" @btn-click="btnClick" />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')

const btnClick = () => {
  window.alert(text.value)
}
</script>
```

## [文本背景颜色](https://github.com/au1996/text-view/blob/master/docs/examples/ExampleColor.vue)

<ExampleColor />

```vue
<template>
  <TextView
    :content="text"
    :content-color="contentColor"
    :button-color="buttonColor"
    :button-background="buttonBackground"
  />
</template>

<script setup>
import { ref } from 'vue'

// 注意这里的文本是能够超出换行的字数
const text = ref('风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap...')
const contentColor = 'pink'
const buttonColor = '#fff'
const buttonBackground = 'blue'
</script>
```
