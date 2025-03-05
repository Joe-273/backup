<template>
  <div
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedState.title"
      :desc="computedState.desc"
      :titleSize="computedState.titleSize"
      :descSize="computedState.descSize"
      :titleWeight="computedState.titleWeight"
      :descWeight="computedState.descWeight"
      :titleItalic="computedState.titleItalic"
      :descItalic="computedState.descItalic"
      :titleColor="computedState.titleColor"
      :descColor="computedState.descColor"
    />
    <div :class="{ 'pic-center': computedState.position }">
      <el-radio-group @click.stop @change="emitAnswer" v-model="radioValue" class="picGroup wrap">
        <el-radio
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :value="index"
          :key="index"
        >
          <PicItem :key="index" v-bind="{ ...item, index, id }" />
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
import PicItem from '@/components/SurveyComs/Common/PicItem.vue'
import type { OptionsStatus } from '@/types'
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getPicTitleDescStatusArr,
} from '@/utils'
const props = defineProps<{
  serialNum: number
  status: OptionsStatus
  id?: string
}>()

const radioValue = ref('')
const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  options: getPicTitleDescStatusArr(props.status.options),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}))

// 回头父组件需要传递一个updateAnswer过来
// 通过触发父组件的这个自定义事件将答案传递给父组件
const emits = defineEmits(['updateAnswer'])
const emitAnswer = () => {
  emits('updateAnswer', radioValue.value)
}
</script>

<style scoped>
.picOption {
  height: auto;
  flex-direction: column-reverse;
  margin: 0 0 25px 0;
}
.pic-center {
  > .picGroup {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
