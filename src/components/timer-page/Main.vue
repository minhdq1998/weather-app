<template>
    <section id="timer">
        <Header header="Pomodoro Timer" color="#87CEEB" />
        <Timer />
    </section>
</template>

<script>
import Header from './../common/Header'
import Timer from './../timer-page/sub-components/Timer'

export default {
    name:"TimerPage",
    components: {
        Header,
        Timer
    }
}
</script>

<style scoped>
#timer {
    height: 100vh;
    width: 100%;
    background-color: #32444b;
    position: relative;
}
</style>