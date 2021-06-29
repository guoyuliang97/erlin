<template>
	<view>
		<view class="sameHuise content">
			<view>
				<view class="shop_li" v-for="(item,index) in shopCart" :key="index">
					<view class='flexStart'>
						<view class="flexLineCenter">
							<view @tap="chooseHouse(item)" class="ok flexLineCenter " :class="[isAll? 'sameBgColor':'']">
								<uni-icons type="checkmarkempty" size="20" :color="isAll ? '#000':'#fff' " class="checkColor"></uni-icons>
							</view>
						</view>
						<view class="margin-left-15">
							<text class='fontSize bold'>{{item.shopName}}</text>
						</view>
						<view class="margin-left-10">
							<uni-icons type="arrowright" size="15" color="#000" class="checkColor"></uni-icons>
						</view>
					</view>
					<label class="red_box flexStart mainColor marginTs margin-left-55" style="text-align: center;padding-left: 15rpx; border-radius: 5px;" :style="{width: item.manJian.length * 60 +'px' }">
						<label class="flexStart" v-for="(i,d) in item.manJian" :key="d">
							<text class="smallSize ">{{i.mess}}</text>
							<label class="flexLineCenter marginLeft marginRight" v-if=" d != (item.manJian.length-1)">
								<label  class="line_y"></label>
							</label>
						</label>
					</label>
					<view v-for="(items,indexs) in arr" :key="indexs">
						<view class="flexStart marginTm">
							<view class="flexLineCenter">
								<view @tap="chooseLi(items)" class="ok flexLineCenter "  :class="[isAll? 'sameBgColor'  : items.isChoose ? 'sameBgColor':'']" >
									<uni-icons type="checkmarkempty" size="20" :color="isAll ? '#000' : items.isChoose ? '#000':'#fff'" class="checkColor"></uni-icons>
								</view>
							</view>
							<view class="flexBetween margin-left-15">
								<view class="shop_img">
									<Loadimg :imgurl="items.img"></Loadimg>
								</view>
								<view class="margin-left-10 flexAltum mid_box">
									<view>
										<text v-if="items.isDiscuont" class="dicuss smallSize ">折</text>
										<text class="middeSize margin-left-10">{{items.title}}</text>
									</view>
									<view>
										<text class="smallSize huise">x{{items.num}}</text>
									</view>
								</view>
								<view class="flexend end_box">
									<view class="relative  flexLineCenter">
										<text class="smallSize huise ">{{'￥' +items.price_origin}}</text>
										<view class="delete_line">
											<view class="line"></view>
										</view>
									</view>
									<view class="flexLineCenter">
										<text class="smallSize sameColor">{{'￥'+items.price}}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="border_line"></view>
					</view>
					<view class="flexend ">
						<view class="fontSize flexLineCenter ">
							<text class="price_box sameBgColor">￥{{total}}</text>
						</view>
						<view v-if="15- total> 0" class="flexLineCenter">
							<text class='fontSize price_loa huise_low' >差￥{{  (15 - total).toFixed(2)}}起送</text>
						</view>
						<view v-else class="flexLineCenter">
							<text class="fontSize price_loa sameHuise">去结算</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Loadimg from '../image/image'
	export default {
		data() {
			return {
				isAll: false, //全选
				arr:[
					{
						shopName: '云南泡脚',
						img: '../../static/img/defult.jpg',
						title: '云南美女',
						isDiscuont: true,
						price: 6.8,
						price_origin: 9.6,
						num: 1,
						isChoose: false
					},
					{
						shopName: '云南泡脚',
						img: '../../static/img/defult.jpg',
						title: '云南美女',
						isDiscuont: true,
						price: 6.8,
						price_origin: 9.6,
						num: 1,
						isChoose: false
					},
					{
						shopName: '云南泡脚',
						img: '../../static/img/defult.jpg',
						title: '云南美女',
						isDiscuont: true,
						price: 6.8,
						price_origin: 9.6,
						num: 1,
						isChoose: false
					}
				],
				shopCart:[
					{
						shopName: '云南泡脚',
						img: '../../static/img/defult.jpg',
						title: '云南美女',
						isDiscuont: true,
						price: 6.8,
						price_origin: 9.6,
						num: 1,
						manJian:[
							{
								mess: '30减10'
							},
							{
								mess: '50减20'
							},
							{
								mess: '100减40'
							}
						],
						total: '9',
						cha_price: '16.2',
						isChoose:false
					}
				]
			}
		},
		computed:{
			total(){
				var total = 0
				this.arr.forEach(item => {
					if(item.isChoose){
						total += item.price
					}
				})
				return total
			}
		},
		components:{
			Loadimg,
		},
		methods: {
			//全选
			chooseHouse(item,index){
				item.isChoose =  !item.isChoose
				this.isAll = !this.isAll
				this.arr.forEach(item => {
					item.isChoose = this.isAll 
				})
			},
			//单选
			chooseLi(item,index){
				item.isChoose = !item.isChoose
				var isAll = true
				this.arr.forEach(item => {
					if(!item.isChoose){
						isAll = false
					}
				})
				this.isAll = isAll
			}
			
		}
	}
</script>

<style scoped>
.content{
	padding: 20rpx;
}
.ok{
	width:40rpx;
	height:40rpx;
	border-radius: 50%;
	border: 1px solid #eee;
	
}
.checkColor{
	text-align: center;
}
.shop_li{
	padding: 20rpx;
	background-color: #fff;
	border-radius: 10px;
}
.line_y{
	width:1px;
	height: 10px;
	background-color: red;
	transform: scaleX(0.5);
}
.shop_img{
	width:100rpx;
	height:100rpx
}
.mid_box{
	width: 350rpx;
}
.end_box{
	width: 150rpx
}
.dicuss{
	padding: 5rpx;
	background-color: red;
	color:#fff;
	border-radius: 5px;
}
.price_box{
	padding: 20rpx;
	border-top-left-radius: 10rpx;
	border-bottom-left-radius: 10rpx;
	color:#000 !important;
	font-weight: bold;
}
.price_loa{
	padding: 20rpx;
	border-top-right-radius: 10rpx;
	border-bottom-right-radius: 10rpx;
}
.huise_low{
	background-color: #999;
	color: #fff
}
</style>
