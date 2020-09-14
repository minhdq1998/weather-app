<template>
    <div class="weather-display">
        <h3>{{ this.weather.weather.description }}</h3>
        <h3>{{ this.weather.temp }}°C</h3>
    </div>
</template>

<script>
import { bus } from '../../../main'

export default {
    name:"WeatherDisplay",
    components: {},
    data: () => ({
        weather: {
            temp: 0,
            weather: {
                description: "Pick Your City"
            }
        }
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
</style>