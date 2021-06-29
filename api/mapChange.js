const BaiduToQQ = (lat,lng ) =>{
	 if (lng == null || lng == '' || lat == null || lat == '')
	        return [lng, lat];
	
	    var x_pi = 3.14159265358979324;
	    var x = parseFloat(lng) - 0.0065;
	    var y = parseFloat(lat) - 0.006;
	    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
	    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
	    var lng = (z * Math.cos(theta)).toFixed(7);
	    var lat = (z * Math.sin(theta)).toFixed(7);
	
	    return [lat,lng];
}
export default BaiduToQQ