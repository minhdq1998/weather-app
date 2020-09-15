<template>
    <div class="weather-page">
        <Clock />
        <div class="centralize-content">
            <WeatherDisplay />
            <LocationInputBox />
        </div>
    </div>
</template>
<script>

import Clock from './sub-components/Clock'
import LocationInputBox from './sub-components/LocationInputBox'
import WeatherDisplay from './sub-components/WeatherDisplay'

export default {
  name: 'WeatherPage',
  components: {
      Clock,
      LocationInputBox,
      WeatherDisplay
  }
}
</script>
<style scoped>
.weather-page {
    height: 100vh;
    background-color: #32444b;
    position: relative;
}
.centralize-content {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 60%;
}
</style>