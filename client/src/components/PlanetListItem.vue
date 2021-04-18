<template>
  <li>
    <p @click="planetClicked">{{planet}}</p>
  </li>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: "planet-list-item",
    props: [
        "planet"
    ],
    methods: {
      planetClicked: function(){
        console.log(this.planet)
        eventBus.$emit('planet-selected', this.planet)
      }
    }
}
</script>

<style scoped>

li {
    list-style: none;
    margin-left: -40px;
}

li:hover {
    background: rgba(0, 0, 0, 0.067)
}
</style>