<template>
	<div class="bottom-nav">
		
	</div>
</template>

<script>
	
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//初始化操作，便于传递参数
  			initializePage() {
  				
  			},
		},
		mounted() {
			this.initializePage();
		},
		created() {
			
		},
	}
</script>

<style scoped lang="scss" type="text/css">
	.bottom-nav{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3rem;
		background-color: gainsboro;
	}
</style>