<template>
  <div id="app">
    <travel-map />
    <trip-information :id="selectedId" :selected="selected" />
    <timeline-container>
      <timeline :selected="selected" />
    </timeline-container>
  </div>
</template>

<script>
import Timeline from "./components/Timeline";
import TimelineContainer from "./components/TimelineContainer";
import TripInformation from "./components/TripInformation";
import TravelMap from "./components/TravelMap";

require("swiper/js/swiper.min.js");

import { mapActions } from "vuex";

export default {
  name: "app",
  components: { Timeline, TimelineContainer, TripInformation, TravelMap },
  created() {
    this.getAll();
  },
  data() {
    return {
      selectedId: null
    };
  },
  methods: {
    selected(id) {
      this.selectedId = id;
      this.getIndividual(id);
    },
    ...mapActions({
      getAll: "Trip/getAllTripsRequest",
      getIndividual: "Trip/selectIndividualTrip"
    })
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $primary;
}
</style>
