<template>
  <ul>
    <planet-list-item v-for="(planet, index) in planets" :key="index" :planet="planet.name" />
  </ul>
</template>

<script>
import PlanetListItem from './PlanetListItem.vue'
export default {

data() {
    return {

    }
},
props: [
    "planets"
],
components: {
    'planet-list-item': PlanetListItem
}

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