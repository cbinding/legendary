<template>
  <div class="container">
    <LegendBuilder/>  
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import LegendBuilder from "@/components/LegendBuilder.vue"

export default {
  name: "App",
  components: {
    LegendBuilder
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5px;  
}
.container { width: 95%;}

</style>
