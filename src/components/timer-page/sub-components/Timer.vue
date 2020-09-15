<template>
    <div class="centralize-content">
        <h3>25 Minutes</h3>
        <NesProgressBar class="progress" max='50' value=10  />
        <NesButton class="timer-button" success=true>Start</NesButton>
        <NesButton class="timer-button" error=true>Stop</NesButton>
        <NesButton class="timer-button" primary=true>Reset</NesButton>
    </div>
</template>

<script>
import { NesProgressBar, NesButton } from 'vuenes.css'

export default {
    name: "Timer",
    components: {
        NesProgressBar,
        NesButton
    }
}
</script>

<style scoped>

.centralize-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
}

.progress {
    height: 30px;
}

.timer-button {
    margin: 20px;
}
</style>