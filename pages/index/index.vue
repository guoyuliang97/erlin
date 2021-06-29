<template>
	<view>
		<!-- 城市设置 -->
		<Head :isHome="true" @toSearch="toSearch"></Head>
		<!-- 首页轮播 -->
		<view class="banner" :style="{marginTop: scrollTop  +'px'}">
			<swiper class="swiper" :circular="circular" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerList" :key="item.id" >
					<image mode="scaleToFill" :src="item.img" class="swiper_img"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view  class="content">
			<view>
				<!-- 栏目排列 -->
				<view>
					<scroll-view class="swiper_fenlei " scroll-x="true"     >
						<view class="fenlei_box" v-for="(item,index) in fenleiList" :key="index">
							<view class="flexCenter">
								<view class="iconfont icon-leimupinleifenleileibie">
								</view>
							</view>
							<view class="alignCenter middeSize marginTs">
								<text>{{item.name}}</text>
							</view>
						</view>
					</scroll-view>
				</view>
				
				<!-- 板块分类 -->
				<view v-if="priceDiscunt.length" class="active_fast">
					<view class="marginT" @tap="toEspecia">
						<view class="relative heigt"  v-if="priceDiscunt.length == 1" >
							<loadImg :imgurl="tehui1" type="home_discount"></loadImg>
							<view class="discunt_price middeSize">
								<view>
									<text>CLASSIC</text>
								</view>
								<view class="marginTs">
									<text>{{priceDiscunt[2].title }}</text>
								</view>
							</view>
						</view>
						<view class="flexBetween"  v-else-if="priceDiscunt.length == 2">
							<view class="highAct relative heigt">
								<loadImg  :imgurl="tehui1" type="home_discount"></loadImg>
								<view class="discunt_price middeSize">
									<view>
										<text>CLASSIC</text>
									</view>
									<view class="marginTs">
										<text>{{priceDiscunt[2].title }}</text>
									</view>
								</view>
							</view>
							<view class="highAct relative heigt"  >
								<loadImg  :imgurl="tehui2" type="home_discount"></loadImg>
								<view class="discunt_price middeSize">
									<view>
										<text>CLASSIC</text>
									</view>
									<view class="marginTs">
										<text>{{priceDiscunt[2].title }}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="flexBetween heigt"  v-else="priceDiscunt.length == 3">
							<view class="highAct relative">
								<loadImg  :imgurl="tehui1" type="home_discount"></loadImg>
								<view class="discunt_price middeSize">
									<view>
										<text>CLASSIC</text>
									</view>
									<view class="marginTs">
										<text>{{priceDiscunt[2].title }}</text>
									</view>
								</view>
							</view>
							<view class="highAct flexAltum" >
								<view class="relative" style="width:100%;height:49%">
									<loadImg  :imgurl="tehui2" type="home_discount"></loadImg>
									<view class="discunt_price middeSize">
										<view>
											<text>CLASSIC</text>
										</view>
										<view class="marginTs">
											<text>{{priceDiscunt[2].title }}</text>
										</view>
									</view>
								</view>
								<view class="relative" style="width:100%;height:49%;margin-top: 2%">
									<loadImg :imgurl="tehui3" :type="home_discount"></loadImg>
									<view class="discunt_price middeSize">
										<view>
											<text>CLASSIC</text>
										</view>
										<view class="marginTs">
											<text>{{priceDiscunt[2].title }}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				<!-- 商品列表 -->
				<view class="active_fast sameHuise">
					<view class="marginTm">
						<text class="fontTitleNew fontTitleNewColor fontWeightNew">商品列表</text>
					</view>
					<view class="flexBetween marginTm">
						<view class="flexCould">
							<view  class="shop-li " @tap="toGoods(item,index)" v-for="(item,index) in shopList1" :key="index" >
								<detail type="home"  :infoData="item"></detail>
							</view>
						</view>
						<view class='flexCould'>
							<view  class="shop-li "  @tap="toGoods(item,index)"  v-for="(item,index) in shopList2" :key="index" >
								<detail type="home"  :infoData="item"></detail>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from '../header/header'
	// import Loading from '../loading/loading'
	import loadImg from '../image/image'
	import detail from '../detail/detail'
	export default {
		data(){
			return{
				search:'',
				scrollTop:'',
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
				fenleiList:[
					{
						name: '日用百货'
					},
					{
						name: '日用百货'
					},
					{
						name: '日用百货'
					},
					{
						name: '日用百货'
					},
					{
						name: '日用百货'
					}
				],
				localPlace:'眉山',
				priceDiscunt:[
					{
						img: '../../static/img/defult.jpg',
						title:'30分钟速递'
					},
					{
						img: '../../static/img/defult.jpg',
						title:'30分钟速递'
					},
					{
						img: '../../static/img/defult.jpg',
						title:'30分钟速递'
					}
				],
				shopList1:[
					
				],
				shopList2:[
					
				],
				arr:[{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						describe:'安徽岛上的',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					},
					{
						img: '../../static/img/defult.jpg',
						title:'小叮当',
						price: '19.9',
						adress: '4.7km',
						price_origin: '40',
						discount: 5,
					}
					]
		
			}
		},
		components:{
			loadImg,
			detail,
			Head
		},
		computed:{
			// isLoading(){
			// 	var isLoad = this.states.isLogin ? ((this.isPop && this.isHight && this.isDis && this.isSoon )? false:true ) : ((this.isPop && this.isHight && this.isDis) ? false:true)
			// 	return isLoad
			// }
		},

		mounted(){
			
		},
		onLoad(params){ 
		
			if(("undefined" !== typeof(params.top_user_id))&&params.top_user_id>0){
				uni.setStorageSync('top_user_id', params.top_user_id) 
			} 
			this.scrollTop = uni.getStorageSync('statusBar')
			
		},
		onShow(){
			this.deelList()
		},  
		onReachBottom(e) {
			this.arr = [...this.arr,...this.arr]
			this.deelList()
		},
		methods: {
			//分类列表
			deelList(){
				
					
				this.arr.forEach((item,index) => {
					if(index%2 == 0){
						this.shopList2.push(item)
					}else{
						this.shopList1.push(item)
					}
				})
				console.log(this.shopList2,this.shopList1)
			},
			//储存TOKEN
			getToken(){
				let That = this
				this.$axios('/home/Index/token','','post').then(res=>{
					uni.setStorage({
						key:'rrsToken',
						data:res.data,
						success(){
							That.getSwiper()	
						}
					})
				})
			},
			//获取当前信息
			getNowInfor(){
				const that = this
				uni.getLocation({
					type:'gcj02',
					success(res){
						that.$QQmap.reverseGeocoder({
							location:{
									latitude: res.latitude,
									longitude: res.longitude
								},
								success(res){
									that.localPlace = res.result.ad_info.city
								},	   
						})
					}
				})
				var dataTime = new Date()
				var month = dataTime.getMonth() + 1
				var day = dataTime.getDate()
				var nextDay = day +1
				that.localTime = month + '月' + day + '日' + '—'+month + '月' + nextDay + '日'
				
			},
			//查看商品详情
			toGoods(item,index){
				uni.navigateTo({
					url: '../../pagesA/goodsPage/goodsPage?info=' + JSON.stringify(item) ,
					animationDuration: 200,
					animationType: 'fade-in'
				})
			},
			//前往搜索
			toSearch(){
				uni.navigateTo({
					url: '../../pagesA/searchPage/searchPage',
					animationDuration: 200,
					animationType: 'fade-in'
				})
			},
			
			//获取首页轮播图片
			getSwiper(){
				var params = {
					flag: 0,
				}
				this.$axios('/home/Banner/bannerlist',params,'post').then(res=>{
					if(res.code == 1){
						var data = res.data
						this.bannerList = data
						this.getSoonAct()
						this.getPopPlace()
						this.getDiscount()
						this.getFastAct()
						this.getSelectStory()
					}else if(res.code == 3 || res.code == 2){
						this.getSwiper()
					}
				})
			},
			//获取热门地点
			getPopPlace(){
				var params = {
					version:2.0
				}
				this.$axios('/ScoreHighCityTwo',params,'post').then(res=>{
					var data = res.data
					this.popPlace = data
					this.getHighAct()
					this.isPop = true
				})
			
			},
			scroll(e){
				
			},
			//点击热门地点事件
			choosePlace(item,index){
				if(this.clickIndex != index){
					this.clickIndex = index
					this.getHighAct()
				}
				
			},
			//高分体验
			getHighAct(){
				var params = {
					per_page:4
				}
				params.city = this.popPlace[this.clickIndex].city
				this.$axios('/ActivityListUserTwo',params,'post').then(res=>{
					var data = res.data.data
					this.highList = data
					this.isHight = true
				})
			},
			// 精选故事
			getSelectStory() {
				var params = {
					sort: '2',
					page: '1',
					kind_id: '',
					country: '',
					province: '',
					city: '',
					region: '',
					keywords: '',
				}
				this.$axios('/home/Story/story_list', params, 'post').then(res => {
					var data = res.data.data
					this.storyList = data;
				})
			},
			//即将开始体验
			getFastAct(){
				var params = {}
				params.per_page = 6
				params.page = 1
				params.version = 2.0
				var nowTime=Math.round(new Date() / 1000)
				this.$axios('/SoonActTwo',params,'post').then(res=>{
					var data = res.data.data
					data.forEach((item, index) =>{
						var begin_time=new Date(parseInt(data[index].begin_time*1000))
						if(item.begin_time-nowTime<86400){
							//显示时分秒 
							console.log(begin_time)
							data[index].begin_time=(begin_time.getHours()<10?'0'+begin_time.getHours():begin_time.getHours()) + ':'+ (begin_time.getMinutes()<10?'0'+begin_time.getMinutes():begin_time.getMinutes()) + ':'+(begin_time.getSeconds()<10?'0'+begin_time.getSeconds():begin_time.getSeconds()) 
						}else{
							//显示年月日 
							data[index].begin_time=(begin_time.getMonth()< 10 ? '0'+(begin_time.getMonth()) : begin_time.getMonth()) + '/'+(begin_time.getDate()< 10 ? '0'+(begin_time.getDate()) : begin_time.getDate())  + '/'+ (begin_time.getFullYear()<10?'0'+begin_time.getFullYear():begin_time.getFullYear())
						}
						
					})

					this.fastList = data
					this.isFast = true
				})
			},
			//获取历史纪录
			getSoonAct(){
				var params = {}
				params.per_page = 6
				params.page = 1
				params.version = 2.0
				this.$axios('/VisitListTwo',params,'post').then(res=>{
					var data = res.data.data
					this.soonList = data
					this.isSoon = true
				})
			},
			//查看活动详情
			chooseAct(item,index){
				var active_id = item.activity_id ? item.activity_id:item.table_id
				uni.showLoading({
					title:'加载中...',
					mask:false
				})
				uni.navigateTo({
					url:'/pages/publishPage/publishPage?act_id=' + active_id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			//查看故事详情
			chooseStory(item, index){
				var story_id = item.story_id ? item.story_id : item.table_id
				uni.navigateTo({
					url:'/pages/publishStory/publishStory?story_id=' + story_id,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			goSearch(val){
				var city = val ? val : ''
				uni.navigateTo({
					url: '/pages_A/searchPage/searchPage?city='+ city,
					animationDuration: 200,
					animationType: 'fade-in'
				})
			},
			//获取特惠体验
			getDiscount(){
				var params = {
					verson:2.0
				}
				this.$axios('/DiscountTwo',params,'post').then(res=>{
					var data = res.data
					this.priceDiscunt = data
					this.isDis = true
				})
			}
		},
		onShareAppMessage(e) {
			let that=this;
			let title=that._data.title;
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由 
			let user_id=0;
			if(that._data.states){ 
				user_id =that._data.states.userId 
			}
/* 		    const promise = new Promise(resolve => {
		      setTimeout(() => {
		        resolve({
		          title: title
		        })
		      }, 2000)
		    }) */
		    return {
		      title: title,
		      path: curRoute+'?top_user_id='+user_id, 
		    }
		  },
		  onShareTimeline() {
				let that=this;
				let title=that._data.title; 
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route //获取当前页面路由 
				let user_id=0;
				if(that._data.states){ 
					user_id =that._data.states.userId 
				} 
              	return {
                          title:title,
                          path: curRoute+'?top_user_id='+user_id,
                          imageUrl: '../../static/img/sy2.png',
                      }
		          },
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
		position: absolute;
		width:100%;
		z-index:2;
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
		margin-top: -40rpx;
		overflow: hidden;
		padding: 20rpx 0
	}
	.search{
		width: 80%;
		margin: 20px auto 0;
		padding: 10px 5%;
		border-radius: 12rpx;
		box-shadow: 0px 0px 51px 0px rgba(193, 199, 207, 0.45);
		
	}
	.active_fast{
		width: 90%;
		margin: 50rpx auto;
	}
	.swiper_fenlei{
		width: 90%;
		white-space: nowrap;
		overflow: hidden;
		margin: 10px auto
	}
	.fenlei_box{
		display: inline-block;
		width: 150rpx;
		margin-right: 10px
	}
	.shop-li{
		border: 1px solid #eee;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0 0 5px 2px #E8E8E8;
		margin-bottom: 10px;
	}
	.flexCould{
		width:49%;
		display: flex;
		flex-direction: column;
	
	}
	.hover_btn{
		display: inline-block;
		background-color: #14C5CA;
		color:#fff
	}
	.nomal_btn{
		display: inline-block;
		background-color: #F5F7FA;
		color:#000
	}
	.highAct{
		width:49%
	}
	.border_btm{
		padding: 20rpx 0;
		border-bottom: 1px solid #CACACA;
	}
	.discunt_price{
		position: absolute;
		top:10rpx;
		left:10rpx;
		z-index:1;
		color:#fff;
		margin:28rpx 0 0 28rpx;
		
	}
	.heigt{
		height: 400rpx
	}
</style>
