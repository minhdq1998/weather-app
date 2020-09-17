import { bus } from '../main'

export default {
    created() {
        this.default_url = window.location.origin + window.location.pathname
    },
    methods: {
        move_to(id) {
            console.log(id)
            window.location.href = this.default_url + '#' + id
            bus.$emit("switch_page", id)
        }
    }
}