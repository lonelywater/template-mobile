<template>
	<div class="block">
		<bottom-nav></bottom-nav>
	</div>
</template>

<script>
	import { addScrollEvent, isTop, isBottom } from '@/assets/js/public'
	import bottomNav from '@/components/bottomNav.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			"bottom-nav": bottomNav,
		},
		methods: {
			//初始化操作，便于传递参数
  			initializePage() {
  				addScrollEvent(function () {
  					isBottom();
  					isTop();
  				});
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
	.block{
		height: 600vh;
		color: $red;
	}
</style>