<template>
  <van-index-bar>
    <van-index-anchor index="A" />
    <div
      v-for="item in Alist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>

    <van-index-anchor index="B" />
    <div
      v-for="item in Blist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="C" />
    <div
      v-for="item in Clist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="D" />
    <div
      v-for="item in Dlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="E" />
    <div
      v-for="item in Elist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="F" />
    <div
      v-for="item in Flist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="G" />
    <div
      v-for="item in Glist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="H" />
    <div
      v-for="item in Hlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="I" />
    <div
      v-for="item in Ilist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="J" />
    <div
      v-for="item in Jlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="K" />
    <div
      v-for="item in Klist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="L" />
    <div
      v-for="item in Llist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="M" />
    <div
      v-for="item in Mlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="N" />
    <div
      v-for="item in Nlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="O" />
    <div
      v-for="item in Olist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="P" />
    <div
      v-for="item in Plist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="Q" />
    <div
      v-for="item in Qlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="R" />
    <div
      v-for="item in Rlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="S" />
    <div
      v-for="item in Slist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="T" />
    <div
      v-for="item in Tlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="U" />
    <div
      v-for="item in Ulist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="V" />
    <div
      v-for="item in Vlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="W" />
    <div
      v-for="item in Wlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="X" />
    <div
      v-for="item in Xlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="Y" />
    <div
      v-for="item in Ylist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
    <van-index-anchor index="Z" />
    <div
      v-for="item in Zlist"
      :key="item.id"
      class="item_container"
      @click="choose(item.label)"
    >
      <van-cell :title="item.label" />
    </div>
  </van-index-bar>
</template>

<script>
import { getCity } from '../../api/user'
export default {
  data () {
    return {
      nationList: [],
      Alist: [],
      Blist: [],
      Clist: [],
      Dlist: [],
      Elist: [],
      Flist: [],
      Glist: [],
      Hlist: [],
      Ilist: [],
      Jlist: [],
      Klist: [],
      Llist: [],
      Mlist: [],
      Nlist: [],
      Olist: [],
      Plist: [],
      Qlist: [],
      Rlist: [],
      Slist: [],
      Tlist: [],
      Ulist: [],
      Vlist: [],
      Wlist: [],
      Xlist: [],
      Ylist: [],
      Zlist: []
    }
  },
  created () {
    const type = 'national'
    getCity(type).then(res => {
      console.log('nationlist1', res)
      this.nationList = res.page.list
      for (var i = 0; i < this.nationList.length; i++) {
        if (this.nationList[i].remarks === 'A') {
          this.Alist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'B') {
          this.Blist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'C') {
          this.Clist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'D') {
          this.Dlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'E') {
          this.Elist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'F') {
          this.Flist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'G') {
          this.Glist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'H') {
          this.Hlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'I') {
          this.Ilist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'J') {
          this.Jlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'K') {
          this.Klist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'L') {
          this.Llist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'M') {
          this.Mlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'N') {
          this.Nlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'O') {
          this.Olist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'P') {
          this.Plist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Q') {
          this.Qlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'R') {
          this.Rlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'S') {
          this.Slist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'T') {
          this.Tlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'U') {
          this.Ulist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'V') {
          this.Vlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'W') {
          this.Wlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'X') {
          this.Xlist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Y') {
          this.Ylist.push(this.nationList[i])
        }
        if (this.nationList[i].remarks === 'Z') {
          this.Zlist.push(this.nationList[i])
        }
      }
    })
  },
  methods: {
    choose (name) {
      this.$emit('getDestination', name)
      const isShow = false
      this.$emit('isShowNational', isShow)
    }
  }
}
</script>
