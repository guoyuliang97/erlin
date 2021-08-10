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
				<view class="flexStart bold fontSize-30">
					<view class="marginRight Padding-6" @tap="changeTab(item,index)" :class="[clickIndex == index ? 'btm_line':'sameColorHui']" v-for="(item,index) in tabbarList" :key="index">
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="marginTm">
				<swiper  class="tab_box" :current="current"  :style="{height: swiperHeight +'px'}" >
					<swiper-item class="inlier_box">
						<view class="flexStart" >
							<view class="title_box">
								<scroll-view scroll-y="true" class="sameHuise" @scrolltolower="scrollTitle" :style="{height: swiperHeight + 'px'}">
									<view @tap="chooseTitle(item,index)" class="title_li middeSize" :class="[isChoose == index ? 'sameWhite':'']" v-for="(item,index) in titleList" :key="index">
										<text>{{item.title}}</text>
									</view>
								</scroll-view>
							</view>
							<view class="shop_box sameWhite" >
								<scroll-view scroll-with-animation scroll-y="true" @scroll="scroll" lower-threshold="100"   @scrolltolower="scrollShop" :scroll-top="top"  :style="{height: swiperHeight + 'px'}">
									<view class="shop_li" v-for="(item,index) in shopList" :key="index">
										<detail @tap="toChild(item,index)" type="classify" :infoData="item"></detail>
									</view>
									<view v-if="isAdd" class="alignCenter huise">
										<text class="smallSize">已经到底部了...</text>
									</view>
								</scroll-view>
							</view>
						</view>
					</swiper-item>
					<swiper-item class="inlier_box sameHuise">
						<scroll-view scroll-y="true"  :style="{height: swiperHeight + 'px'}">
							<view class=" score marginTm flexBetween sameColorHui">
								<view class="alignCenter">
									<view class="fontsize-50  sameColor">
										<text >4.8</text>
									</view>
									<view class="fontSize-20">
										<text >商家评分</text>
									</view>
								</view>
								<view class="middeSize">
									<view class="flexStart">
										<view class="flexLineCenter">
											<text>口味</text>
										</view>
										<view class="marginLeft">
											<rate type="1" score="4.8"></rate>
										</view>
									</view>
									<view class="flexStart marginT-10">
										<view class="flexLineCenter">
											<text>包装</text>
										</view>
										<view class="marginLeft">
											<rate type="1" score="4.8"></rate>
										</view>
									</view>
								</view>
								<view class='border_left alignCenter'>
									<view class="fontsize-50">
										<text>5</text>
									</view>
									<view class="fontSize-20">
										<text>配送评分</text>
									</view>
								</view>
							</view>
							<view class="marginTm sameWhite Padding-20 flexNow ">
								<text class="discus_li smallSize marginRight marginTm" v-for="(item,index) in tabDiscus" :key="index">
									{{item.name}}
								</text>
							</view>
							<view class="marginTm sameWhite Padding-20 flexNow ">
								<view class="fontSize bold">
									<text>商家评价</text>
								</view>
								<view>
									<view class="flexStart marginTm">
										<view class="shop_dicuss_img">
											<loadImg :imgurl="img" type="home_discount"></loadImg>
										</view>
										<view class="middeSize shop_disucs marginLeft">
											<view class="flexBetween">
												<view >
													<view class="bold middeSize">
														<text>ctsb654654</text>
													</view>
													<view class="marginT-10 flexStart smallSize sameColorHui">
														<rate score="5" type="2"></rate>
														<view class="flexLineCenter">
															<text>30分钟送达</text>
														</view>
													</view>
												</view>
												<view class=" smallSize sameColorHui">
													<text>2021.07.12</text>
												</view>
											</view>
											<view class="marginTs number_breck">
												<text>好吃的白i按时间多久啊是大盘怕怕的爬上坡帕金斯大家安排破案手机点击安排时间怕就怕手机的普及啊</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
						
					</swiper-item>
				</swiper >
			</view>
			
		</view>
	</view>
</template>

<script>
	import rate from '../../pages/ratePage/ratePage'
	import detail from '../../pages/detail/detail'
	import Head from '../../pages/publicHead/publicHead'
	import loadImg from '../../pages/image/image'
	export default {
		data() {
			return {
				img:'',
				tabbarList:[
					{
						name: '商品'
					},
					{
						name: '评价'
					}
				],
				clickIndex:0,
				titleList:[
					{
						title: '外卖配送'
					},
					{
						title: '美团优选'
					},
					{
						title: '电商购物'
					},
					{
						title: '美食餐饮'
					},
					{
						title: '休闲娱乐'
					},
					{
						title: '酒店旅游'
					},
					{
						title: '交通出行'
					},
					{
						title: '丽人医美'
					},
					{
						title: '生活服务'
					},
				],
				shopList:[
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					
				],
				height:300,
				current:0,
				swiperHeight:'',
				old:{
					scrollTop:0
				},
				isChoose:0,
				arr : [{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						price_origin: '40',
						discount: 5,
						score:4.2,
						number: 80,
						time:30,
						adress: '4.7km',
						low_pice: '15',
						coment: '哈哈哈，真好吃',
						discus: '首单立减6元'
						
					},],
					top:0,
					tabDiscus: [
						{
							name: '全部(1000)'
						},
						{
							name: '有图(120)'
						},
						{
							name: '好评(800)'
						},
						{
							name: '差评(120)'
						},
						{
							name: '满意(110)'
						},
						
					
					]
			}
		},
		components:{
			loadImg,
			Head,
			detail,
			rate
		},
		onLoad(){
			var height = uni.getStorageSync('elHeight')
			this.swiperHeight = height - 100 - 110-27-15
		},
		methods: {
			changeTab(item,index){
				this.clickIndex = index
				this.current = index
			},
			scroll(e){
				this.old.scrollTop = e.detail.scrollTop
			},
			//选择栏目
			chooseTitle(item,index){
				this.isChoose = index
				this.shopList = this.arr
				this.changeScrool()
			},
			//改变 scroll
			changeScrool(){
				this.top = this.old.scrollTop
				this.$nextTick(function() {
					this.top = 0
				});
			},
			scrollTitle(){
				
			},
			scrollShop(e){
				this.getMoreShop()
			},
			getMoreShop(){
				if(this.shopList.length > 20){
					this.isChoose += 1 
					this.shopList = this.arr
					this.changeScrool()
				}else{
					this.shopList = [...this.shopList,...this.arr]
				}
			},
		}
	}
</script>

<style scoped>
.shop_img{
	width:100%;
	height: 100px;
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
	left:3%;
	right:3%;
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
	width:94%;
	margin: 110px auto 0
}

.title_box{
	width:200rpx;
}
.shop_box{
	width:535rpx;
	padding: 20rpx;
}
.title_li{
	text-align: center;
	padding: 20px 0
}
.title_li:last-child{
	margin-bottom: 200px;
}
.shop_li{
	margin-bottom: 20rpx;
	
}
.classify_shop_li{
	height: 310rpx;
	border: 1px solid #eee;
	border-radius: 10px;
	background-color: #fff;
	margin-bottom: 10px;
}
.tab_box{
	height:435px
}
.inlier_box{
	display: inline-block;
	width: 750rpx;
	height:500px
}
.score{
	width:90%;
	padding: 20rpx 5%;
	background-color: #fff;
}
.border_left{
	border-left:  1px solid #eee;
	padding: 0 0 0 5%;
}
.flexNow{
	display: flex;
	flex-wrap: wrap;
	
}
.discus_li{
	padding: 5px 10px;
	border: 1px solid #eee;
	border-radius: 5px;
}
.shop_dicuss_img{
	width:80rpx;
	height:80rpx
}
.shop_disucs{
	width:570rpx
}
</style>
