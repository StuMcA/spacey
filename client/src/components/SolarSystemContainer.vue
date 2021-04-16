<template>
    <section>
        <button>Change view</button>
        <section id="solar-system">
            <div id="sun">Sun</div>
            <div id="mercury" class="planet">M</div>
            <div id="venus" class="planet">V</div>
            <div id="earth" class="planet">E</div>
            <div id="mars" class="planet">M</div>
            <div id="jupiter" class="planet">J</div>
            <div id="saturn" class="planet">S</div>
            <div id="uranus" class="planet">U</div>
            <div id="neptune" class="planet">N</div>
        </section>
    </section>
</template>

<script>
export default {
    name: "solar-system-container"

}
</script>

<style scoped>

button {
    margin: 20px auto 20px 20px;
}

.planet {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    text-align: center;
}



</style>