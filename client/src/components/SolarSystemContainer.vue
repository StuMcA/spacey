<template>
    <div>
        <button @click="toggleView">Change view</button>
        <section id="solar-system" :class="{topView: isTopView}">
            <div id="sun" class="planet">
                <div class="hover-box">
                    <h3>Sol</h3>
                </div>
            </div>
            <planet-item v-for="(planet, index) in planets" :key="index" :planet="planet" />
            <orbit-item v-for="(planet, index) in planets" :key="index" :planet="planet" />
            <div id="end-of-solar-system" class="planet"></div>
        </section>
    </div>
</template>

<script>
import PlanetItem from './PlanetItem.vue'

export default {
    name: "solar-system-container",
    props: [
        "planets"
    ],
    data() {
        return {
            isTopView: false
        }
    },
    components: {
        "planet-item": PlanetItem,
    },
    methods: {
        toggleView: function() {
            this.isTopView = !this.isTopView
        }
    }

}
</script>

<style>

button {
    margin: 20px auto 20px 20px;
}

#solar-system {
    width: 110%;
    overflow: visible;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100px;
    display: flex;
    flex-direction: row-reverse;
    background-color: rgb(0, 0, 0);
    z-index: -1;
}

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
    box-shadow: 0 0 4000px #d34555;
    width: 1392px;
    height: 1392px;
    transform: translate(1392px, -696px);
    animation: pulse-red 15s infinite, Yellowy 10s infinite;
    box-shadow:
    0 0 140px 60px rgb(249, 229, 16); /* outer cyan */
}

@keyframes pulse-red {
	0% {
		box-shadow: 0 0 0 0 rgba(255, 221, 30, 0.221);
	}
	
	70% {
		box-shadow: 0 0 0 4000px rgba(255, 82, 82, 0);
	}
	
	100% {
		box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
	}
}

 @-webkit-keyframes Yellowy {  
  0% { background-color: rgb(254, 246, 17); }
  50% { background-color: rgb(255, 197, 5); }
  100% { background-color: rgb(254, 246, 17);}
}





#mercury {
    background-color: rgb(192, 115, 7);
}

#venus {
    background-color: rgb(188, 143, 58);
}

#earth {
    background-color: rgb(45, 45, 255);
    box-shadow:
    0 0 140px 5px #0ff; /* outer cyan */
}

#mars {
    background: rgb(139, 14, 14);
}

#jupiter {
    background-color: rgb(255, 128, 0);
}

#saturn {
    background-color: rgb(255, 212, 94);
}


#uranus {
    background-color: rgb(218, 218, 255);
}

#neptune {
    background-color: rgb(80, 80, 203);
}

#pluto {
    background-color: grey;
}

#end-of-solar-system {
    right: 140%;
}

.active {
    width: 250px !important;
    height: 250px !important;
    top: 100px;
    z-index: 999;
}

.active .hover-box {
    padding: 20px;
    display: block;
    right: 0;
    left: 0;
    transition: 0.5s ease 0s;
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