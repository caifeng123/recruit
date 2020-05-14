<template>
	<div>
		<div class="SearchBar">
			<span class="item" v-for="item in selector" :key="item.id">
				{{item}}<Icon type="down" class="arrow" ></Icon>
			</span>
			<span class="item">
				<Icon type="search" style="width:10px;height:10px;margin-right:15px;fill: #fff"></Icon>搜索
			</span>
		</div>
	</div>
</template>

<script>
	import Icon from 'components/common/Icon/Icon.vue'
	// import JobList from './JobList.vue'
	export default{
		props: {
			selector: {
				type:Array,
				default(){
					return ["职能类别","学历要求","薪酬范围"]
				}
			}
		},
		components:{
			Icon
		}
	}
</script>

<style lang="scss">
	.SearchBar{
		display: flex;
		.item{
			flex: 1;text-align: center;display: inline-block;font-size: 20px;background: #ccc;padding: 10px;margin:0 10px;border-radius: 12%;
			&:last-child{background: #0000FF;color: #fff;}
			.arrow { width:1em;height:1.5em;margin-left:5px; transition: all .3s linear; vertical-align: -5px;}
			&.active {
				background: #E8ECF5; color: rgba(26,72,156,1);
				.arrow { transform: rotate(180deg) };
			}
		}
	}
</style>
