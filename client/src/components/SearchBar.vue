<template>
    <li id="search">
        <label for="search-text"><i class="fas fa-question-circle"></i></label>
        <input type="text" id="search-text" placeholder="Search here">
    </li>
  
</template>

<script>
export default {
    name: 'search-bar'

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