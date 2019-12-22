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
            <div
              class="swiper-slide"
              v-for="item in getAllTrips"
              v-bind:key="item.title"
              @click="log(item)"
            >
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
// import { getAllTrips } from "@/api/trip";
import { mapGetters } from "vuex";

export default {
  name: "Timeline",
  data() {
    return {
      // steps: getAllTrips(),
      swiper: null
    };
  },
  mounted() {
    this.createSwiper();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.createSwiper();
    },
    createSwiper() {
      const timelineWidth = 200;
      const slides = window.innerWidth / timelineWidth;
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: slides,
        grabCursor: true,
        paginationClickable: true,
        nextButton: ".next-slide",
        prevButton: ".prev-slide",
        breakpoints: {
          220: {
            slidesPerView: 2
          },
          440: {
            slidesPerView: 3
          },
          660: {
            slidesPerView: 4
          },
          880: {
            slidesPerView: 5
          },
          1000: {
            slidesPerView: 6
          },
          1220: {
            slidesPerView: 7
          }
        }
      });
    },
    onClickPrev() {
      this.swiper.slidePrev();
    },
    onClickNext() {
      this.swiper.slideNext();
    },
    log(item) {
      console.log("clicked", item);
      this.selected(item.id);
    }
  },
  props: {
    selected: Function
  },
  computed: {
    ...mapGetters("Trip", ["getAllTrips"])
  }
};
</script>

<style lang="scss" scoped>
.controls {
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  .arrows {
    margin: 10px;
    cursor: pointer;
    :hover {
      color: $bg-hover;
    }
  }
}

.container {
  background-color: rgba(255, 255, 255, 0.5);
}

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
  margin: auto;
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
  border-top: 4px solid $highlight;
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
  background-color: $highlight-light;
  border-radius: 25px;
  border: 4px solid $highlight;
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
</style>