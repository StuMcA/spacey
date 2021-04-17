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

<style>


</style>