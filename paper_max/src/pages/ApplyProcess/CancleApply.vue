<template>
  <div>
    <div class="nav_bar">
      <div class="message_nav">
        <div class="message_nav_content">
          <div
            class="message_nav_content_left"
            @click="returnPre2()"
          >
            <img
              class="message_left_arrow"
              src="../../assets/images/left_arrow.png"
              alt=""
            >
            <span class="message_return">返回</span>
          </div>
          <div class="message_nav_content_title">
            取消用证申请
          </div>
        </div>
      </div>
    </div>

    <div class="reason_container">
      <div class="reason_container_input">
        <div class="reason_container_input_body">
          <textarea
            id=""
            v-model="canclereason"
            class="van-field__control"
            placeholder="请输入原因"
            name="reason"
            cols="30"
            rows="10"
          />
        </div>
      </div>
    </div>
    <div class="cancel_container_btn">
      <button
        class="cancel_container_btn_btn"
        @click="cancle()"
      >
        确定
      </button>
    </div>
  </div>
</template>

<script>
import { deleteApply } from '../../api/user'
export default {
  props: {
    applyId: {
      type: String, // 数据类型有 String、Number、Boolean、Array ...
      default: '0'// 默认值
    }
  },
  data () {
    return {
      canclereason: ''
    }
  },
  methods: {
    returnPre2 () {
      const isShow = true
      this.$emit('closeCancle', isShow)
    },
    cancle () {
      deleteApply(this.applyId, this.canclereason).then(res => {
        console.log('tag', res)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.nav_bar {
  position: sticky;
  top: 0;
}

.message_nav {
  top: 0;
  z-index: 999;
  line-height: 22px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: #b13a3d;
}

.message_nav_content {
  position: relative;
  display: flex;
  align-items: center;
  height: 10.9vw;
}

.message_nav_content_left {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
}

.message_left_arrow {
  width: 6vw;
  height: 6vw;
  text-align: center;
}

.message_return {
  position: relative;
  z-index: 1;
  font-size: 3.5vw;
  color: #fff;
  text-align: center;
}

.message_nav_content_title {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}

.cancel_container_btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5.33333vw 8vw;
}

.cancel_container_btn_btn {
  padding: 0 40vw;
  font-size: 1.86667vw;
  color: #fff;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 133.2vw;
}

.van-field__control {
  color: #323233;
}

.reason_container_input_body {
  display: flex;
  align-items: center;
  color: #323233;
  text-align: left;
}

.reason_container_input {
  flex: 1;
  overflow: visible;
  color: #323233;
  text-align: left;
}

.reason_container {
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}
</style>
