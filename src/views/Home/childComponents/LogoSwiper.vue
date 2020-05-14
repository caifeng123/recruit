<template>
	<div class="LoginSwiper">
		<Swiper class="hot-swiper" :options="swiperOption">
			<SwiperSlide class="group" v-for="(row, index) in list" :key="index">
				<a v-for="(co, index2) in row" :key="index2" :to="`/company/${co.name}`"><img :src="co.image"></a>
				<!-- <router-link v-for="(co, index2) in row" :key="index2" :to="`/company/${co.name}`"><img :src="co.image"></router-link> -->
			</SwiperSlide>
		</Swiper>
		<div class="hot-pagination"></div>
	</div>
</template>

<script>
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
	export default{
		name:'LoginSwiper',
		props:{
			hotCo:{
				type:Array,
				default(){
					return []
				}
			},
			row: {
				type: Number,
				default: 1
			},
		},
		components:{
			Swiper,SwiperSlide
		},
		data(){
			return{
				swiperOption: {
					slidesPerView : 4,
					pagination: {
						el: '.hot-pagination',
						bulletClass : 'hot-bullet',
						bulletActiveClass: 'hot-bullet-active',
					},
				},
			}
		},
		created() {
			let row=this.row
			let hotCo=this.hotCo
			let len=Math.ceil(hotCo.length/row)
			var mylist=Array.from(new Array(len),()=>new Array(row))
			for(var i=0,k=0;i<len;i++) {
				for(let j=0;j<row;j++){
					mylist[i][j]=hotCo[k]
					k += 1
				}
			}
			if(!mylist[len-1][row-1]){
				mylist[len-1].splice(row-1)
			}
			
			console.log(mylist)
			this.list=mylist
		}
	}
</script>

<style lang="scss">
	.LoginSwiper{
		.hot-swiper {
			margin: 16px auto 0; width: 688px; overflow: visible !important;
			img { display: block; width:160px; height:160px; background:rgba(255,255,255,1); box-shadow:0px 8px 32px 0px rgba(0,0,0,0.1); border-radius:8px;}
			a:nth-child(2) {display: block; margin-top: 16px}
		}
		.hot-pagination {
			margin: 40px auto 0; width:160px; height:8px; background:rgba(229,229,229,1); border-radius:4px; display: flex;
			.hot-bullet { flex: 1; }
			.hot-bullet-active { background:rgba(26,72,156,1); border-radius:4px; }
		}
	}
	.group{
		display: inline-block;
	}
</style>
