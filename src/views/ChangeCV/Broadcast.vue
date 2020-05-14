<template>
  <div class="broadcast">
    <img src="images/me/broad.png" alt="">
    <div class="broad-wrapper" style="overflow: hidden;">
      <Swiper v-if="list[0]" :options="swiperOption" class="broad-swiper">
        <SwiperSlide class="broad-item" v-for="(item, index) in list" :key="index"><p>{{item[type]}}</p></SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper,SwiperSlide } from 'vue-awesome-swiper'
import { getboardcast } from 'network/cv-request.js'
export default {
  name: 'Broadcast',
  props: {
    type: String
  },
  data() {
    return {
      list: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        direction: 'vertical'
      },
    }
  },
  components: {
		Swiper,SwiperSlide
  },
  created() {
		getboardcast(this.$store.state.projectId,'companyone').then(res => {
			if(res.data.code === 1) {
				this.list = res.data.data[0].history
				console.log(this.list)
			}
		})
  },
}
</script>

<style lang="scss" scoped>
.broadcast {
  padding: 0 20px;
  height:96px;
  background:rgba(255,230,185,1);
  border-radius:8px;
  font-size:24px;
  color:rgba(255,126,7,1);
  line-height:36px;
  // display: flex;
  // align-items: center;
  img {
    margin-top: 36px;
    width: 24px;
  }
  p {
    margin-left: 14px;
  }
  .broad-wrapper {
    height: 100%;
    display: inline-block;
    vertical-align: top;
  }
  .broad-swiper {
    height: 100%;
    .broad-item {
      display: flex;
      align-items: center;
    }
  }
}
</style>