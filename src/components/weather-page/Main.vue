<template>
    <section class="weather-page" id="weather">
        <Header header="Weather" color="#32444b" />
        <CentralizedContainer>
            <WeatherDisplay />
            <LocationInputBox />
        </CentralizedContainer>
    </section>
</template>
<script>

import Header from './../common/Header'
import LocationInputBox from './sub-components/LocationInputBox'
import WeatherDisplay from './sub-components/WeatherDisplay'
import CentralizedContainer from './../common/CentralizedContainer'

export default {
  name: 'WeatherPage',
  components: {
      LocationInputBox,
      WeatherDisplay,
      Header,
      CentralizedContainer
  }
}
</script>
<style scoped>

.weather-page {
    height: 100vh;
    background-color: #87CEEB;
    position: relative;
}

</style>