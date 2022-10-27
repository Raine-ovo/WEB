<template>
  <!-- <shuttersComp /> -->
  <!-- <searchComp /> -->
  <userComp />
  <!-- <searchComp />
  <shuttersComp /> -->
</template>

<script>
import userComp from './components/user.vue';
// import searchComp from './components/search.vue';
// import shuttersComp from './components/shutters.vue';

export default {
  name: 'App',
  components: {
    userComp,
    // searchComp,
    // shuttersComp,
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg,#f3e7e9,#e3eeff);
}
</style>
