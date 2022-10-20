<template>
  <div class="home_container">
    <HomeView/>
  </div>
</template>

<script>
// import Login from '@/pages/components/Login.vue'
import HomeView from '@/pages/components/HomeView.vue'
export default {
  name: 'Home',
  components: {
    HomeView
  }
}
</script>

<style scoped lang="scss">
.home_container {
  font-size: 28px;
}
</style>
