<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets" :filteredPlanets="filteredPlanets" :selectedPlanet="selectedPlanet"/>
    </header>
    <main>
      <linear-view v-if="!selectedPlanet && !showPlanetList" :planets="planets" :sun="sun"/>
      <planet v-if="selectedPlanet && !showPlanetList" :planet="selectedPlanet" />
      <planet-list-page v-if="showPlanetList" :planets="filteredPlanets"/>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import LinearView from './components/LinearView/LinearView.vue';
import Planet from './components/PlanetsPage/Planet.vue';
import PlanetService from './services/PlanetService.js';
import PlanetListPage from './components/PlanetListPage.vue'
import { eventBus } from '@/main.js';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'linear-view': LinearView,
    'planet': Planet,
    'planet-list-page': PlanetListPage
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      filteredPlanets: [],
      showPlanetList: false,
      sun: null
    };
  },
  methods: {
    fetchPlanets() {
      PlanetService.getPlanets().then((solarSystem) => this.planets.push(...solarSystem[0].planets));
      PlanetService.getPlanets().then((solarSystem) => this.sun = solarSystem[0].sun);
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
  background-color: black;
  font-size: 18px;
  color: #dfdfdf;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
button:focus,
input:focus,
textarea:focus,
select:focus,
summary:focus {
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
