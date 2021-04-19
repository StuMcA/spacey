<template>
    <ul id="nav-bar">
        <li>
            <p @click="homeClicked">Home</p>
        </li>
        <li id="nav-bar-planet">
            <p>Planets</p>
            <planet-list id="planet-list" :planets="planets"/>
        </li>
        <li>
            <p>Moons</p>

        </li>
            <search-bar :planets="planets"/>
            <planet-list v-if="filteredPlanets.length" id="search-list" :planets="filteredPlanets" />
    </ul>
</template>

<script>
import PlanetList from './PlanetList.vue'
import SearchBar from './SearchBar.vue'
import FilteredPlanets from "./FilteredPlanets"
import { eventBus } from '@/main.js'

export default {
    name: "nav-bar",
    components: {
        "planet-list": PlanetList,
        "search-bar": SearchBar,
        "filtered-planets": FilteredPlanets
    },
    props: [
        "planets",
        "filteredPlanets"
    ],
    methods: {
        homeClicked: function(){
        console.log("home clicked");
        eventBus.$emit('home-selected');
      }
    }
}
</script>

<style scoped>

#nav-bar {
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    vertical-align: middle;
}

li {
    display: flex;
    list-style: none;
    height: 30px;
    width: 160px;
    color: white;
}

p {
    margin: 4px auto 0px auto;
}

li:hover, label:hover {
    cursor: pointer;
}

li:hover {
    background-color: rgba(255, 255, 255, 0.514);
    color: black;
}

#nav-bar-planet {
    display: flex;
    flex-direction: column;
}

#planet-list {
    width: 120px;
    display: none;
}

#nav-bar-planet:hover #planet-list {
    display: block;
    z-index: 1;
}

#search-list {
    margin-left: auto;
    width: 120px;
}


</style>