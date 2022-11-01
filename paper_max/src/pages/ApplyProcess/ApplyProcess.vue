<template>
  <div
    v-if="isShow === true"
    class="details_container"
  >
    <div class="nav_bar">
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
            申请详情
          </div>
        </div>
      </div>
    </div>
    <div class="process_container">
      <Details />
      <div class="process_container_footer">
        <button
          class="process_container_footer_btn"
          @click="cancleApply(applyId)"
        >
          取消申请
        </button>
      </div>
    </div>
  </div>
  <div
    v-else
    class="details_container"
  >
    <CancleApply
      :apply-id="applyId"
      @closeCancle="closeCancle"
    />
  </div>
</template>

<script>
import CancleApply from '@/pages/ApplyProcess/CancleApply.vue'
import Details from '../components/Details.vue'
export default {
  name: 'ApplyProcess',
  components: {
    CancleApply,
    Details
  },
  data () {
    return {
      id: '',
      isShow: true
    }
  },
  mounted () {
    this.id = this.$route.query.applyId
    window.localStorage.setItem('applyid', this.id)
  },
  methods: {
    cancleApply (id) {
      console.log('applyId', id)
      this.isShow = false
    },
    returnPre () {
      this.$router.push(
        {
          path: '/myapply'
        }
      )
    },
    closeCancle (isShow) {
      this.isShow = isShow
    }
  }
}
</script>

<style scoped lang="scss">
.nav_bar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.process_container {
  background-color: #f4f4f4;
}

.process_container_footer {
  position: fixed;
  bottom: 0;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.66667vw 8vw;
  background-color: #fff;
}

.message_nav {
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
</style>
