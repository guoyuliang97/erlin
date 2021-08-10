import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入全局API
import  Api  from './api/api.js'
Vue.prototype.$baseUrl = Api.baseUrl  // axios api
Vue.prototype.$sokectUrl = Api.soketUrl // websoket api

//引入全局登陆
import getLogin from './api/logion.js'
Vue.prototype.$getLogin = getLogin

//引入全局axois
import axios from './api/axios.js'
Vue.prototype.$axios = axios

//定义百度地图转坐标
import BaiduToQQ from './api/mapChange.js'
Vue.prototype.$BaiduToQQ = BaiduToQQ

//引入腾讯地图api
import QQMapWX from './static/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js'
var qqmapsdk = new QQMapWX({
	key:'KZ6BZ-3ATKU-FAJVR-4YPPS-EXB35-K2FDK'
})
Vue.prototype.$QQmap = qqmapsdk

//引入全局失败请求
import failQuest from './api/failAxios.js'
Vue.prototype.$failQuest = failQuest

//引入全局文件上传
import fileUpload from './api/fileUpload.js'
Vue.prototype.$fileUpload = fileUpload




App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
