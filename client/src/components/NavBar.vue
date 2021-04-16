<template>
    <ul>
        <li>
            <p>Home</p>
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

export default {
    name: "nav-bar",
    components: {
        "planet-list": PlanetList
    },
    props: [
        "planets"
    ]
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
}

p {
    margin: 4px auto;
}

li:hover, label:hover {
    cursor: pointer;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.149);
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

label {
    margin: auto;
    color: gray;
}

input[type="text"]:focus {
    outline: none;
}


</style>