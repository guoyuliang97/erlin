<template>
	<view class="sameHuise">
		<view class="banner">
			<swiper class="swiper" :circular="circular" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerList" :key="item.id" >
					<image mode="scaleToFill" :src="item.img" class="swiper_img"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="content">
			<view class="flexBetween">
				<view>
					<view>
						<text class="bold fontSize">{{inforDate.title}}</text>
					</view>
					<view class="smallSize marginTs">
						<text class="hui_box sameHuise" >一人份</text>
						<text class="hui_box margin-left-10 sameHuise">香味</text>
					</view>
				</view>
				<view class='alignCenter'>
					<view class="iconfont icon-shoucang"></view>
					<text class="smallSize huise">想吃</text>
				</view>
			</view>
			<view>
				<text class="smallSize sameColor" >门店销量第一名</text>
			</view>
			<view>
				<text class="smallSize huise" >月售730</text>
			</view>
			<view class="flexBetween marginTm">
				<view class="flexStart">
					<view class="flexAltum flexend">
						<text class="red fontSize-34 bold">￥{{inforDate.price}}</text>
					</view>
					<view class="flexAltum flexend">
						<text class="huise smallSize">打包费￥2.5/1份</text>
					</view>
				</view>
				<view >
					<button class="sameBgColor black"  size="mini">选规格</button>
				</view>
			</view>
		</view>
		<view class="content marginTm">
			<view>
				<text class="bold fontSize">商品详情</text>
			</view>
			<view>
				<view class="flexBetween marginTm">
					<view class="huise middeSize good_box">
						<text>掌柜描述:</text>
					</view>
					<view class="middeSize good_Des">
						<text>好吃的白i按时间多久啊是大盘怕怕的爬上坡帕金斯大家安排破案手机点击安排时间怕就怕手机的普及啊</text>
					</view>
				</view>
			</view>
		</view>
		<view class="content marginTm">
			<view>
				<text class="bold fontSize">商品评价</text>
			</view>
			<view>
				<view class="flexBetween marginTm">
					<view class="huise middeSize good_box">
						<text>掌柜描述:</text>
					</view>
					<view class="middeSize good_Des">
						<text>好吃的白i按时间多久啊是大盘怕怕的爬上坡帕金斯大家安排破案手机点击安排时间怕就怕手机的普及啊</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular:true,
				bannerList:[
					{
						img: '../../static/img/defult.jpg'
					},
					{
						img: '../../static/img/defult.jpg'
					},
					{
						img: '../../static/img/defult.jpg'
					}
				],
				inforDate:{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
			}
		},
		onLoad(params){
			// this.inforDate = JSON.parse( params.info)
			console.log(this.inforDate)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.banner{
	width:100%;
	height: 450rpx;
}
.swiper{
	width:100%;
	height:100%
}
.swiper_img{
	width:100%;
	height: 100%;
}
/*改变swiper指示点位置*/
.wx-swiper-dots{position:relative;margin-bottom: 50rpx;} 
.content{
	width:90%;
	padding: 10px 5%;
	background-color: #fff;
}
.hui_box{
	padding: 5rpx;
	border-radius: 10rpx;
}
.black{
	color: #000000;
	font-weight: bold;
}
.red{
	color: red;
}
.good_box{
	width:150rpx
}
.good_Des{
	width: 600rpx;
	line-height: 20px;
}
</style>
