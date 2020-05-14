<template>
	<div class="title">
		<h1 class="mytitle">{{title}}</h1>
	</div>
</template>

<script>
	export default{
		name:'mytitle',
		props:{
			title:String
		}
	}
</script>

<style lang="scss">
	.mytitle { display: inline-block;margin-top: 64px; margin-bottom: 16px; font-size:34px; height: 34px; font-weight:bold; color:#333333;
		line-height: 1; display: flex; align-items: center;
		&::before {
		content: ''; display: inline-block; margin-right: 8px; width: 8px; height: 8px; background:#333333;
		box-shadow: 0 12px 0 0 #333333, 0 -12px 0 0 #333333; border-radius: 1px;
		}
		>	span { flex: 1; font-size:24px; color:rgba(102,102,102,1); font-weight: 400; line-height:32px; text-align: right; }
	}
</style>
