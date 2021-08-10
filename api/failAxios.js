const failQuest = (type,information) => {
	if(type == 'img'){
		uni.showToast({
			title: '上传失败,刷新重试!',
			icon: 'none'
		})
	}else{
		uni.showToast({
			title: information,
			icon: 'none'
		})
	}
}

export default failQuest