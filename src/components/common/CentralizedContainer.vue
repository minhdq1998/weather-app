<template>
<div :style=style class="centralize-content">
    <slot />
</div>
</template>

<script>
export default {
    name: 'CentralizedContainer',
    data: () => ({
        style: {
        }
    })
}
</script>

<style scoped>

.centralize-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 700px;
}

@media (max-width: 768px) {
    .centralize-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
    }
}
</style>