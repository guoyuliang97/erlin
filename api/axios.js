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
					case 403:
						uni.showToast({
							title: '网络出了点问题,稍后重试!',
							icon: 'none'
						});
						
						break;
				}
			},
			fail(err){
				console.log(err)
				var code = err.data.data
				switch(code){
					
					case 403:
						uni.showToast({
							title: '网络出了点问题,稍后重试!',
							icon: 'none'
						});
						
						break;
				}
				
			}
		})
	})
}

export default axios