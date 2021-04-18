<template>
    <ul>
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
        <li id="search">
            <label for="search-text">&#x1F50D;</label>
            <input type="text" id="search-text" placeholder="Search here">
        </li>
    </ul>
</template>

<script>
import PlanetList from '../components/PlanetList.vue'
import { eventBus } from '@/main.js'

export default {
    name: "nav-bar",
    components: {
        "planet-list": PlanetList
    },
    props: [
        "planets"
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

ul {
    display: flex;
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
    /* border: 1px solid black; */
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
    display: none;
    border: none;
    text-align: center;
    background-color: white;
}


#nav-bar-planet:hover #planet-list {
    display: block;
    z-index: 1;
}

#search {
    border: 1px solid black;
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