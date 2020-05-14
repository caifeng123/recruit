<template>
	<div class="banner">
		<img v-if="banners.length === 1" :src="banners[0]" alt="">
		<Swiper v-else :options="swiperOption">
			<SwiperSlide v-for="(image, index) in banners" :key="index"><img :src="image" alt=""></SwiperSlide>
		</Swiper>
		<div class="banner-pagination"></div>
	</div>
</template>

<script>
	// import 'swiper /dist/css/swiper.css'
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'banner',
		components:{
			Swiper,
			SwiperSlide
		},
		props:{
			banners:Array
		},
		data(){
			return{
				swiperOption:{
					autoplay:true,
					pagination: {
						el:'.banner-pagination',
						bulletClass:'bullet',
						bulletActiveClass:'bullet-active',
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.banner {height:360px; border-radius: 8px; overflow: hidden; position: relative; font-size: 0;
		img{width: 100%;height: 100%; border-radius:8px;}
		.banner-pagination { position: absolute; bottom: 22px; width: 100%; text-align: center; z-index: 10;
		.bullet { margin-left: 8px; display: inline-block; width:20px; height:4px; background:rgba(255,255,255,1); opacity: 0.5;
				&:first-child { margin-left: 0; }
		}
		.bullet-active { opacity: 1; }
		}
	}
</style>
