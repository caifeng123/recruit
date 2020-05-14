<template>
	<div class="joblist-wrapper" ref="joblist" >
		<div class="content">
			<ul>
				<li v-for="(item, index) in joblist.list" :key="index" >
					<JobItem :job="item" />
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
	import JobItem from 'components/content/JobItem.vue'
	export default{
		components:{
			JobItem
		},
		data(){
			return {
				joblist: this.$store.state.jobList['home'],
				place:'home'
			}
		},
		created(){
			this.dosearch()
		},
		methods:{
			dosearch(){
				this.$store.commit('jobListGetBySelector', {place: this.place})
				this.joblist=this.$store.state.jobList[this.place]
			}
		}
	}
</script>

<style lang="scss">
	.joblist-wrapper {
		display: block;
		overflow: hidden;
		ul > li {
			border-bottom: 1px solid #e5e5e5;
			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
