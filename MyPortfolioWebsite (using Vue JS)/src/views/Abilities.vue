<template>
    <!-- <div class="AboutMe"> -->
        <div class="slide-show">
            <!-- <h1>Projects</h1>
            <hr noshade> -->
            <SlideShow
                v-for="(data,index) in slideData"
                :key="index"
                v-bind:img="slideData[index].img"
                v-bind:myId="index + 1"
                v-bind:currentId="currentId"
                v-bind:count="slideCount"
                v-on:direction="dir"
            />
        </div>
    <!-- </div> -->
    
</template>

<script>
import SlideShow from '../components/SlideShow';

export default {
    name: "Slide",
    components: {
        SlideShow
    },
    methods: {
        dir: function(myDir) {
            if (myDir === "right"){
                if (this.currentId < this.slideCount){
                    this.currentId += 1;
                } else {
                    this.currentId = 1;
                }
            }
             else {
                if (this.currentId > 1) {
                    this.currentId -= 1;
                } else {
                    this.currentId = this.slideCount;
                }
            }
        }
    },
    data: function() {
        return {
            slideCount: 4,
            currentId: 1,

            slideData: [
                {
                    img:"https://clipground.com/images/small-flowers-clipart-3.png"
                },

                {
                    img:"https://th.bing.com/th/id/OIP.StzSC4ahFsmp76HxlrZeWgAAAA?pid=Api&rs=1"
                },

                {
                    img:"https://clipground.com/images/small-flowers-clipart-3.png"
                },

                {
                    img:"https://www.lunapic.com/editor/premade/transparent.gif"
                }
            ]
        };
    }
}

</script>

<style>

.slide-show {
    width: 100%;
    height: 100vh;
    /* background-color: blueviolet; */
    box-sizing: border-box;
    position: relative;
}

h1 {
    /* margin-top: 5%; */
    margin-block-end: 0;
    margin-block-start: 0;
}

hr {
    size: 90%;
    width:20%;
    font-size: 1.5em;
    border: black;
}

</style>