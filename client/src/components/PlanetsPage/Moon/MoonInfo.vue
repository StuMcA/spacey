<template>
  <section class="moon-info-wrapper">
    <div class="moon-info">
      <p>
        {{ moon.name }} is the {{ moon.position }}<sup>{{ moon.position % 10 == 1 ? 'st' : moon.position % 10 == 2 ? 'nd' : moon.position % 10 == 3 ? 'rd' : 'th' }}</sup> moon from the planet
        {{ moon.moon_intro }}
      </p>

      <p>Distance from planet: {{ moon.orbit_distance_km.toLocaleString() }} km</p>
      <p>Diameter at equator: {{ moon.equatorial_diameter_km.toLocaleString() }} km</p>
      <p>Mass: {{ moon.mass }}</p>
      <p>Orbital period: {{ moon.orbit_period_in_days.toLocaleString() }} days</p>
      <p>Surface temperature: {{ moon.surface_temperature_min_celcius }}ºC to {{ moon.surface_temperature_max_celcius }}ºC</p>
    </div>
    <div class="moon-image">
      <img :src="moon.image_url[0]" :alt="'image of ' + moon.name" class="moon-image" />
    </div>
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
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
}
p {
  margin-top: 1rem;
}
.moon-image {
  width: auto;
  height: 15rem;
}
@media screen and (max-width: 817px) {
  .moon-info-wrapper {
    padding: 1rem;
    flex-wrap: wrap;
  }
  .moon-info {
    flex-shrink: 1;
  }
  .moon-image {
    order: -1;
    flex-grow: 5;
  }
}
</style>
