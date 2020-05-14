import {
	request
} from './request'
import{adressList,degreeList,salaryList,funcList} from 'assets/infos.js'

export function getjoblist(projectId,area,func,adress,degree,salary) {
	let params  = {project_id:projectId,area,func,adress,degree,salary} 
	if(func>0) 
		params[func]=funcList[func] 
	else
		delete params["func"]
	if(adress>0) 
		params[adress]=adressList[adress] 
	else 
		delete params["adress"]
	if(degree>0) 
		params[degree]=degreeList[degree] 
	else 
		delete params["degree"]
	if(salary>0) 
		params[salary]=salaryList[salary] 
	else
		delete params["salary"]

	return request({
		url:'/getjob',
		params
	})
}
export function getfuncType(projectId) {
	return request({
		url:'/getFuntype',
		params: {
			project_id: projectId,
		}
	})
}
export function getjoblistBykeyword(projectId,keyword) {
	return request({
		url:'/getjob',
		params: {
			project_id: projectId,
			keyword: keyword,
		}
	})
}
export function login(projectId,sid,pwd) {
	return request({
		url:'/jdLogin',
		params: {
			project_id: projectId,
			sid: sid,
			pwd:pwd
		}
	})
}