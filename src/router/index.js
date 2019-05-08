import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/index',
  	},
  	{
  		path: '/index',
  		name: 'index',
  		meta: {
  			title: '首页'
  		},
  		component: index
  	},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /*{
    	path: '/',
    	name: '',
    	meta: {
    		title: '',
    	},
    	component: ,    	
    },*/
   	//404公共页面
    {
    	path: '*',
    	name: '404',
    	meta: {
    		title: '404',
    	},
    	component: HelloWorld
    },
  ]
})
