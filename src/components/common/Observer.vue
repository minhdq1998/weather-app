<template>
  <div class="observer" />
</template>

<script>
import { bus } from '../../main'

export default {
    name:'Observer',
    data: () => ({
        observer:null,
    }),
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    let id = entry.target.id
                    console.log('Collied',id)
                    bus.$emit("switch_page", id)
                }
            })
        }, {rootMargin: "0px 0px -99% 0px"})

        let sections = document.querySelectorAll('section[id]')
        for (var i=0; i < sections.length; i++){
            this.observer.observe(sections[i])
        }
    }
}
</script>