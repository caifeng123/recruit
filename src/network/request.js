import axios from 'axios'

export function request(config) {
	//1.创建axios实例
	const instance = axios.create({
		baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/51job/api/1.0/index.php/yun/index/',
		// showapi_timestamp=new date(),
		timeout: 5000, //http超时设置
		options: { //默认请求参数,极少用到
			testParam: 'test'
		}
	})
	
	//2.axios拦截器
	//2.1请求拦截
	// instance.interceptors.request.use(config=>{
	// 	//拦截操作
	// 	return config	//必须返回回去 否则调用处取不到
	// },err=>{
	// 	//console.log(err)
	// })
	// //2.2响应拦截
	// instance.interceptors.response.use(res=>{
	// 	//拦截操作
	// 	return res //必须返回回去 否则调用处取不到
	// },err=>{
	// 	//console.log(err)
	// })
	
	//3发送真正的网络请求【返回promise对象】
	return instance(config)
}
