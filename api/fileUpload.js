import Api from './api.js'
import axios from './axios.js'
const fileUpload = (fileTemp,isWater) => {
	console.log(3)
	return new Promise((r,j) => {
	
		if(isWater){
			uni.uploadFile({
				url: '/api/fileUpload/upload', 
				filePath: fileTemp[0],
				name: 'file',
				header:{
					"Authorization" : localStorage.getItem('elToken')
				},
				success: (uploadFileRes) => {
					console.log(uploadFileRes.data);
				},
				fail(err){
					console.log(err)
				}
			});
		}else{
		
		
		}
	})
}

export default fileUpload