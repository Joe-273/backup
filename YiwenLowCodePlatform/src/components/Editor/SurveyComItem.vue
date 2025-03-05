<template>
  <div>
    <div
      class="survey-com-item-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10"
      @click="addSurveyCom"
    >
      {{ item.comName }}
      {{ item.matierialName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'
import { useEditorStore } from '@/stores/useEditor'
import type { Material } from '@/types'
import { updateInitStatusBeforeAdd } from '@/utils'
import EventBus from '@/utils/eventBus'

const store = useEditorStore()
const props = defineProps(['item'])
const addSurveyCom = () => {
  const newSurveyComName = props.item.materialName as Material
  if (!newSurveyComName) {
    return
  }
  // 创建一个业务组件的数据
  const newSurveyComStatus = defaultStatusMap[newSurveyComName]()
  updateInitStatusBeforeAdd(newSurveyComStatus, newSurveyComName)
  store.addCom(newSurveyComStatus)
  EventBus.emit('scrollToBottom')
}
</script>

<style scoped lang="scss">
.survey-com-item-container {
  width: 60px;
  height: 30px;
  background-color: var(--background-color);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  user-select: none;
}
.survey-com-item-container:hover {
  background-color: var(--font-color-lightest);
}
</style>
