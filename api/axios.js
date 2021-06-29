import Api  from './api.js';

const axios = (url,params,method) => {
	var token = uni.getStorageSync('elToken')
	if(token !== 'undefined' || token !== null){
		var header = {
			Authorization: uni.getStorageSync('elToken')
		}
	}
	return new Promise((resolve,reject) => {
		uni.request({
			url: Api.baseUrl + url,
			method,
			header:header,
			data: params,
			dataType:'json',
			success(res) {
				console.log(res)
				resolve(res)
			},
			fail(err){
				reject(err)
			}
		})
	})
}

export default axios