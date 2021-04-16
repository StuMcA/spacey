<template>
  <ul>
    <li v-for="(planet, index) in planets" :key="index">
        <p>{{planet}}</p>
    </li>
  </ul>
</template>

<script>
export default {

data() {
    return {

    }
},
props: [
    "planets"
]

}
</script>

<style scoped>

li {
    list-style: none;
    margin-left: -40px;
}

li:hover {
    background: rgba(0, 0, 0, 0.067)
}

</style>