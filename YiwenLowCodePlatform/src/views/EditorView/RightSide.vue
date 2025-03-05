<template>
  <div class="right-side-container">
    <div
      v-if="store.currentComponentIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击题型进行编辑
    </div>
    <div v-else>
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
// 仓库
import { useEditorStore } from '@/stores/useEditor'
const store = useEditorStore()
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue'
const currentCom = computed(() => store.coms[store.currentComponentIndex])
</script>

<style scoped lang="scss">
.right-side-container {
  box-sizing: border-box;
  width: 320px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
  // 隐藏滚动条（Chrome 和其他 Webkit 浏览器）
  &::-webkit-scrollbar {
    width: 4px; // 设置滚动条宽度
  }
  &::-webkit-scrollbar-track {
    background: transparent; // 轨道背景颜色
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-color); // 拇指背景颜色
    border-radius: 4px; // 拇指圆角
  }
}
.content {
  height: 100%;
}
</style>
