<template>
  <section id="test">
      <Header header="Test" />
      <CentralizedContainer>Slot</CentralizedContainer>
  </section>
</template>

<script>
import Header from './../common/Header'
import CentralizedContainer from './../common/CentralizedContainer'

export default {
    name:'TestPage',
    components: {
        Header,
        CentralizedContainer
    }
}
</script>

<style scoped>
#test {
    height: 100vh;
    background-color: burlywood;
    position: relative;
}
</style>