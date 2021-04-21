<template>
  <div class="wrapper">
    <h1>Orbital view of our Solar System</h1>
    <div class="orbit-view-container">
      <div class="sun"></div>
      <orbit-planet v-for="(planet, index) in planets" :key="index" :planet="planet" />
      <div class="background-glow"></div>
    </div>
    <p>5 seconds = 1 year</p>
    <p>Planet sizes and distances to scale</p>
    <p>Sun not to scale</p>
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
/* Set size for all emlements on the page */
.wrapper {
  position: relative;
  margin: 4rem auto 2rem auto;
  width: 90%;
  max-width: 1024px;
}
/* Possition orbital view on the page relative to the container */
.orbit-view-container {
  position: relative;
  top: 20rem;
  left: 50%;
}
/* Hard-coded Sun with glow animation */
.sun {
  position: relative;
  width: 20px;
  height: 20px;

  border-radius: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 15px 5px rgba(255, 243, 224, 0.582);

  top: -10px;
  left: -10px;

  animation-name: sun;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
}
/* Pulsing blue background glow */
.background-glow {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 1800px 350px rgba(24, 51, 141, 0.301);
  top: -1.7rem;
  left: -10px;
  z-index: -1;

  animation-name: background-glow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 20s;
}

/* Keyframes for Sun animation */
@keyframes sun {
  0% {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 234, 48, 0.7);
  }
  100% {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);
  }
}
/* Keyframes for background animation */
@keyframes background-glow {
  0% {
    box-shadow: 0 0 1800px 350px rgba(24, 51, 141, 0.5);
    transform: rotate(0deg);
  }
  50% {
    box-shadow: 0 0 1800px 400px rgba(19, 18, 124, 0.7);
  }
  100% {
    box-shadow: 0 0 1800px 350px rgba(24, 51, 141, 0.5);
    transform: rotate(-180deg);
  }
}
</style>
