<template>
  <section class="planet-fact-wrapper">
    <h1>Random fact info</h1>
    <button class="next-fact-button">Next Fact</button>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.planet-fact-wrapper {
  border: 1px solid white;
  width: inherit;
  text-align: center;
}
.next-fact-button {
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 0.8rem;
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
</style>
