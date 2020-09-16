<template>
    <div class="centralize-content">
        <h3>{{ this.mins }} Minutes</h3>
        <NesProgressBar class="progress" :max='mins_to_secs(mins)' :value='countdown'  />
        <NesButton class="timer-button" @click="start_count_down(true)" success>Start</NesButton>
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
        countdown_run: false
    }),
    mounted() {
        this.countdown = this.mins_to_secs(this.mins)
    },
    methods: {
        mins_to_secs(mins) {
            return mins * 60
        },
        start_count_down(initial = false) {
            if ((this.countdown > 0 && this.countdown_run) || 
                (this.countdown > 0 && initial)) {
                this.countdown_run = true
                this.countdown -= 1
                setTimeout(() => { this.start_count_down() }, 1000)
            } else if (this.countdown == 0) this.play_audio()
        },
        stop_count_down() {
            this.countdown_run = false
            console.log('stop')
        },
        reset_count_down() {
            this.countdown_run = false
            this.countdown = this.mins_to_secs(this.mins)
            console.log('reset')
        },
        play_audio() {
            let audio = new Audio(require('@/assets/alarm.mp3'))
            audio.play()
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