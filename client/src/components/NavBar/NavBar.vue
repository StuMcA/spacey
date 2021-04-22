<template>
  <ul id="nav-bar">
    <li @click="homeClicked">
      <p>Home</p>
    </li>
    <li class="nav-bar-planet">
      <p @click="showPlanetList">Planets</p>
      <planet-list id="planet-list" :planets="planets" />
    </li>
    <div class="nav-bar-planet">
      <search-bar :planets="planets" :selectedPlanet="selectedPlanet" />
      <planet-list v-if="this.searchTerm" id="search-list" :planets="filteredPlanets" />
    </div>
  </ul>
</template>

<script>
import PlanetList from './NavBarPlanetList.vue';
import SearchBar from './NavBarSearch.vue';
import { eventBus } from '@/main.js';

export default {
  name: 'nav-bar',
  data() {
    return {
      displayPlanetList: false,
      searchTerm: '',
    };
  },
  components: {
    'planet-list': PlanetList,
    'search-bar': SearchBar,
  },
  props: ['planets', 'filteredPlanets', 'selectedPlanet'],
  methods: {
    homeClicked: function() {
      eventBus.$emit('home-selected');
    },

    showPlanetList: function() {
      eventBus.$emit('filtered-planets', this.planets);
      this.displayPlanetList = true;
      eventBus.$emit('show-planet-list', this.displayPlanetList);
    },
  },
  mounted() {
    eventBus.$on('search-term', (term) => (this.searchTerm = term));
  },
};
</script>

<style scoped>
#nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  z-index: 999;
  padding: 0.5rem;
}

li {
  display: flex;
  list-style: none;
  height: 2.5rem;
  width: 160px;
  color: white;
}

p {
  margin: 4px auto 0px auto;
}

li:hover,
label:hover {
  cursor: pointer;
}

li:hover {
  border-bottom: 1px solid white;
}

.nav-bar-planet {
  display: flex;
  flex-direction: column;
}

#planet-list {
  width: 120px;
  display: none;
  backdrop-filter: blur(3px);
}

.nav-bar-planet:hover #planet-list {
  display: block;
  z-index: 1;
}
</style>
