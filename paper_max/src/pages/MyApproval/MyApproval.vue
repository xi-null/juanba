<template>
  <div class="details_container">
    <div class="nav_bar">
      <div class="message_nav">
        <Title :title="title" />
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
            v-if="item.lable == '等待审批'"
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
            v-if="item.lable == '等待审批'"
            class="num"
          >
            {{ len }}
          </div>
          {{ item.lable }}
        </div>
      </div>
    </div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div
        v-if="lengths !== 0"
        class="approval_container"
      >
        <div
          v-for="item in applyList"
          :key="item.applyId"
          class="content_container"
          @click="toApplyProcess(item.applyId)"
        >
          <div class="card_container">
            <div class="card_container_header">
              <p class="card_container_header_title">
                {{ item.leader }}提交的用证申请
              </p>
              <p class="card_container_header_time">
                {{ item.updateDate }}
              </p>
            </div>
            <div class="card_container_content">
              <p class="card_container_content_text">
                联系电话：{{ item.tellphone }}
              </p>
              <p class="card_container_content_text">
                工作部门：{{ item.department }}
              </p>
              <p
                v-for="item2 in item.approvalProcessList"
                :key="item2.approvalId"
                class="card_container_content_text"
              >
                当前审批节点: {{ item2.currentOrganization }} {{ item2.approval }}
              </p>
            </div>
            <div class="card_container_footer">
              <span class="card_container_footer_tag">{{ item.Primary }}</span>
              <p class="card_container_footer_name">
                由{{ item.leader }}提交
              </p>
              <span
                v-if="item.status === '5'"
                class="wait_approval wait"
              >等待审批</span>
              <span
                v-if="item.status === '0'"
                class="wait_approval pass"
              >通过</span>
              <span
                v-if="item.status === '1'"
                class="wait_approval refuse"
              >拒绝</span>
              <span
                v-if="item.status === '4'"
                class="wait_approval drawout"
              >撤回</span>
            </div>
          </div>
        </div>
        <div class="no_more">
          <p class="no_more_content">
            没有更多了
          </p>
        </div>
      </div>
      <div
        v-else
        class="message_content"
      >
        <Enpty />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getApproval } from '../../api/user'
import Title from '@/pages/components/Title.vue'
import Enpty from '@/pages/components/Enpty.vue'
import { Toast } from 'vant'
export default {
  name: 'MyApproval',
  components: {
    Title,
    Enpty
  },
  data () {
    return {
      typeList: [
        { lable: '等待审批', type: 'wait' },
        { lable: '通过', type: 'pass' },
        { lable: '拒绝', type: 'refuse' },
        { lable: '全部', type: 'all' }
      ],
      isChoose: '等待审批',
      len: 0,
      applyList: [],
      approvalProcessList: [],
      lengths: 0,
      title: '',
      isLoading: false
    }
  },
  created () {
    this.title = this.$route.meta.title
    const status = 5
    const pageSize = 10
    const pageNo = 1
    getApproval(status, { pageSize, pageNo }).then(res => {
      console.log(res)
      this.len = res.page.count
      console.log('tag', this.len)
      this.applyList = res.page.list
      this.lengths = this.applyList.length
      console.log('lengths', this.lengths)
      console.log('tag', this.applyList)
      this.applyList.forEach(item => {
        if (item.leader) {
          this.$set(item, 'Primary', item.leader.slice(0, 1))
          console.log('tag2', item.Primary)
        }
      })
    })
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    },
    returnHome () {
      this.$router.push(
        {
          path: '/'
        }
      )
    },
    toApplyProcess (id) {
      console.log('tag', id)
      this.$router.push(
        {
          path: '/approval-details',
          query: {
            applyId: id
          }
        }
      )
    },
    changeChoose (lable) {
      this.isChoose = lable
      var status
      if (lable === '等待审批') {
        status = 5
      }
      if (lable === '通过') {
        status = 0
      }
      if (lable === '拒绝') {
        status = 1
      }
      const pageSize = 10
      const pageNo = 1
      getApproval(status, { pageSize, pageNo }).then(res => {
        console.log(res)
        this.applyList = res.page.list
        this.lengths = this.applyList.length
        console.log('tag', this.applyList)
        this.applyList.forEach(item => {
          if (item.leader) {
            this.$set(item, 'Primary', item.leader.slice(0, 1))
            console.log('tag2', item.Primary)
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
  z-index: 999;
}

.approval_container {
  padding: 13.86667vw  2.66667vw 4vw;
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

.card_container {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.card_container_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_container_header_title {
  font-size: 4.26667vw;
}

.card_container_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.card_container_content {
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card_container_footer {
  display: flex;
  align-items: center;
}

.card_container_footer_tag {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 1.53333vw 0.8vw;
  font-size: 1.6vw;
  line-height: 2.13333vw;
  color: #fff;
  background-color: #1989fa;
  border-radius: 0.26667vw;
}

.card_container_footer_name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 3.73333vw;
}

.wait_approval {
  display: inline-flex;
  align-items: center;
  padding: 0 0.53333vw;
  font-size: 1.6vw;
  line-height: 5vw;
  border-radius: 133.2vw;
}

.wait {
  color: #1989fa;
  border: 1px solid #1989fa;
}

.pass {
  color: #07c160;
  border: 1px solid #07c160;
}

.refuse {
  color: #ee0a24;
  border: 1px solid #ee0a24;
}

.drawout {
  color: #969799;
  border: 1px solid #969799;
}

.details_container {
  background-color: #f4f4f4 !important;
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
  position: fixed;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 10vw;
  padding-bottom: 15px;
  background-color: #fff;
}
</style>
