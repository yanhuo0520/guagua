webpackJsonp([20],{"0wp5":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={name:"Bind",data:function(){return{userInfo:"",sending:!1,second:60}},mounted:function(){this.$userInfo();var t=this;this.userInfo.mobile&&this.globalAlert("您已绑定过手机，确认后返回",function(){t.$router.push({path:"/"})})},methods:{sendCode:function(){var t=this,i=this.$refs.mobile.value;this.$dialog.loading.open(),this.$httpRequest("ApiSendSms","post",{mobile:i},function(i){t.$dialog.loading.close(),200==i.status_code?t.timeCodeDown():t.globalAlert(i.message,function(){})})},userAuth:function(){var t=this,i=this.$refs.mobile.value,s=this.$refs.code.value,a=this.$refs.password.value,e=this.$refs.confirm_password.value;""!=a?""!=e?a==e?""!=i&&""!=s?(this.$dialog.loading.open(),this.$httpRequest("ApiBindMobileAuth","post",{mobile:i,password:a,confirmP:e,code:s},function(i){t.$dialog.loading.close(),200==i.status_code?t.globalAlert(i.message,function(){t.$router.push({path:"/"})}):t.globalAlert(i.message,function(){})})):this.globalAlert("手机号与验证码不可为空",function(){}):this.globalAlert("两次密码输入不一致",function(){}):this.globalAlert("请再次输入密码",function(){}):this.globalAlert("请填写密码",function(){})},timeCodeDown:function(){var t=this;if(!this.sending){this.sending=!0;var i=setInterval(function(){if(t.second<=0)return clearInterval(i),t.sending=!1,void(t.second=60);t.second--},1e3)}},globalAlert:function(t,i){this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'>"+t+"</div>",callback:function(){i()}})}}},e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aui-content"},[s("ul",{staticClass:"aui-list aui-form-list bind"},[s("li",{staticClass:"aui-list-item"},[s("div",{staticClass:"aui-list-item-inner"},[s("div",{staticClass:"aui-list-item-label"},[t._v("\n\t\t\t\t\t手机号\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"aui-list-item-input"},[s("input",{ref:"mobile",attrs:{type:"tel",maxlength:"11",placeholder:"手机号"}})])])]),t._v(" "),s("li",{staticClass:"aui-list-item"},[s("div",{staticClass:"aui-list-item-inner"},[s("div",{staticClass:"aui-list-item-label"},[t._v("\n\t\t\t\t\t登录密码\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"aui-list-item-input"},[s("input",{ref:"password",attrs:{type:"password",placeholder:"登录密码"}})])])]),t._v(" "),s("li",{staticClass:"aui-list-item"},[s("div",{staticClass:"aui-list-item-inner"},[s("div",{staticClass:"aui-list-item-label"},[t._v("\n\t\t\t\t\t确认密码\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"aui-list-item-input"},[s("input",{ref:"confirm_password",attrs:{type:"password",placeholder:"再次输入密码"}})])])]),t._v(" "),s("li",{staticClass:"aui-list-item"},[s("div",{staticClass:"aui-list-item-inner"},[s("div",{staticClass:"aui-list-item-label"},[t._v("\n\t\t\t\t\t验证码\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"aui-list-item-input"},[s("input",{ref:"code",attrs:{type:"tel",maxlength:"6",placeholder:"短信验证码"}}),t._v(" "),s("div",{staticClass:"aui-btn bind-code",class:t.sending?"":"bind-btn",on:{click:t.sendCode}},[60==t.second?s("span",[t._v("发送验证码")]):s("span",[t._v(t._s(t.second)+"秒后重发")])])])])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"aui-margin-15"},[s("div",{staticClass:"aui-btn aui-btn-block bind-active",on:{click:t.userAuth}},[t._v("立即认证")])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"recharge-notice aui-font-size-14 aui-margin-t-10 aui-text-danger"},[i("div",{staticClass:"recharge-title aui-margin-l-15 aui-margin-r-15 aui-margin-b-5"},[i("b",[this._v("* 绑定后，可使用手机号+密码登入平台，账号、代理关系将永久保存！")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"recharge-notice aui-font-size-14",staticStyle:{color:"#888"}},[i("div",{staticClass:"recharge-title aui-margin-l-15 aui-margin-b-5 aui-margin-t-10"},[i("b",[this._v("手机号认证须知")])]),this._v(" "),i("ul",{staticClass:"aui-padded-15 aui-padded-t-0"},[i("li",[this._v("1. 每个账号，手机号只允许绑定一次，绑定后不可更改")]),this._v(" "),i("li",[this._v("2. 账号只有在认证手机号后才可提现操作！")]),this._v(" "),i("li",[this._v("3. 手机号停用或遗失请联系上级代理进行更改！")])])])}]};var n=s("VU/8")(a,e,!1,function(t){s("A/26")},null,null);i.default=n.exports},"A/26":function(t,i){}});