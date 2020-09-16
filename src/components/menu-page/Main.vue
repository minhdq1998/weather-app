<template>
    <section id="menu">
        <Header header="Menu" />
        <div class="centralize-content">
            <NesContainer title="Menu" center>
                <div><NesButton class="menu-button" @click="move_to('#about')">About</NesButton></div>
                <div><NesButton class="menu-button" @click="move_to('#weather')">Weather</NesButton></div>
                <div><NesButton class="menu-button" @click="move_to('#timer')">Timer</NesButton></div>
            </NesContainer>
        </div>
    </section>
</template>

<script>
import Header from './../common/Header'
import { NesContainer, NesButton } from 'vuenes.css' 

import pagingMixin from '../../mixins/pagingMixn'

export default {
    name: "MenuPage",
    components: {
        Header,
        NesContainer,
        NesButton
    },
    mixins: [pagingMixin]
}
</script>

<style scoped>
#menu {
    height: 100vh;
    background-color: orange;
}

.centralize-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 600px;
    background-color: white;
    color: black;
}

.menu-button {
    width: 80%;
    margin: 10px !important;
}
</style>