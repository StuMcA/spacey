<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets"/>
    </header>
    <main>
      <solar-system-container :planets="planets"/>
      <!-- uncomment to view planet info template -->
      <!-- <planet :planet="planets[1]"/> -->
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SolarSystemContainer from './components/SolarSystemContainer.vue'
import Planet from './components/Planet/Planet.vue'
import PlanetService from './services/PlanetService.js'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'solar-system-container': SolarSystemContainer,
    'planet': Planet
  },
  data() {
    return {
      planets: []
    }
  },
  methods: {
    fetchPlanets() {
      PlanetService.getPlanets()
      .then(planets => this.planets.push(...planets))
    }
  },
  mounted() {
    this.fetchPlanets();
  }
}
</script>

<style>
html{
  background-color: black;
  font-size: 20px;
  color: #dfdfdf;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body, header * {
  margin: 0;
}


</style>
