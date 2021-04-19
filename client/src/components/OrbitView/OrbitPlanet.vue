<template>
  <div class="orbit-animation">
    <div
      class="orbit-path"
      :style="{
        width: this.calcWidthHeight() + 'px',
        height: this.calcWidthHeight() + 'px',
        top: '-' + this.calcOffset() + 'px',
        left: '-' + this.calcOffset() + 'px',
        '-webkit-animation-duration': this.calcOrbitPeriod() + 's',
      }"
    >
      <div
        :style="{
          width: this.calcPlanetSize() + 'px',
          height: this.calcPlanetSize() + 'px',
          left: this.calcOffset() + 'px',
          top: '-' + this.calcPlanetOffset() + 'px',
        }"
        :id="planet.name.toLowerCase()"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrbitPlanet',
  props: ['planet'],
  methods: {
    calcWidthHeight: function() {
      return Math.sqrt(this.planet.orbit_distance_au) * 100;
    },
    calcOffset: function() {
      return this.calcWidthHeight() / 2;
    },
    calcOrbitPeriod: function() {
      return this.planet.orbit_period_days / 88;
    },
    calcPlanetSize: function() {
      return this.planet.equatorial_diameter_km / 4700 + 5;
    },
    calcPlanetOffset: function() {
      return this.calcPlanetSize() / 2;
    },
  },
};
</script>

<style>
.orbit-path {
  position: absolute;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 50%;
  /* -webkit-animation-duration: 5s; */
}
.orbit-path > div {
  border-radius: 50%;
  background: #fc3;

  position: relative;
}

.orbit-animation > div {
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -webkit-animation-name: orbit;
}
@-webkit-keyframes orbit {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
