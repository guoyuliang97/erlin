<template>
	<view style="width: 100%;height: 100%;"> 
		<view v-if="type == 'home'" class="homeDetail">
			<view class="img">
				<Loadimg :imgurl="infoData.img" ></Loadimg>
			</view>
			<view class="sameWhite">
				<view>
					<text class="middeSize bold">{{infoData.title}}</text>
				</view>
				<view>
					<text class="smallSize">{{infoData.describe}}</text>
				</view>
				<view>
					<text class="smallSize">{{infoData.adress}}</text>
				</view>
				<view class="flexStart">
					<view class="flexLineCenter">
						<text class="smallSize sameColor">{{'￥'+infoData.price}}</text>
					</view>
					<view class="relative marginLeft flexLineCenter">
						<text class="smallSize huise ">{{'￥' +infoData.price_origin}}</text>
						<view class="delete_line">
							<view class="line"></view>
						</view>
					</view>
					<view class="flexLineCenter box_line marginLeft">
						<text class=" smallSize sameColor ">{{infoData.discount}}折</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="type == 'classify'" class="flexStart">
			<view class="classify_img">
				<Loadimg :imgurl="infoData.img" ></Loadimg>
			</view>
			<view class="marginLeft flexAltum">
				<view>
					<view>
						<text class="middeSize bold">{{infoData.title}}</text>
					</view>
					<view>
						<text class="smallSize">{{infoData.describe}}</text>
					</view>
				</view>
				<view class="flexStart">
					<view class="flexLineCenter">
						<text class="smallSize sameColor">{{'￥'+infoData.price}}</text>
					</view>
					<view class="relative  flexLineCenter">
						<text class="smallSize huise ">{{'￥' +infoData.price_origin}}</text>
						<view class="delete_line">
							<view class="line"></view>
						</view>
					</view>
				<!-- 	<view class="flexLineCenter box_line marginLeft">
						<text class=" smallSize sameColor ">{{infoData.discount}}折</text>
					</view> -->
					<view class="sameBgColor marginLeft border_radius">
						<text class="smallSize">加入购物车</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="type == 'classify_shop'" class="flexStart shop_box">
			<view class="shop_img">
				<Loadimg :imgurl="infoData.img" ></Loadimg>
			</view>
			<view class="marginLeft shop_info">
				<view>
					<text class="middeSize bold">{{infoData.title}}</text>
				</view>
				<view class="flexBetween marginT-10">
					<view class="flexStart">
						<view class="sameColor flexStart ">
							<view class='flexLineCenter'>
								<view class="iconfont icon-shoucang smallSize "></view>	
							</view>
							<view class="margin-left-5 flexLineCenter">
								<text class="smallSize">{{infoData.score}}</text>
							</view>
						</view>
						<view class="margin-left-10 flexLineCenter">
							<text class="smallSize">月售{{infoData.number}}</text>
						</view>
					</view>
					<view class="flexStart">
						<view class="flexLineCenter">
							<text class="smallSize">{{infoData.time}}分钟</text>
						</view>
						<view class="flexLineCenter margin-left-10">
							<text class="smallSize ">{{infoData.adress}}</text>
						</view>
					</view>
				</view>
				<view class="flexStart marginT-10">
					<view class="flexLineCenter">
						<text class="smallSize">起送￥{{infoData.price}}</text>
					</view>
					<view class="flexLineCenter">
						<text class="smallSize margin-left-10">配送￥{{infoData.low_pice}}</text>
					</view>
				</view>
				<view class="sameColor marginT-10">
					<text class="smallSize box_comment sameBgColor ">{{'"'+ infoData.coment+'"'}}</text>
				</view>
				<view class="marginT-5">
					<text class="smallSize red_box mainColor">{{infoData.discus}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Loadimg from '../image/image'
	export default {
		props:['infoData','type'],
		data() {
			return {
				
			}
		},
		components:{
			Loadimg
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.img{
	width: 100%;
	height: 300rpx
}
.classify_img{
	width: 40%;
	height: 150rpx
}
.shop_img{
	width:150rpx;
	height: 125rpx
}
.shop_box{
	padding: 20rpx;
}
.shop_info{
	width:365rpx;
}

.sameWhite{
	background-color: #fff;
	padding: 20rpx;
}

.line{
	width:30px;
	height:1px;
	background-color: #999;
/* 	transform: rotate(15deg); */
}
.delete_line{
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
}
.border_radius{
	padding: 2px 5px;
	border-radius: 10px;
	color:#000
}
.box_comment{
	padding: 2px 5px;
	border-radius: 5px;
}
</style>
