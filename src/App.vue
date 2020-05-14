<template>
  <div id="app">
		<!-- <Home/> -->
		<router-view />
  </div>
</template>

<script>
	
</script>

<style>
#app {
  font-family: "PingFang SC", "Lantinghei SC", "Microsoft YaHei", "HanHei SC", "Helvetica Neue", "Open Sans", Arial, "Hiragino Sans GB",
     微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, Helvetica, sans-serif;
  height: 100%;
  width: 100%;
  overflow:scroll;
}
#app header {
  color: #ccc;
  font-size: 24px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 16px;
  z-index: -1;
}
.fade-in-up-enter-active,
.fade-in-up-leave-active {
  transition: all .3s linear;
  opacity: 1;
  /* transform: translateY(0); */
}
.fade-in-up-enter,
.fade-in-up-leave-to {
  opacity: 0;
  /* transform: translateY(10px); */
}
</style>
