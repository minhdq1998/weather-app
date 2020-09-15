<template>
    <h2 :style="{'color': color}">{{ header }}</h2>
</template>

<script>
export default {
    name: "Header",
    props: {
        header: String,
        color:{
            type: String,
            default: "#fff"
        }
    }
}
</script>

<style scoped>

h2 {
    z-index: 20;
    padding-top: 120px;
}

</style>