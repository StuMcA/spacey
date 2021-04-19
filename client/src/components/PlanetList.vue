<template>
  <ul>
      <li v-for="(planet) in planets" :key="planet.id" >
          <planet-image :planetName="planet.name" />
          <h2>{{planet.name}}</h2>
      </li>
  </ul>
</template>

<script>
export default {
name: 'planet-list',
props: [
    'planets'
]
}
</script>

<style>

</style>