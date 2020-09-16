<template>
    <section class="weather-page" id="weather">
        <Header header="Weather Forecast" color="#32444b" />
        <div class="centralize-content">
            <WeatherDisplay />
            <LocationInputBox />
        </div>
    </section>
</template>
<script>

import Header from './../common/Header'
import LocationInputBox from './sub-components/LocationInputBox'
import WeatherDisplay from './sub-components/WeatherDisplay'

export default {
  name: 'WeatherPage',
  components: {
      LocationInputBox,
      WeatherDisplay,
      Header
  }
}
</script>
<style scoped>

.weather-page {
    height: 100vh;
    background-color: #87CEEB;
    position: relative;
}

.centralize-content {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
}
</style>