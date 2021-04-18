<template>
  <section class="planet-wrapper">
    <h1 class="planet-name">VENUS <span class="planet-name-latin">Latin: Vunus</span></h1>
    <div class="planet-container">
      <planet-info class="planet-info"/>
      <div class="planet-image-fact-wrapper">
        <planet-image />
        <planet-fact />
      </div>
    </div>
  </section>
</template>

<script>
import PlanetInfo from './PlanetInfo.vue';
import PlanetImage from './PlanetImage.vue';
import PlanetFact from './PlanetFact.vue';

export default {
  name: 'planet',
  components: {
    'planet-info': PlanetInfo,
    'planet-image': PlanetImage,
    'planet-fact': PlanetFact,
  },
  props: ['planet'],
};
</script>

<style scoped>
.planet-wrapper {
  /* border: 1px solid darkgray; */
  margin: 4rem auto 2rem auto;
  width: 90%;
  max-width: 1024px;
}
.planet-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 2rem;
  width: 100%;
  margin: 0rem;
}
.planet-image-fact-wrapper {
  flex-basis: 15rem;
  flex-grow: 1;
  align-items: center;
}
.planet-name {
  font-size: 2rem;
}
.planet-name-latin {
  font-family: times;
  font-size: 1.75rem;
  font-style: italic;
  opacity: 0.6;
  margin-left: 1rem;
}
@media screen and (max-width: 817px) {
  .planet-wrapper{
    width: 90%;
  }
  .planet-container {
    gap: 2rem 2rem;
  }
  .planet-image-fact-wrapper {
    order: -1;
  }
}
</style>
