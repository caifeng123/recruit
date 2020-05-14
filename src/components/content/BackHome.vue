<template>
  <div class="back-home" :class="{'hide': iconHide}" @click.stop="" >
    <div class="group" @click="$router.push('/')">
      <Icon type="shouye" class="icon" />
      首页
    </div>
    <div class="group" @click="$router.back()">
      <Icon type="back" class="icon" />
      返回
    </div>
  </div>
</template>

<script>
import Icon from 'components/common/Icon/Icon.vue'
export default {
	name:"BackHome",
  components: {
    Icon
  },
  data() {
    return {
      iconHide: false,
      showTimeout: null
    }
  },
  methods: {
    hide() {
      // 无操作时收起图标
      this.iconHide = true
    },
		myshow(){
			this.iconHide = false
		},
    show() {
      // 重置时钟, 2秒后自动收回
      clearTimeout(this.showTimeout);
      this.showTimeout = setTimeout( () => {
        this.hide(); 
      }, 2000)
      // 展开图标，由触摸事件决定
      this.iconHide = false
    }
  },
  created() {
    this.show();
    this.$eventBus.$on('userTouch', this.show)
  }
}
</script>

<style lang="scss" scoped>
.back-home {
  padding: 26px 0;
  position: fixed;
  right: 40px;
  bottom: 150px;
  width:88px;
  height:240px;
  background:rgba(255,255,255,1);
  box-shadow:0px 8px 32px 0px rgba(51,51,51,0.16);
  border-radius:60px;
  font-size:24px;
  color:rgba(26,72,156,1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .3s ease;
  .group {
    height: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    width: 32px;
    height: 32px;
  }
  &.hide {
    transform: translateX(108px);
  }
}
</style>