<template>
  <div id="app">
    <Clock />
    <WeatherPage/>
    <TimerPage/>
    <div class="paging-but">
        <div><NesButton @click="move_to('#weather')">↑</NesButton></div>
        <div><NesButton @click="move_to('#timer')">↓</NesButton></div>
    </div>
  </div>
</template>

<script>
import Clock from './components/common/Clock'
import { default as WeatherPage } from './components/weather-page/Main';
import { default as TimerPage } from './components/timer-page/Main';
import { NesButton } from 'vuenes.css'

export default {
  name: 'App',
  components: {
    WeatherPage,
    TimerPage,
    NesButton,
    Clock
  },
  data: () => ({
    default_url: ""
  }),
  created() {
    this.default_url = window.location.origin
  },
  methods: {
    move_to(id) {
      window.location.href = this.default_url + id
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
