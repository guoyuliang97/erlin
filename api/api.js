var baseUrl,soketUrl

if(process.env.NODE_ENV === 'development'){
	baseUrl = 'http://112.74.45.176:8864'
	soketUrl = 'https://www.20mall.com.cn/'
}else{
	baseUrl = 'http://112.74.45.176:8864'
	soketUrl = 'https://www.20mall.com.cn/'
}

export default {
	baseUrl,soketUrl
}