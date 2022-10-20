<template>
  <div class="record_container">
    <div class="message_nav">
      <div class="message_nav_content">
        <div
          class="message_nav_content_left"
          @click="returnHome()"
        >
          <img
            class="message_left_arrow"
            src="../../assets/images/left_arrow.png"
            alt=""
          >
          <span class="message_return">返回</span>
        </div>
        <div class="message_nav_content_title">
          用证记录
        </div>
      </div>
    </div>
    <div class="message_nav_kinds">
      <div
        v-for="(item, index) in typeList"
        :key="index"
        class="message_nav_kind"
        @click="changeChoose(item.lable)"
      >
        <div
          v-if="isChoose == item.lable"
          class="kind_name_active"
        >
          {{ item.lable }}
          <div
            v-if="item.lable == '未归还'"
            class="num"
          >
            {{ len }}
          </div>
          <div class="active_line" />
        </div>
        <div
          v-else
          class="kind_name"
        >
          <div
            v-if="item.lable == '未归还'"
            class="num"
          >
            {{ len }}
          </div>
          {{ item.lable }}
        </div>
      </div>
    </div>
    <div class="content_container">
      <div
        v-if="lengths !== 0"
        class="record_container_content"
      >
        <div
          v-for="(item, index) in recordList"
          :key="index"
          class="card"
          @click="toDetais(item)"
        >
          <div class="card_header">
            <p class="card_header_title">
              {{ item.leader }}的{{ item.certificate }}
            </p>
            <p class="card_header_time">
              {{ item.certificateId }}
            </p>
          </div>
          <div class="card_content">
            <div class="left">
              <p class="card_content_text">
                借出时间: {{ item.startTime }}
              </p>
              <p class="card_content_text">
                归还时间: {{ item.returnTime }}
              </p>
              <p
                v-if="item.lendType === '1'"
                class="card_content_text"
              >
                借出类型:出国境借出
              </p>
              <p class="card_content_text">
                地点: {{ item.destination }}
              </p>
              <p class="card_content_text">
                事由: {{ item.reason }}
              </p>
            </div>
          </div>
          <div class="card_footer">
            <span class="card_footer_primary">
              {{ item.Primary }}
            </span>
            <p class="card_footer_name">由 {{ item.leader }} 提交</p>
          </div>
        </div>
        <div class="no_more">
          <p class="no_more_content">没有更多了</p>
        </div>
      </div>
      <div class="message_content" v-else>
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
    </div>
  </div>
</template>

<script>
import { getHistory } from '../../api/user'
export default {
  data () {
    return {
      typeList: [
        { lable: '未归还', type: 'noReturun' },
        { lable: '已归还', type: 'returuned' },
        { lable: '全部', type: 'all' }
      ],
      isChoose: '未归还',
      recordList: [],
      len: 0,
      lengths: 0
    }
  },
  created () {
    const pageNo = 1
    const pageSize = 30
    const status = 0
    const applyId = window.localStorage.getItem('userid')
    getHistory(status, { pageNo, pageSize }, applyId).then(res => {
      console.log(res)
      this.len = res.page.count
      this.lengths = res.page.count
      this.recordList = res.page.list
      console.log('tag', res.page.list)
      this.recordList.forEach(item => {
        if (item.leader) {
          this.$set(item, 'Primary', item.leader.slice(0, 1))
          console.log('tag2', item.Primary)
        }
      })
    })
  },
  methods: {
    returnHome () {
      this.$router.push({
        path: '/'
      })
    },
    changeChoose (lable) {
      this.isChoose = lable
      var status
      if (lable === '已归还') {
        status = 1
      }
      if (lable === '未归还') {
        status = 0
      }
      const pageSize = 30
      const pageNo = 1
      const applyId = window.localStorage.getItem('userid')
      getHistory(status, { pageNo, pageSize }, applyId).then(res => {
        console.log(res)
        this.lengths = res.page.count
        this.recordList = res.page.list
        console.log('tag', res.page.list)
        this.recordList.forEach(item => {
          if (item.leader) {
            this.$set(item, 'Primary', item.leader.slice(0, 1))
            console.log('tag2', item.Primary)
          }
        })
      })
    },
    toDetais (list) {
      console.log('tag', list)
      this.$router.push(
        {
          path: '/record-details',
          query: {
            lists: list
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.card_footer_name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 4vw;
}

.card_footer_primary {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 1.26667vw 0.8vw;
  font-size: 1.6vw;
  line-height: 2.13333vw;
  color: #fff;
  background-color: rgb(177, 58, 61);
  border-radius: 0.26667vw;
}

.left {
  color: #868686;
}

.card_footer {
  display: flex;
  align-items: center;
}

.card_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.card_header_title {
  display: flex;
  align-items: center;
  font-size: 4vw;
}

.card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.record_container_content {
  padding: 0 2.66667vw 4vw;
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

.record_container {
  background-color: #fafafa !important;
}

.active_line {
  position: absolute;
  bottom: -5.5vw;
  left: 0.45vw;
  z-index: 1;
  width: 8.33333vw;
  height: 0.8vw;
  background-color: #b13a3d;
  border-radius: 0.4vw;
}

.kind_name {
  position: relative !important;
  display: inline-block;
}

.kind_name_active {
  position: relative !important;
  display: inline-block;
  font-weight: 500;
  color: #323233;
}

.num {
  position: absolute;
  top: -2.73333vw;
  right: -3.93333vw;
  display: inline-block;
  padding: 0 0.63333vw;
  font-size: 13px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
  border: 1px solid #fff;
  border-radius: 50%;
}

.message_nav_kind {
  position: relative;
  display: inline-block;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  overflow: inherit;
  font-size: 3.4vw;
  line-height: 20px;
  color: #646566;
  cursor: pointer;
}

.message_nav_kinds {
  position: relative;
  display: flex;
  width: 100%;
  height: 10vw;
  padding-bottom: 15px;
  background-color: #fff;
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
</style>
