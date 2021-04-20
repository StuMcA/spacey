<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets" :filteredPlanets="filteredPlanets" />
    </header>
    <main>
      <solar-system-container v-if="!selectedPlanet" :planets="planets" />
      <!-- uncomment to view planet info template -->
      <planet v-if="selectedPlanet" :planet="selectedPlanet" />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SolarSystemContainer from './components/SolarSystemContainer.vue';
import Planet from './components/Planet/Planet.vue';
import PlanetService from './services/PlanetService.js';
import { eventBus } from '@/main.js';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'solar-system-container': SolarSystemContainer,
    planet: Planet,
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      filteredPlanets: []
    };
  },
  methods: {
    fetchPlanets() {
      PlanetService.getPlanets().then((solarSystem) => this.planets.push(...solarSystem[0].planets));
    },
  },
  mounted() {
    this.fetchPlanets();

    eventBus.$on('planet-selected', (planetName) => {
      this.selectedPlanet = this.planets.find((planet) => planet.name === planetName);
    });

    eventBus.$on('home-selected', () => {
      this.selectedPlanet = null
    });

    eventBus.$on('filtered-planets', (planets) => {
      this.filteredPlanets = planets;
    })

  },
};
</script>

<style>
html {
  background-color: black;
  font-size: 16px;
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
body,
header * {
  margin: 0;
}
</style>
