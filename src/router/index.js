import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'

Vue.use(VueRouter);
const webTitles = {
  'Home': '交通大学内推双选会',
  'Search': '搜索',
  'HotCo': '全部企业',
  'Detail': '岗位详情',
  'Xiugai': '简历修改',
  'Rule': '服务声明',
}
const routes = [
	// {
	// 	path: '',
	// 	redirect: '/home',
	// },
	{
		path: '/', 
		name:"Home",
		component:Home,
		meta: {keepAlive: true}
	},
	{
    path: '/search',
    name: 'Search',
    component: () => import('views/Search/Search.vue'),
	},
	{
		path: '/changecv',
		name: 'ChangeCV',
		component:()=>import("views/ChangeCV/ChangeCV.vue")
	}
	// {
	// 	path: '/detail',
	// 	component:Detail
	// }

]
const router = new VueRouter({
	routes:routes,
	// mode: 'history'
})

router.afterEach((to) => {
  window.document.title = webTitles[to.name] || '交通大学内推双选会';
})

export default router
