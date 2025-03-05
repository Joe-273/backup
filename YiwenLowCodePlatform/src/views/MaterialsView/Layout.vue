<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <!-- 显示对应的业务组件 -->
    <div class="center">
      <Router-View v-slot="{ Component }">
        <component :is="Component" :status="currentCom.status" :serialNum="1" />
      </Router-View>
    </div>
    <!-- 编辑面板 -->
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue'
import { computed, provide } from 'vue'
import { useMaterialStore } from '@/stores/useMaterial'
import { ElMessage } from 'element-plus'
import type { PicLink, MaterialStore } from '@/types'
import { isPicLink, IsTypeStatus, IsOptionsStatus } from '@/types'
import { changeEditorIsShowStatus } from '@/utils'
// 数据仓库
const store = useMaterialStore() as unknown as MaterialStore
// 获取当前选中组件的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom])

const updateStatus = (configKey: string, payload?: number | string | boolean | PicLink) => {
  // 拿到新的状态数据之后，就应该去修改仓库里面的数据
  switch (configKey) {
    case 'type': {
      if (typeof payload === 'number' && IsTypeStatus(currentCom.value.status)) {
        // 切换其他编辑器的显示状态
        changeEditorIsShowStatus(currentCom.value.status, payload)
        store.setCurrentStatus(currentCom.value.status[configKey], payload)
      }
      break
    }
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "title or desc". Expected string.')
        return
      }
      store.setTextStatus(currentCom.value.status[configKey], payload)
      break
    }
    case 'options': {
      if (IsOptionsStatus(currentCom.value.status))
        if (typeof payload === 'number') {
          // 说明是删除选项
          const result = store.removeOption(currentCom.value.status[configKey], payload)
          if (result) ElMessage.success('删除成功')
          else ElMessage.error('至少保留两个选项')
        } else if (typeof payload === 'object' && isPicLink(payload)) {
          // 说明是在设置图片的链接
          store.setPicLinkByIndex(currentCom.value.status[configKey], payload)
        } else {
          // 说明是新增选项
          store.addOption(currentCom.value.status[configKey])
        }
      break
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.')
        return
      }
      store.setPosition(currentCom.value.status[configKey], payload)
      break
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.')
        return
      }
      store.setCurrentStatus(currentCom.value.status[configKey], payload)
      break
    }
  }
}

const getLink = (link: PicLink) => {
  updateStatus('options', link)
}

provide('updateStatus', updateStatus)
provide('getLink', getLink)
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  min-width: 1060px;
  height: calc(100vh - 100px - 40px - 20px);
  min-height: 445px;
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  display: flex;
}

.left,
.center,
.right {
  overflow-y: auto;
}

// 隐藏滚动条（Chrome 和其他 Webkit 浏览器）
.left::-webkit-scrollbar,
.center::-webkit-scrollbar,
.right::-webkit-scrollbar {
  width: 4px; // 设置滚动条宽度
}

.left::-webkit-scrollbar-track,
.center::-webkit-scrollbar-track,
.right::-webkit-scrollbar-track {
  background: transparent; // 轨道背景颜色
}

.left::-webkit-scrollbar-thumb,
.center::-webkit-scrollbar-thumb,
.right::-webkit-scrollbar-thumb {
  background: var(--border-color); // 拇指背景颜色
  border-radius: 4px; // 拇指圆角
}

.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}

.center {
  height: calc(100vh - 100px - 40px - 60px - 20px);
  padding: 30px;
  border-left: 1px solid var(--border-color);
  flex: 4;
}

.right {
  min-width: 320px;
  height: calc(100vh - 100px - 40px - 20px);
  border-left: 1px solid var(--border-color);
  flex: 2;
}
</style>
