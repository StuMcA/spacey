<template>
    <ul>
        <li>Home</li>
        <li>Planets</li>
        <li>Moons</li>
        <li id="search">
            <label>&#x1F50D;</label>
            <input type="text" placeholder="Search here">
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
}

li {
    list-style: none;
}

#search {
    border: 1px solid black;
    border-radius: 30px;
    /* padding: 5px; */
    display: flex;
}

input[type="text"] {
    border: none;
    background: transparent;
    margin: auto;
}

label {
    padding: 0 10px;
    margin: auto;
    color: gray;
}

input[type="text"]:focus {
    outline: none;
}


</style>