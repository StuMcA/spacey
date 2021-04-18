<template>
  <div 
    :id="planet.name.toLowerCase()" 
    class="planet" 
    :class="{active: isActive}" @click="toggleActive"
    :style="{
        width: this.calcWidth(), 
        height: this.calcWidth(),
        right: this.calcDist(),
        transform: this.translate()
    }"
  >
      <div class="hover-box">
          <h3>{{planet.name}}<span class="hidden">{{planet.latin_name}}</span></h3>
          <p class="hidden">{{planet.orbit_distance_km.toLocaleString()}} km from the sun</p>
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
        },
        calcWidth: function() {
            return `${this.planet.equatorial_diameter_km/1000}px`
        },
        calcDist: function() {
            return `${this.planet.orbit_distance_km/75000000}%`
        },
        translate: function() {
            return `translate(-100px, -${this.planet.equatorial_diameter_km/2000}px)`
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
    color: rgb(255, 255, 255);
    position: relative;
    top: 60px;
    left: -60px;
}

.planet:hover {
    box-shadow: 0 0 30px gold;
}

.planet:hover > .hover-box {
    display: block;
}

.hidden {
    display: none;
}

h3 {
    width: fit-content;
}

span {
    font-size: 0.7em;
    font-style: italic;
    width: fit-content;
}


</style>