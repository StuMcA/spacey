<template>
    <div>
        <button>Change view</button>
        <section id="solar-system">
            <div id="sun" class="planet">
                <div class="hover-box">
                    <h3>Sol</h3>
                </div>
            </div>
            <planet-item v-for="(planet, index) in planets" :key="index" :planet="planet" />
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
    components: {
        "planet-item": PlanetItem,
    }

}
</script>

<style>

button {
    margin: 20px auto 20px 20px;
}

#solar-system {
    width: 110%;
    overflow: scroll;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    background-color: black;
    z-index: -1;
}

.planet {
    background-color: white;
    border: 1px solid black;
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
    width: 1392px;
    height: 1392px;
    transform: translate(1292px, -696px);
}

#mercury {
    right: 0.78%;
    background-color: rgb(192, 115, 7);
}

#venus {
    right: 1.5%;
    background-color: rgb(188, 143, 58);
}

#earth {
    right: 2.14%;
    background-color: rgb(45, 45, 255);
}

#mars {
    right: 3.21%;
    background: rgb(139, 14, 14);
}

#jupiter {
    right: 11.07%;
    background-color: rgb(255, 128, 0);
}

#saturn {
    right: 20.36%;
    background-color: rgb(255, 212, 94);
}

#uranus {
    right: 40.71%;
    background-color: rgb(218, 218, 255);
}

#neptune {
    right: 64.29%;
    background-color: rgb(80, 80, 203);
}

#pluto {
    right: 82.64%;
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
    /* height: 50%; */
    z-index: 10;
    text-align: left;
}

.active .hover-box * {
    display: block;
}


</style>