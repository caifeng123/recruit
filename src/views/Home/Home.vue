<template>
	<div class="home" @scroll="watchScroll" ref="scroll-wrapper">
		<Banner :banners="banners"></Banner>
		<HomeOptions :images="images"></HomeOptions>
		<div class="content">
			<HomeTitle title="内推企业"></HomeTitle>
			<div class="search">搜索更多企业请点击<Icon type="search" style="width:1.5em;font-size:5px;height:1.5em;margin-left:5px;"></Icon></div>
		</div>
		<LogoSwiper :hotCo="hotCo" :row="2" ></LogoSwiper>
		<div :class="{'fixed': navBarFixed}" class="select">
			<HomeTitle title="内推职位"></HomeTitle>
			<SearchBar :selector="selector" ></SearchBar>
		</div>
		<Scroll><JobList/></Scroll>
	</div>
</template>

<script>
	import HomeOptions from './childComponents/HomeOptions.vue' 
	import HomeTitle from './childComponents/HomeTitle.vue'
	import LogoSwiper from './childComponents/LogoSwiper.vue'
	import SearchBar from './childComponents/JobList/SearchBar.vue'
	import JobList from './childComponents/JobList/Joblist.vue'

	import Banner from 'components/common/Banner/banner.vue'
	import Scroll from 'components/common/BScroll/BScroll.vue'
	import Icon from 'components/common/Icon/Icon.vue'
	
	export default{
		name:'Home',
		components:{
			Banner,
			HomeOptions,
			HomeTitle,
			Icon,
			LogoSwiper,
			SearchBar,
			JobList,
			Scroll
		},
		data(){
			return{
				banners:['images/banner.png','images/hot/1.jpg'],
				images:['imgs/ceping.png','imgs/xiugai.png','imgs/baoming.png'],
				clientHeight: 0,
				hotCo: [
					{image: 'images/hot/1.jpg',  name:'上海新东方教育培训有限公司'},
					{image: 'images/hot/2.jpg',  name:'上海银行股份有限公司'},
					// {image: 'images/hot/3.jpg',  name:'建信金融科技有限责任公司'},
					{image: 'images/hot/4.jpg',  name:'兴业数字金融服务（上海）股份有限公司'},
					{image: 'images/hot/5.jpg',  name:'乐鑫信息科技（上海）股份有限公司'},
					{image: 'images/hot/6.jpg',  name:'晶科能源有限公司'},
					{image: 'images/hot/7.jpg',  name:'东电化（中国）投资有限公司'},
					// {image: 'images/hot/8.jpg',  name:'浙江我武生物科技股份有限公司'},
					{image: 'images/hot/9.jpg',  name:'上海瀚讯信息技术股份有限公司'},
					{image: 'images/hot/10.jpg', name:'上海汉得信息技术股份有限公司'},
					// {image: 'images/hot/11.jpg', name:'延锋汽车饰件系统有限公司'},
				],
				selector:["职能类别","学历要求","薪酬范围"],
				navBarFixed:false
			}
		},
		mounted(){
		},
		methods:{
      watchScroll () {
				let scrollTop = this.$refs['scroll-wrapper'].scrollTop
        //  当滚动超过 700 时，实现吸顶效果
        if (scrollTop > 700) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
			}
		},
	}
</script>

<style>
	.home{
		padding: 15px;
		max-height: 100%;
		overflow-y: auto;
	}
	.content{
		position: relative;
	}
	.select{
		background: #fff;
		width: 100%;
		z-index: 9;
	}
	.search{
		position: absolute;
		bottom: 5px;
		right: 10px;
		font-size: 16px;
	}
	.fixed {
		position:fixed;
		top: 0;
	}

</style>
