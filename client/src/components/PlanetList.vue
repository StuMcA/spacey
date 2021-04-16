<template>
  <ul>
    <planet-listitem v-for="(planet, index) in planets" :key="index" :planet="planet" />
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

li {
    list-style: none;
    margin-left: -40px;
}

li:hover {
    background: rgba(0, 0, 0, 0.067)
}

</style>