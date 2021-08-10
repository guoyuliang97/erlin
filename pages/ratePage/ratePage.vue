<template>
	<view class="flexStart">
		<view  v-for="(item,index) in rateList" :key="index" v-if="item < score">
			<view  class="iconfont icon-pingfenxingxing sameColor" ></view>
		</view>
		
		<view v-if="type == '1'" class="flexLineCenter marginLeft">
			<text>{{score}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['score','type'],
		data() {
			return {
				rateList:[1,2,3,4,5]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
