// 定义数据库和表结构
import type { SurveyDBData } from '@/types'
import Dexie, { type Table } from 'dexie'

class SurveyDataBase extends Dexie {
  surveys!: Table<SurveyDBData, number>

  constructor() {
    super('SurveyDataBase')
    this.version(1).stores({
      surveys: '++id, createDate, updateDate, title, surveyCount, coms',
    })
  }
}

const db = new SurveyDataBase()
export { db }
