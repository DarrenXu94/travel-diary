<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="controls">
          <span class="arrows">
            <font-awesome-icon @click="onClickPrev" icon="caret-left" size="3x" />
          </span>
          <span class="arrows">
            <font-awesome-icon @click="onClickNext" icon="caret-right" size="3x" />
          </span>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper timeline">
            <div class="swiper-slide" v-for="item in steps" v-bind:key="item.title">
              <div class="timestamp">
                <span class="date">{{item.dateLabel}}</span>
              </div>
              <div class="status">
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
const data = [
  { dateLabel: "January 2017", title: "Gathering Information" },
  { dateLabel: "February 2017", title: "Planning" },
  { dateLabel: "March 2017", title: "Design" },
  { dateLabel: "April 2017", title: "Content Writing and Assembly" },
  { dateLabel: "May 2017", title: "Coding" },
  { dateLabel: "June 2017", title: "Testing, Review & Launch" },
  { dateLabel: "July 2017", title: "Maintenance" }
];
export default {
  name: "Timeline",
  data() {
    return {
      steps: data,
      swiper: null
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      //   pagination: ".swiper-pagination",
      slidesPerView: 4,
      grabCursor: true,
      paginationClickable: true,
      nextButton: ".next-slide",
      prevButton: ".prev-slide"
    });
  },
  methods: {
    onClickPrev() {
      this.swiper.slidePrev();
    },
    onClickNext() {
      this.swiper.slideNext();
    }
  }
};
</script>

<style lang="scss" scoped>
// @import "@/scss/variables.scss";
.controls {
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  .arrows {
    margin: 10px;
    cursor: pointer;
    :hover {
      color: $bg-classroom;
    }
  }
}
</style>

<style scoped>
.timeline {
  /* margin: 50px 0; */
  list-style-type: none;
  display: flex;
  padding: 0;
  text-align: center;
}
.timeline li {
  transition: all 200ms ease-in;
}
.timestamp {
  width: 200px;
  margin-bottom: 20px;
  /* padding: 0px 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 100;
}
.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 4px solid #3e70ff;
  position: relative;
  transition: all 200ms ease-in;
}

.status span {
  font-weight: 600;
  padding-top: 20px;
}
.status span:before {
  content: "";
  width: 25px;
  height: 25px;
  background-color: #e8eeff;
  border-radius: 25px;
  border: 4px solid #3e70ff;
  position: absolute;
  top: -15px;
  left: 42%;
  transition: all 200ms ease-in;
}
.swiper-control {
  text-align: right;
}

.swiper-container {
  width: 100%;
  /* height: 250px; */
  /* margin: 50px 0; */
  overflow: hidden;
  padding: 0 20px 30px 20px;
}
.swiper-slide {
  width: 200px;
  text-align: center;
  font-size: 18px;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
</style>