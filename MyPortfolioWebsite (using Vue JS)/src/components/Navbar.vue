<template>
  <div class="Navbar">

  <div class="HomeButton">
    Home
  </div>

  <div class="description">
  <p>Some short text to talk about myself
     very breifly 
  </p>
  </div>

<div class="Navbar-items">
  <!-- <ul> -->
    <router-link to="/Resume" tag="button" active-class="active" exact class="nav">
      <div class="link-container">
        Home
      </div>
    </router-link>
    <router-link to="/" tag="button" active-class="active" exact class="nav"> 
      <div class="link-container">
        About Me
      </div>
    </router-link>
    <router-link to="/Abilities" tag="button" active-class="active" exact class="nav">
      <div class="link-container">
        Projects
      </div>
    </router-link>
    <router-link to="/Skills" tag="button" active-class="active" exact class="nav">
      <div class="link-container">
        Skills
      </div>
    </router-link>
  <!-- </ul> -->
  </div>
</div>
</template>

<script>

export default {
    
}
</script>

<style scoped>

    .Navbar{
        padding: 5%;
    }
    button{
      color: yellow;
    }

    .HomeButton {
        text-align: left;
        color: white;
        font-size: 2em;
        margin-top: 10%;
        margin-left: auto;
        margin-right: auto;
    }

    .description {
        /* margin-block: 5%; */
        color: #999999;
        text-align: left;
    }

    .nav.active {
      color: #FF4600;
      font-size: 1.15em;
      transition-duration: 0.5s;
      transition-timing-function: ease;

    }

    .Navbar-items {
        display: flex;
        flex-direction: column;
        text-align: left;
        
        /* margin: auto; */
    }

    .Navbar-items > *{
       
        width: 25%;
        margin-top: 5%;
        border-radius: 10%;
        background: transparent; 
        margin-left: auto;
        margin-right: auto;
        text-decoration:none;
    }

    .HomeButton:hover {
          color: #FF4600;
    }

    .nav:hover {
          color: #FF4600;
    }

    .nav:focus{
        color: #FF4600;
        
    }

    .nav {
        color: white;
        cursor: pointer;
        font-weight: 400;
        font-size: 1em;
        margin-left: auto;
        margin-right: auto;
    }

    /* ul  {
        list-style-type: '\25B7';
        margin-inline-start: 5%;
        padding-inline-start: 5%;
        padding-block-end: 5%;
    } */

    /* ul li{
        padding-left: 5%;
    } */

    button {
     width:50%;
    }

</style>