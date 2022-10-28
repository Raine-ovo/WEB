<template>
  <!-- <userComp /> -->
  <!-- <searchComp />
  <shuttersComp /> -->
  <!-- <sideBarComp /> -->
  <!-- <frostedGlassComp /> -->
  <userCardComp />
</template>

<script>
// import userComp from './components/user.vue';
// import searchComp from './components/search.vue';
// import shuttersComp from './components/shutters.vue';
// import sideBarComp from './components/sideBar.vue';
// import frostedGlassComp from './components/frostedGlass.vue';
import userCardComp from './components/userCard.vue';

export default {
  name: 'App',
  components: {
    // userComp,
    // searchComp,
    // shuttersComp,
    // sideBarComp,
    // frostedGlassComp,
    userCardComp,
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
