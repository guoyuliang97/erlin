<template>
	<view>
		<Head></Head>
		<view class="shop_img">
			<loadImg :imgurl="img" type="home_discount"></loadImg>
		</view>
		<view class="content">
			<!-- 店铺名称 -->
			<view class="shop_name ">
				<view class="flexStart paddingL"> 
					<view class="shop_name_img">
						<loadImg :imgurl="img" type="home_discount"></loadImg>
					</view>
					<view class="marginLeft shop_name_box">
						<view class="flexBetween">
							<view class="fontTitle flexStart ">
								<view class="flexLineCenter">
									<text>蜜雪冰城（万达店)</text>
								</view>
								<view class="iconfont icon-you-xi" style="font-size: 24px;"></view>
							</view>
							<view class="sameWhite btn_sc smallSize flexLineCenter">
								<text>收藏</text>
							</view>
						</view>
						<view class="flexStart  smallSize">
							<view class="flexStart">
								<view class="iconfont icon-location sameColor"></view>
								<view class="flexLineCenter ">
									<text>啊哈收到</text>
								</view>
								<view class="line"></view>
								<view class="iconfont icon-shijian sameColor"></view>
								<view class="flexLineCenter ">
									<text>30分钟</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sameHuise paddng smallSize sameRed flexStart">
					<text class="red_box  marginRight">22减2</text>
					<text class="red_box  marginRight">22减2</text>
					<text class="red_box  marginRight">22减2</text>
					<text class="red_box  marginRight">22减2</text>
				</view>
			</view>
			<view class="food_content">
				
			</view>
			<view class=" flexStart " >
				<view class="title_box">
					<scroll-view scroll-y="true" @scrolltolower="scrollTitle" :style="{height: height + 'px'}">
						<view @tap="chooseTitle(item,index)" class="title_li middeSize" :class="[isChoose == index ? isTrue ? 'sameHuise':' sameWhite' : isTrue ? 'sameWhite':'sameHuise']" v-for="(item,index) in titleList" :key="index">
							<text>{{item.title}}</text>
						</view>
					</scroll-view>
				</view>
				<view class="shop_box " :class="[isTrue ? 'sameHuise ':'sameWhite']">
					<scroll-view scroll-with-animation scroll-y="true" @scroll="scroll" lower-threshold="100"   @scrolltolower="scrollShop" :scroll-top="top"  :style="{height: height + 'px'}">
						<view :class="[isTrue ? 'classify_shop_li' : 'shop_li']" v-for="(item,index) in shopList" :key="index">
							<detail @tap="toChild(item,index)" :type="isTrue ? 'classify_shop':'classify'" :infoData="item"></detail>
						</view>
						<view v-if="isAdd" class="alignCenter huise">
							<text class="smallSize">已经到底部了...</text>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from '../../pages/publicHead/publicHead'
	import loadImg from '../../pages/image/image'
	export default {
		data() {
			return {
				img:''
			}
		},
		components:{
			loadImg,
			Head
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.shop_img{
	width:100%;
	height: 200rpx;
}
.content{
	position: fixed;
	top: 200rpx;
	left:0;
	right:0;
	bottom: 0;
	background-color: #fff;
	z-index: 1;
}
.shop_name{
	position: fixed;
	top: 180rpx;
	left:5%;
	right:5%;
	border: 1px solid #eee;
	box-shadow: 2px 2px 10px #9e9e9e6e;
	padding: 20rpx 0 0 0;
	z-index: 3;
	background-color: #fff;
	border-radius: 10rpx;
}
.shop_name_img{
	width:100rpx;
	height:80rpx;
	border-radius: 5rpx;
}
.shop_name_box{
	width:100%
}
.btn_sc{
	padding: 0 10px;
	border: 1px solid #666;
	color:#666
}
.line{
	width: 1px;
	height: 15px;
	margin: auto 10px;
	background-color: #666;
}
.paddingL{
	padding: 0 20rpx 10rpx;
}
.paddng{
	padding: 10px 20rpx;
}
.food_content{
	margin-top: 380px;
}
</style>
