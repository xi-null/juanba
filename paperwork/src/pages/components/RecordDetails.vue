<template>
  <div class="details_container">
    <div class="message_nav">
      <div class="message_nav_content">
        <div
          class="message_nav_content_left"
          @click="returnPre()"
        >
          <img
            class="message_left_arrow"
            src="../../assets/images/left_arrow.png"
            alt=""
          >
          <span class="message_return">返回</span>
        </div>
        <div class="message_nav_content_title">
          记录详情
        </div>
      </div>
    </div>
    <div class="process_container">
      <div class="process_container_content">
        <div class="header_container">
          <p class="header_container_title">
            {{ username }}的{{ certificate }}
            <span
              v-if="delFlag === '0'"
              class="header_container_return"
            >
              已归还
            </span>
          </p>
          <p class="header_container_tip">
            {{ certificateId }}
          </p>
        </div>
        <ul class="form_detail detail_container_content">
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              借出时间
            </p>
            <p class="form_detail_item_text">
              {{ startTime }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              归还时间
            </p>
            <p class="form_detail_item_text">
              {{ returnTime }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              时长
            </p>
            <p class="form_detail_item_text">
              {{ Time }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              借出类型
            </p>
            <p class="form_detail_item_text">
              {{ lendType }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              地点
            </p>
            <p class="form_detail_item_text">
              {{ destination }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              事由
            </p>
            <p class="form_detail_item_text">
              {{ reason }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              归还提醒时间
            </p>
            <p class="form_detail_item_text">
              {{ outTime }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      detailsList: [],
      startTime: '',
      returnTime: '',
      Time: '',
      lendType: '',
      destination: '',
      reason: '',
      outTime: '',
      certificate: '',
      certificateId: '',
      delFlag: ''
    }
  },
  mounted () {
    console.log('tag11', this.$route.query.lists)
    this.detailsList = this.$route.query.lists
    console.log('tag', this.detailsList)
    console.log('tag2', this.detailsList.leader)
    this.username = this.detailsList.leader
    this.startTime = this.detailsList.startTime
    this.returnTime = this.detailsList.endTime
    this.Time = this.detailsList.endTime
    if (this.detailsList.lendType === '1') {
      this.lendType = '出国境借出'
    }
    this.destination = this.detailsList.destination
    this.reason = this.detailsList.reason
    this.outTime = this.detailsList.outTime
    this.certificate = this.detailsList.certificate
    this.certificateId = this.detailsList.certificateId
    this.delFlag = this.detailsList.delFlag
  },
  methods: {
    returnPre () {
      this.$router.push(
        {
          path: '/record'
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.header_container_return {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 0.53333vw;
  margin-left: 2.66667vw;
  font-size: 1.6vw;
  line-height: 5vw;
  color: rgb(177, 58, 61);
  border: 1px solid rgb(177, 58, 61);
  border-radius: 133.2vw;
}

.form_detail_item {
  margin-bottom: 2.66667vw;
  line-height: 1.6;
}

.form_detail_item_title {
  font-size: 3.2vw;
  color: #868686;
}

.form_detail_item_text {
  font-size: 4vw;
}

.detail_container_content {
  padding: 4vw 4vw 1.33333vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.header_container_tip {
  font-size: 3.2vw;
  line-height: 1.6;
  color: #868686;
}

.header_container_title {
  display: flex;
  align-items: center;
  font-size: 4.8vw;
  line-height: 1.6;
}

.header_container {
  padding: 2.66667vw 4vw;
  background-color: #fff;
}

.process_container {
  background-color: #f4f4f4;
}

.process_container_content {
  padding-bottom: 17.06667vw;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transition-property: transform;
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
