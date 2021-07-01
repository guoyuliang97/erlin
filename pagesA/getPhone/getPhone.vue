<template>
	<view class="login">
		<view class="alignCenter">
			<text class="bold fontTitle">手机号绑定方式</text>
		</view>
		<view class="marginT">
			<view>
				<text class="bold middeSize">短信验证</text>
			</view>
			<view class="marginT">
				<view>
					<input type="number" v-model="ph_num"  placeholder="请输入手机号"/>
				</view>
				<view class="border_btm"></view>
			</view>
			<view class="marginT">
				<view  class="flexBetween">
					<input  type="text" v-model="ph_password"  placeholder="请输入验证码"/>
					<label @tap="ph_num ? sendEMS():''" class="ems_btn middeSize">
						{{EMS_sms}}
					</label>
				</view>
			</view>
			<view>
				<button  @tap="to_login" class="middeSize" >
					确认绑定
				</button>
			</view>
		</view>
		<view class="alignCenter">
			<text>或</text>
		</view>
		<view>
			<button  class="middeSize marginT" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信绑定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				EMS_sms:'获取验证码',
				code:''
			}
		},
		onLoad(params){
			
			this.code = params.code
		},
		methods: {
			// 获取验证码
			sendEMS(){
				
			},
			getPhoneNumber(e){
				console.log(e)
				if(e.detail.errMsg == "getPhoneNumber:ok"){
					var params = {
						code: this.code,
						phoneData:{
							encDataStr: e.detail.encryptedData,
							icStr: e.detail.iv
						}
					}
					this.$axios('/api/auth/wxLogin',params,'post').then(res=>{
						console.log(res)
					})
				}
			}
			
		},
		getPhoneNumber(e){
			console.log(e)
		}
	}
</script>

<style scoped>
.login{
	width: 90%;
	margin: 0 auto;
	padding: 20rpx 0;
}
.border_btm{
	width:100%;
	height: 1px ;
	background-color: #999;
}
</style>
