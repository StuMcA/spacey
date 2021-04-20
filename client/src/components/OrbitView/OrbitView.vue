<template>
  <div class="wrapper">
    <h1>Orbital View</h1>
    <div class="orbit-view-container">
      <div class="sun"></div>
      <orbit-planet v-for="(planet, index) in planets" :key="index" :planet="planet" />
    </div>
    <p>4 seconds = 1 year</p>
  </div>
</template>

<script>
import OrbitPlanet from './OrbitPlanet.vue';

export default {
  name: 'OrbitView',
  props: ['planets'],
  components: {
    'orbit-planet': OrbitPlanet,
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  margin: 4rem auto 2rem auto;
  width: 90%;
  max-width: 1024px;
}
.orbit-view-container {
  position: relative;
  top: 20rem;
  left: 50%;
}
.sun {
  position: absolute;
  width: 40px;
  height: 40px;

  border-radius: 100%;
  background: rgb(255, 246, 233);
  box-shadow: 0 0 5px 2px rgb(255, 242, 223);

  top: -20px;
  left: -20px;
}
</style>
