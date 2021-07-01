import Api  from './api.js';

const axios = (url,params,method) => {
	var token = uni.getStorageSync('elToken')
	if(token !== ''){
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
				var code = res.data.code
				switch(code){
					case 200: 
						resolve(res);
						break;
				}
			},
			fail(err){
				reject(err)
			}
		})
	})
}

export default axios