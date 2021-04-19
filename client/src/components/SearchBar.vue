<template>
    <li id="search">
        <label for="search-text"><i class="fas fa-question-circle"></i></label>
        <input type="text" id="search-text" placeholder="Search here" @keyup="findPlanet" :model="searchTerm">
    </li>
  
</template>

<script>
// import {library, icon} from '@fortawesome/fontawesome-svg-core'
export default {
    name: 'search-bar',
    props: [
        "planets"
    ],
    data() {
        return {
            searchTerm: "".toLowerCase(),
            filteredPlanets: []
        }
    },
    methods: {
        search: function () {
            this.filteredPlanets = this.planets.filter((planet) => {
                return planet.name.toLowerCase().indexOf(this.search) > -1
            })
        }
    }

}
</script>

<style>

#search {
    border: 1px solid rgba(255, 255, 255, 0.341);
    border-radius: 30px;
}

input[type="text"] {
    border: none;
    background: transparent;
    margin: auto;
    width: 100px;
}

::placeholder {
    color: white;
}

label {
    margin: auto;
    color: gray;
}

input[type="text"]:focus {
    outline: none;
}



</style>