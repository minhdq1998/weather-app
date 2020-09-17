<template>
  <section id="about">
        <Header header='About' />
        <CentralizedContainer>
            <NesBalloonLeftItem  class="about-chatbox ab-chatbox-left" message='What it this all about ?' />
            <NesBalloonRightItem class="about-chatbox ab-chatbox-right" message='Just a fun app to look at :D' />
        </CentralizedContainer>
  </section>
</template>

<script>
import Header from './../common/Header'
import CentralizedContainer from './../common/CentralizedContainer'

import { NesBalloonLeftItem, NesBalloonRightItem } from 'vuenes.css'

export default {
    name: 'AboutPage',
    components: {
        Header,
        NesBalloonLeftItem,
        NesBalloonRightItem,
        CentralizedContainer
    }
}
</script>

<style scoped>
#about {
    height: 100vh;
    background-color: rgb(165, 5, 5);
    position: relative;
}

.about-chatbox {
    color: black;
}

.ab-chatbox-left {
    width: 100%;
    padding-right: 100px;
}

.ab-chatbox-right {
    width: 100%;
    padding-left: 100px;
}

</style>