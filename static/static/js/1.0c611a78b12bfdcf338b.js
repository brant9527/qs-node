webpackJsonp([1],{"7Otq":function(t,e,a){t.exports=a.p+"static/img/logo.a79b7a6.png"},"8hXn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-wrapper"},[a("div",{staticClass:"head qs-wapper"},[t._m(0),t._v(" "),a("div",{staticClass:"qs-router"},t._l(t.routerList,function(e){return a("router-link",{key:e.key,staticClass:"item",attrs:{to:e.path}},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"label"},[t._v(t._s(e.label))])])}),1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a("7Otq"),alt:""}})])}]};var s=a("VU/8")({data:function(){return{routerList:[{name:"穿古越今",path:"/about",label:"ABOUT"},{name:"产品家族",path:"/product",label:"PRODUCT"},{name:"事业机会",path:"/career",label:"CAREER"},{name:"倾愫电商",path:"/",label:"E-Commerce"}]}},methods:{linkPath:function(t){this.$router.push(t.path)}}},n,!1,function(t){a("LS+K")},"data-v-299d1a7c",null).exports,r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip-content"},[e("h2",{staticClass:"tip"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var i=a("VU/8")({props:["title"]},r,!1,function(t){a("I8Kd")},"data-v-48de6492",null).exports,l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot_nav footbg"},[a("div",{staticClass:"wrapper flex-between"},[a("div",{staticClass:"left"},[a("ul",t._l(t.list,function(e){return a("li",{key:e.key,on:{click:function(a){t.linkTo(e)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),a("div",{staticClass:"tip_beian"})])])},staticRenderFns:[]};var c={components:{footNav:a("VU/8")({data:function(){return{list:[{name:"abouts us",path:"/about"},{name:"product",path:"/product"},{name:"career",path:"/career"},{name:"E-Commerce",path:""}]}},methods:{linkTo:function(t){t.path&&this.$router.push({path:t.path})}}},l,!1,function(t){a("SPAs")},"data-v-4ce108ea",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("foot-nav")],1)},staticRenderFns:[]};var u={name:"banner",data:function(){return{list:[{url:"/slide1.jpg"},{url:"/slide2.jpg"},{url:"/slide3.jpg"}],url:"http://www.qingsu2018.com/banner"}},created:function(){console.log(this.list)}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-carousel",{staticClass:"marginTop",attrs:{height:"550px"}},t._l(t.list,function(e){return a("el-carousel-item",{key:e.key},[a("div",{staticClass:"banner",style:{backgroundImage:"url("+t.url+e.url+")"}})])}),1)],1)},staticRenderFns:[]};var h={components:{headerPart:s,footPart:a("VU/8")(c,o,!1,function(t){a("sFyx")},"data-v-d06bfb3c",null).exports,banner:a("VU/8")(u,d,!1,function(t){a("kDjP")},"data-v-0ed53428",null).exports,titleTip:i},created:function(){this.title=this.$route.matched[1].meta.title},data:function(){return{title:""}},watch:{$route:{handler:function(t){this.title=t.matched[1].meta.title}}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header-part"),this._v(" "),e("banner"),this._v(" "),e("title-tip",{attrs:{title:this.title}}),this._v(" "),e("div",{staticClass:"qs-content"},[e("router-view")],1),this._v(" "),e("foot-part")],1)},staticRenderFns:[]};var f=a("VU/8")(h,p,!1,function(t){a("ZrpZ")},"data-v-182277b4",null);e.default=f.exports},I8Kd:function(t,e){},"LS+K":function(t,e){},SPAs:function(t,e){},ZrpZ:function(t,e){},kDjP:function(t,e){},sFyx:function(t,e){}});
//# sourceMappingURL=1.0c611a78b12bfdcf338b.js.map