<template>
	<div class="HomeOptions">
		<div v-for="(image, index) in images" :key="index" class="img">
			<router-link  to="/changecv"><img :src="image" alt=""></router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeOptions',
		props:{
			images:Array
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.HomeOptions{margin-top: 5px;
		.img{
			padding: 5px;
			width: 50%;
			display: inline-block;
			img{
				width: 100%;
			}
			&:last-child{width: 100%;}
		}
		
	}
	
</style>
