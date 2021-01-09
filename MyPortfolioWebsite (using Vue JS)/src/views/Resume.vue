<template>

    <div class="projects">
        <div class="header">
        <h1>TBA</h1>
        <p class="title">B.Sc. in Computer Engineering</p>
        <hr noshade>
        </div>

        <div class="container">

            <div class="leftSide center">
                <h1>About Me</h1>
                <p>
                    Detail-oriented computer engineer with expertise working with embedded systems,
                    different programming languages, such as, C, Java and Python ..etc<br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Massa sed elementum tempus egestas sed sed risus pretium quam. Varius vel pharetra vel turpis nunc eget.
                    Sed viverra tellus in hac habitasse platea. Bibendum neque egestas congue quisque egestas. Orci dapibus ultrices in iaculis.
                    Feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam purus sit amet luctus venenatis lectus magna fringilla.
                    Purus ut faucibus pulvinar elementum. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
                </p>
            </div>
            
            <div class="middleSide">
                <img src="../assets/headShot1.jpg" alt="Mohammad's HeadShot">
            </div>

            <div class="rightSide">
                <h1>Details</h1>
                <h4>Name:</h4>
                <p>Mohammad Elsayyed</p>
                <h4>Major:</h4>
                <p>Bachelor of Science
                in Computer Engineering</p>
                <h4>Location:</h4>
                <p>Missisuaga, ON, Canada</p>

                <div class="social-container">
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

  /* @import "./styles/icons.scss"; */

<style scoped>
 
 /* @import './assets/styles/icons.scss'; */ 
/* p span {
    display: block; 
} */

h4 {
    margin:0;
    padding: 0;
}

.container .middleSide img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

img {
  border-radius: 50%;
  max-width: 60%;
  /* display: block;
  margin-left: auto;
  margin-right: auto; */
}

h1 {
    margin-top: 5%;
}

/* The element to apply the animation to */
hr {
  border-color:rgb(255, 70, 0);
  background:#FF4600;
  animation-name: expansion;
  animation-duration: 3s;
  width: 25%;
  /* font-size: 1.5em; */
}

@keyframes expansion {
  0%   {width:6.25%;}
  25%  {width:12.5%;}
  50%  {width:18.75%;}
  /* 75%  {width:22.00%;} */
  100% {width:25%;}
}



.title {
    font-weight: 200;
    font-style: italic;
}


.container {
    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 33.3% 33.3% 33.3%; */

    text-align: left;
    display: grid;
    padding: 2%;
    grid-template-columns: 1fr 2fr 1fr;
    grid-column-gap: 1%;
    height: 100vh;

}

h1 {
    color: #FF4600;
}

/* .leftSide {
    width: 50%;
    height: 100%;
    position: fixed;
    left: 25;
    /* border-collapse: collapse; */
/* } */

/* .middleSide {
    width: 50%;
    height: 100%;
    position: fixed;
    background-color: royalblue;
    border-collapse: collapse;
} */

.container p {
    display: block;
    width: 100%;
}

.container p {
    padding: 0;
    margin-top: 4%;
}
</style>