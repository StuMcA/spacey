<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets" :filteredPlanets="filteredPlanets" :selectedPlanet="selectedPlanet"/>
    </header>
    <main>
      <solar-system-container v-if="!selectedPlanet && !showPlanetList" :planets="planets" />
      <!-- uncomment to view planet info template -->
      <planet v-if="selectedPlanet && !showPlanetList" :planet="selectedPlanet" />
      <planet-list v-if="showPlanetList" :planets="filteredPlanets"/>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import SolarSystemContainer from './components/SolarSystemContainer.vue';
import Planet from './components/Planet/Planet.vue';
import PlanetService from './services/PlanetService.js';
import PlanetList from './components/PlanetList.vue'
import { eventBus } from '@/main.js';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'solar-system-container': SolarSystemContainer,
    planet: Planet,
    'planet-list': PlanetList
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      filteredPlanets: [],
      showPlanetList: false
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
      this.selectedPlanet = null;
      this.showPlanetList = false;
    });

    eventBus.$on('filtered-planets', (planets) => {
      this.filteredPlanets = planets;
    });

    eventBus.$on('show-planet-list', (boolean) => {
      this.showPlanetList = boolean;
    })

  },
};
</script>

<style>
html {
  /* background-color: black; */
  font-size: 16px;
  color: #dfdfdf;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url(./assets/background.jpg);
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

::-webkit-scrollbar {
    display: none;
}
</style>
