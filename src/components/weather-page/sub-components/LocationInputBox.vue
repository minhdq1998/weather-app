<template>
    <div class="location-input">
        <NesInputText id="Location" placeholder="Location..." />
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

    }),
    methods: {
    }
}
</script>
<style scoped>
.location-input {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
}

.location-input input {
    height: 100%;
    width: 100%;
}
</style>