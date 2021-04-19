<template>
  <ul>
      <li v-for="(planet, index) in planets" :key="index" :planet="planet.name">{{planet.name}}</li>
  </ul>


</template>

<script>
export default {
    name: "filteredPlanets",
    props: ["planets"]

}
</script>

<style scoped>

ul {
    position: relative;
    top: -30px;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;
    background-color: white;
}

li {
  color: black;
}

</style>