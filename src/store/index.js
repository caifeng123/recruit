//1.导入插件
import Vue from 'vue'
import Vuex from 'vuex'

import {getjoblist,
// getfuncType,
// getjoblistBykeyword,
mylogin
} from 'network/home-request.js'

//2.安装插件
Vue.use(Vuex)

//3.创建对象
const store = new Vuex.Store({
	state:{			//共享的数据
		projectId: 116,
		loginShow:false,
		selector: {
			home: {
				area: '',
				func: -1,
				adress: -1,
				degree: -1,
				salary: -1,
				keyword: '',
			},
			groundA: {
				area: '001',
				func: -1,
				adress: -1,
				degree: -1,
				salary: -1,
			},
			groundB: {
				area: '002',
				func: -1,
				adress: -1,
				degree: -1,
				salary: -1,
			},
			groundC: {
				area: '003',
				func: -1,
				adress: -1,
				degree: -1,
				salary: -1,
			},
			groundD: {
				area: '004',
				func: -1,
				adress: -1,
				degree: -1,
				salary: -1,
			},
		},
		jobList: {
			home: {
				list: [],
				page: 1
			},
			groundA: {
				list: [],
				page: 1
			},
			groundB: {
				list: [],
				page: 1
			},
			groundC: {
				list: [],
				page: 1
			},
			groundD: {
				list: [],
				page: 1
			},
			keyword: {
				list: [], // 关键字搜索列表一次全部给到
			}
		},
	},
	mutations:{	//同步方法	类似于methods 可接收传入参数payload=》obj|arr|num
		jobListGetBySelector(state, {place}){
			let selector = state.selector[place];
			getjoblist(state.projectId,selector.area,selector.func,selector.adress,selector.degree,selector.salary).then(res => {
				if(res.data.code === 1) {
					//刷新数据
					state.jobList[place].list = res.data.data.list
					state.jobList[place].page = 1
					// 抛出加载成功事件
					// myVue.$eventBus.emit(state.jobList[place].list.length > 0 ? 'loadSuccess' : 'loadNoMore')
					// myVue.$eventBus.emit('jobRefresh')
				} else {
					console.log('数据获取失败：', res.data.msg)
				}
			})
		},
		// 检查是否登录：
		loginShow(state) {
			state.loginShow = true;
		},
		
		// 登录：
		login(state,{sid,pwd}){
			mylogin(state,sid,pwd).then( res => {
				if(res.data.code === 1) {
					state.login = true
					state.loginShow = false
				}
			})
		},
		
		// 取消登录：
		loginCancel(state) {
			state.loginShow = false;
		}
	},
	actions:{	//异步方法
		// 检查登录
		// checkLoged ({ commit, state }) {
		// 	return new Promise((resolve, reject) => {
		// 		if(!state.login) {
		// 			commit('loginShow')
		// 		} else {
		// 			resolve(state.login)
		// 		}
		// 	})
		// }
	},
	getters:{		//将数据处理后返回	类似于computed 

	},
	modules:{//定义模块
		a:{
			state:{},
			mutations:{},
			actions:{},
			getters:{}
		}
		
	}
})

//3.导出store模块
export default store