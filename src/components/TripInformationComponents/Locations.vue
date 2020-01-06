<template>
  <div>
    <div v-for="location in lArray" :key="location">{{location.order}}</div>
  </div>
</template>

<script>
export default {
  name: "locations",
  props: {
    locationArray: Array
  },
  computed: {
    lArray: function() {
      console.log(this.locationArray);
      return [...this.locationArray].sort((a, b) => {
        return a.order - b.order;
      });
    }
  }
};
</script>