<template>
  <div :id="planet.toLowerCase()" class="planet">
      <div class="hover-box">
          <h3>{{planet}}</h3>
          <p>Distance from sun</p>
      </div>
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

<style scoped>
.hover-box {
    width: 140px;
    display: none;
}

.planet:hover > .hover-box {
    background-color: rgba(0, 0, 0, 0.128);
    display: block;
    position: relative;
    top: -100px;

}

</style>