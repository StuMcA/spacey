<template>
  <ul>
      <li v-for="(planet) in planets" :key="planet.id" @click="planetClicked(planet)">
          <planet-image :planetName="planet.name" />
          <h2>{{planet.name}}</h2>
      </li>
  </ul>
</template>

<script>
import {eventBus} from '../main.js'
import PlanetImage from './Planet/PlanetImage.vue'

export default {
name: 'planet-list',
props: [
    'planets'
],
components: {
    'planet-image': PlanetImage
},
methods: {
    planetClicked: function(planet){
    console.log(planet.name)
    eventBus.$emit('filtered-planets', [])
    eventBus.$emit('show-planet-list', false)
    eventBus.$emit('planet-selected', planet.name)
    }
}
}
</script>

<style scoped>
ul {
    margin: 50px 0 0 0;
    list-style: none;
    width: 90%;
    margin: 40px auto;
}

li {
    cursor: pointer;
    padding: 1px 30px;
    border: 1px solid transparent;
}

li:hover {
    background-image: radial-gradient(circle, #010101 50%, #ffffff2a 100%);
    border: 1px solid rgba(255, 255, 255, 0.293);
}

</style>