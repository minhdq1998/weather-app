<template>
    <section id="timer">
        <Header header="Timer" color="#87CEEB" />
        <CentralizedContainer>
            <NesButton class="timer-mode-button" @click="change_mode('pomodoro')"   :primary="is_active('pomodoro')">Pomodoro</NesButton>
            <NesButton class="timer-mode-button" @click="change_mode('shortbreak')" :primary="is_active('shortbreak')">Short Break</NesButton>
            <NesButton class="timer-mode-button" @click="change_mode('longbreak')"  :primary="is_active('longbreak')">Long Break</NesButton>
            <Timer :mins=25 :active="mode == 'pomodoro'"   />
            <Timer :mins=5  :active="mode == 'shortbreak'" />
            <Timer :mins=10 :active="mode == 'longbreak'"  />
        </CentralizedContainer>
    </section>
</template>

<script>
import Header from './../common/Header'
import CentralizedContainer from './../common/CentralizedContainer'
import Timer from './../timer-page/sub-components/Timer'
import { NesButton } from 'vuenes.css'

export default {
    name:"TimerPage",
    components: {
        Header,
        Timer,
        NesButton,
        CentralizedContainer
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

.retro-container {
    border: 200px;
}

.timer-mode-button {
    font-size: 10px;
}
</style>