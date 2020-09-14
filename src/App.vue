<template>
  <div id="app">
    <WeatherPage></WeatherPage>
  </div>
</template>

<script>
import { default as WeatherPage } from './components/weather-page/Main';

export default {
  name: 'App',
  components: {
    WeatherPage
  }
}
</script>

<style>
body {
  margin: 0px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}
</style>
