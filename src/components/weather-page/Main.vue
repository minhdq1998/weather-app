<template>
    <div class="weather-page">
        <div class="centralize-content">
            <WeatherDisplay />
            <LocationInputBox />
        </div>
    </div>
</template>
<script>

import LocationInputBox from './sub-components/LocationInputBox'
import WeatherDisplay from './sub-components/WeatherDisplay'

export default {
  name: 'WeatherPage',
  components: {
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
    top: 45%;
    transform: translate(-50%, -50%);
    width: 60%;
}
</style>