<template>
  <div class="solar-system-wrapper">
    <button class="change-view-button" @click="toggleView">Change view</button>
    <section v-if="!isTopView" id="solar-system" :class="{ topView: isTopView }">
      <div id="sun" class="planet">
        <div class="hover-box">
          <h3>Sol</h3>
        </div>
      </div>
      <planet-item v-for="planet in planets" :key="planet.id" :planet="planet" />
      <div id="end-of-solar-system" class="planet"></div>
    </section>
    <orbit-view v-if="isTopView" :planets="planets" />
  </div>
</template>

<script>
import PlanetItem from './LinearPlanet.vue';
import OrbitView from '../OrbitView/OrbitView.vue';

export default {
  name: 'linear-view',
  props: ['planets'],
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
    toggleView: function() {
      console.log('I HAVE BEEN CLICKED');
      this.isTopView = !this.isTopView;
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

  position: absolute;
  bottom: 5rem;
  left: 5rem;
}
.change-view-button:hover {
  background-color: rgb(122, 13, 13);
  box-shadow: 0 0 2rem red;
}
.change-view-button:active {
  background-color: rgb(255, 0, 0);
}

/* .change-view-button {
    margin: 50px auto 20px 20px;
    padding: 10px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    border-radius: 4px;
    backdrop-filter: blur(3px);
    cursor: pointer;
}

.change-view-button:hover {
    background-color: rgba(255, 255, 255, 0.334);
} */

#solar-system {
  width: 110%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0px;
  display: flex;
  flex-direction: row-reverse;
  z-index: -1;
  background-image: url(../../assets/background.jpg);
}

/* background-color: rgb(0, 0, 0);
    z-index: -1; */

.topView {
  transform: scale(0.25) translate(-55%, 0);
}

.planet {
  background-color: white;
  border: 0px solid transparent;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transition: 1s;
  cursor: pointer;
}

#sun {
  right: 0%;
  background-color: rgb(255, 255, 0);
  width: 700px;
  height: 700px;
  box-shadow: 0 0 50px 100px rgb(249, 229, 16);
  transform: translate(600px, -346px);
  animation: pulse-red 15s infinite, Yellowy 10s infinite;
}

@keyframes pulse-red {
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

@-webkit-keyframes Yellowy {
  0% {
    background-color: rgb(254, 246, 17);
  }
  50% {
    background-color: rgb(255, 197, 5);
  }
  100% {
    background-color: rgb(254, 246, 17);
  }
}

#mercury {
  background-color: rgb(255, 197, 5);
  animation: mercury 8s infinite;
}

#venus {
  background-color: rgb(188, 143, 58);
  animation: Venus 8s infinite;
}

@-webkit-keyframes venus {
  0% {
    background-color: rgb(185, 156, 100);
  }
  50% {
    background-color: rgb(221, 181, 105);
  }
  100% {
    background-color: rgb(188, 143, 58);
  }
}

#earth {
  background-color: rgb(45, 45, 255);
  box-shadow: 0 0 20px 1px #0ff; /* outer cyan */
  animation: Bluey 14s infinite;
}

@-webkit-keyframes Bluey {
  0% {
    background-color: rgb(83, 86, 253);
  }
  25% {
    background-color: rgb(25, 165, 95);
  }
  50% {
    background-color: rgb(3, 86, 253);
  }
  75% {
    background-color: rgb(25, 165, 95);
  }
  100% {
    background-color: rgb(83, 86, 253);
  }
}

#mars {
  background: rgb(139, 14, 14);
  animation: mars 8s infinite;
}

@-webkit-keyframes mars {
  0% {
    background-color: rgb(168, 18, 18);
  }
  50% {
    background-color: rgb(202, 22, 22);
  }
  100% {
    background-color: rgb(168, 18, 18);
  }
}

#jupiter {
  background-color: rgb(255, 128, 0);
  animation: jupiter 12s infinite;
  box-shadow: inset 0 0 20px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.23);
}

/* @-webkit-keyframes jupiter {  
  0% { background-color: rgb(255, 128, 0); }
  50% { background-color: rgba(255, 128, 0, 0.795); }
  100% { background-color: rgb(255, 128, 0);}
} */

#saturn {
  background-color: rgb(255, 212, 94);
  animation: saturn 8s infinite;
  box-shadow: inset 0 0 20px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.23);
}

@-webkit-keyframes saturn {
  0% {
    background-color: rgb(255, 212, 94);
  }
  50% {
    background-color: rgb(255, 230, 162);
  }
  100% {
    background-color: rgb(255, 212, 94);
  }
}

#uranus {
  background-color: rgb(218, 218, 255);
  animation: uranus 15s infinite;
  box-shadow: inset 0 0 20px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.23);
}

/* @-webkit-keyframes uranus {  
  0% { background-color: rgb(218, 218, 255); }
  50% { background-color: rgba(218, 218, 255, 0.644); }
  100% { background-color: rgb(218, 218, 255);}
} */

#neptune {
  background-color: rgb(80, 80, 203);
  animation: neptune 10s infinite;
  box-shadow: inset 0 0 20px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 7px rgba(0, 0, 0, 0.23);
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.23);
}

@-webkit-keyframes neptune {
  0% {
    background-color: rgb(80, 80, 203);
  }
  50% {
    background-color: rgb(80, 80, 203);
  }
  100% {
    background-color: rgb(80, 80, 203);
  }
}

#pluto {
  background-color: grey;
  animation: pluto 12s infinite;
}

@-webkit-keyframes pluto {
  0% {
    background-color: rgb(143, 143, 143);
  }
  50% {
    background-color: rgb(201, 201, 201);
  }
  100% {
    background-color: rgb(143, 143, 143);
  }
}

#end-of-solar-system {
  right: 140%;
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
</style>
