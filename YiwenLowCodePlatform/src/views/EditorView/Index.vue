<template>
  <div>
    <div class="header">
      <Header :is-editor="true" :id="id" />
    </div>
    <!-- 编辑器主体区域 -->
    <div class="container flex">
      <LeftSide />
      <Center />
      <RightSide />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import Header from '@/components/Common/Header.vue'
import LeftSide from '@/views/EditorView/LeftSide/Index.vue'
import Center from '@/views/EditorView/Center.vue'
import RightSide from '@/views/EditorView/RightSide.vue'
import { getSurveyById } from '@/db/operation'

import { restoreComponentStatus } from '@/utils'
import { ElMessage } from 'element-plus'
import type { PicLink, OptionsStatus, TypeStatus } from '@/types'
import { isPicLink, IsTypeStatus, IsOptionsStatus } from '@/types'
import { changeEditorIsShowStatus } from '@/utils'

// 路由
import { useRoute } from 'vue-router'
const route = useRoute()
// 仓库
import { useEditorStore } from '@/stores/useEditor'
const store = useEditorStore()
store.resetComs()

const id = computed(() => (route.params.id ? String(route.params.id) : ''))
const currentCom = computed(() => store.coms[store.currentComponentIndex])
if (id.value) {
  getSurveyById(Number(id.value)).then((res) => {
    if (res) {
      restoreComponentStatus(res.coms)
      store.setStore(res)
    }
  })
}
const updateStatus = (configKey: string, payload?: number | string | boolean | PicLink) => {
  const currentComEditorStatus = currentCom.value.status as unknown as OptionsStatus | TypeStatus
  // 拿到新的状态数据之后，就应该去修改仓库里面的数据
  switch (configKey) {
    case 'type': {
      if (typeof payload === 'number' && IsTypeStatus(currentComEditorStatus)) {
        // 切换其他编辑器的显示状态
        changeEditorIsShowStatus(currentComEditorStatus, payload)
        store.setCurrentStatus(currentComEditorStatus[configKey], payload)
      }
      break
    }
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc". Expected string.')
        return
      }
      store.setTextStatus(currentComEditorStatus[configKey], payload)
      break
    }
    case 'options': {
      if (IsOptionsStatus(currentComEditorStatus))
        if (typeof payload === 'number') {
          // 说明是删除选项
          const result = store.removeOption(currentComEditorStatus[configKey], payload)
          if (result) ElMessage.success('删除成功')
          else ElMessage.error('至少保留两个选项')
        } else if (typeof payload === 'object' && isPicLink(payload)) {
          // 说明是在设置图片的链接
          store.setPicLinkByIndex(currentComEditorStatus[configKey], payload)
        } else {
          // 说明是新增选项
          store.addOption(currentComEditorStatus[configKey])
        }
      break
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.')
        return
      }
      store.setPosition(currentComEditorStatus[configKey], payload)
      break
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.')
        return
      }
      store.setCurrentStatus(currentComEditorStatus[configKey], payload)
      break
    }
  }
}
const getLink = (link: PicLink) => {
  updateStatus('options', link)
}
provide('getLink', getLink)
provide('updateStatus', updateStatus)
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  height: calc(100vh - 140px);
  width: calc(100vw - 120px);
  margin: auto;
  margin-top: 100px;
  min-width: 1160px;
  max-width: 1600px;
  > :nth-child(2n + 1) {
    max-width: 400px;
    flex: 1;
  }
  > :nth-child(1) {
    min-width: 260px;
  }
  > :nth-child(3) {
    min-width: 320px;
  }
  > :nth-child(2) {
    flex: 2;
    margin: 0 20px;
    min-width: 600px;
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
