<template>
  <div class="slide" v-bind:class="[whereAmI]" >
      <img v-bind:src="img" alt="img" class="slide-img">
        <div class="side-bullets">
            <div v-for="n in count"
            :key="n"
            class="slide-bullet"
            v-bind:class="{'bullet-on' :n === currentId ? true : false}" 
            >
            </div>
        </div>
        <div class="right-arrow" v-on:click="$emit('direction', 'right')">
            <div class="arrow-pos-div">
                <img src="../assets/arrowLeft.png" alt="right arrow" class="right-arrow-pic">
            </div>
        </div>
        <div class="left-arrow" v-on:click="$emit('direction', 'left')">
            <div class="arrow-pos-div">
                <img src="../assets/arrowLeft.png" alt="left arrow" class="left-arrow-pic">
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "SlideShow",
    props: ["data", "img", "myId", "currentId", "count"],
    computed: {
        whereAmI: function() {
            if(this.myId > this.currentId) {
                return {
                    "slide-right": true,
                    "slide-left" : false,
                };
            } else if (this.myId < this.currentId) {
                return {
                    "slide-right": false,
                    "slide-left" : true,
                };
            } else {
                return {
                    "slide-right": false,
                    "slide-left": false,
                };
            }
        }
    }
}; 

</script>

<style>


.slide {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* background-color: blue; */
    height: 100vh;  
    overflow: hidden;
}

.slide-right {
    visibility: hidden;
}

.slide-left {
    visibility: hidden;
}

 .slide-img{
    /* width: 100%; */
    height: 100vh;
    object-fit: cover;
}

 .right-arrow {
    position: absolute;
    right: -65px;
    top: 50%;
    height: 600px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.2);    
    transform: translate(-50%,-50%);
}

 .left-arrow{
    position: absolute;
    left: 85px;
    top: 50%;
    height: 600px;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translate(-50%,-50%);
}

 .arrow-pos-div {
    position: relative;
    width: 100%;
    height: 100%;
}

.right-arrow-pic{
    position: absolute;
    top: 25%;
    left: 50%;
    /* transform: transform(-50%,-50%); */
    /* width: 100%; */
    height: 300px;
    filter: invert(90%);
}

 .left-arrow-pic{
    position: absolute;
    top: 25%;
    right: 50%;
    /* transform: transform(-50%,-50%); */
    transform: rotate(180deg);
    /* width: 100%; */
    height: 300px;
    /* filter: invert(90%); */
    
    transition: opacity 0.2s ease;
    opacity: 0.2;
}

 .left-arrow-pic:hover {
     opacity: 1;
 }

.side-bullets {
    /* background-color: violet; */
    width: auto;
    height: 30px;
    margin-left: auto ;
    margin-right: auto ;
    margin-bottom: 5px;
    transform: translate(0%,-170%);
    display: block;
}

.slide-bullet{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 3px solid #000;
    margin: 1.5px;
    position: relative;
}

.slide-bullet::after{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    opacity: 0;
}

.bullet-on::after{
    transform: translate(-50%,-50%) scale(1);
    opacity: 1;
    transition: 1;
} 

</style>