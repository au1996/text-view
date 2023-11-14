<template>
  <div class="xy-vue-text-tooltip-box" :style="{ color: contentColor }">
    <div v-if="visible" v-html="content"></div>
    <div
      v-show="!visible"
      :ref="refs.ellipsisRef"
      :style="{ '-webkit-line-clamp': rows }"
      class="ellipsis"
      v-html="content"
    ></div>
    <div
      v-show="btnVisible"
      class="btn"
      :style="{ color: buttonColor, background: buttonBackground }"
      @click="handleView"
    >
      {{ visible ? closeText : openText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, nextTick, shallowRef } from 'vue'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    default: 2,
  },
  openText: {
    type: String,
    default: '展开',
  },
  closeText: {
    type: String,
    default: '收起',
  },
  link: {
    type: String,
    default: '',
  },
  contentColor: {
    type: String,
    default: '',
  },
  buttonBackground: {
    type: String,
    default: '#fff',
  },
  buttonColor: {
    type: String,
    default: '#077fef',
  },
})

watch(
  () => [props.content, props.rows],
  () => {
    initVisible()
  }
)

const visible = ref(false)
const btnVisible = ref(false)
const refs = {
  ellipsisRef: shallowRef(null),
}

const initVisible = async () => {
  await nextTick()
  btnVisible.value = false
  if (!refs.ellipsisRef.value) return

  const { clientHeight, scrollHeight } = refs.ellipsisRef.value
  if (scrollHeight > clientHeight) {
    btnVisible.value = true
  }
}

onMounted(() => {
  initVisible()
})

const handleView = () => {
  if (props.link) {
    window.open(props.link)
    return
  }

  visible.value = !visible.value
}
</script>

<style lang="scss">
.xy-vue-text-tooltip-box {
  position: relative;
  .ellipsis {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-box-orient: vertical;
  }

  .btn {
    position: absolute;
    right: 4px;
    bottom: 0;
    padding-left: 2px;
    text-align: right;
    cursor: pointer;
  }
}
</style>
