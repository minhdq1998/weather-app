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

@media (max-height: 768px)  and (max-width: 500px) {
    h2 {
        position: absolute;
        padding-top:0px;
        top: 5px;
        left: 5px;
        font-size: 13px;
    }
}

</style>