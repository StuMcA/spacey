<template>
  <section class="planet-info-wrapper">
    <!-- NOTE I have hard coded the info just to test the layout -Alex -->
    <h1>Details</h1>
    <!-- <p>
      It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the
      naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while
      before dawn.
    </p> -->
    <p>
      {{ planet.name }} is the {{ planet.position_from_sun
      }}<sup>{{ planet.position_from_sun == 1 ? 'st' : planet.position_from_sun == 2 ? 'nd' : planet.position_from_sun == 3 ? 'rd' : 'th' }}</sup> planet from the Sun.
    </p>
    <p>{{planet.name}} has {{ planet.number_of_moons == 0 ? 'no moon' : planet.number_of_moons == 1 ? '1 moon' : planet.number_of_moons + ' moons' }}.</p>
    
    <p>Distance from Sun: {{ planet.orbit_distance_km.toLocaleString() }} km ({{ planet.orbit_distance_au }} AU)</p>
    <p>Diameter at equator: {{ planet.equatorial_diameter_km.toLocaleString() }} km</p>
    <p>Mass: {{ planet.mass }}</p>
    <p>{{planet.name}} has {{ planet.rings == 0 ? 'no ring' : planet.rings == 1 ? '1 ring' : planet.rings + ' rings' }}.</p>
    <p>Orbital period: {{planet.orbit_period_days.toLocaleString()}} days</p>
    <p>Surface temperature:  {{planet.surface_temperature_min_celcius}}ºC to {{planet.surface_temperature_max_celcius}}ºC </p>
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
