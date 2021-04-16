<template>
    <section>
        <button>Change view</button>
        <section id="solar-system">
            <div id="sun" class="planet">Sun</div>
            <planet-item v-for="(planet, index) in planets" :key="index" :planet="planet" />
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
    width: 100%;
    height: 800px;
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
    right: 2%;
}

#mercury {
    right: 3.1%;

}

#venus {
    right: 4.1%;

}

#earth {
    right: 5%;

}

#mars {
    right: 6.5%;

}

#jupiter {
    right: 17.5%;

}

#saturn {
    right: 30.5%;

}

#uranus {
    right: 59%;

}

#neptune {
    right: 92%;

}


</style>