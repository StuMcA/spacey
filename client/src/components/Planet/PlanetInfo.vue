<template>
  <section class="planet-info-wrapper">
    <!-- NOTE I have hard coded the info just to test the layout -Alex -->
    <p>Position: Venus is the second planet from the Sun.</p>
    <p>Distance from Sun: 108,209,475 km (0.732 AU)</p>
    <p>Diameter at equator: 12,104 km</p>
    <p>Mass: 4.87 × 10<sup>24</sup> kg (0.82 Earths)</p>
    <p>Moons: Venus has no moons.</p>
    <p>Rings: Venus has no rings.</p>
    <p>Orbital period: 225 days</p>
    <p>Surface temperature: 462ºC</p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.planet-info-wrapper {
  border: 1px solid white;
  /* width: inherit; */
  flex-grow: 1;
  /* min-width: 25rem; */
}
p {
  margin-top: 1rem;
}
</style>
