<template>
  <div class="filetest">
    <div class="btn" @touchstart.!capture="handleTap1">下载后预览</div>
    <div class="btn" @click="c1">在线预览</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleTap1 () {
      console.log('c')
      wx.downloadFile({
        url: 'http://www.gov.cn/zhengce/pdfFile/2018_PDF.pdf',
        success (res) {
          const filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success (res) {
              console.log('打开文档成功')
            }
          })
        }
      })
    },
    c1 () {
      wx.openDocument({
        filePath: 'http://www.gov.cn/zhengce/pdfFile/2018_PDF.pdf',
        success (res) {
          console.log('在线预览文档成功')
        },
        fail (e) {
          console.log(e)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .filetest{
    width 100%
    display flex
    flex-direction column
    align-items center
    .btn{
      margin-bottom 200rpx
      width 300rpx
      height 100rpx
      background lightblue
      color #fff
      font-size 45rpx
      display flex
      align-items center
      justify-content center
      border-radius 10rpx
      letter-spacing 5rpx
    }
  }
</style>
