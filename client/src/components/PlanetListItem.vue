<template>
  <li>
    <p>{{planet}}</p>
  </li>
</template>

<script>
export default {
    name: "planet-list-item",
    props: [
        "planet"
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