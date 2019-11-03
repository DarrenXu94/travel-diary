<template>
  <div id="timeline-container">
    <div class="toggle-caret">
      <font-awesome-icon @click="show = !show" v-if="show" icon="caret-down" size="4x" />
      <font-awesome-icon @click="show = !show" v-else icon="caret-up" size="4x" />
    </div>
    <transition name="slide-fade">
      <div v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TimelineContainer",
  data() {
    return {
      show: false
    };
  }
};
</script>
<style lang="scss"  scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
  height: 250px;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in;
  height: 250px;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
  height: 0;
}

#timeline-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.toggle-caret {
  padding-bottom: 20px;
  :hover {
    color: $bg-hover;
  }
}
svg {
  cursor: pointer;
}
</style>