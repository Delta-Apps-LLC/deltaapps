<template>
    <carousel 
    :autoplay="true" 
    :autoplay-timeout="5000" 
    :autoplay-hover-pause="true" 
    :perPage="1" 
    :active-slide="activeSlide" 
    @after-slide="handleAfterSlide">

        <slide v-for="(item, index) in items" :key="index">
            <div class="window">
                <p>{{ item }}</p>
            </div>
        </slide>

    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            items: [
                'num 1','num 2','num 3','num 4','num 5','num 6','num 7','num 8','num 9','num 10','num 11','num 12','num 13'
            ],
            activeSlide: 0,
        }
    },
    methods: {
        handleAfterSlide(index) {
            if (index === this.items.length - 1) {
                // Last slide, reset to first slide
                this.activeSlide = index-1
            } else {
                this.activeSlide = index
            }
        }
    },
}
</script>



<style scoped>
/* .window {
background-color: aqua;
color: black;
} */
</style>

