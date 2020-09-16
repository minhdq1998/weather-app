<template>
    <div :style="visibility()">
        <NesContainer rounded dark>
            <h3>{{ this.mins }} Minutes{{ countdown_text() }} </h3>
            <NesProgressBar class="progress" :max='mins_to_secs(mins)' :value='countdown' warning />
            <NesButton class="timer-button" @click="start_count_down(true)" success>Start</NesButton>
            <NesButton class="timer-button" @click="stop_count_down()" error>Stop</NesButton>
            <NesButton class="timer-button" @click="reset_count_down()" primary>Reset</NesButton>
        </NesContainer>
    </div>
</template>

<script>
import { NesProgressBar, NesButton, NesContainer } from 'vuenes.css'

export default {
    name: "Timer",
    components: {
        NesProgressBar,
        NesButton,
        NesContainer
    },
    props: {
        mins:{
            type: Number,
            default: 0.5
        },
        active:Boolean
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
        },
        visibility() {
            let display_mode = this.active ? 'block' : 'none'
            return {
                'display': display_mode
            }
        },
        countdown_text() {
            return this.countdown_run ? '...':''
        }
    }
}
</script>

<style scoped>

.progress {
    height: 30px;
}

.timer-button {
    margin: 20px !important;
}
</style>