<template>
    <div class="clock-container">
        {{ this.get_timezone() }}
        <h4>{{ time }}</h4>
    </div>
</template>

<script>
export default {
    name:"Clock",
    data: () => ({
        time: ""
    }),
    mounted() {
        this.update_time()
    },
    methods: {
        update_time() {
            let d = new Date();
            let hr = d.getHours()
            let min = d.getMinutes()
            let sec = d.getSeconds()
            this.time = `${this.number_to_string(hr)}:${this.number_to_string(min)}:${this.number_to_string(sec)}`
            setTimeout( () => { this.update_time() }, 1000)
        },
        get_timezone() {
            let d = new Date();
            let dtf = Intl.DateTimeFormat(undefined, {timeZoneName: 'long'});
            return dtf.formatToParts(d).find((part) => part.type == 'timeZoneName').value;
        },
        number_to_string(number) {
            return number < 10 ? '0' + number: number
        }
    }
}
</script>

<style scoped>
.clock-container {
    text-align: right;
    position: fixed;
    top:10px;
    right: 10px;
    color: white;
}
</style>