<template>
  <ul>
    <li v-for="planet in planets" :key="planet.id" @click="planetClicked(planet)">
      <planet-image :planetName="planet.name" />
      <h2>{{ planet.name }}</h2>
    </li>
  </ul>
</template>

<script>
import { eventBus } from '../main.js';
import PlanetImage from './PlanetsPage/PlanetImage.vue';

export default {
  name: 'planet-list',
  props: ['planets'],
  components: {
    'planet-image': PlanetImage,
  },
  methods: {
    planetClicked: function(planet) {
      eventBus.$emit('filtered-planets', []);
      eventBus.$emit('show-planet-list', false);
      eventBus.$emit('planet-selected', planet.name);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 50px 0 0 0;
  list-style: none;
  width: 90%;
  margin: 40px auto;
  height: 100%;
  overflow: scroll;
}

h2 {
  margin: -60px 0 0 0;
}

li {
  cursor: pointer;
  padding: 1px 30px;
  border: 1px solid transparent;
  margin: 30px;
  padding: 0 20px 20px 20px;
  overflow: hidden;
}

li:hover {
  background-image: linear-gradient(to right, #ffffff2a 0%, transparent 20%, transparent 80%, #ffffff2a 100%);
  border: 1px solid rgba(255, 255, 255, 0.293);
}
</style>
