<template>
    <div class="centralize-content">
        <h3>{{ this.mins }} Minutes</h3>
        <NesProgressBar class="progress" :max='mins_to_secs(mins)' :value='countdown'  />
        <NesButton class="timer-button" @click="start_count_down()" success>Start</NesButton>
        <NesButton class="timer-button" @click="stop_count_down()" error>Stop</NesButton>
        <NesButton class="timer-button" @click="reset_count_down()" primary>Reset</NesButton>
    </div>
</template>

<script>
import { NesProgressBar, NesButton } from 'vuenes.css'

export default {
    name: "Timer",
    components: {
        NesProgressBar,
        NesButton
    },
    props: {
        mins:{
            type: Number,
            default: 0.5
        }
    },
    data: () => ({
        countdown: 0,
        stop_request: false
    }),
    mounted() {
        this.countdown = this.mins_to_secs(this.mins)
    },
    methods: {
        mins_to_secs(mins) {
            return mins * 60
        },
        start_count_down() {
            if (this.countdown > 0 && !this.stop_request) {
                this.countdown -= 1
                setTimeout(() => { this.start_count_down() }, 1000)
            } else {
                this.stop_request = false
            }
        },
        stop_count_down() {
            this.stop_request = true
            console.log('stop')
        },
        reset_count_down() {
            this.stop_request = true
            this.countdown = this.mins_to_secs(this.mins)
            console.log('reset')
        }
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
    max-width: 600px;
}

.progress {
    height: 30px;
}

.timer-button {
    margin: 20px;
}
</style>