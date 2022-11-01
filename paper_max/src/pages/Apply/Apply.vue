<template>
  <div
    v-if="isShowNational === false"
    class="details_container"
  >
    <div class="nav_bar">
      <Title :title="title" />
    </div>
    <div class="content_container">
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>姓名</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.xm"
              class="input_in"
              type="text"
              placeholder="请输入你的姓名"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的姓名'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>性别</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <template>
              <van-radio-group
                v-model="checked"
                direction="horizontal"
              >
                <van-radio name="0">
                  男
                </van-radio>
                <van-radio name="1">
                  女
                </van-radio>
              </van-radio-group>
            </template>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>出生日期</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.csrq"
              class="input_in"
              type="text"
              placeholder="请选择你的出生日期"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择你的出生日期'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>籍贯</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.jgm"
              class="input_in"
              type="text"
              placeholder="请输入你的籍贯"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的籍贯'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>民族</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.mzm"
              class="input_in"
              type="text"
              placeholder="请输入你的民族"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的民族'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>政治面貌</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.zzmmm"
              class="input_in"
              type="text"
              placeholder="请输入你的政治面貌"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的政治面貌'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>身份证号码</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.id"
              class="input_in"
              type="text"
              placeholder="请输入你的身份证号码"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的身份证号码'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>文化程度</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="culturelever"
              class="input_in"
              type="text"
              placeholder="请输入你的文化程度"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的文化程度'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>工作部门</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.sjtszdw"
              class="input_in"
              type="text"
              placeholder="请输入你的工作部门"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的工作部门'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>职务</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.przyjszwm"
              class="input_in"
              type="text"
              placeholder="请输入你的职务"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的职务'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>家庭住址</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.jtzz"
              class="input_in"
              type="text"
              placeholder="请输入你的家庭住址"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的家庭住址'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>联系电话</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.phone"
              class="input_in"
              type="text"
              placeholder="请输入你的联系电话"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的联系电话'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>紧急联系人</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.yjlxr"
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系人"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系人'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>紧急联系电话</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.yjlxrdh"
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系电话"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系电话'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>选择证件</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="checked2"
              class="input_in"
              type="text"
              placeholder="请选择申请的证件"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择申请的证件'"
              @click="showPopup"
            >
            <van-popup
              v-model="show"
              position="bottom"
              :style="{ height: '50%' }"
            >
              <van-radio-group v-model="checked2">
                <van-radio
                  name="外交护照"
                  class="certi_item"
                >
                  外交护照
                </van-radio>
                <van-radio
                  name="公务护照"
                  class="certi_item"
                >
                  公务护照
                </van-radio>
                <van-radio
                  name="普通护照"
                  class="certi_item"
                >
                  普通护照
                </van-radio>
                <van-radio
                  name="港澳通行证"
                  class="certi_item"
                >
                  港澳通行证
                </van-radio>
                <van-radio
                  name="台湾通行证"
                  class="certi_item"
                >
                  台湾通行证
                </van-radio>
                <van-radio
                  name="双程证"
                  class="certi_item"
                >
                  双程证
                </van-radio>
              </van-radio-group>
              <div class="confirm_certi_btn">
                <button
                  class="confirm_certi"
                  @click="showChoose()"
                >
                  确认
                </button>
              </div>
            </van-popup>
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>申领证照名称</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="checked2"
              class="input_in"
              type="text"
            >
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>是否新证</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <div
              class="input_in"
            >
              否
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>开始时间</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="currentDate"
              class="input_in"
              type="text"
              placeholder="请选择开始时间"
              onblur="this.placeholder='请选择开始时间'"
              @click="showPopup2"
            >
            <van-popup
              v-model="show2"
              position="bottom"
              :style="{ height: '60%' }"
            >
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                :columns-order="['year', 'month', 'day',]"
                :formatter="formatter"
                item-height="12vw"
                :min-date="today"
                @confirm="clickIt"
              />
            </van-popup>
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>结束时间</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="currentDate2"
              class="input_in"
              type="text"
              placeholder="请选择结束时间"
              onblur="this.placeholder='请选择结束时间'"
              @click="showPopup3"
            >
            <van-popup
              v-model="show3"
              position="bottom"
              :style="{ height: '60%' }"
            >
              <van-datetime-picker
                v-model="currentDate2"
                type="date"
                :columns-order="['year', 'month', 'day',]"
                :formatter="formatter"
                item-height="12vw"
                :min-date="today"
                @confirm="clickIt2"
              />
            </van-popup>
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>选择城市</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="destination"
              class="input_in"
              type="text"
              placeholder="请选择一个城市"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择一个城市'"
              @click="showNational()"
            >
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>具体地点</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="place"
              class="input_in"
              type="text"
              placeholder="请输入具体地点"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入具体地点'"
            >
          </div>
        </div>
      </div>
      <div
        v-if="checked2 !== '请选择申请的证件'"
        class="content_item"
      >
        <div class="content_item_name">
          <span class="must">*</span>
          <span>使用事由</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="reason"
              class="input_in"
              type="text"
              placeholder="请输入使用事由"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入使用事由'"
            >
          </div>
        </div>
      </div>
      <div class="form_footer_btn">
        <button
          class="form_footer_btn_in"
          @click="submitApply()"
        >
          提交
        </button>
      </div>
    </div>
    <div
      v-if="isShowAttention === true"
      class="attention_container"
    >
      <Attention @closeAttention="Attention2" />
    </div>
  </div>
  <div
    v-else
    class="details_container"
  >
    <div class="national_container">
      <div class="nav_bar">
        <div class="message_nav">
          <div class="message_nav_content">
            <div
              class="message_nav_content_left"
              @click="closeNational()"
            >
              <img
                class="message_left_arrow"
                src="../../assets/images/left_arrow.png"
                alt=""
              >
              <span class="message_return">返回</span>
            </div>
            <div class="message_nav_content_title">
              选择地点
            </div>
          </div>
        </div>
      </div>

      <div class="nation_container">
        <Nation
          @isShowNational="ShowNational"
          @getDestination="Destination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, submitApply } from '../../api/user'
import Title from '@/pages/components/Title.vue'
import Nation from '@/pages/Apply/Nation.vue'
import Attention from '@/pages/Apply/Attention.vue'
export default {
  name: 'Apply',
  components: {
    Title,
    Nation,
    Attention
  },
  data () {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      currentDate2: new Date(),
      data: new FormData(),
      show2: false,
      show: false,
      show3: false,
      culturelever: '',
      checked: '0',
      checked2: '请选择申请的证件',
      reason: '',
      place: '',
      isShowAttention: true,
      isShowNational: false,
      userList: {},
      destination: '',
      date: '',
      today: '',
      title: ''
    }
  },
  created () {
    this.title = this.$route.meta.title
    this.currentDate = '请选择开始时间'
    this.currentDate2 = '请选择结束时间'
    this.today = new Date()
    getUser().then(res => {
      console.log(res.item.user)
      this.userList = res.item.user
      this.checked = res.item.user.xbm
      this.culturelever = '硕士学位'
    })
  },
  methods: {
    submitApply () {
      const form = {
        leader: this.userList.xm,
        sex: this.checked,
        birthDate: this.userList.csrq,
        birthplace: this.userList.jgm,
        nation: this.userList.mzm,
        politicsStatus: this.userList.zzmmm,
        idCard: this.userList.id,
        education: this.culturelever,
        department: this.userList.sjtszdw,
        job: this.userList.przyjszwm,
        address: this.userList.jtzz,
        tellphone: this.userList.phone,
        emergencyContact: this.userList.yjlxr,
        emergencyPhone: this.userList.yjlxrdh,
        approvalFormEntityList: [
          { certificate: this.checked2 },
          { certificateId: '' },
          { destination: this.destination },
          { reason: this.reason },
          { startTime: this.currentDate },
          { endTime: this.currentDate2 },
          { type: '' }
        ]
      }
      submitApply(form).then(res => {
        console.log('tag', res)
      })
    },
    clickIt (val) {
      this.show2 = false
      var timer = val
      const year2 = timer.getFullYear()
      const month2 = timer.getMonth() + 1
      const day2 = timer.getDate()
      const date2 = `${year2}-${month2}-${day2}`
      this.currentDate = date2
    },
    clickIt2 (val) {
      this.show3 = false
      var timer = val
      const year2 = timer.getFullYear()
      const month2 = timer.getMonth() + 1
      const day2 = timer.getDate()
      const date2 = `${year2}-${month2}-${day2}`
      this.currentDate2 = date2
    },
    showPopup () {
      this.show = true
    },
    showPopup2 () {
      this.show2 = true
    },
    showPopup3 () {
      this.show3 = true
    },
    formatter (type, val) {
      if (type === 'year') {
        return val
      }
      if (type === 'month') {
        return val
      }
      if (type === 'day') {
        return val
      }
      return val
    },
    getTime () {
      this.date = window.localStorage.getItem('date')
    },
    showChoose () {
      this.show = false
    },
    showNational () {
      this.isShowNational = true
    },
    closeNational  () {
      this.isShowNational = false
    },
    ShowNational (isShow) {
      console.log(isShow)
      this.isShowNational = false
    },
    Destination (name) {
      this.destination = name
    },
    Attention2 (isShowAttention) {
      this.isShowAttention = isShowAttention
    }
  }
}
</script>

<style scoped lang="scss">
.form_footer_btn {
  padding: 5.33333vw 4vw;
}

.form_footer_btn_in {
  padding: 0 40vw;
  font-size: 1.86667vw;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 999px;
}

.confirm_certi_btn {
  display: block;
  height: 3.06667vw;
  background-color: #f7f8fa;
}

.confirm_certi {
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: block;
  width: 100%;
  padding: 1.86667vw 2.13333vw;
  font-size: 4.13333vw;
  color: #646566;
  cursor: pointer;
  background-color: #fff;
  border: none;
}

.certi_item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.33333vw 0;
}

.nation_container {
  height: 100vh;
  overflow: scroll;
}

.national_container {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  overflow: auto;
}

.input_in {
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  line-height: inherit;
  color: #323233;
  text-align: left;
  resize: none;
  background-color: transparent;
  border: 0;
}

.content_item_input_in {
  z-index: 2;
  display: flex;
  align-items: center;
}

.must {
  left: 8px;
  font-size: 14px;
  color: #ee0a24;
}

.content_item_input {
  overflow: hidden;
  color: #969799;
  text-align: right;
  word-wrap: break-word;
  vertical-align: middle;
}

.content_item_name {
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 10.5em;
  margin-right: 1.6vw;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}

.content_item {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
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
