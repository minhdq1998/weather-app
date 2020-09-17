<template>
  <div id="app">
    <Clock />
    <div class="container">
      <Observer/>
      <MenuPage/>
      <WeatherPage/>
      <TimerPage/>
      <AboutPage/>
    </div>
    <div class="paging-but">
        <div><NesButton @click="move_to(up(page))">↑</NesButton></div>
        <div><NesButton @click="move_to(down(page))">↓</NesButton></div>
    </div>
  </div>
</template>

<script>
import { default as MenuPage } from './components/menu-page/Main'
import { default as WeatherPage } from './components/weather-page/Main';
import { default as TimerPage } from './components/timer-page/Main';
import { default as AboutPage } from './components/about-page/Main'


import Clock from './components/common/Clock'
import Observer from './components/common/Observer'
import { NesButton } from 'vuenes.css'

import pagingMixin from './mixins/pagingMixn'
import { bus } from './main'

export default {
  name: 'App',
  components: {
    MenuPage,
    WeatherPage,
    TimerPage,
    AboutPage,
    NesButton,
    Clock,
    Observer,
  },
  mixins: [pagingMixin],
  data: () => ({
    default_url: "",
    page: "#menu",
    pages: [
      'menu',
      'weather',
      'timer',
      'about'
    ]
  }),
  created() {
    bus.$on('switch_page',(id) => this.page=id )
  },
  methods: {
    up(page) {
      let index = this.index_of(page)
      if (index == 0) return this.pages[index]
      else return this.pages[index-1]
    },
    down(page) {
      let index = this.index_of(page)
      if (index == this.pages.length - 1) return this.pages[index]
      else return this.pages[index+1]
    },
    index_of(page) {
      for (var i = 0; i < this.pages.length; i++) {
        if (page == this.pages[i]) return i
      }
    }
  }
}
</script>

<style>
html {
    scroll-behavior: smooth !important;
}

body {
  margin: 0px !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 100%;
}

.paging-but {
    position: fixed;
    bottom :10px;
    right: 10px;
    transition: 0.4s;
}
</style>
