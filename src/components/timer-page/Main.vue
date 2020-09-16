<template>
    <section id="timer">
        <Header header="Pomodoro Timer" color="#87CEEB" />
        <div class="centralize-content" >
            <NesButton class="timer-mode-button" @click="change_mode('pomodoro')"   :primary="is_active('pomodoro')">Pomodoro</NesButton>
            <NesButton class="timer-mode-button" @click="change_mode('shortbreak')" :primary="is_active('shortbreak')">Short Break</NesButton>
            <NesButton class="timer-mode-button" @click="change_mode('longbreak')"  :primary="is_active('longbreak')">Long Break</NesButton>
            <Timer :mins=25 :active="mode == 'pomodoro'" />
            <Timer :mins=5  :active="mode == 'shortbreak'"/>
            <Timer :mins=10 :active="mode == 'longbreak'"/>
        </div>
    </section>
</template>

<script>
import Header from './../common/Header'
import Timer from './../timer-page/sub-components/Timer'
import { NesButton } from 'vuenes.css'

export default {
    name:"TimerPage",
    components: {
        Header,
        Timer,
        NesButton
    },
    data: () => ({
        mode: "pomodoro"
    }),
    methods: {
        change_mode(id) {
            this.mode = id
            console.log(this.mode)
        },
        is_active(id) {
            return id == this.mode
        }
    }
}
</script>

<style scoped>
#timer {
    height: 100vh;
    width: 100%;
    background-color: #32444b;
    position: relative;
    font-size: 16px;
}

.centralize-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
}

.retro-container {
    border: 200px;
}

.timer-mode-button {
    font-size: 10px;
}
</style>