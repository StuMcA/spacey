<template>
  <div class="orbit-animation-container">
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
        :class="planet.name.toLowerCase()"
      >
        <div></div>
      </div>
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
      return this.planet.orbit_period_days / 73;
    },
    calcPlanetSize: function() {
      return Math.sqrt(this.planet.equatorial_diameter_km) / 15;
    },
    calcPlanetOffset: function() {
      return this.calcPlanetSize() / 2;
    },
  },
};
</script>

<style>
/* This sets up the ring for each orbit */
.orbit-path {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.301);
  border-radius: 100%;
}
/* Set the shape of the planet */
.orbit-path > div {
  border-radius: 100%;
  position: relative;
}

/* Animates all divs within the animation container - in this case the orbit path */
.orbit-animation-container > div {
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: orbit;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -webkit-animation-name: orbit;
}
/* webkit orbit animation counter-clockwise */
@-webkit-keyframes orbit {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}
/* orbit animation counter-clockwise */
@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* All colors for planets */
.mercury {
  background-color: rgb(211, 195, 195);
}
.venus {
  background-color: rgb(255, 214, 101);
}
.earth {
  background-color: rgb(0, 174, 255);
}
.mars {
  background-color: rgb(248, 95, 56);
}
.jupiter {
  background-color: rgb(177, 151, 104);
}
.saturn {
  background-color: rgb(236, 183, 148);
}
.saturn > div {
  position: relative;
  transform: rotate(-90deg);
  left: -1px;
  top: -8px;
  width: 20px;
  height: 35px;
  border-radius: 50%;
  background: none;
  border: 3px solid #8b784ec5;

  animation-name: ring;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 73.6s;
}
/* This animation keeps the ring level with the screen */
@keyframes ring {
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(90deg);
  }
}
.neptune {
  background-color: rgb(55, 65, 204);
}
.uranus {
  background-color: rgb(176, 255, 251);
}
.pluto {
  background-color: rgb(230, 218, 204);
}
</style>
