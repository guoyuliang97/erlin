<template>
	<view class="sameHuise">
		<view class="flexStart notice" style="z-index: 999">
			<view  class="iconfont icon-lingsheng-copy position-bottom icon-font-size-40" @tap="goNotice"
				style="margin-right: 40rpx;">
				<view v-if="sysMsg" class="position-top">{{sysMsg}}</view>
			</view>
			<!-- <view class="iconfont icon-shezhi icon-font-size-40" @tap="goSet()"></view> -->
		</view>
		<view v-if="!isLogin" class="person_head">
			<view class=" flec marginAuto">
				<label @tap="toLogin" class="logion sameBgColor fontSize">登陆/注册</label>
				<!-- <label @tap="toRegist" class="regist fontSize">注册</label> -->
			</view>
		</view>

		<!-- 体验订单 -->
		<view class="per_content">
			<view>
				<text class="fontSize fontWeight">
					我的订单
				</text>
			</view>
			<view class="flexBetween middeSize marginTm">
				<label class="flexAltum " @tap="toOrder(item,index)" v-for="(item,index) in order" :key="index">
					<view class="alignCenter">
						<view class="iconfont position-bottom icon-font-size-40" :class="[item.icon]">
							<view v-if="index == 0 && order_num > 0" class="position-top">{{order_num}}</view>
							<view v-if="index == 2 && complete_num > 0" class="position-top">{{complete_num}}</view>
						</view>
					</view>
					<text class="marginTs smallSize fontTitleNewColor">{{item.title}}</text>
				</label>
			</view>
		</view>
		<view class="marginTm"></view>
		<!-- 我的钱包 -->
		<view class="per_content">
			<view>
				<text class="fontSize fontWeight">
					我的钱包
				</text>
			</view>
			<view class="flexBetween middeSize marginTm">
				<label class="flexAltum " @tap="toOrder(item,index)" v-for="(item,index) in money" :key="index">
					<view class="alignCenter">
						<view class="iconfont position-bottom icon-font-size-40" :class="[item.icon]">
							<view v-if="index == 0 && order_num > 0" class="position-top">{{order_num}}</view>
							<view v-if="index == 2 && complete_num > 0" class="position-top">{{complete_num}}</view>
						</view>
					</view>
					<text class="marginTs smallSize fontTitleNewColor">{{item.title}}</text>
				</label>
			</view>
		</view>
		<!-- 店铺中心 -->
		<view class="per_content">
			<view>
				<text class="fontSize fontWeight">
					店铺中心
				</text>
			</view>
			<view class="flexBetween middeSize marginTm">
				<label class="flexAltum " @tap="toOrder(item,index)" v-for="(item,index) in shop" :key="index">
					<view class="alignCenter">
						<view class="iconfont position-bottom icon-font-size-40" :class="[item.icon]">
							<view v-if="index == 0 && order_num > 0" class="position-top">{{order_num}}</view>
							<view v-if="index == 2 && complete_num > 0" class="position-top">{{complete_num}}</view>
						</view>
					</view>
					<text class="marginTs smallSize fontTitleNewColor">{{item.title}}</text>
				</label>
			</view>
		</view>
	</view>
</template>

<script>
	import LoadImg from '../image/image'
	export default {
		data() {
			return {
				isLogin: false,
				user: '',
				sad: '',
				order: [{
						icon: 'icon-daifukuan1',
						title: '待付款',
					},
					{
						icon: 'icon-daishouhuo2',
						title: '待收货',
					},
					{
						icon: 'icon-daipingjia2',
						title: '待评价',
					},
					{
						icon: 'icon-tuikuan1',
						title: '退款/售后',
					},
				],
				money: [
					{
						icon: 'icon-yuemingxi',
						title: '钱包',
						path: '/pages/sysMsg/sysMsg'

					},
					{
						icon: 'icon-biaoqiankuozhan_jiaoyi-179',
						title: '交易记录',
						path: '/pages/sysMsg/sysMsg',
					},
				],
				shop:[
					{
						icon: 'icon-shangjiaruzhu',
						title: '店铺',
						path: '/pages/sysMsg/sysMsg'
					
					},
					{
						icon: 'icon-shangjiarenzheng',
						title: '商家认证',
						path: '/pages/sysMsg/sysMsg',
					},
				],
				sysMsg:0,
				order_num:0,
				complete_num:0,
				attention_num:0,
				fans_num:0,
				praise_replay_num:0,
				balance:0,
				
			}
		},
		components: {
			LoadImg,
		},
		onLoad() {
			uni.login({
				provider: 'weixin',
				success: function(res) {
					uni.removeStorageSync('code')
				}
			})

		},

		methods: {
			//获取粉丝和关注数量
			getUser(){
				this.$axios('/home/User/get_user',{},'post').then(res=>{
					if(res.code == 1){
						var data = res.data
						this.fans_num=data[0].fans_num
						this.attention_num = data[0].attention_num
					}
				})
				
			},
			//获取点赞与回复数量
			getPraiseReplayNum(){
				this.$axios('/PraReCount',{},'post').then(res=>{
					if(res.code == 1){ 
						this.praise_replay_num=parseInt(res.data.replay_count)+parseInt(res.data.replay_count)
					}
				})
			},
			//获取余额总数
			getBalance(){
				this.$axios('/BalanceTwo',{},'post').then(res=>{
					if(res.code == 1){ 
						this.balance=parseFloat(res.data.due_balance)+parseFloat(res.data.unpaid_amount)
					}
				})
			},
			//获取未读消息
			getRead(){
				var params = {}
				this.$axios('/home/Sysmsg/noread',params,'post').then(res=>{
					if(res.code == 1){
						var data = res.data
						this.sysMsg = data.sys_count > 99 ? '99+':0
					}
				})
			},
			//获取订单未读总数
			getNoreadOrderNum() {
				this.$axios('/OrderNoRead', {}, 'post').then(res => {
					if(res.code == 1){
						var data = res.data
						this.order_num = data.order_num
						this.complete_num = data.complete_num
					}
				
				})
			},
			toStory(item, index) {
				uni.navigateTo({
					url: item.path,
				})
			},
			toTool(item, index) {
				uni.navigateTo({
					url: item.path,
				})
			},
			toTradePage(){
				uni.navigateTo({
					url: '/pagesdev/tradePage/tradePage'
				})
			},
			toLogin(){
					let that = this
					uni.getUserProfile({
					  desc: '用于登陆并完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					  success: (res) => {
						var userInfo = res.userInfo
						uni.login({
							provider:'weixin',
							success:function(res){
								that.code = res.code
							
								uni.navigateTo({
									url: '../../pagesA/getPhone/getPhone?code='+ res.code,
									animationDuration: 200,
									animationType: 'pop-in'
								})
								// that.getUseCode(userInfo,res.code)
							}
						})
					  },
						fail:function(err){
							
						}
					})
					
				},
				//通过code获取信息
				getUseCode(info,code){
					var params = {
						code:code
					}
					this.$axios('/api/auth/wxLogin',params,'post').then(res=>{
				
					})
				},
				getUer(){
					var params = {}
					this.$axios('/home/User/get_user',params,'post').then(res=>{
						this.setLogin(res.data[0])
					})
				},
			
				goNotice() { //去通知页面
			
					// return false;
					uni.navigateTo({
						url: '/pagesdev/sysMsg/sysMsg'
					})
				},
				goSet() { //去设置
					
					uni.navigateTo({
						url: '/pages_A/setIndex/setIndex'
					})
				},
				toRegist() { //注册页面
					uni.navigateTo({
						url: '/pages/register/register'
					})
				},
				getStates(){
					var that = this
					uni.getStorage({
						key: 'states',
						success: function(res) {
							if (res.data) {
								that.isLogin = res.data.isLogin
								that.user = res.data
								if(that.isLogin){
									that.getRead()
									that.getNoreadOrderNum()
								}
							}
						},
						fail: function() {
							that.isLogin = false
							that.user = ''
						}
					})
				},
				toPerson() { // 查看个人资料
					uni.navigateTo({
						url: '/pages_A/userData/userData'
					})
				},
				//前往订单
				toOrder(item, index) {
					var isLogin = this.$getLogin()
					if (isLogin) {
						uni.navigateTo({
							url: '/pages_A/orderCenter/orderCenter?index=' + index,
							animationDuration: 200,
							animationType: 'pop-in'
						})
						if(index == 0 || index == 2){
							this.readOrder(item,index)
						}
					}

				},

		}
	}
</script>

<style scoped>
	.sameHuise {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.person_head {
		height: 250rpx;
		position: relative;
	}

	.bgColor {
		background-color: #999;
	}

	.logion_btn {
		width: 300rpx;
	}

	.logion_on {
		width: 96%;
		padding: 0 2%
	}

	.logion,
	.regist {
		padding: 10rpx 30rpx;
		border-radius: 30rpx;
	}

	.regist {
		background-color: #fff;

	}

	.persType {
		padding: 5rpx 10rpx;
		border-radius: 20rpx;
		background-image: linear-gradient(to right, #19CBBC, #1ACBC9);
		color: #FFFFFF;

	}

	.per_content {
		width: 88%;
		margin: 0 auto 20rpx auto;
		background-color: #fff;
		border-radius: 5px;
		padding: 20rpx 4%;
	}

	.notice {
		position: absolute;
		right: 50rpx;
	}
</style>
