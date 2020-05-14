<template>
	<div class="loading" v-if="loading">
		<Icon class="icon" type="loading" v-if="!showMsg" />
		<span v-else>{{noMoreMsg}}</span>
	</div>
</template>

<script>
import Icon from 'components/common/Icon/Icon.vue'
export default {
  props: {
    noMoreMsg: {
      type: String,
      default: '暂无更多职位'
    }
  },
  data() {
    return {
      loading: false,
      showMsg: false,
    }
  },
  components: {
    Icon
  },
  methods: {
    startLoading() {
      this.loading = true;
      this.showMsg = false;
      // 便于链式调用，eg: startLoading().loadNoMore()
      return this
    },
    loadSuccess() {
      this.loading = false
    },
    loadNoMore() {
      console.log('暂无更多')
      setTimeout(()=> {
        this.showMsg = true;
      }, 1500)
    }
  },
  created() {
    this.$eventBus.$on('loadSuccess', this.loadSuccess)
    this.$eventBus.$on('loadNoMore', this.loadNoMore)
    this.$eventBus.$on('startLoading', this.startLoading)
  }
}
</script>

<style lang="scss" scoped>
.loading {
  height:60px;
  line-height: 60px;
  font-size:24px;
  color:rgba(153,153,153,1);
  text-align: center;
  .icon {
    animation: round 1s ease infinite;
  }
  @keyframes round {
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
  }
}
</style>