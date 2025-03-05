<template>
  <div @click.stop>
    <div class="container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          class="avatar-uploader"
          action="/api/upload"
          name="image"
          :disabled="needLock"
          @click="focusCurSurveyCom"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else-if="!needLock">
            <el-icon><Upload /></el-icon>
            添加图片
          </div>
        </el-upload>
      </div>
      <!-- 图片标题和描述 -->
      <div
        class="bottom flex justify-content-center align-items-center flex-direction-column font-weight-500"
      >
        <div class="item">{{ picTitle }}</div>
        <div class="desc mt-5 mb-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { Upload } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'
import type { GetLink } from '@/types'
import { useEditorStore } from '@/stores/useEditor'
import { useRoute } from 'vue-router'
const props = defineProps({
  picTitle: {
    type: String,
    default: '',
  },
  picDesc: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
  id: {
    type: String,
  },
})
const route = useRoute()
const needLock = ref(false)
needLock.value = route.path.startsWith('/preview/') || route.path.startsWith('/quiz/')
watch(
  () => route.path,
  (newPath) => {
    needLock.value = newPath.startsWith('/preview/')
  },
)

const getLink = inject<GetLink>('getLink', () => {})
const imageUrl = ref('')
// 上传成功的回调
const handleAvatarSuccess: UploadProps['onSuccess'] = async (response) => {
  // console.log(response, 'response')
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  // console.log(getLink)
  if (getLink) {
    getLink({
      index: props.index,
      link: response.imageUrl,
    })
  }
}

const store = useEditorStore()
const focusCurSurveyCom = () => {
  store.coms.forEach((com, index) => {
    if (com.id === props.id) {
      store.setCurrentComponentIndex(index)
    }
  })
}

// 上传之前的回调
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不要超过2MB!')
    return false
  }
  return true
}
watch(
  () => props.value,
  async (newVal) => {
    if (!newVal) {
      imageUrl.value = ''
      return
    }
    const response = await fetch(newVal)
    const blob = await response.blob()
    const file = new File([blob], 'image.jpg', { type: blob.type })
    imageUrl.value = URL.createObjectURL(file)
  },
  {
    immediate: true,
  },
)
</script>

<style scoped lang="scss">
.container {
  box-sizing: border-box;
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);
  overflow: hidden;
  > .top {
    width: 200px;
    height: 200px;
    background-color: var(--font-color-lightest);
  }
  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);
    > .desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}
.avatar-uploader {
  height: 200px;
  display: flex;
}
.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
