<template>
    <div class="message_container">
      <div class="message_nav">
        <div class="message_nav_content">
          <div class="message_nav_content_left" @click="returnHome()">
          <img
            class="message_left_arrow"
            src="../../assets/images/left_arrow.png"
            alt=""
          >
          <span class="message_return">返回</span>
          </div>
          <div class="message_nav_content_title">
          我的消息
          </div>
        </div>
      </div>
      <div class="message_content" v-if="this.len === 0">
        <div class="content">
          <div class="message_content_empty">
            <div class="message_content_empty_img">
              <img
                class="message_content_empty_imge"
                src="../../assets/images/empty_image.png"
                alt=""
              >
              <p class="message_content_empty_description">暂无数据</p>
            </div>
          </div>
        </div>
      </div>
      <div class="message_content" v-else>
        <div class="message_content_content">
           <!-- <div class="refresh">
              <div class="refresh_title">
                <p>下拉刷新</p>
              </div>
           </div> -->
           <div
             v-for="(item, index) in messageList"
             :key=index
             class="content_item"
           >
             <div class="content_item_title" v-if="item.isShow === false" @click="zhankai(item)">
               <p class="content_item_title_title">过期提醒</p>
               <p class="already_read">已读</p>
             </div>
             <div class="content_item_title" v-else>
               <p class="content_item_title_title">过期提醒</p>
               <p class="already_read">{{item.createDate}}</p>
             </div>
             <div class="content_date" @click="zhankai(item)" v-if="item.isShow === false">{{item.createDate}}</div>
             <div class="content_message" v-if="item.isShow === true" @click="zhankai(item)">{{item.message}}</div>
             <div class="content_btn" @click="shouqi(item)" v-if="item.isShow === true"> 收起 </div>
           </div>
           <div class="no_more">
             <p class="no_more_content">没有更多了</p>
           </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getMessage } from '../../api/user'
export default {
  data () {
    return {
      messageList: [],
      len: 0,
      num: 0
    }
  },
  created () {
    const pageNo = 1
    const pageSize = 10
    const mark = ''
    getMessage(mark, { pageSize, pageNo }).then(res => {
      console.log(res)
      console.log(res.page.list)
      this.messageList = res.page.list
      this.len = res.page.list.length
      this.messageList.forEach(item => {
        this.$set(item, 'isShow', false)
      })
      console.log(this.messageList)
    })
  },
  methods: {
    returnHome () {
      this.$router.push(
        {
          path: '/'
        }
      )
    },
    zhankai (item) {
      item.isShow = true
      console.log(this.messageList)
    },
    shouqi (item) {
      item.isShow = false
      console.log('tag', item.isShow)
      console.log(this.messageList)
    }
  }
}
</script>

<style scoped lang="scss">
.message_container {
  width: 100%;
  height: 100%;
}

.no_more {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no_more_content {
  padding: 2.66667vw;
  font-size: 2.93333vw;
  color: #b13a3d;
}

.content_item {
  padding: 4vw 4vw 0;
  margin-bottom: 4vw;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1.33333vw;
}

.content_item_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;
}

.already_read {
  font-size: 2.93333vw;
  color: #666;
}

.content_date {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  color: #868686;
  text-align: right;
}

.content_message {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  line-height: 1.8;
  text-indent: 2em;
}

.content_btn {
  font-size: 3.2vw;
  line-height: 12vw;
  color: #868686;
  text-align: center;
  border-top: 1px solid #ccc;
}

.content_item_title_title {
  font-size: 4vw;
  font-weight: 700;
  color: #282828;
}

.refresh_title {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 5.33333vw);
  transform: translateY(-150%);
}

.message_content_content {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transition-property: transform;
  transform: translateZ(1px);
}

.message_nav {
  position: relative;
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

.message_content {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  padding: 4vw 4vw;
  overflow: hidden;
  background-color: #f4f4f4;
}

.content {
  padding: 4vw 0;
}

.message_content_empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
}

.message_content_empty_img {
  width: 42vw;
  height: 42vw;
}

.message_content_empty_imge {
  width: 100%;
  height: 100%;
}

.message_content_empty_description {
  padding: 0 12vw;
  margin-top: 2.13vw;
  font-size: 4vw;
  line-height: 2.667vw;
  color: #969799;
}
</style>
