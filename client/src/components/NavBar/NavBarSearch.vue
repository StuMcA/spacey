<template>
  <div id="search">
    <form autocomplete="off" @submit.prevent>
      <label for="search-text"><i class="fas fa-question-circle"></i></label>
      <input type="text" id="search-text" placeholder="Search here" @keyup="search" v-model="searchTerm" />
    </form>
  </div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  name: 'search-bar',
  props: ['planets', 'selectedPlanet'],
  data() {
    return {
      searchTerm: '',
      filteredPlanets: [],
      showPlanetList: false,
      planet: this.selectedPlanet,
    };
  },
  methods: {
    search: function(event) {
      if (event.keyCode === 13) {
        if (this.filteredPlanets.length === 1) {
          this.showPlanetList = false;
          this.planet = this.filteredPlanets[0].name;
        } else {
          this.showPlanetList = true;
        }
        eventBus.$emit('show-planet-list', this.showPlanetList);
        eventBus.$emit('planet-selected', this.planet);
        this.searchTerm = '';
      } else {
        this.filteredPlanets = this.planets.filter((planet) => {
          return (
            planet.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
            planet.latin_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
            ('' + planet.sumerian_name).toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
          );
        });
      }
      eventBus.$emit('search-term', this.searchTerm);
      eventBus.$emit('filtered-planets', this.filteredPlanets);
    },
    searchSubmit: function() {},
  },
};
</script>

<style>
#search {
  border: 1px solid rgba(255, 255, 255, 0.341);
  border-radius: 30px;
  display: flex;
  width: 160px;
  height: 30px;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.32);
}

form {
  display: flex;
  padding-left: 10px;
}

#search:hover {
  background-color: rgba(255, 255, 255, 0.267);
  color: white;
  cursor: pointer;
}

#search:hover ::placeholder {
  color: white;
}

input[type='text'] {
  color: white;
  border: none;
  background: transparent;
  margin: auto;
  width: 160px;
}

::placeholder {
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.1em;
}

label {
  margin: auto;
  color: gray;
}

input[type='text']:focus {
  outline: none;
}
</style>
