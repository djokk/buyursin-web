(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c3de6d6"],{9527:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.activeLogout?i("div",{staticClass:"logout"},[i("div",{staticClass:"logout__content"},[i("h1",[t._v(t._s(t.$t("textLogout")))]),i("div",{staticClass:"logout__btns"},[i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.logoutBtn()}}},[t._v(t._s(t.$t("yes")))]),i("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.logoutClose()}}},[t._v(t._s(t.$t("not")))])])])]):t._e()},a=[],n={props:["activeLogout"],methods:{logoutClose:function(){this.$emit("closeLogout")},logoutBtn:function(){this.$router.push({path:"/"}),localStorage.clear(),sessionStorage.clear()}}},c=n,o=(i("ed3e"),i("0c7c")),u=Object(o["a"])(c,s,a,!1,null,null,null);e["a"]=u.exports},"96a3":function(t,e,i){"use strict";i("b37d")},b37d:function(t,e,i){},e48a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header__sidebar-header sidebar-header",class:[t.menuActive?"d-flex":""]},[i("router-link",{staticClass:"sidebar-header__link-logo-title",attrs:{to:{name:"BRDashboard"},href:""}},[t._v("BUYURSIN")]),i("div",{staticClass:"sidebar-header__close-menu",on:{click:function(e){return t.openMenu()}}},[i("i",{staticClass:"bx bx-x"})])],1),i("div",{staticClass:"header__sidebar-left",class:[t.menuActive?"d-block":""]},[i("nav",{staticClass:"nav"},[i("ul",{staticClass:"nav__menu menu"},[i("li",{staticClass:"menu__item",class:[1==t.isActiveItem?"active":""],on:{click:function(e){return e.preventDefault(),t.isSidebarActiveItem(1)}}},[i("router-link",{staticClass:"menu__link",attrs:{to:{name:"BRDashboard"},href:""}},[i("i",{staticClass:"bx bxs-home"}),t._v(t._s(t.$t("Цех")))])],1),i("li",{staticClass:"menu__item",class:[2==t.isActiveItem?"active":""],on:{click:function(e){return e.preventDefault(),t.isSidebarActiveItem(2)}}},[i("router-link",{staticClass:"menu__link",attrs:{to:{name:"BRPayList"}}},[i("i",{staticClass:"bx bx-money"}),t._v(t._s(t.$t("payList")))])],1),i("li",{staticClass:"menu__item",class:[4==t.isActiveItem?"active":""],on:{click:function(e){return e.preventDefault(),t.isSidebarActiveItem(4)}}},[i("router-link",{staticClass:"menu__link",attrs:{to:{name:"BRAdd"}}},[i("i",{staticClass:"bx bxs-layer-plus"}),t._v(t._s(t.$t("add")))])],1),i("li",{staticClass:"menu__item",class:[5==t.isActiveItem?"active":""],on:{click:function(e){return e.preventDefault(),t.isSidebarActiveItem(5)}}},[i("router-link",{staticClass:"menu__link",attrs:{to:{name:"BRSending"}}},[i("i",{staticClass:"bx bx-upload"}),t._v(t._s(t.$t("Отправка")))])],1),i("li",{staticClass:"menu__item",class:[6==t.isActiveItem?"active":""],on:{click:function(e){return e.preventDefault(),t.isSidebarActiveItem(6)}}},[i("router-link",{staticClass:"menu__link",attrs:{to:{name:"BRReception"}}},[i("i",{staticClass:"bx bx-window-open"}),t._v(t._s(t.$t("Прием")))])],1),i("li",{staticClass:"menu__item"},[i("button",{staticClass:"menu__btn",on:{click:function(e){return t.removeLogout()}}},[t._v(t._s(t.$t("btnExit")))])])])])]),i("div",{staticClass:"header__top"},[i("div",{staticClass:"btn-burger",on:{click:function(e){return t.openMenu()}}},[i("i",{staticClass:"bx bx-menu"})])])]),i("div",{staticClass:"main-wrapper"},[t._t("default")],2),i("Logout",{attrs:{activeLogout:t.logout},on:{closeLogout:function(e){return t.removeLogout()}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bgLogout,expression:"bgLogout"}],staticClass:"logout-bg",on:{click:function(e){return t.removeLogout()}}})],1)},a=[],n=(i("b0c0"),i("9527")),c={data:function(){return{isActiveItem:1,bgLogout:!1,logout:!1,menuActive:!1,menu:[]}},components:{Logout:n["a"]},beforeMount:function(){this.loadPath()},mounted:function(){this.$i18n.locale=localStorage.local},methods:{isSidebarActiveItem:function(t){this.isActiveItem==t?this.isActiveItem=0:this.isActiveItem=t},loadPath:function(){switch(this.$route.name){case"BRStore":this.isActiveItem=1;break;case"BRPayList":this.isActiveItem=2;break;case"BRAcceptanceFinishedProducts":this.isActiveItem=2;break;case"BRFine":this.isActiveItem=2;break;case"BRPay":this.isActiveItem=2;break;case"BRAdd":this.isActiveItem=4;break;case"BREmployes":this.isActiveItem=4;break;case"BRFinishedProduct":this.isActiveItem=4;break;case"BRSending":this.isActiveItem=5;break;case"BRSendingFinishedProduct":this.isActiveItem=5;break;case"BRSendingAddFinishedProduct":this.isActiveItem=5;break;case"BRSendingProduct":this.isActiveItem=5;break;case"BRSendingAddProduct":this.isActiveItem=5;break;case"BRReception":this.isActiveItem=6;break;case"BRReceptionProduct":this.isActiveItem=6;break;case"BRReceptionFinishedProduct":this.isActiveItem=6;break}},removeLogout:function(){this.logout=!this.logout,this.bgLogout=!this.bgLogout},openMenu:function(){this.menuActive=!this.menuActive}}},o=c,u=(i("96a3"),i("0c7c")),r=Object(u["a"])(o,s,a,!1,null,null,null);e["default"]=r.exports},ed3e:function(t,e,i){"use strict";i("f6a8")},f6a8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2c3de6d6.d0afe9fd.js.map