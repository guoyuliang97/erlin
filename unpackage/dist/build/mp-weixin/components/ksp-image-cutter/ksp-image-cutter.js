(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ksp-image-cutter/ksp-image-cutter"],{"406f":function(t,i,e){},"4b1f":function(t,i,e){"use strict";var h;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return h}));var a=function(){var t=this,i=t.$createElement;t._self._c},s=[]},d16f:function(t,i,e){"use strict";var h=e("406f"),a=e.n(h);a.a},d870:function(t,i,e){"use strict";e.r(i);var h=e("fb84"),a=e.n(h);for(var s in h)"default"!==s&&function(t){e.d(i,t,(function(){return h[t]}))}(s);i["default"]=a.a},f8c6:function(t,i,e){"use strict";e.r(i);var h=e("4b1f"),a=e("d870");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("d16f");var m,r=e("f0c5"),f=Object(r["a"])(a["default"],h["b"],h["c"],!1,null,"6caf9c47",null,!1,h["a"],m);i["default"]=f.exports},fb84:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{url:{type:String,default:""},fixed:{type:Boolean,default:!1},width:{type:Number,default:200},height:{type:Number,default:200},maxWidth:{type:Number,default:1024},maxHeight:{type:Number,default:1024},blob:{type:Boolean,default:!0}},data:function(){return{mask:{show:!1},frame:{left:50,top:50,width:this.width,height:this.height},image:{left:20,top:20,width:300,height:400},real:{width:100,height:100},target:{width:this.width,height:this.height},touches:[],type:"",start:{frame:{left:0,top:0,width:0,height:0},image:{left:0,top:0,width:0,height:0}},timeoutId:-1,context:null}},mounted:function(){this.context=t.createCanvasContext("canvas",this),this.targetContext=t.createCanvasContext("target",this)},methods:{imageLoad:function(i){var e=this;this.mask.show=!0,this.real.width=i.detail.width,this.real.height=i.detail.height,this.image.width=i.detail.width,this.image.height=i.detail.height,this.frame.width=this.width,this.frame.height=this.height,this.fixed||(this.frame.width=this.image.width,this.frame.height=this.image.height);var h=t.createSelectorQuery().in(this);h.select(".body").boundingClientRect((function(t){var i=t.width,h=t.height,a=e.frame.width,s=e.frame.height,m=.8*i,r=.8*h,f=m/a,o=r/s,g=f;f<o&&(g=o),m=a*g,r=s*g;var n=(i-m)/2,l=(h-r)/2;e.frame.width=m,e.frame.height=r,e.frame.left=n,e.frame.top=l;var c=e.image.width,d=e.image.height;f=m/c,o=r/d,g=f,f<o&&(g=o),e.image.width=c*g,e.image.height=d*g,e.image.left=(i-e.image.width)/2,e.image.top=(h-e.image.height)/2,setTimeout((function(){e.trimImage()}),100)})).exec()},touchHandle:function(){},touchStart:function(t,i){this.stopTime(),this.mask.show=!1,0==this.touches.length&&(this.type=i,this.start.frame.left=this.frame.left,this.start.frame.top=this.frame.top,this.start.frame.width=this.frame.width,this.start.frame.height=this.frame.height,this.start.image.left=this.image.left,this.start.image.top=this.image.top,this.start.image.width=this.image.width,this.start.image.height=this.image.height);for(var e=t.changedTouches,h=0;h<e.length;h++){var a=e[h];this.touches.push(a)}},touchMove:function(t){this.stopTime(),t.preventDefault();var i=t.touches;if(1==this.touches.length)"plank"==this.type||"frame"==this.type||this.fixed?this.moveImage(this.touches[0],i[0]):this.scaleFrame(this.touches[0],i[0],this.type);else if(2==this.touches.length&&2==i.length){var e=this.touches[0],h=this.touches[1],a=i[0],s=i[1];if(e.identifier!=a.identifier){var m=a;a=s,s=m}this.scaleImage(e,h,a,s)}},touchEnd:function(t){this.type="",this.touches=[],this.startTime()},touchCancel:function(t){this.type="",this.touches=[],this.startTime()},startTime:function(){var t=this;this.stopTime(),this.timeoutId=setTimeout((function(){t.trimImage()}),800)},stopTime:function(){this.timeoutId>=0&&(clearTimeout(this.timeoutId),this.timeoutId=-1)},trimImage:function(){var i=this;this.mask.show=!0;var e=t.createSelectorQuery().in(this);e.select(".body").boundingClientRect((function(t){var e=t.width,h=t.height,a=i.frame.width,s=i.frame.height,m=.8*e,r=.8*h,f=m/a,o=r/s,g=f;f>o&&(g=o),m=a*g,r=s*g;var n=(e-m)/2,l=(h-r)/2,c=n-i.frame.left+(i.frame.left-i.image.left)*(1-g),d=l-i.frame.top+(i.frame.top-i.image.top)*(1-g);i.frame.width=m,i.frame.height=r,i.frame.left=n,i.frame.top=l,i.image.width*=g,i.image.height*=g,i.image.left+=c,i.image.top+=d})).exec(),setTimeout((function(){var t=i.image.width/i.real.width,e=(i.frame.left-i.image.left)/t,h=(i.frame.top-i.image.top)/t,a=i.frame.width/t,s=i.frame.height/t;i.context.drawImage(i.url,e,h,a,s,0,0,i.frame.width,i.frame.height),i.context.draw(!1)}),100)},moveImage:function(t,i){var e=i.clientX-t.clientX,h=i.clientY-t.clientY;this.image.left=this.start.image.left+e,this.image.top=this.start.image.top+h,this.image.left>this.frame.left&&(this.image.left=this.frame.left),this.image.top>this.frame.top&&(this.image.top=this.frame.top),this.image.left+this.image.width<this.frame.left+this.frame.width&&(this.image.left=this.frame.left+this.frame.width-this.image.width),this.image.top+this.image.height<this.frame.top+this.frame.height&&(this.image.top=this.frame.top+this.frame.height-this.image.height)},scaleImage:function(t,i,e,h){var a=t.clientX,s=t.clientY,m=i.clientX,r=i.clientY,f=e.clientX,o=e.clientY,g=h.clientX,n=h.clientY,l=Math.sqrt((a-m)*(a-m)+(s-r)*(s-r)),c=Math.sqrt((f-g)*(f-g)+(o-n)*(o-n)),d=(a+m)/2,u=(s+r)/2,p=(f+g)/2,w=(o+n)/2,v=p-d,b=w-u,x=c/l;this.start.image.width*x<this.frame.width&&(x=this.frame.width/this.start.image.width),this.start.image.height*x<this.frame.height&&(x=this.frame.height/this.start.image.height),this.start.image.width*x<this.frame.width&&(x=this.frame.width/this.start.image.width),this.image.left=this.start.image.left+v-(d-this.start.image.left)*(x-1),this.image.top=this.start.image.top+b-(u-this.start.image.top)*(x-1),this.image.width=this.start.image.width*x,this.image.height=this.start.image.height*x,this.image.left>this.frame.left&&(this.image.left=this.frame.left),this.image.top>this.frame.top&&(this.image.top=this.frame.top),this.image.left+this.image.width<this.frame.left+this.frame.width&&(this.image.left=this.frame.left+this.frame.width-this.image.width),this.image.top+this.image.height<this.frame.top+this.frame.height&&(this.image.top=this.frame.top+this.frame.height-this.image.height)},scaleFrame:function(t,i,e){var h=i.clientX-t.clientX,a=i.clientY-t.clientY,s=this.start.frame.left,m=this.start.frame.top,r=this.start.frame.left+this.start.frame.width,f=this.start.frame.top+this.start.frame.height;"left"==e?s+=h:"right"==e?r+=h:"top"==e?m+=a:"bottom"==e?f+=a:"left-top"==e?(s+=h,m+=a):"left-bottom"==e?(s+=h,f+=a):"right-top"==e?(r+=h,m+=a):"right-bottom"==e&&(r+=h,f+=a),s<this.image.left&&(s=this.image.left),m<this.image.top&&(m=this.image.top),r>this.image.left+this.image.width&&(r=this.image.left+this.image.width),f>this.image.top+this.image.height&&(f=this.image.top+this.image.height),this.frame.left=s,this.frame.top=m,this.frame.width=r-s,this.frame.height=f-m},parseBlob:function(t){for(var i=t.split(","),e=i[0].match(/:(.*?);/)[1],h=atob(i[1]),a=h.length,s=new Uint8Array(a),m=0;m<a;m++)s[m]=h.charCodeAt(m);var r=URL||webkitURL;return r.createObjectURL(new Blob([s],{type:e}))},onok:function(){var i=this,e=this.image.width/this.real.width,h=(this.frame.left-this.image.left)/e,a=(this.frame.top-this.image.top)/e,s=this.frame.width/e,m=this.frame.height/e,r=s,f=m;if(this.fixed)r=this.width/2,f=this.height/2;else{if(r>this.maxWidth/2){var o=this.maxWidth/2/r;r*=o,f*=o}if(f>this.maxHeight/2){o=this.maxHeight/2/f;f*=o,r*=o}}this.target.width=r,this.target.height=f,t.showLoading({title:"正在裁剪"}),setTimeout((function(){i.targetContext.drawImage(i.url,h,a,s,m,0,0,r,f),i.targetContext.draw(!1,(function(){t.canvasToTempFilePath({canvasId:"target",success:function(t){var e=t.tempFilePath;i.$emit("ok",{path:e})},fail:function(t){console.log(t)},complete:function(){t.hideLoading()}},i)}))}),1e3)},oncancle:function(){this.$emit("cancel")}}};i.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ksp-image-cutter/ksp-image-cutter-create-component',
    {
        'components/ksp-image-cutter/ksp-image-cutter-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f8c6"))
        })
    },
    [['components/ksp-image-cutter/ksp-image-cutter-create-component']]
]);
