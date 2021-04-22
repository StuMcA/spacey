<template>
  <div class="solar-system-wrapper">
    <div class="linear-view-info">
      <h1>Scale View</h1>
      <p>All planets and the Sun are to scale</p>
      <p>Distances are not to scale</p>
    </div>

    <section id="solar-system">
      <div
        id="sun"
        class="planet"
        :style="{
          width: this.calcWidth() + 'vw',
          height: this.calcWidth() + 'vw',
        }"
      >
        <div class="hover-box">
          <h3>Sol</h3>
        </div>
      </div>
      <planet-item v-for="planet in planets" :key="planet.id" :planet="planet" />
    </section>
  </div>
</template>

<script>
import PlanetItem from './LinearPlanet.vue';
import OrbitView from '../OrbitView/OrbitView.vue';

export default {
  name: 'linear-view',
  props: ['planets', 'sun'],
  data() {
    return {
      isTopView: true,
    };
  },
  components: {
    'planet-item': PlanetItem,
    'orbit-view': OrbitView,
  },
  methods: {
    calcWidth: function() {
      return this.sun.equatorial_diameter_km / 10000;
    },
  },
};
</script>

<style>
.change-view-button {
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: black;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  transition: 0.15s;

  position: fixed;
  bottom: 5rem;
  left: 5rem;
  z-index: 999;
}
.change-view-button:hover {
  background-color: rgb(122, 13, 13);
  box-shadow: 0 0 2rem red;
}
.change-view-button:active {
  background-color: rgb(255, 0, 0);
}

.linear-view-info {
  position: fixed;
  top: 5rem;
  left: 5rem;
  z-index: 999;
  text-shadow: 0 0px 5px black;
}

.active {
  width: 250px !important;
  height: 250px !important;
  top: 100px;
  left: inherit;
  z-index: 999;
}

.active .hover-box {
  padding: 5px, 20px, 10px, 25px;
  display: block;
  right: 0;
  left: 0;
  transition: 1.5s ease 0s;
  width: 250px;
  position: relative;
  z-index: 10;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.176);
}

.active .hover-box * {
  display: block;
}

#solar-system {
  width: 225vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row-reverse;
  z-index: -999;
  background: url(../../assets/background.jpg) fixed;
  transform: scale(1.05);
  transform-origin: left;
}

.topView {
  transform: scale(0.25) translate(-55%, 0);
}

.planet {
  background-color: white;
  border: 0px solid transparent;
  border-radius: 50%;
  text-align: center;
  top: 50%;
  transition: 1s;
  cursor: pointer;
  transform: scale(0.95);
}

/* Planet animations */

#sun {
  background-color: rgb(255, 255, 0);
  box-shadow: 0 0 50px 100px rgb(249, 229, 16);
  animation: pulse 15s infinite, sunAnimation 10s infinite;
  background: url(../../assets/Planets/Sun.gif);
  filter: blur(3px) brightness(3);
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 221, 30, 0.123);
  }
  70% {
    box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}


#mercury {
  background-color: rgb(255, 197, 5);
  animation: mercury 8s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Mercury.jpg);
  background-size: 100% 100%;
}

#venus {
  background-color: rgb(188, 143, 58);
  animation: venusAnimation 8s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Venus.jpg);
  background-size: 100% 100%;
}

#earth {
  background-color: rgb(45, 45, 255);
  box-shadow: 0 0 20px 1px #0ff;
  animation: earthAnimation 14s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Earth.jpg);
  background-size: 100% 100%;
}


#mars {
  background: rgb(139, 14, 14);
  animation: marsAnimation 8s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Mars.jpg);
  background-size: 100% 100%;
}


#jupiter {
  background-color: rgb(255, 128, 0);
  animation: jupiter 12s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Jupiter.jpg);
  background-size: 100% 100%;
}

#saturn {
  background-color: rgb(255, 212, 94);
  animation: saturnAnimation 8s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Saturn.jpg);
  background-size: 100% 100%;
}


#uranus {
  background-color: rgb(218, 218, 255);
  animation: uranus 15s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Uranus.jpg);
  background-size: 100% 100%;
}

#neptune {
  background-color: rgb(80, 80, 203);
  animation: neptuneAnimation 10s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Neptune.jpg);
  background-size: 100% 100%;
}


#pluto {
  background-color: grey;
  animation: plutoAnimation 12s infinite;
  background: url(../../assets/Planets/CartoonPlanets/Pluto.jpg);
  background-size: 100% 100%;
}

</style>
