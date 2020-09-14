<template>
    <div class="location-input">
        <NesInputText v-model=location id="Location" placeholder="Location..." />
    </div>
</template>
<script>
import { NesInputText } from 'vuenes.css'

export default {
    name: "LocationInputBox",
    components: {
        NesInputText
    },
    data: () => ({
        location: ""        
    }),
    methods: {
    }
}
</script>
<style scoped>
input {
    height: 100%;
    width: 100%;
}
</style>