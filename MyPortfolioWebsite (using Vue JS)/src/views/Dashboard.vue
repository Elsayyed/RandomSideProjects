<template>
  <div class="navbar">
    <Navbar/>
  <div class="Content"> 
      <router-view/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.navbar {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #252929;
  height: 100vh;
}

.Content{
  background-color: white;
  /* border-radius: %; */
  margin: 0;
  padding: 0;
  height: 100vh;
}


</style>
