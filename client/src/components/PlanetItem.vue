<template>
  <div :id="planet.name.indexOf(' ') === -1 ? planet.name.toLowerCase() : planet.name.slice(0, planet.name.indexOf(' ')).toLowerCase()" class="planet">
      <div class="hover-box">
          <h3>{{planet.name}}</h3>
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

<style>
h3, p {
    margin: 0;
}

.hover-box {
    width: 140px;
    display: none;
}

.planet:hover > .hover-box {
    color: black;
    background-color: rgba(255, 255, 255, 0.423);
    display: block;
    position: relative;
    top: -60px;
    left: -60px;

}

</style>