<template>
  <div
    :id="planet.name.toLowerCase()"
    class="planet"
    :class="{ active: isActive }"
    @click="toggleActive"
    :style="{
      width: this.calcWidth() + 'vw',
      height: this.calcWidth() + 'vw',
    }"
  >
    <div class="hover-box">
      <h3>
        {{ planet.name }}<span class="hidden">{{ planet.latin_name }}</span>
      </h3>
      <p class="hidden">{{ planet.orbit_distance_km.toLocaleString() }} km from the sun</p>
      <p class="hidden">{{ planet.mass }}</p>
    </div>
    <div id="ring-container" v-if="planet.name === 'Saturn'">
      <div id="rings"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'planet-item',
  data() {
    return {
      isActive: false,
    };
  },
  props: ['planet'],
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive;
    },
    calcWidth: function() {
      return this.planet.equatorial_diameter_km / 10000;
    },
    translate: function() {
      return `translate(-100px, -${this.calcWidth() / 2}px)`;
    },
  },
};
</script>

<style>
h3,
p {
  margin: 0;
}

.hover-box {
  width: 250px;
  display: none;
  color: rgb(255, 255, 255);
  position: relative;
  top: 100%;
  cursor: pointer;
  z-index: 999;
}

.planet:hover {
  box-shadow: 0 0 30px gold;
  z-index: 999;
  transition: 0.3s linear 0s;
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

#ring-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: -2px;
}

#rings {
  background: url(../../assets/Planets/SaturnRing.png);
  background-size: 100% 100%;
  height: 100%;
  width: 275%;
  margin-right: 4%;
  z-index: 9999;
  pointer-events: none;
}


</style>
