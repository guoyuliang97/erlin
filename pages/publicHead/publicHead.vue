<template>
	<view>
		<view class="top_bar  flexStartNew"   :style="{top: height + 7 +'px'}">
			<label @tap="goBack">
				<uni-icons type="arrowleft" color="#fff" size="20"></uni-icons>
			</label>
			<view class="line"></view>
			<label @tap="goBackHome" style="margin: auto 0">
				<view class="iconfont icon-index " style="font-size:35rpx;color:#fff"></view>
			</label>
		</view>
		
		<!-- 分享收藏 -->
		<!-- <view  class="flexend fenxiang" :class="[isFixed ? 'fixFenxiang':'fenxiang']" :style="{top: top + 'px'}">
			<view  class="yuan relative" >
				<view @tap="toCollect" class='iconfont icon-shoucang marginAuto' :style="{color: isShoucang ? 'red':''}" style="font-size: 20px;"></view>
			</view>
			<view class="yuan relative marginLeft">
				<view @tap="share_pengyou" class='iconfont icon-fenxiang marginAuto' style="font-size: 20px;"></view>
			</view>
		</view> -->
	</view>
		

</template>

<script>
	export default {
		props:['top','isFixed','isShoucang','isHome'],
		data() {
			return {
				height:'',
				localPlace:'眉山',
				homeSearch: '输入商家名、品类或商圈',
				shopName:'商品',
			}
		},
		mounted(){
			this.setNavigator()
			this.getSysTem()
		},
		methods: {
			
			//设置导航栏颜色
			setNavigator(){
				uni.setNavigationBarColor({
				    frontColor: '#00000',
				})
			},
			goBack(){  // 返回上一页
				let pages = getCurrentPages();
				
			   if(pages[pages.length - 2]){
			     //如果有上一页，就返回上一页
			     uni.navigateBack({//返回
			       delta: 1,
				   animationType:'pop-out',
				   animationDuration: 200
			     })
			   }else{
					uni.reLaunch({
						url: '/pages/index/index',
						animationType:'pop-out',
						animationDuration: 200
					})
			    } 
			},
			goBackHome(){  //返回首页
			var pages = getCurrentPages()
				uni.navigateBack({
					delta: pages.length,
					animationType:'pop-out',
					animationDuration: 200
				})
			},
			//获取系统信息
			getSysTem(){
				let that = this
				uni.getSystemInfo({
					success:function(res){
						that.height = res.statusBarHeight
					}
				})
			},
			share_pengyou(){
				this.$emit("shareTime")
			},
			toCollect(){
				this.$emit('toCollect')
			},
			toSearch(){
				thiss.$emit('toSearch')
			}
		}
	}
</script>

<style scoped>
.top_bar{
	/* position: fixed;
	left:0;
	right: 0;
	top: 0;
	padding:5upx 20upx;
	z-index:999; */
	position: fixed;
	left: 30upx;
	padding:5upx 20upx;
	border-radius: 20px;
	border: 1px solid #EEEEEE;
	z-index:2
	
}
/* .top_bar{
	position: fixed;
	left: 30upx;
	left:0;
	right:0;
	top: 0;
	background-color: #ffc107;
	border: 1px solid #EEEEEE;
	z-index:999;

} */
.seracj{
	padding: 7px 20rpx;
	border-radius: 10px;
	width:40%;
	margin-top: 0px;

	
}
.line{
	width: 1px;
	height: 15px;
	margin: auto 10px;
	background-color: #EEEEEE;
}
.fenxiang{
	position: absolute;
	right: 20px;
}
.fixFenxiang{
	position: fixed;
	right: 20px;
	z-index: 1;
}
.yuan{
	width:40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	border: 1px solid #eee;
	box-shadow: 2px 2px 10px #9e9e9e6e;
}

</style>
