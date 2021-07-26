webpackJsonp([21],{"6Alp":function(e,a){},PCSs:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"Transfer",data:function(){return{userInfo:"",show:!1,safeKeyboard:!1}},mounted:function(){this.$userInfo()},activated:function(){this.$refs["transfer-userId"].value="",this.$refs["transfer-money"].value=""},methods:{inputBlur:function(){this.$refs["transfer-userId"].scrollIntoViewIfNeeded(),this.$refs["transfer-money"].scrollIntoViewIfNeeded()},Verification:function(e){var a=this;this.$dialog.loading.open("设置中，请稍候..."),this.$httpRequest("ApiSetUserPayCode","post",{pay_code:e},function(t){a.$dialog.loading.close(),200==t.status_code?(a.safeKeyboard=!1,a.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>设置成功，点击确定继续转账</b></div>",callback:function(){a.userInfo.pay_code=e,a.confirmTransfer()}})):a.$refs.keyboard.$emit("ydui.keyboard.error",t.message)},function(){a.$refs.keyboard.$emit("ydui.keyboard.error","系统异常！")})},confirmTransfer:function(){var e=this,a=this.$refs["transfer-userId"].value,t=this.$refs["transfer-money"].value;""!=a&&""!=t?(this.$dialog.loading.open("检索账户信息..."),this.$httpRequest("ApiChkTransfer","post",{transferId:a,transferMoney:t},function(a){e.$dialog.loading.close(),200==a.status_code?e.$dialog.confirm({title:'<div class="aui-font-size-18 aui-text-center"><b>请确认转账信息</b></div>',mes:a.data,opts:function(){e.show=!0}}):405==a.status_code?e.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+a.message+"</b></div>",callback:function(){e.safeKeyboard=!0}}):e.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+a.message+"</b></div>"})})):this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>请输入收款人ID与转账金额</b></div>"})},done:function(e){var a=this;this.$dialog.loading.open("验证支付密码"),this.$httpRequest("ApiVerifyPayCode","post",{pay_code:e},function(e){a.$dialog.loading.close(),200==e.status_code?(a.show=!1,a.$dialog.loading.open("正在转账，请稍候..."),a.$httpRequest("ApiTransferInfo","post",{name:a.userInfo.name,transferId:a.$refs["transfer-userId"].value,transferMoney:parseFloat(a.$refs["transfer-money"].value)},function(e){a.$dialog.loading.close(),a.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+e.message+"</b></div>",callback:function(){a.$router.back(-1)}})})):a.$refs.keyboard.$emit("ydui.keyboard.error",e.message)})}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aui-content"},[t("yd-keyboard",{ref:"keyboard",attrs:{title:"平台安全键盘","input-text":"验证支付密码",callback:e.done,disorder:""},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}}),e._v(" "),t("div",{staticClass:"forwar-main aui-padded-15"},[t("div",{staticClass:"forward-title aui-font-size-18 aui-text-left"},[e._v("收款人ID")]),e._v(" "),t("div",{staticClass:"forwar-money"},[t("input",{ref:"transfer-userId",staticClass:"forwar-input",attrs:{type:"number",placeholder:"ID"},on:{blur:e.inputBlur}}),e._v(" "),t("div",{staticClass:"aui-clear"})])]),e._v(" "),t("div",{staticClass:"forwar-main aui-margin-t-15 aui-padded-15"},[t("div",{staticClass:"forward-title aui-font-size-18 aui-text-left"},[e._v("转账金额")]),e._v(" "),t("div",{staticClass:"forwar-money"},[t("span",[e._v("￥")]),e._v(" "),t("input",{ref:"transfer-money",staticClass:"forwar-input",staticStyle:{"padding-top":"0"},attrs:{type:"number",placeholder:"0.00"},on:{blur:e.inputBlur}}),e._v(" "),t("div",{staticClass:"aui-clear"})]),e._v(" "),t("div",{staticClass:"forwar-footer aui-font-size-14 aui-text-left"},[e._v("可用余额 "+e._s(e.userInfo.balance)+" 元")])]),e._v(" "),e._m(0),e._v(" "),t("yd-keyboard",{ref:"keyboard",attrs:{title:"平台安全键盘","input-text":"设置账户支付密码",callback:e.Verification,disorder:!0},model:{value:e.safeKeyboard,callback:function(a){e.safeKeyboard=a},expression:"safeKeyboard"}}),e._v(" "),t("div",{staticClass:"aui-margin-15"},[t("div",{staticClass:"aui-btn aui-btn-block forward-active",on:{click:e.confirmTransfer}},[e._v("确认转账")])])],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"aui-padded-15 aui-font-size-14 aui-text-left",staticStyle:{color:"#888"}},[a("div",{},[this._v("1. 如需使用转账功能，需先设置账户支付密码！")]),this._v(" "),a("div",{},[this._v("2. 输入对方账户ID，输入金额后点击转账时会显示对方账户信息（头像，名称），确认后立即到账！")])])}]};var r=t("VU/8")(s,i,!1,function(e){t("6Alp")},null,null);a.default=r.exports}});