<template>
  <section class="moon-wrapper">
    <details class="moon-container">
      <summary class="moon-name">{{ moon.name.toUpperCase() }}</summary>
      <moon-info class="moon-info" :moon="moon" />
    </details>
  </section>
</template>

<script>
import MoonInfo from './MoonInfo';

export default {
  name: 'Moon',
  components: {
    'moon-info': MoonInfo,
  },
  props: ['moon'],
};
</script>

<style scoped>
.moon-wrapper {
  max-width: 1024px;
}
.moon-container {
  margin: 1rem 0 0 0;
}
.moon-name {
  font-size: 1.5rem;
}
.moon-info {
  padding: 1rem;
}
@media screen and (max-width: 817px) {
  .moon-container {
    background-color: rgb(24, 24, 24);
    padding: 1rem;
    border-radius: 1rem;
  }
}
</style>
