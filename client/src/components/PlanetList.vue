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
    width: inherit;
    position: relative;
    top: -24px;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.286);
}

li {
  color: rgb(255, 255, 255);
}


</style>