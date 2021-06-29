<template>
	<view>
		<Head :isHome="false" @changeShop="changeShop"></Head>
		<view class=" flexStart " :class="[isTrue ? 'sameWhite':'sameHuise']" :style="{marginTop: scrollTop  +'px'}">
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
						<detail  :type="isTrue ? 'classify_shop':'classify'" :infoData="item"></detail>
					</view>
					<view v-if="isAdd" class="alignCenter huise">
						<text class="smallSize">已经到底部了...</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import detail from '../detail/detail'
	import Head from '../header/header'
	export default {
		data() {
			return {
				localPlace:'商家',
				scrollTop:'',
				isAdd:false,
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
				height:'',
				isChoose: 0,
				top:0,
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
				
					old:{
						scrollTop:0
					},
					isTrue:false
			}
		},
		components:{
			Head,
			detail
		},
		onLoad() {
			this.height = uni.getStorageSync('elHeight') - uni.getStorageSync('statusBar')-20
			this.scrollTop = uni.getStorageSync('statusBar')
		},
		methods: {
			changeShop(e){
				this.isTrue = e
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
			}
		}
	}
</script>

<style scoped>

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
</style>
