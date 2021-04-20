<template>
  <section class="moon-wrapper">
    <h1 class="moon-name">{{ moon.name.toUpperCase() }}</h1>
    <div class="moon-container">
      <moon-info class="moon-info" :moon="moon" />
      <div class="moon-image-fact-wrapper">
        <!-- <moon-image :moonName="moon.name" /> -->
        <!-- <moon-fact :moonFacts="moon.facts" /> -->
      </div>
    </div>
  </section>
</template>

<script>
import MoonInfo from './MoonInfo'
import MoonImage from './MoonImage';
import MoonFact from './MoonFact';

export default {
  name: 'Moon',
  components: {
    'moon-info': MoonInfo,
    'moon-image': MoonImage,
    'moon-fact': MoonFact,
  },
  props: ['moon'],
};
</script>

<style scoped>
.moon-wrapper {
  /* border: 1px solid darkgray; */
  margin: 4rem auto 2rem auto;
  width: 90%;
  max-width: 1024px;
}
.moon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 2rem;
  width: 100%;
  margin: 0rem;
}
.moon-image-fact-wrapper {
  flex-basis: 15rem;
  flex-grow: 1;
  align-items: center;
}
.moon-name {
  font-size: 2rem;
}
.moon-name-latin {
  font-family: times;
  font-size: 1.75rem;
  font-style: italic;
  opacity: 0.6;
  margin-left: 1rem;
}
@media screen and (max-width: 817px) {
  .moon-wrapper {
    width: 90%;
  }
  .moon-container {
    gap: 2rem 2rem;
  }
  .moon-image-fact-wrapper {
    order: -1;
  }
}
</style>
