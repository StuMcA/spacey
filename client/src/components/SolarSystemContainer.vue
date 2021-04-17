<template>
    <section>
        <button>Change view</button>
        <section id="solar-system">
            <div id="sun" class="planet">
                <div class="hover-box">
                    <h3>The Sun</h3>
                </div>
            </div>
            <planet-item v-for="(planet, index) in planets" :key="index" :planet="planet" />
            <div id="end-of-solar-system" class="planet"></div>
        </section>
    </section>
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
    width: 140%;
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
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
}

#sun {
    right: 0%;
}

#mercury {
    right: 0.78%;

}

#venus {
    right: 1.5%;

}

#earth {
    right: 2.14%;

}

#mars {
    right: 3.21%;

}

#jupiter {
    right: 11.07%;

}

#saturn {
    right: 20.36%;

}

#uranus {
    right: 40.71%;

}

#neptune {
    right: 64.29%;

}

#pluto {
    right: 82.64%;
}

#end-of-solar-system {
    right: 140%;
}


</style>