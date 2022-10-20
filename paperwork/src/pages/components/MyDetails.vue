<template>
  <div class="details_container">
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
            个人信息
          </div>
        </div>
    </div>
    <div class="message_info">
      <div class="message_info_wrap">
        <div class="information_basic">
          <p class="information_title">基本信息</p>
          <div class="infor_item">
            <p class="infor_item_title">姓名</p>
            <p class="infor_item_value">{{this.name}}</p>
          </div>
          <div class="infor_item" v-if="this.radio === 0">
            <p class="infor_item_title">性别</p>
            <p class="infor_item_value">男</p>
          </div>
          <div class="infor_item" v-if="this.radio === 1">
            <p class="infor_item_title">性别</p>
            <p class="infor_item_value">女</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">出生日期</p>
            <p class="infor_item_value">{{this.birthday}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">国籍</p>
            <p class="infor_item_value">{{this.nation_country}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">联系电话</p>
            <p class="infor_item_value">{{this.phonenumber}}</p>
          </div>
        </div>
        <div class="information_common">
          <p class="information_title">常用信息</p>
          <div class="infor_item">
            <p class="infor_item_title">籍贯</p>
            <p class="infor_item_value">{{this.nativeplace}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">民族</p>
            <p class="infor_item_value">{{this.nation_mz}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">政治面貌</p>
            <p class="infor_item_value">{{this.political}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">身份证号</p>
            <p class="infor_item_value">{{this.id}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">文化程度</p>
            <p class="infor_item_value">{{this.culturelever}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">工作部门</p>
            <p class="infor_item_value">{{this.workdepartment}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">职务</p>
            <p class="infor_item_value">{{this.work}}</p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">家庭地址</p>
            <p class="infor_item_value">{{this.address}}</p>
          </div>
          <div class="infor_item" v-if="this.emergencycontract">
            <p class="infor_item_title">应急联系人</p>
            <p class="infor_item_value">{{this.emergencycontract}}</p>
          </div>
          <div class="infor_item" v-else>
            <p class="infor_item_title">应急联系人</p>
            <p class="infor_item_value">-</p>
          </div>
          <div class="infor_item" v-if="this.emergencyphone">
            <p class="infor_item_title">应急联系人</p>
            <p class="infor_item_value">{{this.emergencyphone}}</p>
          </div>
          <div class="infor_item" v-else>
            <p class="infor_item_title">应急电话</p>
            <p class="infor_item_value">-</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, getInfo } from '../../api/user'
export default {
  data () {
    return {
      name: '',
      sex: '',
      radio: 0,
      birthday: '',
      nation_country: '',
      phonenumber: '',
      nativeplace: '',
      nation_mz: '',
      political: '',
      id: '',
      culturelever: '',
      workdepartment: '',
      work: '',
      address: '',
      emergencycontract: '',
      emergencyphone: ''
    }
  },
  created () {
    getUser().then(res => {
      console.log(res)
      this.name = res.item.user.user.name
      this.radio = res.item.user.user.xbm
      this.birthday = res.item.user.csrq
      this.nativeplace = res.item.user.jgm
      this.nation = res.item.user.mzm
      this.political = res.item.user.zzmmm
      this.id = res.item.user.id
      this.culturelever = 300
      this.workdepartment = res.item.user.sjtszdw
      this.work = res.item.user.przyjszwm
      this.address = res.item.user.jtzz
      this.phonenumber = res.item.user.phone
    })
    const name = this.name
    getInfo(name).then(res => {
      console.log(res)
      this.nation_country = res.page.list[0].citizenship
      console.log('tag', this.nation_country)
    })
  },
  methods: {
    returnHome () {
      this.$router.push(
        {
          path: '/'
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.message_info_wrap {
  padding: 8.53333vw 6.66667vw 6.66667vw;
}

.message_info {
  overflow: hidden;
}

.information_basic {
  margin-bottom: 8.53333vw;
}

.information_title {
  font-size: 5.86667vw;
  color: #282828;
}

.infor_item {
  position: relative;
  margin: 5.86667vw 0;
}

.infor_item_title {
  font-size: 3.46667vw;
  color: #282828;
}

.infor_item_value {
  padding: 3.2vw 0;
  font-size: 4vw;
  color: #868686;
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
