<template>
  <transition v-if="id" name="slide-fade">
    <div class="trip-info" v-if="!selectedTripLoading">
      <div class="top">
        <font-awesome-icon @click="close" icon="times" size="2x" />
      </div>
      <div class="body" v-if="getSelectedTrip">
        <h2>{{getSelectedTrip.title}}</h2>
        <p>{{getSelectedTrip.dateLabel}}</p>
        Trip information {{id}}
        <locations :locationArray="getSelectedTrip.locations" />
      </div>
    </div>
    <div class="trip-info" v-else>
      <div class="body">
        <p style="text-align: center">Loading trip</p>
        <spinner />
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Spinner from "@/components/utility/Spinner";
import Locations from "./TripInformationComponents/Locations";

export default {
  name: "TripInformation",
  components: {
    Spinner,
    Locations
  },
  props: {
    id: {
      type: String
    },
    selected: Function
  },
  methods: {
    close() {
      this.selected(null);
    }
  },
  computed: {
    ...mapGetters("Trip", ["getSelectedTrip"]),
    ...mapState("Trip", ["selectedTripLoading"])
  }
};
</script>

<style lang="scss" scoped>
.trip-info {
  width: 500px;
  height: 100%;
  background-color: beige;
  position: absolute;
  right: 0;

  .top {
    display: flex;
    justify-content: flex-end;
    svg {
      padding: 10px;
      cursor: pointer;
      :hover {
        color: $bg-hover;
      }
    }
  }

  .body {
    padding: 20px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>