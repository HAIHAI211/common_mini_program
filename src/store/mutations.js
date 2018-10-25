import * as types from './mutation-types'

const mutations = {
  /*
  * state: 当前状态树
  * v: 提交matations时传的参数
  * */
  [types.SET_OPEN_ID] (state, v) {
    state.openId = v
  }
}

export default mutations
