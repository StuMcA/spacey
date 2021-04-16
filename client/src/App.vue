<template>
  <div id="app">
    <header>
      <nav-bar />
    </header>
    <body>
      <solar-system-container />
    </body>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'solar-system-container': SolarSystemContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
