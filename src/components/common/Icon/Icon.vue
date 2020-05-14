<template>
<!--    <svg class="icons">
      <use :xlink:href="'#i'+type" />
    </svg> -->
		<svg class="icon" aria-hidden="true">
			<use :xlink:href="'#icon-'+type"></use>
		</svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'home'
    }
  }
}
</script>

<style scoped>
.icons {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor; /* fill用currentColor则会自动匹配当前的color属性值 */
  overflow: hidden;
}
</style>