<template>
	<view class="shopContent middeSize">
		<uni-steps  :options="options" active-color="#ffc107" :active="stepIndex"></uni-steps>
		<view v-if="stepIndex == 0">
			<view class="flexStart input_border marginTm">
				<view>
					店铺名称
				</view>
				<input type="text" class="marginLeft-55" placeholder="输入店铺名称"  v-model="shopName"  />
			</view>
			<view class="flexStart input_border marginTm">
				<view>
					店铺图片
				</view>
				<view class="marginLeft-55">
					<view @tap="toChoosePhoto" class='border_photo flexLineCenter alignCenter'>
						<view v-if="!shopPhoto" class="iconfont icon-kongbaitupianzhanwei "></view>
						<LoadImg v-else class="img" :imgurl="shopPhoto"></LoadImg>
					</view>
					<view class="smallSize sameColorHui">选取800px*800px,高清图片</view>
				</view>
			</view>
			<view class="flexStart input_border marginTm">
				<view>
					店铺介绍
				</view>
				<input type="text" class="marginLeft-55" placeholder="输入店铺介绍"  v-model="shopIntro"  />
			</view>
			<view class="flexStart input_border marginTm">
				<view>
					店铺地址
				</view>
				<label class="marginLeft-55" @tap="chooseAdree">{{ shopAdress ? shopAdress : '选择商铺地址' }}</label>
			</view>
			<view class="flexStart input_border marginTm">
				<view>
					详细地址
				</view>
				<input type="text" class="marginLeft-55" placeholder="输入店铺详细地址"  v-model="shopAdressMore"  />
			</view>
		</view>
		<view v-else-if="stepIndex == 1">
			<view class="flexStart input_border marginTm">
				<view>
					经营者姓名
				</view>
				<input type="text" class="marginLeft-55" placeholder="输入经营者姓名"  v-model="userName"  />
			</view>
			
			<view class="flexStart input_border marginTm">
				<view>
					经营者身份证号
				</view>
				<input type="idcard" class="marginLeft-55" placeholder="输入身份证号"  v-model="userIdCard"  />
			</view>
			
			<view class="flexStart input_border marginTm">
				<view>
					联系电话
				</view>
				<input type="number" class="marginLeft-55" placeholder="输入联系电话"  v-model="userPhone"  />
			</view>
		</view>
		<view v-else>
			<view class="flexStart input_border marginTm">
				<view>
					营业执照号
				</view>
				<input type="text" class="marginLeft-55" placeholder="输入营业执照号"  v-model="yyzz"  />
			</view>
			<view class="flexStart input_border marginTm">
				<view>
					营业执照图片
				</view>
				<view class="marginLeft-55">
					<view @tap="chooseYY" class='border_photo flexLineCenter alignCenter'>
						<view v-if="!shopZhizhao" class="iconfont icon-kongbaitupianzhanwei "></view>
						<LoadImg v-else class="img" :imgurl="shopZhizhao"></LoadImg>
					</view>
					<view class="smallSize sameColorHui">拍摄或选取高清执照图片</view>
				</view>
			</view>
		</view>
		<view class="alignCenter step_btn">
			<button @tap="nextStep" class="sameBgColor">{{stepIndex == 2? '提交': '下一步'}}</button>
		</view>
		<kps-image-cutter @ok="onok" @cancel="oncancle" :url="url" :fixed="true" :width="800" :height="800"></kps-image-cutter>
	</view>
</template>

<script>
	import kpsImageCutter from "@/components/ksp-image-cutter/ksp-image-cutter.vue";
	import LoadImg from '../../pages/image/image'
	export default {
		data() {
			return {
				options:[
					{title: '店铺信息'}, 
					{title: '经营者信息'}, 
					{title: '经营资历'}, 
				
				],
				stepIndex:0,
				shopName: '',
				shopIntro:'',
				shopAdress:'',
				shopAdressMore:'',
				userName:'',
				userIdCard: '',
				userPhone: '',
				yyzz: '',
				shopPhoto:'' ,//店铺图片
				url:'',
				shopZhizhao:'',//印业执照图片
				
			
			}
		},
		components:{
			LoadImg,
			kpsImageCutter
		},
		methods: {
			toChoosePhoto(){ //选择店铺图片
			var that = this
				uni.chooseImage({
					count: 1,
					success(res){
						// that.url = res.tempFilePaths[0]
						uni.uploadFile({
							url: that.$baseUrl + '/api/fileUpload/upload', 
							filePath: res.tempFilePaths[0],
							name: 'file',
							header:{
								"Authorization": uni.getStorageSync('elToken')
							},
							success: (uploadFileRes) => {
								console.log(2)
								console.log(uploadFileRes)
								// that.shopPhoto = res.tempFilePaths[0]
							},
							fail(err){
								console.log(err)
							}
						});
					},
					fail(err){
						that.$failQuest('img')
					}
				})
			},
			chooseYY(){
				var that = this
				uni.chooseImage({
					count: 1,
					success(res){
						that.shopZhizhao = res.tempFilePaths[0]
					},
					fail(err){
						that.$failQuest('img')
					}
				})
			},
			chooseAdree(){
				var  that = this
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
						that.shopAdress = res.name
				    }
				});
			},
			nextStep(){
				this.stepIndex+= 1
				if(this.stepIndex == 0){
					this.firstStep()
				}else if(this.stepIndex == 1){
					this.twoStep()
				}else{
					this.threeStep()
				}
			},
			firstStep(){
				if(!this.shopName){
					uni.showToast({
						title:'请输入商铺名称!',
						icon: 'none'
					})
				}else if(!this.shopAdress){
					uni.showToast({
						title:'请输入商铺地址!',
						icon: 'none'
					})
				}else if(!this.shopIntro){
					uni.showToast({
						title:'请输入商铺介绍!',
						icon: 'none'
					})
				}else if(!this.shopAdressMore){
					uni.showToast({
						title:'请输入商铺详细地址!',
						icon: 'none'
					})
				}else{
					this.stepIndex+= 1
				}
			},
			twoStep(){
				if(!this.shopName){
					uni.showToast({
						title:'请输入商铺名称!',
						icon: 'none'
					})
				}else if(!this.shopAdress){
					uni.showToast({
						title:'请输入商铺地址!',
						icon: 'none'
					})
				}else if(!this.shopIntro){
					uni.showToast({
						title:'请输入商铺介绍!',
						icon: 'none'
					})
				}else if(!this.shopAdressMore){
					uni.showToast({
						title:'请输入商铺详细地址!',
						icon: 'none'
					})
				}else{
					this.stepIndex+= 1
				}
			},
			threeStep(){
				
			},
			onok(ev) {
				this.shopPhoto = ev.path;
				this.url = ''
				this.uploadFile(ev)
			},
			oncancle() {
				// url设置为空，隐藏控件
				this.url = ''
				this.shopPhoto = ''
				
			},
			uploadFile(ev){
				console.log(2)
				this.$fileUpload(ev,true)
			},
			commit(){
				var params = {
					businessLicenseCode: this.yyzz,
					businessLicenseImg: this.shopZhizhao,
					contactNumber: this.userPhone,
					detailAddress: this.shopAdressMore,
					directorCart: this.userIdCard,
					directorName: this.userName,
					latitude: this.latitude,
					longitude: this.longitude,
					name: this.shopName,
					signBoardImg: this.shopPhoto
				}
				this.$axios('/api/store/register',params,'post').then(res=>{
					var data = res.data.data
					if(res.data){
						
					}
				})
			},
			
		}
	}
</script>

<style scoped>
.shopContent{
	width: 90%;
	margin: 0 auto;
	padding: 20px 0
}
.border_photo{
	border: 1px solid #999;
	background-color: #eee;
	width: 80px;
	height: 80px;
	border-radius: 10rpx;
}
.step_btn{
    position: fixed;
	bottom: 0;
	left: 5%;
	right: 5%;
}
.img{
	width:100%;
	height: 100%
}
</style>
