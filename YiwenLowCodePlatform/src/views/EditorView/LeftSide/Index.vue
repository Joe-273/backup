<template>
  <div class="left-side-container flex">
    <div class="tabs">
      <!-- 题型 -->
      <div
        class="tab-item"
        :class="{
          'tab-show': routeName === 'survey-type',
        }"
        @click="switchEditor"
      >
        <el-icon><Memo /></el-icon>
        <span class="tab-item-title mt-5">题型</span>
      </div>
      <!-- 大纲 -->
      <div
        class="tab-item"
        :class="{
          'tab-show': routeName === 'outline',
        }"
        @click="switchOutline"
      >
        <el-icon><Document /></el-icon>
        <span class="tab-item-title mt-5">大纲</span>
      </div>
    </div>
    <RouterView class="tab-pane" />
  </div>
</template>

<script setup lang="ts">
import { Document, Memo } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

const switchEditor = () => {
  router.push({ name: 'survey-type' })
}

const switchOutline = () => {
  router.push({ name: 'outline' })
}
</script>

<style scoped lang="scss">
.left-side-container {
  box-sizing: border-box;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  > .tabs {
    width: 25%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    > .tab-item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--font-color-light);
      text-decoration: none;
      cursor: pointer;
      > .tab-item-title {
        font-size: var(--font-size-base);
      }
    }
    > .tab-show {
      color: var(--primary-color);
    }
  }
  > .tab-pane {
    width: 75%;
    // 高度需要减去padding部分，否则会溢出
    padding: 20px;
    overflow-y: auto;
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
}
</style>
