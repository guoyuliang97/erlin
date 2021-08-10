
const  getLogin = function () {
	let that = this
	var  states = uni.getStorageSync('states')
	if(!states){
		uni.showModal({
			title:"系统提示",
			content: '您还没有登陆，去登陆',
			icon:'none',
			confirmText:'去登陆',
			confirmColor:"#14C5CA",
			success: function (res) {
			        if (res.confirm) {
			           that.toLogin()
			        }  
			    },
			fail() {
				return false
			}
		})
	}else{
		return true
	}
}
function toLogin(){
	let that = this
	uni.getUserProfile({
	  desc: '用于登陆并完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
	  success: (res) => {
		var userInfo = res.userInfo
		uni.login({
			provider:'weixin',
			success:function(res){
				that.code = res.code
				that.getUseCode(userInfo,res.code)
			}
		})
	  },
		fail:function(err){
			
		}
	})
	
}
//通过code获取信息
function getUseCode(info,code){
	var params = {
		code:code,
		icon: info.avatarUrl,
		nickName:  info.nickName,
	}
	this.$axios('/api/auth/wxLogin',params,'post').then(res=>{
		var data = res.data.data
		
		uni.setStorage({
			key: 'elToken',
			data: data.token
		})
		var state = {
			userImg: data.icon,
			username: data.username,
			openId: data.openId
		}
		this.user = state
		this.isLogin = !this.isLogin
		uni.setStorage({
			key: 'states',
			data:state
		})
		if(!res.data.data.phoneNum){
			uni.navigateTo({
				url: '../../pagesA/getPhone/getPhone?code='+ code ,
				animationDuration: 200,
				animationType: 'pop-in'
			})
		}
	})
}

export default getLogin