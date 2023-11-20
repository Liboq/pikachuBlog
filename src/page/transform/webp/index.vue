<template>
  <div class="webp-container">
    <div class="container">
      <span>图片转换（jpg/png=>webp）(最多上传10张)</span>
      <draggable-upload
        action=""
        :draggable="true"
        @delete="handleDelete"
        :before-upload="beforeUpload"
        :fileList="fileList"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import 'draggable-vue-uploader/dist/style.css';
import { delOneWebp, getUserWebp, toWebp } from '../../../api/webp';
import { isVip } from '../../../api/user';

const fileList = ref<{ url: string; file: any; id: string }[]>([]);
const userId = ref<string>(
  (localStorage.getItem('auth') &&
    JSON.parse(localStorage.getItem('auth') || '')['userId']) ||
    ''
);
onMounted(() => {
  getUserWebps();
});
const getUserWebps = async () => {
  const res = await getUserWebp(userId.value);
  console.log(res);

  if (res.status == 200) {
    fileList.value = res.data.map((item: any, index: number) => {
      return {
        url: item.data,
        file: null,
        id: item._id
      };
    });
  }
};

const handleDelete = async (file: any, index: number) => {
  const res = await delOneWebp(file.id);
  if (res.status == 200) {
    alert('删除成功');
  } else {
    alert('删除失败');
  }
  console.log('handleDelete', file, file.id);
};
// const downloadBase64Img = (base64URL: string, fileName: string) => {
//   // 创建a标签，用于触发下载
//   const a = document.createElement('a');
//   // 将 a 标签的 download 属性设置为要下载的文件名
//   a.download = fileName || 'image';
//   // 创建 Blob 对象，并获取 base64 数据的 MIME 类型
//   const mimeType = base64URL.match(/:(.*?);/)![1];
//   // 将 base64 数据转换为字节数组
//   const byteCharacters = atob(base64URL.split(',')[1]);
//   const byteNumbers = new Array(byteCharacters.length);
//   // 将字节数组填充到 Uint8Array 中
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }
//   const byteArray = new Uint8Array(byteNumbers);
//   // 创建 Blob 对象
//   const blob = new Blob([byteArray], { type: mimeType });
//   // 将 Blob 对象的 URL 赋值给 a 标签的 href 属性
//   a.href = URL.createObjectURL(blob);
//   // 将a标签暂时添加到 body 中，触发下载
//   document.body.appendChild(a);
//   a.click();
//   // 下载完成后，将 a 标签从 body 中移除
//   document.body.removeChild(a);
// };

const beforeUpload = async (file: any) => {
  console.log(file);
  if (!userId.value) {
    alert('请先登录');
    return;
  }
  if (userId.value) {
    const res = await isVip(userId.value);
    if (res.status != 200) {
      alert('请先登录');
      return;
    }
  }
  const regx = file.name.split(".")[1]
  const data = {
    name: file.name.replace('.' + regx, '') + '.webp',
    data: file.url,
    userId: userId.value,
    type: regx
  };
  const res = await toWebp(data);
  console.log(res);

  return false;
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .container {
    margin-top: 0.1rem !important;
    min-width: 9rem !important;
    min-height: 15rem !important;
    ::v-deep(.draggable-upload) {
      height: 2.78rem !important;
      width: 2.78rem !important;
    }
  }
}
.webp-container {
  color: #fff;
  font-size: 26px;
  position: relative;
  margin-top: 10px;
  padding: 10px 20px;
  .container {
    min-height: 1200px;
    min-width: 1330px;
    background-color: #0c1d1b;
    opacity: 0.7;
    padding-bottom: 20px;
  }
}
</style>
