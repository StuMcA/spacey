<template>
  <div id="app">
    <header>
      <nav-bar :planets="planets"/>
    </header>
    <main>
      <solar-system-container :planets="planets"/>
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
  },
  data() {
    return {
      // This array should be replaced with data from the api
      planets: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: black;
}
body, header * {
  margin: 0;
}

</style>
