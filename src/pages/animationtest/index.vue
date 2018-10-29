<template>
  <div class="animationtest">
    <div class="circle">
      <span class="num">{{ num }}</span>
    </div>
    <div class="btn" @click="c">开始</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      min: 0,
      max: 1000,
      step: 15,
      useAnimation: true,
      plus: true,
      timeId: null
    }
  },

  methods: {
    c () {
      if (this.timeId) {
        return
      }
      const realStep = this.plus ? this.step * 1 : this.step * -1
      const target = this.plus ? this.max : this.min
      const compareFunc = this.plus ? Math.max : Math.min
      if (this.useAnimation) {
        this.timeId = setInterval(() => {
          if (compareFunc(this.num, target) === target && this.num !== target) {
            this.num += realStep
          } else {
            this.num = target
            clearInterval(this.timeId)
            this.timeId = null
          }
        }, 50)
      }
      this.plus = !this.plus
    }
  }
}
</script>

<style scoped lang="stylus">
  .animationtest{
    display flex
    flex-direction column
    align-items center
    .circle{
      width 200rpx
      height 200rpx
      border-radius 50%
      display flex
      justify-content center
      align-items center
      font-size 50rpx
      background lightseagreen
      color #fff
    }
    .btn{
      width 250rpx
      height 80rpx
      display flex
      justify-content center
      align-items center
      background lightblue
    }
  }
</style>
