<template>
    <div class="weather-display">
        <span v-if="weather">
            <img class="weather-desc" :src="'https://www.weatherbit.io/static/img/icons/'+this.weather.weather.icon+'.png'">
            <h3>{{ this.weather.weather.description }}</h3>
            <h3>{{ this.weather.temp }}°C</h3>
        </span>
        <span v-else >
            <img class="weather-desc" style="visibility:hidden" />
            <h3>Pick Your City</h3>
            <h3>0°C</h3>
        </span>
    </div>
</template>

<script>
import { bus } from '../../../main'

export default {
    name:"WeatherDisplay",
    data: () => ({
        weather: undefined
    }),
    created() {
        bus.$on('update_weather',(weather) => this.weather = weather) 
    },
    methods: {
    }
}
</script>

<style scoped>
.weather-display {
    margin-bottom: 20px;
}

h3 {
    color: white;
}

.weather-desc {
    height: 120px;
    width: 120px;
}
</style>