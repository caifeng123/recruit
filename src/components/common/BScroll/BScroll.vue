<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: "Scroll",
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null,
				message: '哈哈哈'
			}
		},
		mounted() {
			// 1.创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})

			// 2.监听滚动的位置
			this.scroll.on('scroll', (position) => {
				// console.log(position);
				this.$emit('scroll', position)
			})

			// 3.监听上拉事件
			this.scroll.on('pullingUp', () => {
				this.$emit('pullingUp')
			})
		},
		created(){
			console.log(this.$eventBus)
			this.$eventBus.$on('jobRefresh', () => {
				this.$nextTick(() => {
					// 刷新 scroll, 并滚动至顶端
					this.scroll.scrollTo(0, 0)
				})
			})
			
			this.$eventBus.$on('recoverHomeScroll', ()=> {
				// 滚动值小于20像素，则允许外部滚动
				if(this.scroll.y > -20) {
					this.$eventBus.emit('homeScrollEnable')
				} else {
					this.$eventBus.emit('homeScrollDiable')
				}
			})
			this.$eventBus.$on('jobListScrollEnable', ()=> { this.enableScroll(); })
			this.$eventBus.$on('jobListScrollDisable', ()=> { this.disableScroll(); })
			this.$eventBus.$on('scrollRefresh', ()=> {this.scroll.refresh()})
		},
		methods: {
			scrollTo(x, y, time = 300) {
				this.scroll.scrollTo(x, y, time)
			},
			finishPullUp() {
				this.scroll.finishPullUp()
			}
		}
	}
</script>

<style scoped>

</style>
