<template>
  <transition v-if="id" name="slide-fade">
    <div class="trip-info">
      <div class="top">
        <font-awesome-icon @click="close" icon="times" size="2x" />
      </div>
      <div class="body">Trip information {{id}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "TripInformation",
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