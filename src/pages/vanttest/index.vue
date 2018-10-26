<template>
  <div class="vanttest">
    <!--<van-button type="primary">按钮</van-button>-->
    <div class="bar">
      <div :class="['bar-item', {'active': index===activeIndex}]" @click="c(item,index)" v-for="(item,index) in bar">
        <span>{{ item.name }}</span>
        <image class="icon" src="/static/img/arrow.png"/>
      </div>
    </div>
    <div class="overlay" v-if="activeIndex !== -1" @click.self="activeIndex=-1">
      <div class="wrap-0" v-if="activeIndex === 0">
        <div class="wrap-item">资料</div>
        <div class="wrap-item">视频</div>
      </div>
      <div class="wrap-1" v-if="activeIndex === 1">
        <div class="wrap-item">
          <div class="title">年级情况</div>
          <div class="btn-line">
            <div class="btn">一年级</div>
            <div class="btn">二年级</div>
            <div class="btn">三年级</div>
          </div>
        </div>
        <div class="wrap-item">
          <div class="title">其他</div>
          <van-switch-cell
            title="显示已兑换的资料"
            :checked=checked
            @change="onChange"
          />
        </div>
      </div>
    </div>

<!--    <van-popup
      :show="show"
      z-index="10"
      :close-on-click-overlay="true"
      :overlay="true"
      @close="onClose"
      overlay-style="top:71rpx;"
      custom-style="top:71rpx;"
      duration="300"
    >
      <div class="wrap">
        <div class="wrap-item">资料</div>
        <div class="wrap-item">视频</div>
      </div>
    </van-popup>-->
  </div>
</template>

<script>
// import Notify from '@/../static/vant/notify'
export default {
  components: {
    // Notify
  },
  data () {
    return {
      bar: [
        {
          name: '资料'
        },
        {
          name: '筛选'
        },
        {
          name: '排序'
        }
      ],
      activeIndex: -1,
      checked: true
    }
  },
  methods: {
    onClose (e) {
      console.log('关闭')
      this.show = false
    },
    c (item, index) {
      console.log('点击')
      this.activeIndex = index
    },
    onChange (e) {
      console.log(e.mp)
      this.checked = e.mp.detail
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vanttest{
    .bar{
      height 68rpx
      display flex
      align-items center
      border-bottom 1rpx solid rgba(1,1,1,0.1)
      .bar-item{
        font-size 28rpx
        flex 1
        display flex
        align-items center
        justify-content center
        .icon{
          width 36rpx
          height 36rpx
        }
        &.active{
          color lightseagreen
          .icon{
            transform rotate(180deg)
          }
        }
      }
    }
    .overlay{
      position fixed
      top 71rpx
      bottom 0
      left 0
      right 0
      background rgba(0,0,0,0.7)
      .wrap-0{
        background #fff
        .wrap-item{
          height 86rpx
          display flex
          align-items center
          justify-content center
          border-bottom 1rpx solid rgba(1,1,1,0.1)
          font-size 32rpx
          color #666
        }
      }
    }
  }
</style>
