<template>
  <div class="skills">

      <div class="header">
      <h1>Something to write Here</h1>
      <!-- <p class="title">B.Sc. in Computer Engineering</p> -->
      <hr noshade>
      </div>

      <div class="columnHeader">
        <div class="L"><h2>Languages</h2></div>
        <div class="M"><h2>General</h2></div>
        <div class="R"><h2>Platforms</h2></div>
      </div>
      
    <div class="container">

      <div class="left">

        <li>
        <h3>C</h3> <span class="bar"> <span class="C"></span></span>
        </li>

        <li>
        <h3>JAVA</h3><span class="bar"><span class="java"></span></span>
        </li>

        <li>
        <h3>Python</h3><span class="bar"><span class="python"></span></span>
        </li>

        <li>
        <h3>HTML & CSS</h3><span class="bar"><span class="html5"></span></span>
        </li>

        <li>
        <h3>Assembly</h3><span class="bar"><span class="cpp"></span></span>
        </li>

        <li>
        <h3>Javascript</h3><span class="bar"><span class="js"></span></span>
        </li>
      </div>

      <div class="middle">
        
            <li>
            <h3>Electronics</h3><span class="bar"><span class="electronics"></span></span>
            </li>

            <li>
            <h3>Fabrication Experience</h3><span class="bar"><span class="fab"></span></span>
            </li>
          
            <li>
            <h3>Mechanical Design</h3><span class="bar"><span class="sw"></span></span>
            </li>

            <li>
            <h3>Arduino UNO/Mega/Nano</h3><span class="bar"><span class="python"></span></span>
            </li>

            <li>
            <h3>Arduino UNO/Mega/Nano</h3><span class="bar"><span class="python"></span></span>
            </li>
      </div>

      <div class="right">

        <li>
        <h3>Microsoft Office</h3><span class="bar"><span class="C"></span></span>
        </li>

        <li>
        <h3>Unity Game Engine</h3><span class="bar"><span class="java"></span></span>
        </li>

        <li>
        <h3>Android Studio</h3><span class="bar"><span class="html5"></span></span>
        </li>

        <li>
        <h3>IntelliJ | Visual Studio</h3><span class="bar"><span class="python"></span></span>
        </li>

        <li>
        <h3>MATLAB</h3><span class="bar"><span class="css"></span></span>
        </li>

        <li>
        <h3>MPLABX</h3><span class="bar"><span class="js"></span></span>
        </li>
      </div>
    </div>

    <div class="columnHeader2">
      <div class="cent">
        <div><h2>MX7cK Board (PIC32)</h2>
         <span class="bar"><span class="C"></span></span>
        </div>
        <div><h2>Raspberry Pi</h2>
          <span class="bar"><span class="C"></span></span>
        </div>
        <div><h2>ARM TM4C1294</h2>
           <span class="bar"><span class="C"></span></span>
        </div>
        <div><h2>Arduino UNO/Mega/Nano</h2>
           <span class="bar"><span class="C"></span></span>
        </div>
      </div>
    </div>

    <div class="columnHeader2">
      <div class="control">
            <img src="../assets/mx7ck.jpg"  alt="MX7cK Board">
            <img src="../assets/raspi.jpg" alt="Rasperry Pi Board">
            <img src="../assets/TM4C.jpg" alt="TM4C Board">
            <img src="../assets/arduino.jpg"  alt="Arduino Board">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

*{
  list-style: none;
  padding: 0;
}

.columnHeader2 .control {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1%;
    margin: 1% 3% 1% 3%;
} 

.pictures  {
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 1fr;
    height: 50;
}

.columnHeader {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1%;
}

.columnHeader2 .cent {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1%;
    margin: 1% 3% 1% 3%;
}

img {
  border-radius: 30%;
  width: 75%;
  margin: auto;
}

.container .middle  {
    display: grid;
    text-align: middle;
}

.container .left  {
    display: grid;
    text-align: middle;
}

.skills
h3 {
  margin: 3px;
}

hr {
  border-color:#FF4600;
  background:#FF4600;
  animation-name: expansion;
  animation-duration: 3s;
  width: 25%;
  /* font-size: 1.5em; */
}

body {
  background: #252929;
}

/* .container .left {
  display: block;
  margin: 0 auto;
  width: 75%;
}

.container .right {
  display: block;
  margin: 0 auto;
  width: 75%;
} */

.container {
      display: grid;
      text-align: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 5px;
      /* width: 70%; */  
}

.container li {
  margin: 0;
}

/* creation of a bar */
.bar { 
  background:  rgba(255, 70, 0,0.2);
  width: 80%;
  display: block;
  height: 10px;
  border: 0.2px solid rgba(0,0,0, 0.3); /* try to // */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 70, 0,0.7);
  margin: auto; 
}

.bar span{
  height: 11px;
  float: left;
  background: rgba(255, 70, 0, 0.9);
}

.columnHeader2 .bar { 
  background:  rgba(255, 70, 0,0.2);
  width: 80%;
  display: block;
  height: 10px;
  border: 0.2px solid rgba(0,0,0, 0.3); /* try to // */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 70, 0,0.7); 
  margin: auto;
}

.columnHeader2 .bar span{
  height: 11px;
  float: left;
  background: rgba(255, 70, 0, 0.9);
}

@keyframes python {
  0% {
    width: 0%;
  }
  100% {
    width: 70% ;
  }
}

.python {
  animation: python 2s ease-in-out;
  width: 70%;
}

@keyframes html5 {
  0% {
    width: 0%;
  }
  100% {
    width: 70% ;
  }
}

.html5 {
  animation: html5 2s ease-in-out;
  width: 70%;
}

@keyframes C {
  0% {
    width: 0%;
  }
  100% {
    width: 50% ;
  }
}

.C {
  animation: C 2s ease-in-out;
  width: 50%;
}

@keyframes java {
  0% {
    width: 0%;
  }
  100% {
    width: 40% ;
  }
}

.java {
  animation: java 2s ease-in-out;
  width: 40%;
}

@keyframes css {
  0% {
    width: 0%;
  }
  100% {
    width: 40% ;
  }
}

.css {
  animation: css 2s ease-in-out;
  width: 40%;
}

@keyframes cpp {
  0% {
    width: 0%;
  }
  100% {
    width: 40% ;
  }
}

.cpp {
  animation: cpp 2s ease-in-out;
  width: 40%;
}

@keyframes js {
  0% {
    width: 0%;
  }
  100% {
    width: 84% ;
  }
}

.js {
  animation: js 2s ease-in-out;
  width: 84%;
}

@keyframes fab {
  0% {
    width: 0%;
  }
  100% {
    width: 70% ;
  }
}

.fab {
  animation: fab 2s ease-in-out;
  width: 70%;
}

@keyframes electronics {
  0% {
    width: 0%;
  }
  100% {
    width: 90% ;
  }
}

.electronics {
  animation: electronics 2s ease-in-out;
  width: 90%;
}

@keyframes sw {
  0% {
    width: 0%;
  }
  100% {
    width: 90% ;
  }
}

.sw {
  animation: sw 2s ease-in-out;
  width: 90%;
}


</style>