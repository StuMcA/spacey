<template>
  <section class="planet-info-wrapper">
    <h1>Details</h1>
    <p>
      {{ planet.name }} is the {{ planet.position_from_sun
      }}<sup>{{ planet.position_from_sun % 10 == 1 ? 'st' : planet.position_from_sun % 10 == 2 ? 'nd' : planet.position_from_sun % 10 == 3 ? 'rd' : 'th' }}</sup> planet from the Sun.
      {{ planet.planet_intro }}
    </p>

    <p>{{ planet.name }} has {{ planet.moons.moon_list.length == 0 ? 'no moon' : planet.moons.moon_list.length == 1 ? '1 moon' : planet.moons.moon_list.length + ' moons' }}</p>

    <p>Distance from Sun: {{ planet.orbit_distance_km.toLocaleString() }} km ({{ planet.orbit_distance_au }} AU)</p>
    <p>Diameter at equator: {{ planet.equatorial_diameter_km.toLocaleString() }} km</p>
    <p>Mass: {{ planet.mass }}</p>
    <p>{{ planet.name }} has {{ planet.rings == 0 ? 'no ring' : planet.rings == 1 ? '1 ring' : planet.rings + ' rings' }}</p>
    <p>Orbital period: {{ planet.orbit_period_days.toLocaleString() }} days</p>
    <p>Surface temperature: {{ planet.surface_temperature_min_celcius }}ºC to {{ planet.surface_temperature_max_celcius }}ºC</p>
  </section>
</template>

<script>
export default {
  name: 'PlanetInfo',
  props: ['planet'],
};
</script>

<style scoped>
.planet-info-wrapper {
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
  .planet-info-wrapper {
    background-color: rgb(24, 24, 24);
    padding: 1rem;
    border-radius: 1rem;
    flex-basis: auto;
  }
  h1 {
    display: block;
  }
}
</style>
