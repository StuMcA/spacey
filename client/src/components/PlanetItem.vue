<template>
  <div :id="planet.toLowerCase()" class="planet">
      {{planet}}
  </div>
</template>

<script>
export default {
    name: "planet-item",
    props: [
        "planet"
    ]

}
</script>

<style>

</style>