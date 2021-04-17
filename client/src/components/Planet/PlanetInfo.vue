<template>
  <section class="planet-info-wrapper">
    <!-- NOTE I have hard coded the info just to test the layout -Alex -->
    <h1>Details</h1>
    <p>
      It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the
      naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while
      before dawn.
    </p>
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
  /* border: 1px solid darkgray; */
  flex-grow: 2;
  flex-basis: 27rem;
}
p {
  margin-top: 1rem;
}
h1 {
  display: none;
}
@media screen and (max-width: 879px) {
  .planet-info-wrapper {
    /* border: 1px solid darkgray; */
    background-color: rgb(24, 24, 24);
    padding: 1rem;
    border-radius: 1rem;
  }
  h1 {
  display: block;
}
}
</style>
