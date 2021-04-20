<template>
  <section class="moon-info-wrapper">
    <h1>Details</h1>
    <h1>hello</h1>
    <p>
      {{ moon.name }} is the {{ moon.position_from_sun}}<sup>{{ moon.position_from_sun == 1 ? 'st' : moon.position_from_sun == 2 ? 'nd' : moon.position_from_sun == 3 ? 'rd' : 'th' }}</sup> moon from the Sun.
      {{ moon.moon_intro }}
    </p>
    <p>{{ moon.name }} has {{ moon.number_of_moons == 0 ? 'no moon' : moon.number_of_moons == 1 ? '1 moon' : moon.number_of_moons + ' moons' }}.</p>

    <p>Distance from Sun: {{ moon.orbit_distance_km.toLocaleString() }} km ({{ moon.orbit_distance_au }} AU)</p>
    <p>Diameter at equator: {{ moon.equatorial_diameter_km.toLocaleString() }} km</p>
    <p>Mass: {{ moon.mass }}</p>
    <p>{{ moon.name }} has {{ moon.rings == 0 ? 'no ring' : moon.rings == 1 ? '1 ring' : moon.rings + ' rings' }}.</p>
    <p>Orbital period: {{ moon.orbit_period_days.toLocaleString() }} days</p>
    <p>Surface temperature: {{ moon.surface_temperature_min_celcius }}ºC to {{ moon.surface_temperature_max_celcius }}ºC</p>
  </section>
</template>

<script>
export default {
  name: 'MoonInfo',
  props: ['moon'],
};
</script>

<style scoped>
.moon-info-wrapper {
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
@media screen and (max-width: 817px) {
  .moon-info-wrapper {
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
