<template>
  <section class="planet-image-wrapper">
    <img :src="planetURL" alt="" />
  </section>
</template>

<script>
export default {
  name: 'PlanetImage',
  props: ['planetName'],
  data() {
    return {
      planetURL: null,
    };
  },
  mounted() {
    this.makeURL(this.planetName);
  },
  methods: {
    makeURL() {
      this.planetURL = require('../../assets/Planets/' + this.planetName + '.jpg');
    },
  },
  watch: {
    planetName: function() {
      this.makeURL();
    },
  },
};
</script>

<style scoped>
.planet-image-wrapper {
  align-items: center;
  max-width: 30rem;
  margin: auto;
}
img {
  width: 100%;
}
</style>
