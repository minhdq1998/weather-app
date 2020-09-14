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

export default {
    name: "LocationInputBox",
    components: {
    },
    data: () => ({
        location: ""        
    }),
    computed: {
        matched_cities() {
            let result = this.get_matched_cities(this.location)
            console.log(result)
            console.log(location)
            return result
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
        pick_city(city) {
            this.location = city.name + ", " + city.country
        }
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