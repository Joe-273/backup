// 该仓库用于存储画布的状态

import { defineStore } from 'pinia'
import type { EditorStore, OptionsProps, Status, SurveyDBData } from '@/types'
import { isSurveyComName } from '@/types'
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
} from './actions'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'
import { saveSurvey, updateSurveyById } from '@/db/operation'

const initStoreCom = () => {
  const titleCom = defaultStatusMap['text-note']()
  const descCom = defaultStatusMap['text-note']()
  titleCom.status.title.status = '易问问卷'
  ;(titleCom.status.type as OptionsProps).currentStatus = 0
  descCom.status.desc.status =
    '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！'
  return [titleCom, descCom]
}

export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentComponentIndex: -1, // 当前选中的组件索引，一开始都没有选中，所以是-1
    surveyCount: 0, // 问卷题目的数量
    coms: initStoreCom(), // 问卷题目的数组
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setCurrentStatus,
    setPicLinkByIndex,
    addCom(newCom: Status) {
      this.coms.push(newCom)
      this.currentComponentIndex = -1
      if (isSurveyComName(newCom.name)) this.surveyCount++
    },
    setCurrentComponentIndex(index: number) {
      this.currentComponentIndex = index
    },
    removeCom(index: number) {
      // 删除的时候要看删除的是不是问卷题目
      if (isSurveyComName(this.coms[index].name)) {
        this.surveyCount--
      }
      this.coms.splice(index, 1)
    },
    resetComs() {
      this.coms = initStoreCom() as Status[]
      this.surveyCount = 0
      this.currentComponentIndex = -1
    },
    // 保存问卷数据
    saveComs(data: SurveyDBData) {
      return saveSurvey(data)
    },
    setStore(data: SurveyDBData) {
      this.coms = data.coms
      this.surveyCount = data.surveyCount
      this.currentComponentIndex = -1
    },
    updateComs(id: number, data: Partial<SurveyDBData>) {
      return updateSurveyById(id, data)
    },
  },
}) as unknown as () => EditorStore
