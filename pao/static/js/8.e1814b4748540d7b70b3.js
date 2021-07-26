webpackJsonp([8],{"2pu2":function(t,e){},TQvf:function(t,e,i){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var a;a=function(){return function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=c(i(1)),s=c(i(3)),o=c(i(4));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return a.resolveOptions(i),a.listenClick(t),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),n(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===a(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,o.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach(function(t){i=i&&!!document.queryCommandSupported(t)}),i}}]),e}();function u(t,e){var i="data-clipboard-"+t;if(e.hasAttribute(i))return e.getAttribute(i)}t.exports=l},function(t,e,i){"use strict";var a,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(2),o=(a=s)&&a.__esModule?a:{default:a};var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":n(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var a=window.getSelection(),n=document.createRange();n.selectNodeContents(t),a.removeAllRanges(),a.addRange(n),e=a.toString()}return e}},function(t,e){function i(){}i.prototype={on:function(t,e,i){var a=this.e||(this.e={});return(a[t]||(a[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var a=this;function n(){a.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),a=0,n=i.length;a<n;a++)i[a].fn.apply(i[a].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),a=i[t],n=[];if(a&&e)for(var r=0,s=a.length;r<s;r++)a[r].fn!==e&&a[r].fn._!==e&&n.push(a[r]);return n.length?i[t]=n:delete i[t],this}},t.exports=i},function(t,e,i){var a=i(5),n=i(6);t.exports=function(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(i))throw new TypeError("Third argument must be a Function");if(a.node(t))return function(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}(t,e,i);if(a.nodeList(t))return function(t,e,i){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,i)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,i)})}}}(t,e,i);if(a.string(t))return function(t,e,i){return n(document.body,t,e,i)}(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,i){var a=i(7);function n(t,e,i,n,r){var s=function(t,e,i,n){return function(i){i.delegateTarget=a(i.target,e),i.delegateTarget&&n.call(t,i)}}.apply(this,arguments);return t.addEventListener(i,s,r),{destroy:function(){t.removeEventListener(i,s,r)}}}t.exports=function(t,e,i,a,r){return"function"==typeof t.addEventListener?n.apply(null,arguments):"function"==typeof i?n.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return n(t,e,i,a,r)}))}},function(t,e){var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=a()},k9A2:function(t,e,i){t.exports=i.p+"static/img/alipay.f613c5e.png"},mjJX:function(t,e,i){t.exports=i.p+"static/img/kefu.7396f59.png"},v8nC:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("cVr7"),n=i("ofmo"),r=i("TQvf"),s=i.n(r),o={name:"Recharge",data:function(){return{userInfo:"",paytype:"",scroll:"",recharge_type:"vip",rechargeMoney:"",recharge:{Alipay:{name:"支付宝",moneys:[50,100,200,300,500,1e3,2e3]},Wxpay:{name:"微信支付",moneys:[50,100,200,300,500,1e3,2e3]}},currPage:1,kefuItems:[],rechargeList:[],endScroll:!1}},watch:{recharge_type:function(){"record"==this.recharge_type&&this.getUserRechargeRecord(),this.$nextTick(function(){this.scroll.refresh()})}},computed:{Clipboard:s.a},activated:function(){1==this.$route.params.type&&(this.recharge_type="vip")},mounted:function(){a.a.use(n.a),this.scroll=new a.a(this.$refs.wrapper,{probeType:3,click:!0,bounce:{top:!1},pullUpLoad:{threshold:10}}),this.$userInfo(),this.getServiceList()},methods:{getServiceList:function(){var t=this;this.$httpRequest("ApiServiceList","post",{},function(e){t.kefuItems=e.data,t.$nextTick(function(){t.scroll.refresh()})})},getUserRechargeRecord:function(){var t=this;this.$httpRequest("getRechargeRecord","post",{page:this.currPage},function(e){if(200==e.status_code){if(1==t.currPage)t.rechargeList=e.data.data;else for(var i=0;i<e.data.data.length;i++)t.rechargeList.push(e.data.data[i]);t.$nextTick(function(){t.scroll.refresh(),t.scroll.on("pullingUp",function(){t.currPage++,t.endScroll||t.getUserRechargeRecord()})}),t.scroll.finishPullUp()}else t.$refs.scrollEnd.classList.remove("aui-hide"),t.$nextTick(function(){t.endScroll=!0,t.scroll.refresh(),t.scroll.finishPullUp()})})},choosePaytype:function(t){this.rechargeMoney="",this.paytype=t,this.$nextTick(function(){this.scroll.refresh()})},chooseMoney:function(t){this.rechargeMoney=t},gotoPay:function(){var t=this,e=this.paytype,i=this.rechargeMoney;""!=e&&""!=i&&(this.$dialog.loading.open(),this.$httpRequest("ApiUserRecharge","post",{paytype:e,amount:i},function(e){return t.$dialog.loading.close(),window.location.href=e.data,!1}))},inputBlur:function(){this.$refs.rechargeInput.scrollIntoViewIfNeeded()},rechargeInput:function(){var t=this.$refs.rechargeInput.value;if(0!=t.length&&!1===/^[1-9]\d*$/.test(t)||t.length>5)return this.$refs.rechargeInput.value=this.rechargeMoney,!1;this.rechargeMoney=this.$refs.rechargeInput.value},copyKefuCode:function(t,e){var i=this,a=new s.a("#"+t);this.$dialog.loading.open(),a.on("success",function(t){i.$dialog.loading.close(),i.$chkViewType()?i.$dialog.toast({mes:'<div style="color: #fff;">复制成功！</div>',timeout:2e3}):i.$dialog.confirm({title:'<div class="aui-font-size-20 aui-text-center aui-padded-15 aui-padded-b-10">复制成功，是否打开'+("weixin"==e?"微信":"QQ")+"？</div>",mes:'<div class="aui-font-size-18 aui-padded-b-15 aui-text-center">客服账号：'+t.text+"</div>",opts:function(){var i=1==e?"mqqwpa://im/chat?chat_type=wpa&uin="+t.text+"&version=1&src_type=web&web_src=oicqzone.com":"weixin://";window.location.href=i}})})},globalAlert:function(t,e){this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t+"</b></div>",callback:function(){e()}})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"wrapper",staticClass:"wrapper"},[a("div",{staticClass:"wrapper-main"},[t._m(0),t._v(" "),a("div",{staticStyle:{background:"#f5f5f5"}},[a("div",{staticClass:"aui-bar aui-bar-btn aui-padded-15",staticStyle:{width:"80%"}},[a("div",{staticClass:"aui-bar-btn-item",class:"online"==t.recharge_type?"aui-active":"",on:{click:function(e){t.recharge_type="online"}}},[t._v("在线充值")]),t._v(" "),a("div",{staticClass:"aui-bar-btn-item",class:"vip"==t.recharge_type?"aui-active":"",on:{click:function(e){t.recharge_type="vip"}}},[t._v("VIP充值")]),t._v(" "),a("div",{staticClass:"aui-bar-btn-item",class:"record"==t.recharge_type?"aui-active":"",on:{click:function(e){t.recharge_type="record"}}},[t._v("充值记录")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"online"==t.recharge_type,expression:"recharge_type == 'online'"}]},[a("div",{staticClass:"recharge-title aui-margin-15 aui-margin-b-0 aui-font-size-14"},[t._v("\n\t\t\t\t 当前余额："),a("span",{staticClass:"aui-font-size-16"},[t._v(t._s(t.userInfo.balance)+" 金币")])]),t._v(" "),a("div",{staticClass:"recharge-tab aui-row-padded aui-margin-15 aui-margin-t-0"},t._l(t.recharge,function(e,i){return a("div",{key:i,staticClass:"aui-col-xs-4",on:{click:function(e){return t.choosePaytype(i)}}},[a("div",{staticClass:"recharge-item aui-font-size-18",class:t.paytype==i?"active":""},[t._v(t._s(e.name))])])}),0),t._v(" "),a("div",{staticClass:"aui-clear"}),t._v(" "),""!=t.paytype?a("div",{staticClass:"aui-margin-t-15"},[a("div",{staticClass:"recharge-title aui-margin-15 aui-margin-b-0 aui-font-size-14"},[t._v("\n\t\t\t\t\t 请选择金额（1金币 = 1元）\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"recharge-tab aui-row-padded aui-margin-15 aui-margin-t-0"},[t._l(t.recharge[t.paytype].moneys,function(e,i){return a("div",{key:i,staticClass:"aui-col-xs-4 aui-margin-t-10",on:{click:function(i){return t.chooseMoney(e)}}},[a("div",{staticClass:"recharge-item aui-font-size-16",class:t.rechargeMoney==e?"active":""},[t._v(t._s(e)+"金币")])])}),t._v(" "),a("div",{staticClass:"aui-col-xs-8 aui-margin-t-10"},[a("div",{staticClass:"diyMoney"},[a("input",{ref:"rechargeInput",attrs:{type:"number",placeholder:"请输入充值金额"},domProps:{value:t.rechargeMoney},on:{input:t.rechargeInput,blur:t.inputBlur}}),t._v(" "),a("span",{staticClass:"aui-font-size-14"},[t._v("金币")])])]),t._v(" "),a("div",{staticClass:"aui-clear"})],2)]):t._e(),t._v(" "),a("div",{staticClass:"aui-clear"}),t._v(" "),a("div",{staticClass:"aui-margin-15 aui-padded-15"},[a("div",{staticClass:"aui-btn aui-btn-block",class:""!=t.paytype&&""!=t.rechargeMoney?"active":"",on:{click:t.gotoPay}},[t._v("\n\t\t\t\t\t去支付\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"aui-clear"}),t._v(" "),t._m(1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"vip"==t.recharge_type,expression:"recharge_type == 'vip'"}]},[a("ul",{staticClass:"aui-list aui-media-list"},t._l(t.kefuItems,function(e,n){return a("li",{key:n,staticClass:"aui-list-item aui-list-item-middle aui-padded-t-5 aui-padded-b-5"},[a("div",{staticClass:"aui-media-list-item-inner"},[a("div",{staticClass:"aui-list-item-media",staticStyle:{width:"3rem"}},[e.avatar?a("img",{staticClass:"aui-list-img-sm",staticStyle:{"border-radius":"5px","box-shadow":"#eee 0px 1px 10px 0px",height:"2.3rem"},attrs:{src:t.webUrl+"/upload/"+e.avatar}}):a("img",{staticClass:"aui-list-img-sm",staticStyle:{"border-radius":"5px","box-shadow":"#eee 0px 1px 10px 0px",height:"2.3rem"},attrs:{src:i("mjJX")}})]),t._v(" "),a("div",{staticClass:"aui-list-item-inner"},[a("div",{staticClass:"aui-list-item-text"},[a("div",{staticClass:"aui-list-item-title aui-font-size-18"},[t._v(t._s(1==e.kefu_type?"QQ":"微信")+"："+t._s(e.kefu_number))]),t._v(" "),a("div",{staticClass:"aui-list-item-right"},[a("div",{staticClass:"aui-btn aui-btn-danger",staticStyle:{top:"10px"},attrs:{id:"kefu"+n,"data-clipboard-text":e.kefu_number},on:{click:function(i){return t.copyKefuCode("kefu"+n,e.kefu_type)}}},[t._v("复制")])])]),t._v(" "),a("div",{staticClass:"aui-list-item-text"},[t._v(t._s(e.kefu_name))])])])])}),0),t._v(" "),a("div",{staticClass:"aui-clear"}),t._v(" "),t._m(2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"record"==t.recharge_type,expression:"recharge_type == 'record'"}]},[a("ul",{staticClass:"aui-list aui-media-list "},[t._l(t.rechargeList,function(e,n){return a("li",{key:n,staticClass:"aui-list-item aui-list-item-middle aui-padded-t-5 aui-padded-b-5"},[a("div",{staticClass:"aui-media-list-item-inner"},[a("div",{staticClass:"aui-list-item-media",staticStyle:{width:"3rem"}},["支付宝充值"==e.paytype?a("img",{staticClass:"aui-list-img-sm",attrs:{src:i("k9A2")}}):a("img",{staticClass:"aui-list-img-sm",attrs:{src:i("y6qt")}})]),t._v(" "),a("div",{staticClass:"aui-list-item-inner"},[a("div",{staticClass:"aui-list-item-text"},[a("div",{staticClass:"aui-list-item-title aui-font-size-18"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.paytype)+"\n\t\t\t\t\t\t\t\t\t"),a("div",{staticClass:"aui-label",class:1==e.orderstatus?"aui-label-warning":2==e.orderstatus?"aui-label-success":"aui-label-danger"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e.orderstatus?"未支付":2==e.orderstatus?"充值成功":"充值失败")+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"aui-list-item-right aui-font-size-18",staticStyle:{color:"#000"}},[t._v("\n\t\t\t\t\t\t\t\t\t+ "+t._s(e.true_amount)+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"aui-list-item-text aui-padded-t-5 aui-font-size-16"},[t._v("\n\t\t\t\t\t\t\t\t充值单号："+t._s(e.ordersn)+"\n\t\t\t\t\t\t\t")])])])])}),t._v(" "),a("div",{ref:"scrollEnd",staticClass:"aui-text-center aui-font-size-14 aui-text-default aui-padded-15 aui-hide"},[t._v("~~我也是有底线的~~")])],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notice aui-font-size-18",staticStyle:{padding:"8px"}},[e("img",{staticStyle:{display:"inline-block","vertical-align":"middle","margin-top":"-3px"},attrs:{src:i("N5Ih"),width:"15",alt:""}}),this._v("\n\t\t\t快速、稳定，请选择“VIP充值” \n\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recharge-notice aui-font-size-14",staticStyle:{color:"#888"}},[i("div",{staticClass:"recharge-title aui-margin-15 aui-margin-b-0"},[i("b",[t._v("充值说明")])]),t._v(" "),i("ul",{staticClass:"aui-padded-15 aui-padded-t-0"},[i("li",{staticStyle:{color:"#EF453A"}},[t._v("* 小额支付请选择“VIP”充值！")]),t._v(" "),i("li",[t._v("1. 充值成功后，资金将在5分钟内到账（网络延迟情况除外）")]),t._v(" "),i("li",[t._v("2. 如充值失败，资金会按原路径返回到你的充值账户；")]),t._v(" "),i("li",[t._v("3. 充值金额必须与所选金额一致，否则容易造成充值不到账的情况；")]),t._v(" "),i("li",[t._v("4. 如充值遇到不到账等问题，请联系客服；")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recharge-notice aui-font-size-14",staticStyle:{color:"#888"}},[e("div",{staticClass:"recharge-title aui-margin-15 aui-margin-b-0"},[e("b",[this._v("VIP充值说明")])]),this._v(" "),e("div",{staticClass:"aui-padded-15 aui-padded-t-0"},[this._v("\n\t\t\t\t\t在线充值充值不稳定时请优先选择VIP充值\n\t\t\t\t")]),this._v(" "),e("ul",{staticClass:"aui-padded-15 aui-padded-t-0"},[e("li",[this._v("1. 无需等待，排队，快速到账")]),this._v(" "),e("li",[this._v("2. 人工客服一对一服务，安全稳定")])])])}]};var l=i("VU/8")(o,c,!1,function(t){i("2pu2")},null,null);e.default=l.exports},y6qt:function(t,e,i){t.exports=i.p+"static/img/wxpay.aa93a23.png"}});