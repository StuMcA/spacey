<template>
  <div :id="planet.name.indexOf(' ') === -1 ? planet.name.toLowerCase() : planet.name.slice(0, planet.name.indexOf(' ')).toLowerCase()" class="planet" :class="{active: isActive}" @click="toggleActive">
      <div class="hover-box">
          <h3>{{planet.name}}<span class="hidden">{{planet.latin_name}}</span></h3>
          <p class="hidden">{{planet.orbit_distance_km}} km from the sun</p>
          <p class="hidden">{{planet.mass}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "planet-item",
    data() {
        return {
            isActive: false
        }
    },
    props: [
        "planet"
    ],
    methods: {
        toggleActive: function() {
            this.isActive = !this.isActive
        }
    }

}
</script>

<style>
h3, p {
    margin: 0;
}

.hover-box {
    width: 140px;
    display: none;
    color: black;
    background-color: rgba(255, 255, 255, 0.423);
    position: relative;
    bottom: -60px;
    left: -80px;
}

.planet:hover {
    box-shadow: 0 0 30px gold;
    transition: 0.25s;
}

.planet:hover > .hover-box {
    display: block;
    transition: 1s;
}

.hidden {
    display: none;
}

span {
    font-size: 0.7em;
    font-style: italic;
}


</style>