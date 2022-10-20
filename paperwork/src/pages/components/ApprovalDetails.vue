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
          审批详情
        </div>
      </div>
    </div>
    <div class="process_container">
      <div class="process_container_content">
        <div class="header_container">
          <p class="header_container_title">{{ username }}提交的用证申请</p>
            <p class="header_container_tip">等待我处理</p>
          </div>
          <ul class="form_detail detail_container_content">
            <li class="form_detail_item">
            <p class="form_detail_item_title">姓名</p>
            <p class="form_detail_item_text">{{username}}</p>
            </li>
            <li class="form_detail_item" v-if="this.name === '0'">
            <p class="form_detail_item_title">性别</p>
            <p class="form_detail_item_text">男</p>
            </li>
            <li class="form_detail_item" v-else>
            <p class="form_detail_item_title">性别</p>
            <p class="form_detail_item_text">男</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">出生日期</p>
            <p class="form_detail_item_text">{{birthday}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">籍贯</p>
            <p class="form_detail_item_text">{{nativeplace}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">民族</p>
            <p class="form_detail_item_text">{{nation}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">政治面貌</p>
            <p class="form_detail_item_text">{{political}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">身份证号码</p>
            <p class="form_detail_item_text">{{id}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">文化程度</p>
            <p class="form_detail_item_text">{{culturelever}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">工作部门</p>
            <p class="form_detail_item_text">{{workdepartment}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">职务</p>
            <p class="form_detail_item_text">{{work}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">家庭住址</p>
            <p class="form_detail_item_text">{{address}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">联系电话</p>
            <p class="form_detail_item_text">{{phonenumber}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">紧急联系人</p>
            <p class="form_detail_item_text">{{emergencycontact}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">联系电话</p>
            <p class="form_detail_item_text">{{emergencyphone}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">证件名称</p>
            <p class="form_detail_item_text">{{cardname}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">证件号码</p>
            <p class="form_detail_item_text">{{cardId}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">出发时间</p>
            <p class="form_detail_item_text">{{setTime}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">回程时间</p>
            <p class="form_detail_item_text">{{backTime}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">目的地</p>
            <p class="form_detail_item_text">{{destination}}</p>
            </li>
            <li class="form_detail_item">
            <p class="form_detail_item_title">使用事由</p>
            <p class="form_detail_item_text">{{reason}}</p>
            </li>
          </ul>
          <div class="information_container">
            <p class="information_container_title">流程</p>
            <div class="item_container">
            <div class="item_container_left">
                <div class="item_container_left_icon">
                <p class="item_container_left_icon_text">我</p>
                <div>
                    <img class="item_container_left_icon_icon" src="../../assets/images/success.png" alt="">
                </div>
                </div>
            </div>
            <div class="item_container_right">
                <div class="item_container_right_header">
                <p class="item_container_right_header_title">发起申请</p>
                <p class="item_container_right_header_time">{{ createDate }}</p>
                </div>
                <div class="item_container_right_name">
                我
                </div>
            </div>
            </div>
            <div
            v-for="(item, index) in approvalProcessList"
            :key="index"
            class="item_container"
            >
            <div class="item_container_left">
                <div class="item_container_left_line"></div>
                <div class="item_container_left_icon">
                <p class="item_container_left_icon_text">{{ item.first }}</p>
                <div v-if="item.status === '0'">
                    <img class="item_container_left_icon_icon" src="../../assets/images/success.png" alt="">
                </div>
                <div v-if="item.status === '1'">
                    <img class="item_container_left_icon_icon" src="../../assets/images/refuse.png" alt="">
                </div>
                <div v-if="item.status === '4'">
                    <img class="item_container_left_icon_icon" src="../../assets/images/drawout.png" alt="">
                </div>
                <div v-if="item.status === '5'">
                    <img class="item_container_left_icon_icon" src="../../assets/images/wait.png" alt="">
                </div>
                </div>
            </div>
            <div class="item_container_right">
                <div class="item_container_right_header">
                <p class="item_container_right_header_title">{{ item.currentOrganization }}</p>
                <p class="item_container_right_header_time">{{ item.createDate }}</p>
                </div>
                <div class="item_container_right_name">
                {{item.approval}}
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="process_container_footer">
          <button class="process_container_footer_btn">
            取消申请
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import { getProcess } from '../../api/user'
export default {
  data () {
    return {
      username: '',
      name: '',
      sex: '',
      birthday: '',
      nativeplace: '',
      nation: '',
      political: '',
      id: '',
      culturelever: '',
      workdepartment: '',
      work: '',
      address: '',
      phonenumber: '',
      emergencycontact: '',
      emergencyphone: '',
      cardname: '',
      cardId: '',
      setTime: '',
      backTime: '',
      destination: '',
      reason: '',
      createDate: '',
      approvalProcessList: []
    }
  },
  mounted () {
    console.log('tag', this.$route.query.applyId)
    const id = this.$route.query.applyId
    getProcess(id).then(res => {
      console.log('tag', res.item)
      console.log('2', res.item.ApprovalFormList.approvalProcessList)
      this.approvalProcessList = res.item.ApprovalFormList.approvalProcessList
      this.approvalProcessList.forEach(item => {
        if (item.approval) {
          this.$set(item, 'first', item.approval.slice(0, 1))
          console.log('tag3', item.first)
        }
      })
      this.username = res.item.ApprovalFormList.leader
      console.log(res.item.ApprovalFormList)
      console.log(res.item.ApprovalFormList.status)
      this.createDate = res.item.ApprovalFormList.createDate
      this.name = res.item.ApprovalFormList.sex
      this.birthday = res.item.ApprovalFormList.birthDate
      this.nativeplace = res.item.ApprovalFormList.birthplace
      this.nation = res.item.ApprovalFormList.nation
      this.political = res.item.ApprovalFormList.politicsStatus
      this.id = res.item.ApprovalFormList.idCard
      this.culturelever = res.item.ApprovalFormList.education
      this.workdepartment = res.item.ApprovalFormList.department
      this.work = res.item.ApprovalFormList.job
      this.address = res.item.ApprovalFormList.address
      this.phonenumber = res.item.ApprovalFormList.tellphone
      this.emergencycontact = res.item.ApprovalFormList.emergencyContact
      this.emergencyphone = res.item.ApprovalFormList.emergencyPhone
      this.cardname = res.item.ApprovalFormList.certificate
      this.cardId = res.item.ApprovalFormList.id
      this.setTime = res.item.ApprovalFormList.startTime
      this.backTime = res.item.ApprovalFormList.endTime
      this.destination = res.item.ApprovalFormList.destination
      this.reason = res.item.ApprovalFormList.reason
    })
  },
  methods: {
    returnPre () {
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
.process_container_footer_btn {
  position: relative;
  display: block;
  width: 100%;
  height: 44px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 999px;
  transition: opacity 0.2s;
}

.process_container_footer {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.66667vw 8vw;
  background-color: #fff;
}

.item_container_left_line {
  height: 8vw;
  margin: 1.33333vw auto;
  border-left: 0.66667vw solid #ccc;
}

.item_container_right_name {
  font-size: 3.2vw;
  color: #868686;
}

.item_container_right_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.item_container_right_header_title {
  font-size: 3.73333vw;
}

.item_container_right_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.93333vw;
}

.item_container_left_icon_icon {
  position: absolute;
  right: -0.53333vw;
  bottom: -0.53333vw;
  display: inline-block;
  width: 3vw;
  height: 3vw;
  background-color: #fff;
  border: 0.53333vw solid #fffbe8;
  border-radius: 50%;
}

.item_container_left_icon_text {
  font-size: 4vw;
  line-height: 9.33333vw;
  color: #fff;
}

.item_container {
  display: flex;
  align-items: flex-end;
}

.item_container_left {
  display: flex;
  flex-direction: column;
}

.item_container_right {
  flex: 1;
  padding-left: 4vw;
}

.item_container_left_icon {
  position: relative;
  width: 9.33333vw;
  height: 9.33333vw;
  text-align: center;
  background-color: #1989fa;
  border-radius: 1.33333vw;
}

.information_container_title {
  margin-bottom: 4vw;
  font-size: 4vw;
  font-weight: 500;
}

.information_container {
  padding: 4vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
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
  color: #ff976a;
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
