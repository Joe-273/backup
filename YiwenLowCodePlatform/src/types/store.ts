// 判断传入的值是否为题目类型
import type { TextProps, OptionsProps, PicLink, Status, VueComType, SurveyDBData } from '@/types'
// 题目类型
export type SurveyComName =
  | 'single-select'
  | 'single-pic-select'
  | 'personal-info-gender'
  | 'personal-info-education'

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | 'text-note'

// 编辑组件类型:集合了所有的编辑组件
export type EditComName =
  | 'title-editor'
  | 'desc-editor'
  | 'position-editor'
  | 'size-editor'
  | 'weight-editor'
  | 'italic-editor'
  | 'text-type-editor'
  | 'pic-options-editor'
  | 'options-editor'

// 所有的组件类型：业务组件类型 + 编辑组件类型
export type ComponentName = Material | EditComName

export type ComponentMap = {
  [key in ComponentName]: VueComType
}

export interface Actions {
  setTextStatus: (textProps: TextProps, text: string) => void
  addOption: (optionProps: OptionsProps) => void
  removeOption: (optionProps: OptionsProps, index: number) => number
  setPosition: (optionProps: OptionsProps, index: number) => void
  setCurrentStatus: (optionProps: OptionsProps, index: number) => void
  setPicLinkByIndex: (optionProps: OptionsProps, payload: PicLink) => void
}

// 仓库状态
export interface MaterialStore extends Actions {
  currentMaterialCom: Material
  coms: Record<Material, Status>
  setCurrentSurveyCom: (com: Material) => void
}

export interface EditorStore extends Actions {
  currentComponentIndex: number
  surveyCount: number
  coms: Status[]
  addCom: (newCom: Status) => void
  setCurrentComponentIndex: (index: number) => void
  removeCom: (index: number) => void
  resetComs: () => void // 保存问卷数据
  saveComs: (data: SurveyDBData) => Promise<number>
  setStore: (data: SurveyDBData) => void
  updateComs: (id: number, data: Partial<SurveyDBData>) => Promise<number>
}

// 记录题目类型的数组
export const SurveyComNameArr = [
  'single-select',
  'single-pic-select',
  'personal-info-gender',
  'personal-info-education',
]

// 判断传入的值是否为题目类型
export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName)
}

// 该数组记录适合生成PDF的题目类型
const PDFComs = [
  'single-select',
  'single-pic-select',
  'personal-info-gender',
  'personal-info-education',
  'text-note',
]

export function canUsedForPDF(value: string): boolean {
  return PDFComs.includes(value)
}

export type QuizData = {
  surveyCount: number
  coms: Status[]
}
