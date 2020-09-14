<template>
    <div class="weather-page">
        <LocationInputBox />
        <WeatherDisplay />
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
</style>