<template>
  <section class="planet-fact-wrapper">
    <h1>Facts</h1>
    <p>{{ planetFacts[currentFact] }}</p>
    <button class="next-fact-button" @click="nextFact">Next Fact</button>
  </section>
</template>

<script>
export default {
  name: 'PlanetFacts',
  props: ['planetFacts'],
  data() {
    return {
      currentFact: 0,
    };
  },
  methods: {
    nextFact: function() {
      if (this.currentFact < this.planetFacts.length - 1) {
        this.currentFact += 1;
      } else {
        this.currentFact = 0;
      }
    },
  },
  watch: {
    planetFacts: function() {
      this.currentFact = 0;
    },
  },
};
</script>

<style scoped>
h1 {
  display: none;
}
.planet-fact-wrapper {
  text-align: center;
}
.next-fact-button {
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: 0.15s;
}
.next-fact-button:hover {
  background-color: rgb(122, 13, 13);
  box-shadow: 0 0 2rem red;
}
.next-fact-button:active {
  background-color: rgb(255, 0, 0);
}
@media screen and (max-width: 817px) {
  .planet-fact-wrapper {
    border-radius: 1rem;
    background-color: rgb(26, 26, 26);
    padding: 1rem 1rem 0 1rem;
  }
  p {
    text-align: left;
  }
  h1 {
    display: block;
    text-align: left;
  }
  .next-fact-button {
    border: 0rem solid rgb(121, 121, 121);
    border-radius: 0.5rem;
    background-color: rgb(70, 70, 70);
    color: white;
    font-size: 0.8rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    transition: 0.15s;
  }
  .next-fact-button:hover {
    background-color: rgb(219, 40, 40);
    box-shadow: 0 0 0rem red;
  }
  .next-fact-button:active {
    background-color: rgb(122, 0, 0);
  }
}
</style>
