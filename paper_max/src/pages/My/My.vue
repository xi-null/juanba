<template>
  <div class="my_box">
    <div class="my_box_nav">
      <div class="my_box_navtitle">
        我的
      </div>
    </div>
    <div class="personal_container">
      <div class="info_container">
        <div class="info_container_user">
          <div class="info_container_userimg">
            <img
              class="info_container_userimge"
              src="../../assets/images/userhead.jpg"
              alt=""
            >
          </div>
          <p class="info_container_username">
            庄晨忠
          </p>
          <div
            class="info_container_message"
            @click="toMyMessage()"
          >
            <img
              class="info_container_usermessage"
              src="../../assets/images/messages.png"
              alt=""
            >
            <div class="info_container_usermessage_number">
              0
            </div>
          </div>
        </div>
        <div class="info_container_banner">
          <img
            class="info_container_banner_img"
            src="../../assets/images/my_header_icon.png"
            alt=""
          >
        </div>
      </div>
      <div class="menu_container">
        <div
          class="menu_container_item"
          @click="toMyMessage()"
        >
          <img
            class="menu_container_item_message_img"
            src="../../assets/images/message.png"
            alt=""
          >
          <div class="menu_container_item_message_content">
            <span>我的消息</span>
          </div>
          <img
            class="menu_container_item_right_arrow"
            src="../../assets/images/right_arrow.png"
            alt=""
          >
        </div>
        <div
          class="menu_container_item"
          @click="toMyDetails()"
        >
          <img
            class="menu_container_item_message_img"
            src="../../assets/images/mydetails.png"
            alt=""
          >
          <div class="menu_container_item_message_content">
            <span>个人信息</span>
          </div>
          <img
            class="menu_container_item_right_arrow"
            src="../../assets/images/right_arrow.png"
            alt=""
          >
        </div>
        <div
          class="menu_container_item"
          @click="toMyAppply()"
        >
          <img
            class="menu_container_item_message_img"
            src="../../assets/images/myapply.png"
            alt=""
          >
          <div class="menu_container_item_message_content">
            <span>我的申请</span>
          </div>
          <img
            class="menu_container_item_right_arrow"
            src="../../assets/images/right_arrow.png"
            alt=""
          >
        </div>
        <div
          class="menu_container_item"
          @click="toMyApproval()"
        >
          <img
            class="menu_container_item_message_img"
            src="../../assets/images/myapproval.png"
            alt=""
          >
          <div class="menu_container_item_message_content">
            <span>我的审批</span>
          </div>
          <img
            class="menu_container_item_right_arrow"
            src="../../assets/images/right_arrow.png"
            alt=""
          >
        </div>
      </div>
      <button class="logout">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemList: [
        { lable: '我的信息', src: '../../assets/images/mydetails.png', routerLink: 'MyMessage' }
      ]
    }
  },
  methods: {
    toMyMessage () {
      this.$router.push(
        {
          path: '/mymessage'
        }
      )
    },
    toMyDetails () {
      this.$router.push(
        {
          path: '/mydetails'
        }
      )
    },
    toMyAppply () {
      this.$router.push(
        {
          path: '/myapply'
        }
      )
    },
    toMyApproval () {
      this.$router.push(
        {
          path: '/myapproval'
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.my_box {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  background-color: #f1f3f5 !important;
}

.my_box_nav {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 12.13333vw;
  line-height: 22px;
  text-align: center;
  background-color: #b13a3d;
}

.my_box_navtitle {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}

.info_container_user {
  display: flex;
  align-items: center;
  padding: 4vw 4vw 16vw;
  background-color: #fff;
}

.info_container_userimg {
  position: relative;
  display: inline-block;
  width: 10.66667vw;
  height: 10.66667vw;
  overflow: hidden;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;
}

.info_container_userimge {
  width: 100%;
  height: 100%;
}

.info_container_username {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 4vw;
}

.info_container_message {
  position: relative;
  display: inline-block;
}

.info_container_usermessage {
  width: 5vw;
  height: 5vw;
}

.info_container_usermessage_number {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display: inline-block;
  min-width: 16px;
  padding: 0 3px;
  font-size: 1vw;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
  border: 1px solid #fff;
  border-radius: 50%;
  transform: translate(50%, -50%);
  transform-origin: 100%;
}

.info_container_banner {
  height: 26.66667vw;
  margin: -13.33333vw 4vw 0;
  overflow: hidden;
  border-radius: 4vw;
}

.info_container_banner_img {
  position: relative;
  width: 100%;
  height: 100%;
}

.menu_container {
  position: relative;
  margin-top: 5.33333vw;
  background-color: #fff;
}

.menu_container_item {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.9vw 2vw;
  overflow: hidden;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.menu_container_item_message_img {
  width: 5.5vw;
  height: 5.5vw;
  margin-right: 2%;
}

.menu_container_item_message_content {
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 3.5vw !important;
  color: #323233;
}

.menu_container_item_right_arrow {
  position: relative;
  height: 5vw;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.logout {
  width: 100%;
  padding: 4vw 0;
  margin-top: 5.33333vw;
  font-size: 3.46667vw;
  color: #b13a3d;
  text-align: center;
  background-color: #fff;
  border: none;
  outline: none;
}
</style>
