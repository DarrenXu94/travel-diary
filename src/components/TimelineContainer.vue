<template>
  <div>
    <button @click="show = !show">
      <font-awesome-icon v-if="show" icon="caret-down" size="2x" />
      <font-awesome-icon v-else icon="caret-up" size="2x" />
    </button>
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
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>