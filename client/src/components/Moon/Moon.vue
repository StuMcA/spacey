<template>
  <section class="moon-wrapper">
    <details :open="openDetails" class="moon-container">
    <summary class="moon-name">{{ moon.name.toUpperCase() }}</summary>
      <moon-info class="moon-info" :moon="moon" />
    </details>
  </section>
</template>

<script>
import MoonInfo from './MoonInfo'
import MoonFact from './MoonFact';

export default {
  name: 'Moon',
  components: {
    'moon-info': MoonInfo,
    'moon-fact': MoonFact,
  },
  props: ['moon'],
  data() {
    return {
      openDetails: "false",
    }
  },
  watch: {
    moon: function(){
      this.openDetails = "false"
    }
  }
};
</script>

<style scoped>
.moon-wrapper {
  /* border: 1px solid darkgray; */
  /* margin: 4rem auto 2rem auto; */
  max-width: 1024px;
}
.moon-container {
  margin: 1rem 0 0 0;
}
.moon-name {
  font-size: 2rem;
}
.moon-info {
  padding: 1rem;
}
@media screen and (max-width: 817px) {
  .moon-container {
    /* border: 1px solid darkgray; */
    background-color: rgb(24, 24, 24);
    padding: 1rem;
    border-radius: 1rem;
  }
}
</style>
