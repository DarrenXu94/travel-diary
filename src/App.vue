<template>
  <div id="app">
    <timeline-container>
      <timeline />
    </timeline-container>
  </div>
</template>

<script>
import Timeline from "./components/Timeline";
import TimelineContainer from "./components/TimelineContainer";
require("swiper/js/swiper.min.js");
export default {
  name: "app",
  components: { Timeline, TimelineContainer }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
