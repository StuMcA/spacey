<template>
    <ul id="nav-bar">
        <li @click="homeClicked">
            <p>Home</p>
        </li>
        <li class="nav-bar-planet">
            <p @click="showPlanetList">Planets</p>
            <planet-list id="planet-list" :planets="planets"/>
        </li>
        <li>
            <p>Moons</p>

        </li>
        <div class="nav-bar-planet">
            <search-bar :planets="planets" :selectedPlanet="selectedPlanet"/>
            <planet-list v-if="this.searchTerm" id="search-list" :planets="filteredPlanets" />
        </div>
    </ul>
</template>

<script>
import PlanetList from './PlanetList.vue'
import SearchBar from './SearchBar.vue'
import { eventBus } from '@/main.js'

export default {
    name: "nav-bar",
    data() {
        return {
            displayPlanetList: false,
            searchTerm: ""
        }
    },
    components: {
        "planet-list": PlanetList,
        "search-bar": SearchBar
    },
    props: [
        "planets",
        "filteredPlanets",
        "selectedPlanet"
    ],
    methods: {
        homeClicked: function(){
        console.log("home clicked");
        eventBus.$emit('home-selected');
      },

      showPlanetList: function() {
          eventBus.$emit('filtered-planets', this.planets)
          this.displayPlanetList = true;
          eventBus.$emit('show-planet-list', this.displayPlanetList)
      }
    },
    mounted() {
        eventBus.$on('search-term', (term) => this.searchTerm = term)
    }
}
</script>

<style scoped>

#nav-bar {
    width: 100%;
    display: flex;
    position: fixed;
    top: 5px;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    vertical-align: middle;
    z-index: 999;
}

li {
    display: flex;
    list-style: none;
    height: 30px;
    width: 160px;
    color: white;
    text-shadow: 1px 1px 0 black;
    backdrop-filter: blur(10px);
}

p {
    margin: 4px auto 0px auto;
}

li:hover, label:hover {
    cursor: pointer;
}

li:hover {
    /* background-color: rgba(255, 255, 255, 0.514); */
    /* color: black; */
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

#search-list {
    text-shadow: 1px 1px 0 black;
}
</style>