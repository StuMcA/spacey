<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets" :filteredPlanets="filteredPlanets" :selectedPlanet="selectedPlanet"/>
    </header>
    <main>
      <button v-if="isTopView && !selectedPlanet && !showPlanetList" class="change-view-button" @click="toggleViewLinear">Scale View</button>
      <button v-if="!isTopView && !selectedPlanet && !showPlanetList" class="change-view-button" @click="toggleViewOrbit">Orbit View</button>
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="component" v-if="!selectedPlanet && !showPlanetList" :planets='planets' :sun="sun"/>
        <planet v-if="selectedPlanet && !showPlanetList" :planet="selectedPlanet" />
        <planet-list-page v-if="showPlanetList" :planets="filteredPlanets"/>
      </transition>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import LinearView from './components/LinearView/LinearView.vue';
import Planet from './components/PlanetsPage/Planet.vue';
import OrbitView from './components/OrbitView/OrbitView.vue';
import PlanetService from './services/PlanetService.js';
import PlanetListPage from './components/PlanetListPage.vue';
import { eventBus } from '@/main.js';

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    LinearView,
    OrbitView,
    'planet': Planet,
    'planet-list-page': PlanetListPage,
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      filteredPlanets: [],
      showPlanetList: false,
      isTopView: true,
      component: OrbitView,
      sun: null,
    };
  },
  methods: {
    fetchSolarSystem() {
      PlanetService.getPlanets().then((solarSystem) => {
        this.planets = solarSystem[0].planets;
        this.sun = solarSystem[0].sun;
        });
    },
    toggleViewLinear: function() {
      this.isTopView = !this.isTopView;
      this.component = LinearView
    },
    toggleViewOrbit: function() {
      this.isTopView = true;
      this.component = OrbitView
    },
  },
  mounted() {
    this.fetchSolarSystem();
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>