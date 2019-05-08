<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import { setRootFontSize } from '@/assets/js/public'
	
export default {
  name: 'App',
  mounted() {
  	setRootFontSize();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
