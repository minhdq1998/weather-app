<template>
    <div class="location-input">
        <input class="location-input-box" v-model="location" id="Location" placeholder="Location..." />
        <span class="location-dropdown" v-if="matched_cities.length > 0">
            <div class="location-single-dropdown" 
                v-for="(city, index) in matched_cities" :key=index
                :id="city.name+index" disabled 
                v-on:click="pick_city(city)"
            >{{ city.name + ", " + city.country }}</div>
        </span>
    </div>
</template>
<script>
import cities from 'cities.json'
import axios from 'axios'
import { bus } from '../../../main'

export default {
    name: "LocationInputBox",
    components: {
    },
    data: () => ({
        location: ""        
    }),
    computed: {
        matched_cities() {
            return this.get_matched_cities(this.location)
        }
    },
    methods: {
        get_matched_cities(search_text) {
            let result = []
            let i = 0
            if (!search_text) return result
            while (result.length < 5 && i < cities.length) {
                if (cities[i].name.toLowerCase()
                    .startsWith(search_text.toLowerCase())
                    ) {result.push(cities[i])}
                i++
            }
            return result
        },
        async pick_city(city) {
            this.location = city.name + ", " + city.country
            let weather = await this.get_weather(city)
            console.log(weather)
            bus.$emit('update_weather', weather)
        },
        async get_weather(city) {
            let url = this.api_url(city)
            const response = await axios({
                url:url, method: 'get'
            })
            let weather_data = response.data.data[0]
            return weather_data
        },
        api_url(city) {
            // register your own api account at https://www.weatherbit.io/api
            return `https://api.weatherbit.io/v2.0/current?city=${city.name},${city.country}&key=25ce52ab3bce404698a80095175694ba`
        },
    }
}
</script>
<style scoped>
.location-input {
    position: relative;
}

.location-dropdown {
    position: absolute;
    left: 0px;
    bottom: -10px;
    transform: translateY(100%);
    width: 100%;
    background-color: white;
    border: 4px solid black;
    padding: 8px 16px 8px 16px;
}

.location-single-dropdown:hover {
    background-color: lightblue;
}

input {
    min-height: 36px;
    padding: 8px 16px 8px 16px;
    height: 100%;
    width: 100%;
    border: 4px solid black;
}
</style>