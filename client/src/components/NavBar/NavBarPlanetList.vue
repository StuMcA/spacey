<template>
  <ul>
    <planet-list-item v-for="(planet, index) in planets" :key="index" :planet="planet.name" />
  </ul>
</template>

<script>
import PlanetListItem from './NavBarPlanetListItem.vue';
export default {
  data() {
    return {};
  },
  props: ['planets'],
  components: {
    'planet-list-item': PlanetListItem,
  },
};
</script>

<style scoped>
ul {
  width: inherit;
  position: relative;
  flex-direction: column;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  margin-top: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

li {
  padding: 0.25rem;
}
</style>
