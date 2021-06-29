<template>

	<view style="width:100%;height:100%">
		<image  class="img" :src="imgSrc" @error="loadfalse" lazy-load="true" :mode="type=='home_discount'?'aspectFill':'scaleToFill'"></image>
	</view>
</template>

<script>
	export default {
		props:[
			'imgurl','type'
		],
		data() {
			return {
				imgSrc:"",
				defaultImg:'../../static/img/defult.jpg'
			}
		},
		watch:{
			imgurl(){
				this.imgSrc = this.imgurl ? this.imgurl : this.defaultImg
			}
		},
		mounted(){
			this.imgSrc = this.imgurl ? this.imgurl : this.defaultImg
		},
		methods: {
			// loadOver(){
			// 	console.log(2)
			// 	this.defaultImg = this.imgurl ?  this.imgurl  : this.defaultImg 
			// },
			loadfalse(){
				this.imgSrc = this.defaultImg
			}
		},
		
		
	}
</script>

<style scoped>
.img{
	width:100%;
	height: 100%;
	border-radius: 10rpx;

}
</style>
