<template>
  <div class="vanttest">
    <div class="bar">
      <div :class="['bar-item', {'active': index===activeIndex}]" @click="pickActiveItem(item,index)" v-for="(item,index) in bar">
        <span>{{ item }}</span>
        <!--<image class="icon" src="/static/img/arrow.png"/>-->
        <span class="iconfont icon-sanjiao"/>
      </div>
    </div>
    <div class="overlay" v-if="activeIndex !== -1" @click="activeIndex=-1">
      <div class="wrap-0" v-if="activeIndex === 0" @click.stop="">
        <div
          :class="['wrap-item',
          {'active': typeIndex === activeTypeIndex}]"
          v-for="(item, typeIndex) in types"
          @click="pickType(typeIndex)"
        >{{ item.name }}</div>
      </div>
      <scroll-view scroll-y :style="{height: '100%'}" class="wrap-1" v-if="activeIndex === 1" @click.stop="">
        <div class="wrap-item"  v-for="(cla, claIndex) in classes">
          <div class="title">{{ cla.name }}</div>
          <div class="btns-container">
            <div :class="['class-btn', {'row-end': (i+1)%3===0}, {'active': cla.valueCs[i]}]" v-for="(item,i) in cla.values" @click="classBtnSelect(claIndex, i)">{{ item }}</div>
          </div>
        </div>
        <div class="wrap-item" :style="{paddingBottom: '160rpx'}">
          <div class="title">其他</div>
          <van-switch-cell
            class="vsc"
            title="显示已兑换的资料"
            :checked=checked
            @change="onChange"
          />
        </div>
        <div class="confirm-btn" @click="pickSx()"><span>确定</span></div>
      </scroll-view>
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
      types: [
        {
          id: 0,
          name: '资料'
        },
        {
          id: 1,
          name: '视频'
        }
      ],
      activeTypeIndex: 0,
      activeIndex: -1, // 正在定位哪一项[类别、筛选、排序]
      checked: false,
      classes: [
        {
          id: 0,
          name: '小学',
          values: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
          valueCs: [false, false, false, false, false, false],
          groupCount: 2
        },
        {
          id: 1,
          name: '初中',
          values: ['初一', '初二', '初三'],
          valueCs: [false, false, false],
          groupCount: 1
        },
        {
          id: 2,
          name: '高中',
          values: ['高一', '高二', '高三'],
          valueCs: [false, false, false],
          groupCount: 1
        },
        {
          id: 3,
          name: '学科',
          values: ['数学', '英语'],
          valueCs: [false, false],
          groupCount: 1
        }
      ],
      svHeight: 0
    }
  },
  computed: {
    bar () {
      let result = [this.types[this.activeTypeIndex].name, '筛选', '排序']
      return result
    }
  },
  created () {
    // wx.getSystemInfo({
    //   success: (res) => {
    //     console.log(res)
    //     console.log(res.windowHeight) // 获取可使用窗口高度
    //     let rp = 750 / res.windowWidth
    //     let windowHeight = res.windowHeight * rp // 将高度乘以换算后的该设备的rpx与px的比例
    //     let statusBarHeight = res.statusBarHeight * rp
    //     let selectBarHeight = 71 // 筛选栏高度
    //     console.log('windowHeight', windowHeight) // 最后获得转化后得rpx单位的窗口高度
    //     console.log('statusBarHeight', statusBarHeight)
    //     let result = windowHeight - selectBarHeight
    //     console.log('result', result)
    //     this.svHeight = result
    //   }
    // })
  },
  methods: {
    pickActiveItem (item, index) {
      // console.log('点击')
      if (this.activeIndex === index) {
        this.activeIndex = -1
        return
      }
      this.activeIndex = index
    },
    pickType (index) {
      this.activeTypeIndex = index
      this.activeIndex = -1
    },
    pickSx () {
      // todo
      this.activeIndex = -1
    },
    onChange (e) {
      console.log(e.mp)
      this.checked = e.mp.detail
    },
    classBtnSelect (classIndex, i) {
      console.log('classIndex', classIndex, 'i', i)
      this.classes[classIndex].valueCs[i] = !this.classes[classIndex].valueCs[i]
      this.classes = [...this.classes]
      console.log(this.classes)
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
        .iconfont{
          width 38rpx
          height 38rpx
          transition transform 0.3s
        }
        &.active{
          color lightseagreen
          .iconfont{
            transform rotate(180deg)
          }
        }
      }
    }
    .overlay{
      overflow hidden
      position absolute
      top 71rpx
      bottom 0
      left 0
      right 0
      background rgba(0,0,0,0.7)
      .wrap-0{
        background #fff
        .wrap-item{
          height 103rpx
          display flex
          align-items center
          justify-content center
          border-bottom 1rpx solid rgba(1,1,1,0.1)
          font-size 32rpx
          color #666
          &.active{
            color lightseagreen
          }
        }
      }
      .wrap-1{
        width 100%
        height 500rpx
        box-sizing border-box
        background #fff
        .wrap-item{
          padding 0 50rpx
          .title{
            font-size 30rpx
            color #000
            font-weight 400
            padding 50rpx 0 30rpx 0
          }
          .btns-container{
            display flex
            flex-wrap wrap
            .class-btn{
              display flex
              justify-content center
              align-items center
              width 200rpx
              height 55rpx
              box-sizing border-box
              font-size 26rpx
              letter-spacing 1rpx
              color #666
              border 1rpx solid rgba(0,0,0,0.2)
              border-radius 8rpx
              margin-right 25rpx
              margin-bottom 25rpx
              &.row-end{
                margin-right 0rpx
              }
              &.active{
                color lightseagreen
                border-color lightseagreen
              }
            }
          }
        }
        .confirm-btn{
          position fixed
          bottom 0
          left 0
          z-index 101
          background lightseagreen
          display flex
          justify-content center
          align-items center
          width 750rpx
          height 100rpx
          color #fff
          font-size 38rpx
          letter-spacing 1rpx
        }
      }
    }
    /*
    修改第三方或自定义组件样式
    */
    .vsc{
      /deep/ .van-cell{
        background #fff
        padding 0
        font-size 26rpx
        color #777
      }
      /deep/ .van-switch--on{
        background lightseagreen
      }
    }
  }
</style>
