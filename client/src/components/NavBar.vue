<template>
    <ul>
        <li>Home</li>
        <li>Planets</li>
        <li>Moons</li>
        <li id="search">
            <label for="search-text">&#x1F50D;</label>
            <input type="text" id="search-text" placeholder="Search here">
        </li>
    </ul>
</template>

<script>


export default {
    components: {

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
    justify-content: center;
    list-style: none;
    height: 30px;
    width: 160px;
    align-items: center;
}

li:hover, label:hover {
    cursor: pointer;
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