<script>
	export default {
		onLaunch: function() {
			this.getInfo()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			getInfo(){
				uni.getSystemInfo({
					success(res){
						console.log(res.windowHeight) // 高度
						console.log(res.windowWidth)  // 宽度
						uni.setStorage({
							key:'elHeight',
							data:res.windowHeight
						})
						var top = Number( res.statusBarHeight) + 39
						uni.setStorage({
							key:'statusBar',
							data:top
						})
					}
				})
				
			},
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/css/iconfont.css");
	/*每个页面公共css */
	
	.flexStart{
		display: flex;
		justify-content: flex-start;
	}
	.flexBetween{
		display: flex;
		justify-content: space-between;
	}
	.flexAltum{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.flexCenter{
		display: flex;
		justify-content: center;
	}
	.flexLineCenter{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.flexWap{
		display: flex;  
		flex-flow: column wrap;
		
	}
	.marginB-20{
		margin-bottom: 20rpx;
	}
	.flexend{
		display: flex;
		justify-content: flex-end;
	}
	.smallSize{
		font-family: '微软雅黑';
		font-size: 24rpx;
	}
	.middeSize{
		font-family: '微软雅黑';
		font-size: 26rpx;
	}
	.fontSize{
		font-family: '微软雅黑';
		font-size: 28rpx;
	}
	
	.fontTitle{
		font-family: '微软雅黑';
		font-size: 36rpx;
	}
	.sameBgColor{
		color:#fff;
		background-color: #ffc107;
	}
	.sameWhite{
		background-color: #fff;
	}
	.homebg{
		background-color: #ffc107;
	}
	.sameCityColor{
		color: #127D80
	}
	.detailColor{
		background-color: #EEFFFF
	}
	.sameColor{
		color: #ffc107
	}
	.mainColor{
		color: red
	}
	.red_box{
		border: 1px solid red;
		border-radius: 5rpx;
	}
	.sameHuise{
		background-color: #F5F7FA;
	}
	.huise{
		color:#999
	}
	.box_line{
		border: 1px solid #ffc107;
		border-radius: 5rpx;
		height: 15px;
	}
	.sameNmColor{
		color:#626467
	}
	.sameRed{
		color: red;
	}
	.sameColorHui{
		color:#999999
	}
	.border_box{
		border: 2px solid #ffc107;
		border-radius: 5px
	}
	.fontWeight{
		font-weight: 400;
	}
	.smallIcon{
		width:30rpx;
		height: 30rpx;
	}
	.smallIconM{
		width:40rpx;
		height: 40rpx;
	}
	.IconM{
		width:60rpx;
		height: 60rpx;
	}
	.imgCenter{
		vertical-align:middle
	}
	.marginLefts{
		margin-left: 10rpx
	}
	.marginLeft{
		margin-left: 20rpx
	}
	.margin-left-5{
		margin-left: 5rpx;
	}
	.margin-left-10{
		margin-left: 10rpx;
	}
	.margin-left-15{
		margin-left: 15rpx;
	}
	.margin-left-55{
		margin-left: 55rpx;
	}
	.marginL{
		margin-left:  40rpx ;
	}
	.marginRight{
		margin-right: 20rpx;
	}
	.marginTs{
		margin-top: 10rpx
	}
	.marginT-5{
		margin-top: 5rpx;
	}
	.marginT-10{
		margin-top: 10rpx;
	}
	.marginTm{
		margin-top: 30rpx;
	
	}
	.marginT{
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}
	.marginB{
		margin-bottom: 50rpx;
	}
	.pop_btn{
	
		font-size: 30rpx;
		height: 80rpx
	}
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    background: transparent;  
	    -webkit-appearance: none;  
	   
	}
	.relative{
		position: relative;
	}
	.text_hiden{
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1; /** 显示的行数 **/
	}
	.text_hiden2{
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 2; /** 显示的行数 **/
	}
	.text_hiden3{
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3; /** 显示的行数 **/
	}
	.userImg{
		width:100rpx;
		height:100rpx;
		border-radius: 50%;
		overflow: hidden
	}
	.discussUser{
		width:80rpx;
		height: 80rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.marginAuto{
		position: absolute;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.marginTop{
		position: absolute;
		top: 50%;
		transform: translatey(-50%);
	}
	.boder_btm{
		padding: 40rpx 0;
		border-bottom: 1px solid #E8E8E8;
	}
	.border_line{
		width:100%;
		height: 1px;
		background-color: #eee;
		margin: 20px 0;
	}
	.alignCenter{
		text-align:center;
	}
	.bold{
		font-weight: bold;
	}
	.overflow{
		overflow: hidden;
	}
	
	
	/* 新增 */
	.flexStartNew{
			display: flex;
			align-items: center;
		}
		.middeSizeNew{
			font-family: '微软雅黑';
			font-size: 22rpx;
		}
		.color-search{
			color: #CACACA;
		}
		.fontSize-34{
			font-family: '微软雅黑';
			font-size: 34rpx;
		}
		.fontSize-30{
			font-family: '微软雅黑';
			font-size: 30rpx;
		}
		.fontSize-20{
			font-family: '微软雅黑';
			font-size: 20rpx;
		}
			.fontTitleNew{
			font-family: '微软雅黑';
			font-size: 36rpx;
		}
		.fontTitleNewColor{
			color:#333333
		}
			.sameBgColor-1{
			color:#fff;
			background-color: #666666;
		}
		.color-1{
			color: #666666
		}
		.fontWeightNew{
			font-weight: bold;
		}
		.marginLeft-19{
			margin-left: 19rpx
		}
		.marginLeft-16{
			margin-left: 16rpx
		}
			.marginT-16{
			margin-top: 16rpx
		}
		.marginT-50{
			margin-top: 50rpx
		}
		.discussUser-90{
			width:90rpx;
			height: 90rpx;
			border-radius: 50%;
			overflow: hidden;
		}
		.Padding-4{
			padding:4rpx;
		}
		.Padding-6{
			padding:6rpx;
		}
		.Padding-20{
			padding: 10rpx 20rpx;
		}
		.out-content{
			margin:0 20rpx;
		}
		.pop_btn_new{ 
			font-size: 30rpx;
			height: 60rpx;
			line-height: 60rpx;
		}
		.position-bottom{
			position: relative; 
		}
		.position-top{
			position: absolute;
			right: 0rpx;
			top: 0rpx;
			font-size: 18rpx;
			background-color: #FF5353;
			width: 35rpx;
			height: 35rpx;
			text-align: center;
			border-radius: 50%;
			color: white;
			line-height: 35rpx;
		}
		.icon-font-size-40{
			font-size: 60rpx;
		}
		.litter-circle{
			width: 12rpx;
			height: 12rpx;
			border-radius: 6rpx;
			background-color: #FF5353;
		} 
		.alignCenter{
			text-align: center;
		}
		.searchBox{
			position: fixed;
			left:1%;
			right:1%;
			top: 0;
			background-color: #fff;
			z-index:1;
			margin: 30rpx auto 0;
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
		
		
		
		
		/* 图标 */
		.fontsize-18{
			font-size: 18px;
		}
		
</style>
