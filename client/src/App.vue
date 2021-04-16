<template>
  <div id="app">
    <header>
      <nav-bar />
    </header>
    <main>
      <solar-system-container />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SolarSystemContainer from './components/SolarSystemContainer.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'solar-system-container': SolarSystemContainer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
