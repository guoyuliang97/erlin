(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0bc0":function(t,e,i){"use strict";i.r(e);var n=i("18bf"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1599:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"18bf":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["imgurl","type"],data:function(){return{imgSrc:"",defaultImg:"../../static/img/defult.jpg"}},watch:{imgurl:function(){this.imgSrc=this.imgurl?this.imgurl:this.defaultImg}},mounted:function(){this.imgSrc=this.imgurl?this.imgurl:this.defaultImg},methods:{loadfalse:function(){this.imgSrc=this.defaultImg}}};e.default=n},"1aa6":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},2057:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("dbc7")),a=r(i("3637")),o=r(i("83b3"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return d(t)||f(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}function f(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var g={data:function(){return{search:"",scrollTop:"",indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,circular:!0,bannerList:[{img:"../../static/img/defult.jpg"},{img:"../../static/img/defult.jpg"},{img:"../../static/img/defult.jpg"}],fenleiList:[{name:"日用百货"},{name:"日用百货"},{name:"日用百货"},{name:"日用百货"},{name:"日用百货"}],localPlace:"眉山",priceDiscunt:[{img:"../../static/img/defult.jpg",title:"30分钟速递"},{img:"../../static/img/defult.jpg",title:"30分钟速递"},{img:"../../static/img/defult.jpg",title:"30分钟速递"}],shopList1:[],shopList2:[],arr:[{img:"../../static/img/defult.jpg",title:"小叮当",describe:"安徽岛上的",price:"19.9",adress:"4.7km",price_origin:"40",discount:5},{img:"../../static/img/defult.jpg",title:"小叮当",price:"19.9",adress:"4.7km",price_origin:"40",discount:5},{img:"../../static/img/defult.jpg",title:"小叮当",describe:"安徽岛上的",price:"19.9",adress:"4.7km",price_origin:"40",discount:5},{img:"../../static/img/defult.jpg",title:"小叮当",price:"19.9",adress:"4.7km",price_origin:"40",discount:5},{img:"../../static/img/defult.jpg",title:"小叮当",describe:"安徽岛上的",price:"19.9",adress:"4.7km",price_origin:"40",discount:5},{img:"../../static/img/defult.jpg",title:"小叮当",price:"19.9",adress:"4.7km",price_origin:"40",discount:5}]}},components:{loadImg:a.default,detail:o.default,Head:n.default},computed:{},mounted:function(){},onLoad:function(e){"undefined"!==typeof e.top_user_id&&e.top_user_id>0&&t.setStorageSync("top_user_id",e.top_user_id),this.scrollTop=t.getStorageSync("statusBar")},onShow:function(){this.deelList()},onReachBottom:function(t){this.arr=[].concat(s(this.arr),s(this.arr)),this.deelList()},methods:{deelList:function(){var t=this;this.arr.forEach((function(e,i){i%2==0?t.shopList2.push(e):t.shopList1.push(e)})),console.log(this.shopList2,this.shopList1)},getToken:function(){var e=this;this.$axios("/home/Index/token","","post").then((function(i){t.setStorage({key:"rrsToken",data:i.data,success:function(){e.getSwiper()}})}))},getNowInfor:function(){var e=this;t.getLocation({type:"gcj02",success:function(t){e.$QQmap.reverseGeocoder({location:{latitude:t.latitude,longitude:t.longitude},success:function(t){e.localPlace=t.result.ad_info.city}})}});var i=new Date,n=i.getMonth()+1,a=i.getDate(),o=a+1;e.localTime=n+"月"+a+"日—"+n+"月"+o+"日"},toGoods:function(e,i){t.navigateTo({url:"../../pagesA/goodsPage/goodsPage?info="+JSON.stringify(e),animationDuration:200,animationType:"fade-in"})},toSearch:function(){t.navigateTo({url:"../../pagesA/searchPage/searchPage",animationDuration:200,animationType:"fade-in"})},getSwiper:function(){var t=this,e={flag:0};this.$axios("/home/Banner/bannerlist",e,"post").then((function(e){if(1==e.code){var i=e.data;t.bannerList=i,t.getSoonAct(),t.getPopPlace(),t.getDiscount(),t.getFastAct(),t.getSelectStory()}else 3!=e.code&&2!=e.code||t.getSwiper()}))},getPopPlace:function(){var t=this,e={version:2};this.$axios("/ScoreHighCityTwo",e,"post").then((function(e){var i=e.data;t.popPlace=i,t.getHighAct(),t.isPop=!0}))},scroll:function(t){},choosePlace:function(t,e){this.clickIndex!=e&&(this.clickIndex=e,this.getHighAct())},getHighAct:function(){var t=this,e={per_page:4};e.city=this.popPlace[this.clickIndex].city,this.$axios("/ActivityListUserTwo",e,"post").then((function(e){var i=e.data.data;t.highList=i,t.isHight=!0}))},getSelectStory:function(){var t=this,e={sort:"2",page:"1",kind_id:"",country:"",province:"",city:"",region:"",keywords:""};this.$axios("/home/Story/story_list",e,"post").then((function(e){var i=e.data.data;t.storyList=i}))},getFastAct:function(){var t=this,e={per_page:6,page:1,version:2},i=Math.round(new Date/1e3);this.$axios("/SoonActTwo",e,"post").then((function(e){var n=e.data.data;n.forEach((function(t,e){var a=new Date(parseInt(1e3*n[e].begin_time));t.begin_time-i<86400?(console.log(a),n[e].begin_time=(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":"+(a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds())):n[e].begin_time=(a.getMonth()<10?"0"+a.getMonth():a.getMonth())+"/"+(a.getDate()<10?"0"+a.getDate():a.getDate())+"/"+(a.getFullYear()<10?"0"+a.getFullYear():a.getFullYear())})),t.fastList=n,t.isFast=!0}))},getSoonAct:function(){var t=this,e={per_page:6,page:1,version:2};this.$axios("/VisitListTwo",e,"post").then((function(e){var i=e.data.data;t.soonList=i,t.isSoon=!0}))},chooseAct:function(e,i){var n=e.activity_id?e.activity_id:e.table_id;t.showLoading({title:"加载中...",mask:!1}),t.navigateTo({url:"/pages/publishPage/publishPage?act_id="+n,animationType:"pop-in",animationDuration:200})},chooseStory:function(e,i){var n=e.story_id?e.story_id:e.table_id;t.navigateTo({url:"/pages/publishStory/publishStory?story_id="+n,animationType:"pop-in",animationDuration:200})},goSearch:function(e){var i=e||"";t.navigateTo({url:"/pages_A/searchPage/searchPage?city="+i,animationDuration:200,animationType:"fade-in"})},getDiscount:function(){var t=this,e={verson:2};this.$axios("/DiscountTwo",e,"post").then((function(e){var i=e.data;t.priceDiscunt=i,t.isDis=!0}))}},onShareAppMessage:function(t){var e=this,i=e._data.title,n=getCurrentPages(),a=n[n.length-1].route,o=0;return e._data.states&&(o=e._data.states.userId),{title:i,path:a+"?top_user_id="+o}},onShareTimeline:function(){var t=this,e=t._data.title,i=getCurrentPages(),n=i[i.length-1].route,a=0;return t._data.states&&(a=t._data.states.userId),{title:e,path:n+"?top_user_id="+a,imageUrl:"../../static/img/sy2.png"}}};e.default=g}).call(this,i("543d")["default"])},2377:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"2df7":function(t,e,i){"use strict";(function(t){i("c588");n(i("66fd"));var e=n(i("b9a2"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"2f90":function(t,e,i){},3637:function(t,e,i){"use strict";i.r(e);var n=i("1599"),a=i("0bc0");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5679");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d8110aae",null,!1,n["a"],r);e["default"]=c.exports},"3b14":function(t,e,i){"use strict";var n=i("8e04"),a=i.n(n);a.a},5679:function(t,e,i){"use strict";var n=i("b9f3"),a=i.n(n);a.a},6217:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:["top","isFixed","isShoucang","isHome"],data:function(){return{height:"",localPlace:"眉山",homeSearch:"输入商家名、品类或商圈",shopName:"商品"}},mounted:function(){this.setNavigator(),this.getSysTem()},methods:{goSearch:function(){var e=this;this.isHome||t.showModal({title:"提示",content:"是否切换搜索栏目?",success:function(t){if(t.confirm){e.shopName="店铺"==e.shopName?"商品":"店铺";var i="店铺"==e.shopName;e.$emit("changeShop",i)}}})},setNavigator:function(){t.setNavigationBarColor({frontColor:"#00000"})},goBack:function(){var e=getCurrentPages();e[e.length-2]?t.navigateBack({delta:1,animationType:"pop-out",animationDuration:200}):t.reLaunch({url:"/pages/index/index",animationType:"pop-out",animationDuration:200})},goBackHome:function(){var e=getCurrentPages();t.navigateBack({delta:e.length,animationType:"pop-out",animationDuration:200})},getSysTem:function(){var e=this;t.getSystemInfo({success:function(t){e.height=t.statusBarHeight}})},share_pengyou:function(){this.$emit("shareTime")},toCollect:function(){this.$emit("toCollect")},toSearch:function(){thiss.$emit("toSearch")}}};e.default=i}).call(this,i("543d")["default"])},"67e5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("3637"));function a(t){return t&&t.__esModule?t:{default:t}}var o={props:["infoData","type"],data:function(){return{}},components:{Loadimg:n.default},methods:{}};e.default=o},"735f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"83b3":function(t,e,i){"use strict";i.r(e);var n=i("1aa6"),a=i("be4f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3b14");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"d48398ca",null,!1,n["a"],r);e["default"]=c.exports},"8e04":function(t,e,i){},"9e39":function(t,e,i){"use strict";var n=i("2f90"),a=i.n(n);a.a},b16e:function(t,e,i){"use strict";i.r(e);var n=i("2057"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b9a2:function(t,e,i){"use strict";i.r(e);var n=i("2377"),a=i("b16e");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f0a7");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"468d16a0",null,!1,n["a"],r);e["default"]=c.exports},b9f3:function(t,e,i){},be4f:function(t,e,i){"use strict";i.r(e);var n=i("67e5"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c89b:function(t,e,i){},d343:function(t,e,i){"use strict";i.r(e);var n=i("6217"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},dbc7:function(t,e,i){"use strict";i.r(e);var n=i("735f"),a=i("d343");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9e39");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"24ce5116",null,!1,n["a"],r);e["default"]=c.exports},f0a7:function(t,e,i){"use strict";var n=i("c89b"),a=i.n(n);a.a}},[["2df7","common/runtime","common/vendor"]]]);