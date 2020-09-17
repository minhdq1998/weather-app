<template>
    <section id="menu">
        <Header header="Menu" color="#0000ff" />
        <CentralizedContainer class="content-container">
            <NesContainer title="Menu" center>
                <div><NesButton class="menu-button" @click="move_to('weather')" >Weather</NesButton></div>
                <div><NesButton class="menu-button" @click="move_to('todo')"   >Todo</NesButton></div>
                <div><NesButton class="menu-button" @click="move_to('timer')"   >Timer</NesButton></div>
                <div><NesButton class="menu-button" @click="move_to('about')"   >About</NesButton></div>
            </NesContainer>
        </CentralizedContainer>
    </section>
</template>

<script>
import Header from './../common/Header'
import CentralizedContainer from './../common/CentralizedContainer'
import { NesContainer, NesButton } from 'vuenes.css' 
import pagingMixin from '../../mixins/pagingMixn'

export default {
    name: "MenuPage",
    components: {
        Header,
        NesContainer,
        NesButton,
        CentralizedContainer
    },
    mixins: [pagingMixin]
}
</script>

<style scoped>
#menu {
    height: 100vh;
    background-color: orange;
    position: relative;
}

.content-container {
    color: black;
    background-color: white;
}

.menu-button {
    width: 80%;
    margin: 10px !important;
}
</style>