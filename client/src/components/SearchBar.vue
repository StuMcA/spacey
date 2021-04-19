<template>
    <div id="search">
        <form autocomplete="off">
            <label for="search-text"><i class="fas fa-question-circle"></i></label>
            <input type="text" id="search-text" placeholder="Search here" @keyup="search" v-model="searchTerm">
        </form>

    </div>
  
</template>

<script>
import {eventBus} from '../main.js'
// import {library, icon} from '@fortawesome/fontawesome-svg-core'
export default {
    name: 'search-bar',
    props: [
        "planets"
    ],
    data() {
        return {
            searchTerm: "",
            filteredPlanets: [],
            showPlanetList: false
        }
    },
    methods: {
        search: function () {
            if(this.searchTerm === "") {
                this.filteredPlanets = []
            } else {
                this.filteredPlanets = this.planets.filter((planet) => {
                    return planet.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
                    planet.latin_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
                    ("" + planet.sumerian_name).toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
            });
            }
            eventBus.$emit("filtered-planets", this.filteredPlanets);
        }
    }

}
</script>

<style>

#search {
    border: 1px solid rgba(255, 255, 255, 0.341);
    border-radius: 30px;
    display: flex;
    width: 140px;
    height: 100%;
}


form {
    display: flex;
    padding-left: 10px;
}

input[type="text"] {
    color: white;
    border: none;
    background: transparent;
    margin: auto;
    width: 100px;
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

input[type="text"]:focus {
    outline: none;
}



</style>