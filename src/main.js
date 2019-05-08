import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper' 
// require styles
import 'swiper/dist/css/swiper.css' 
Vue.use(VueAwesomeSwiper);

//引入图片放大查看插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

//引入layer弹窗插件
import layer from 'vue-layer'
Vue.prototype.layer = layer(Vue, {
	msgtime: 3,
})

//引入全局css
import './assets/style/base.css';

//每次页面跳转前的操作
router.beforeEach( async ( to, from, next) => {
	//添加页面标题
	if (to.meta.title) {
    	document.title = to.meta.title;
  }
	
	//消除所有弹出层
	Vue.prototype.layer.closeAll();
	
	next();
})

//每次更新页面后，回到顶部
router.afterEach((to,from) => {
	document.documentElement.scrollTop = document.body.scrollTop = 0;
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
