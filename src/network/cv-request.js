import {
	request
} from './request'

export function getboardcast(projectid,action) {
	return request({
		baseURL:"https://evp.51job.com/51job/api/51miniadmin/mini.php",
		params: {
			projectid,
			action
		}
	})
}