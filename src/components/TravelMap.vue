<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    :style="'position:absolute; height:' + height"
  >
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>
  </vl-map>
</template>
<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "TravelMap",
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      height: window.innerHeight + "px"
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const trips = this.getAllTrips;
      console.log(trips);
      const trips2 = this.allTrips;
      console.log(trips2);
    }
  },
  computed: {
    ...mapGetters("Trip", ["getAllTrips"]),
    ...mapState("Trip", ["allTrips"])
  }
};
</script>