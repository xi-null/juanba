<template>
  <div class="national_container">
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
          选择地点
        </div>
      </div>
    </div>
    <div class="nation_container">
      <!-- <div class="nation_container_sidebar">
        <a href="#D">11</a>
        <span
          class="van-index-bar__index"
          @click="goto('A')"
        >
          A
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('B')"
        >
          B
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('C')"
        >
          C
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('D')"
        >
          D
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('E')"
        >
          E
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('F')"
        >
          F
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('G')"
        >
          G
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('H')"
        >
          H
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('I')"
        >
          I
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('J')"
        >
          J
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('K')"
        >
          K
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('L')"
        >
          L
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('M')"
        >
          M
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('N')"
        >
          N
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('O')"
        >
          O
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('P')"
        >
          P
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('Q')"
        >
          Q
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('R')"
        >
          R
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('S')"
        >
          S
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('T')"
        >
          T
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('U')"
        >
          U
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('V')"
        >
          V
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('W')"
        >
          W
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('X')"
        >
          X
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('Y')"
        >
          Y
        </span>
        <span
          class="van-index-bar__index"
          @click="goto('Z')"
        >
          Z
        </span>
      </div> -->
      <div class="nation_container_sidebar">
        <a href="#A">A</a>
        <a href="#B">B</a>
        <a href="#C">C</a>
        <a href="#D">D</a>
        <a href="#E">E</a>
        <a href="#F">F</a>
        <a href="#G">G</a>
        <a href="#H">H</a>
        <a href="#I">I</a>
        <a href="#J">J</a>
        <a href="#K">K</a>
        <a href="#L">L</a>
        <a href="#M">M</a>
        <a href="#N">N</a>
        <a href="#O">O</a>
        <a href="#P">P</a>
        <a href="#Q">Q</a>
        <a href="#R">R</a>
        <a href="#S">S</a>
        <a href="#T">T</a>
        <a href="#U">U</a>
        <a href="#V">V</a>
        <a href="#W">W</a>
        <a href="#X">X</a>
        <a href="#Y">Y</a>
        <a href="#Z">Z</a>
      </div>
      <div
        id="A"
        class="chart"
      >
        A
      </div>
      <div
        v-for="item in Alist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="B"
        class="chart"
      >
        B
      </div>
      <div
        v-for="item in Blist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="C"
        class="chart"
      >
        C
      </div>
      <div
        v-for="item in Clist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="D"
        class="chart"
      >
        D
      </div>
      <div
        v-for="item in Dlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="E"
        class="chart"
      >
        E
      </div>
      <div
        v-for="item in Elist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="F"
        class="chart"
      >
        F
      </div>
      <div
        v-for="item in Flist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="G"
        class="chart"
      >
        G
      </div>
      <div
        v-for="item in Glist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="H"
        class="chart"
      >
        H
      </div>
      <div
        v-for="item in Hlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="I"
        class="chart"
      >
        I
      </div>
      <div
        v-for="item in Ilist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="J"
        class="chart"
      >
        J
      </div>
      <div
        v-for="item in Jlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="K"
        class="chart"
      >
        K
      </div>
      <div
        v-for="item in Klist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="L"
        class="chart"
      >
        L
      </div>
      <div
        v-for="item in Llist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="M"
        class="chart"
      >
        M
      </div>
      <div
        v-for="item in Mlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="N"
        class="chart"
      >
        N
      </div>
      <div
        v-for="item in Nlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="O"
        class="chart"
      >
        O
      </div>
      <div
        v-for="item in Olist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="P"
        class="chart"
      >
        P
      </div>
      <div
        v-for="item in Plist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="Q"
        class="chart"
      >
        Q
      </div>
      <div
        v-for="item in Qlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="R"
        class="chart"
      >
        R
      </div>
      <div
        v-for="item in Rlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="S"
        class="chart"
      >
        S
      </div>
      <div
        v-for="item in Slist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="T"
        class="chart"
      >
        T
      </div>
      <div
        v-for="item in Tlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="U"
        class="chart"
      >
        U
      </div>
      <div
        v-for="item in Ulist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="V"
        class="chart"
      >
        V
      </div>
      <div
        v-for="item in Vlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="W"
        class="chart"
      >
        W
      </div>
      <div
        v-for="item in Wlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="X"
        class="chart"
      >
        X
      </div>
      <div
        v-for="item in Xlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="Y"
        class="chart"
      >
        Y
      </div>
      <div
        v-for="item in Ylist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
      <div
        id="Z"
        class="chart"
      >
        Z
      </div>
      <div
        v-for="item in Zlist"
        :key="item.id"
        class="item_container"
        @click="choose(item.label)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
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
      Zlist: [],
      isShowNational: true
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
    returnPre () {
      this.$router.push({
        path: '/apply'
      })
    },
    goto (ele) {
      console.log('ele', ele)
      let bridge = document.getElementById(ele)
      bridge.scrollTop = 0
      const root = document.body
      let height = 0
      do {
        height += bridge.offsetTop
        bridge = bridge.offsetParent
        console.log('tag', 222)
      } while (bridge !== root)
      console.log('tag', height)
      window.scrollTo({
        top: height,
        behavior: 'smooth'
      })
    },
    choose (name) {
      console.log('destination', name)
      window.localStorage.setItem('destination', name)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  padding: 0 1.06667vw 0 2.13333vw;
  font-size: 1.33333vw;
  font-weight: 500;
  line-height: -1.13333vw;
  color: #323233;
}

.item_container {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.chart {
  z-index: 1;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  color: #323233;
  background-color: #f4f4f4;
}

.van-index-bar__index {
  padding: 0 8px 0 16px;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
}

.nation_container {
  height: 100vh;
  overflow: scroll;
}

.nation_container_sidebar {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 2;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  transform: translateY(-50%);
}

.national_container {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  overflow: auto;
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
