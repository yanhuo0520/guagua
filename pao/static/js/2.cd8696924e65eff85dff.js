webpackJsonp([2],{"//Fk":function(t,e,i){t.exports={default:i("U5ju"),__esModule:!0}},"2KxR":function(t,e){t.exports=function(t,e,i,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(i+": incorrect invocation!");return t}},"3fs2":function(t,e,i){var r=i("RY/4"),n=i("dSzd")("iterator"),a=i("/bQp");t.exports=i("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||a[r(t)]}},"5oUw":function(t,e,i){t.exports=i.p+"static/img/bank.2b28e14.png"},"6lmV":function(t,e){},"82Mu":function(t,e,i){var r=i("7KvD"),n=i("L42u").set,a=r.MutationObserver||r.WebKitMutationObserver,o=r.process,s=r.Promise,c="process"==i("R9M2")(o);t.exports=function(){var t,e,i,u=function(){var r,n;for(c&&(r=o.domain)&&r.exit();t;){n=t.fn,t=t.next;try{n()}catch(r){throw t?i():e=void 0,r}}e=void 0,r&&r.enter()};if(c)i=function(){o.nextTick(u)};else if(!a||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);i=function(){l.then(u)}}else i=function(){n.call(r,u)};else{var f=!0,d=document.createTextNode("");new a(u).observe(d,{characterData:!0}),i=function(){d.data=f=!f}}return function(r){var n={fn:r,next:void 0};e&&(e.next=n),t||(t=n,i()),e=n}}},CXw9:function(t,e,i){"use strict";var r,n,a,o,s=i("O4g8"),c=i("7KvD"),u=i("+ZMJ"),l=i("RY/4"),f=i("kM2E"),d=i("EqjI"),h=i("lOnJ"),v=i("2KxR"),p=i("NWt+"),m=i("t8x9"),y=i("L42u").set,_=i("82Mu")(),g=i("qARP"),b=i("dNDb"),w=i("iUbK"),x=i("fJUb"),k=c.TypeError,C=c.process,P=C&&C.versions,$=P&&P.v8||"",E=c.Promise,S="process"==l(C),L=function(){},R=n=g.f,j=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[i("dSzd")("species")]=function(t){t(L,L)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==$.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},z=function(t,e){if(!t._n){t._n=!0;var i=t._c;_(function(){for(var r=t._v,n=1==t._s,a=0,o=function(e){var i,a,o,s=n?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{s?(n||(2==t._h&&M(t),t._h=1),!0===s?i=r:(l&&l.enter(),i=s(r),l&&(l.exit(),o=!0)),i===e.promise?u(k("Promise-chain cycle")):(a=F(i))?a.call(i,c,u):c(i)):u(r)}catch(t){l&&!o&&l.exit(),u(t)}};i.length>a;)o(i[a++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){y.call(c,function(){var e,i,r,n=t._v,a=A(t);if(a&&(e=b(function(){S?C.emit("unhandledRejection",n,t):(i=c.onunhandledrejection)?i({promise:t,reason:n}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",n)}),t._h=S||A(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},M=function(t){y.call(c,function(){var e;S?C.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},O=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),z(e,!0))},K=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw k("Promise can't be resolved itself");(e=F(t))?_(function(){var r={_w:i,_d:!1};try{e.call(t,u(K,r,1),u(O,r,1))}catch(t){O.call(r,t)}}):(i._v=t,i._s=1,z(i,!1))}catch(t){O.call({_w:i,_d:!1},t)}}};j||(E=function(t){v(this,E,"Promise","_h"),h(t),r.call(this);try{t(u(K,this,1),u(O,this,1))}catch(t){O.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i("xH/j")(E.prototype,{then:function(t,e){var i=R(m(this,E));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=S?C.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&z(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new r;this.promise=t,this.resolve=u(K,t,1),this.reject=u(O,t,1)},g.f=R=function(t){return t===E||t===o?new a(t):n(t)}),f(f.G+f.W+f.F*!j,{Promise:E}),i("e6n0")(E,"Promise"),i("bRrM")("Promise"),o=i("FeBl").Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var e=R(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!j),"Promise",{resolve:function(t){return x(s&&this===o?E:this,t)}}),f(f.S+f.F*!(j&&i("dY0y")(function(t){E.all(t).catch(L)})),"Promise",{all:function(t){var e=this,i=R(e),r=i.resolve,n=i.reject,a=b(function(){var i=[],a=0,o=1;p(t,!1,function(t){var s=a++,c=!1;i.push(void 0),o++,e.resolve(t).then(function(t){c||(c=!0,i[s]=t,--o||r(i))},n)}),--o||r(i)});return a.e&&n(a.v),i.promise},race:function(t){var e=this,i=R(e),r=i.reject,n=b(function(){p(t,!1,function(t){e.resolve(t).then(i.resolve,r)})});return n.e&&r(n.v),i.promise}})},D0cs:function(t,e,i){t.exports=i.p+"static/img/alipay.e6b936e.png"},EqBC:function(t,e,i){"use strict";var r=i("kM2E"),n=i("FeBl"),a=i("7KvD"),o=i("t8x9"),s=i("fJUb");r(r.P+r.R,"Promise",{finally:function(t){var e=o(this,n.Promise||a.Promise),i="function"==typeof t;return this.then(i?function(i){return s(e,t()).then(function(){return i})}:t,i?function(i){return s(e,t()).then(function(){throw i})}:t)}})},L42u:function(t,e,i){var r,n,a,o=i("+ZMJ"),s=i("knuC"),c=i("RPLV"),u=i("ON07"),l=i("7KvD"),f=l.process,d=l.setImmediate,h=l.clearImmediate,v=l.MessageChannel,p=l.Dispatch,m=0,y={},_=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},g=function(t){_.call(t.data)};d&&h||(d=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return y[++m]=function(){s("function"==typeof t?t:Function(t),e)},r(m),m},h=function(t){delete y[t]},"process"==i("R9M2")(f)?r=function(t){f.nextTick(o(_,t,1))}:p&&p.now?r=function(t){p.now(o(_,t,1))}:v?(a=(n=new v).port2,n.port1.onmessage=g,r=o(a.postMessage,a,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",g,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(o(_,t,1),0)}),t.exports={set:d,clear:h}},Mhyx:function(t,e,i){var r=i("/bQp"),n=i("dSzd")("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[n]===t)}},"NWt+":function(t,e,i){var r=i("+ZMJ"),n=i("msXi"),a=i("Mhyx"),o=i("77Pl"),s=i("QRG4"),c=i("3fs2"),u={},l={};(e=t.exports=function(t,e,i,f,d){var h,v,p,m,y=d?function(){return t}:c(t),_=r(i,f,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(a(y)){for(h=s(t.length);h>g;g++)if((m=e?_(o(v=t[g])[0],v[1]):_(t[g]))===u||m===l)return m}else for(p=y.call(t);!(v=p.next()).done;)if((m=n(p,_,v.value,e))===u||m===l)return m}).BREAK=u,e.RETURN=l},"RY/4":function(t,e,i){var r=i("R9M2"),n=i("dSzd")("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,i,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),n))?i:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},SldL:function(t,e){!function(e){"use strict";var i,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",v="completed",p={},m={};m[o]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(j([])));_&&_!==r&&n.call(_,o)&&(m=_);var g=C.prototype=x.prototype=Object.create(m);k.prototype=g.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},P($.prototype),$.prototype[s]=function(){return this},l.AsyncIterator=$,l.async=function(t,e,i,r){var n=new $(b(t,e,i,r));return l.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},P(g),g[c]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},l.values=j,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=i),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;L(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=i),p}}}function b(t,e,i,r){var n=e&&e.prototype instanceof x?e:x,a=Object.create(n.prototype),o=new R(r||[]);return a._invoke=function(t,e,i){var r=f;return function(n,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===n)throw a;return F()}for(i.method=n,i.arg=a;;){var o=i.delegate;if(o){var s=E(o,i);if(s){if(s===p)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===f)throw r=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=h;var c=w(t,e,i);if("normal"===c.type){if(r=i.done?v:d,c.arg===p)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=v,i.method="throw",i.arg=c.arg)}}}(t,i,o),a}function w(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function C(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function $(t){var e;this._invoke=function(i,r){function a(){return new Promise(function(e,a){!function e(i,r,a,o){var s=w(t[i],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(u).then(function(t){c.value=t,a(c)},o)}o(s.arg)}(i,r,e,a)})}return e=e?e.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(r===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=w(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=i,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:i,done:!0}}}(function(){return this}()||Function("return this")())},U5ju:function(t,e,i){i("M6a0"),i("zQR9"),i("+tPU"),i("CXw9"),i("EqBC"),i("jKW+"),t.exports=i("FeBl").Promise},Xxa5:function(t,e,i){t.exports=i("jyFz")},bRrM:function(t,e,i){"use strict";var r=i("7KvD"),n=i("FeBl"),a=i("evD5"),o=i("+E39"),s=i("dSzd")("species");t.exports=function(t){var e="function"==typeof n[t]?n[t]:r[t];o&&e&&!e[s]&&a.f(e,s,{configurable:!0,get:function(){return this}})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},dY0y:function(t,e,i){var r=i("dSzd")("iterator"),n=!1;try{var a=[7][r]();a.return=function(){n=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var i=!1;try{var a=[7],o=a[r]();o.next=function(){return{done:i=!0}},a[r]=function(){return o},t(a)}catch(t){}return i}},exGp:function(t,e,i){"use strict";e.__esModule=!0;var r,n=i("//Fk"),a=(r=n)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,i){return function r(n,o){try{var s=e[n](o),c=s.value}catch(t){return void i(t)}if(!s.done)return a.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}},fJUb:function(t,e,i){var r=i("77Pl"),n=i("EqjI"),a=i("qARP");t.exports=function(t,e){if(r(t),n(e)&&e.constructor===t)return e;var i=a.f(t);return(0,i.resolve)(e),i.promise}},iUbK:function(t,e,i){var r=i("7KvD").navigator;t.exports=r&&r.userAgent||""},"jKW+":function(t,e,i){"use strict";var r=i("kM2E"),n=i("qARP"),a=i("dNDb");r(r.S,"Promise",{try:function(t){var e=n.f(this),i=a(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},jyFz:function(t,e,i){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=i("SldL"),n)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},k9A2:function(t,e,i){t.exports=i.p+"static/img/alipay.f613c5e.png"},knuC:function(t,e){t.exports=function(t,e,i){var r=void 0===i;switch(e.length){case 0:return r?t():t.call(i);case 1:return r?t(e[0]):t.call(i,e[0]);case 2:return r?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},msXi:function(t,e,i){var r=i("77Pl");t.exports=function(t,e,i,n){try{return n?e(r(i)[0],i[1]):e(i)}catch(e){var a=t.return;throw void 0!==a&&r(a.call(t)),e}}},pKgV:function(t,e,i){t.exports=i.p+"static/img/shoukuanren.04d962e.png"},qARP:function(t,e,i){"use strict";var r=i("lOnJ");t.exports.f=function(t){return new function(t){var e,i;this.promise=new t(function(t,r){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=r}),this.resolve=r(e),this.reject=r(i)}(t)}},rgfK:function(t,e,i){t.exports=i.p+"static/img/bankCard.f9d7f2a.png"},t8x9:function(t,e,i){var r=i("77Pl"),n=i("lOnJ"),a=i("dSzd")("species");t.exports=function(t,e){var i,o=r(t).constructor;return void 0===o||void 0==(i=r(o)[a])?e:n(i)}},v9Cd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Xxa5"),n=i.n(r),a=i("//Fk"),o=i.n(a),s=i("exGp"),c=i.n(s),u=i("cVr7"),l=i("ofmo"),f={name:"Forward",data:function(){return{userInfo:"",forward_type:"alipay",forwardInfo:"",currPage:1,list:"",scroll:"",endScroll:!1,isAlready:!1,showXianzhi:!0,isForwardTrue:!1,showPaykeyboard:!1,verifyStatus:!1,safeKeyboard:!1,bankCard:"",bankname:"",username:"",account:""}},watch:{showPaykeyboard:function(){var t=this;this.$nextTick(function(){"alipay"!=t.forward_type?(t.$refs.f_bank_card.value=t.bankCard,t.$refs.f_bank_name.value=t.bankname):t.$refs.f_alipay_account.value=t.account})}},activated:function(){var t=this;setTimeout(function(){t.$route.query.scroll&&t.showRecord()},300),"commssion"==this.$route.params.type&&(this.showXianzhi=!1)},mounted:function(){var t=this;this.$userInfo(),u.a.use(l.a),this.$nextTick(function(){this.scroll=new u.a(t.$refs.wrapper,{probeType:3,click:!0,bounce:{top:!1},pullUpLoad:{threshold:10}})})},methods:{Verification:function(t){var e=this;this.$dialog.loading.open("设置中，请稍候..."),this.$httpRequest("ApiSetUserPayCode","post",{pay_code:t},function(i){e.$dialog.loading.close(),200==i.status_code?(e.safeKeyboard=!1,e.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>支付密码设置成功，请牢记密码："+t+"</b></div>",callback:function(){e.userInfo.pay_code=t}})):e.$refs.keyboard.$emit("ydui.keyboard.error",i.message)},function(){e.$refs.keyboard.$emit("ydui.keyboard.error","系统异常！")})},changeType:function(t){this.forward_type=t,this.$nextTick(function(){this.scroll.refresh()})},changePosition:function(t){this.$refs.wrapper.style.position=t},showRecord:function(){var t=this;this.forward_type="record",this.isAlready?setTimeout(function(){t.scroll.refresh(),t.$refs.scrollEnd.classList.remove("aui-hide")},500):this.initForwardList()},verifyPaycode:function(){if(this.userInfo.pay_code)this.verifyForward()&&(this.showPaykeyboard=!0);else{var t=this;this.$dialog.confirm({title:'<b class="aui-font-size-20">您还未设置支付密码</b>',mes:'<div class="aui-padded-t-15 aui-padded-b-15"><div>为了账户安全，请尽快设置支付密码！</div><ul class="aui-margin-t-10"><li>1. 资金转账时需认证支付密码！</li><li>2. 提现时需认证手机号与支付密码！</li></ul></div>',opts:function(){t.safeKeyboard=!0}})}},paycodedone:function(t){var e=this;this.$dialog.loading.open("验证支付密码"),this.$httpRequest("ApiVerifyPayCode","post",{pay_code:t},function(t){e.$dialog.loading.close(),200==t.status_code?(e.verifyStatus=!0,e.showPaykeyboard=!1,e.sureForward()):e.$refs.keyboard.$emit("ydui.keyboard.error",t.message)})},verifyForward:function(){var t=void 0,e=void 0,i=void 0,r=this.forward_type,n='so',a=Number(this.$refs.f_money.value);var o=Number(this.$route.params.type?this.userInfo.commssion:this.userInfo.balance);return ""==a||a<=0||a>o?(this.globalAlert("提现金额不合法！",function(){}),!1):(this.username=n,!0)},sureForward:function(){var t=this;return c()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new o.a(function(e){if(!1===t.verifyStatus)return t.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>非法操作</b></div>"}),!1;var i=t,r=void 0,n=void 0,a=void 0,o=t.forward_type;"alipay"==o?r=t.account:(a=t.bankCard,n=t.bankname);var s=t.username,c=t.$refs.f_money.value;!1===t.isForwardTrue&&(t.isForwardTrue=!0,t.$dialog.loading.open("验证中，请稍候..."),t.$httpRequest("ApiForwardAndBind","post",{forward_way:o,username:s,alipay_account:r,bank_card:a,bank_name:n,forward_money:c,forwar_type:t.$route.params.type},function(t){i.$dialog.loading.close(),200==t.status_code?(i.bankCard="",i.bankname="",i.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t.message+"</b></div>",callback:function(){i.isAlready=i.endScroll=!1,i.currPage=1,i.$nextTick(function(){i.showRecord()})}})):402==t.status_code?i.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t.message+"</b></div>",callback:function(){i.$router.push({path:"/my"})}}):i.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t.message+"</b></div>"}),i.verifyStatus=!1,i.isForwardTrue=!1}))});case 2:case"end":return e.stop()}},e,t)}))()},initForwardList:function(){var t=this;this.$httpRequest("ApiUserForwardLog","post",{page:this.currPage},function(e){if(t.isAlready=!0,200==e.status_code){if(1==t.currPage)t.list=e.data.data;else for(var i=0;i<e.data.data.length;i++)t.list.push(e.data.data[i]);t.$nextTick(function(){t.scroll.refresh(),t.scroll.on("pullingUp",function(){t.currPage++,t.endScroll||t.initForwardList()})}),t.scroll.finishPullUp()}else t.$refs.scrollEnd.classList.remove("aui-hide"),t.$nextTick(function(){t.endScroll=!0,t.scroll.refresh(),t.scroll.finishPullUp()})})},globalAlert:function(t,e){this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t+"</b></div>",callback:function(){e()}})}}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"wrapper",staticClass:"wrapper"},[r("div",{staticClass:"wrapper-main"},[r("div",{staticStyle:{background:"#fff"}},[r("div",{staticClass:"aui-bar aui-bar-btn aui-padded-15",staticStyle:{width:"80%"}},[r("div",{staticClass:"aui-bar-btn-item",class:"alipay"==t.forward_type?"aui-active":"",on:{click:function(e){return t.changeType("alipay")}}},[t._v("自动到帐")]),t._v(" "),r("div",{staticClass:"aui-bar-btn-item",class:"record"==t.forward_type?"aui-active":"",on:{click:t.showRecord}},[t._v("提现记录")])])]),t._v(" "),"alipay"==t.forward_type||"bank"==t.forward_type?r("div",["alipay"==t.forward_type?r(""):r("ul",{staticClass:"aui-list aui-form-list"},[r("li",{staticClass:"aui-list-item aui-padded-t-5 aui-padded-b-5"},[r("div",{staticClass:"aui-list-item-inner"},[t._m(2),t._v(" "),r("div",{staticClass:"aui-list-item-input"},[r("input",{ref:"f_username",staticStyle:{"line-height":"20px","text-align":"right"},attrs:{type:"text",maxlength:"10",placeholder:"持卡人真实姓名"},domProps:{value:t.userInfo.username},on:{blur:function(e){return t.changePosition("absolute")},focus:function(e){return t.changePosition("static")}}})])])]),t._v(" "),r("li",{staticClass:"aui-list-item aui-padded-t-5 aui-padded-b-5"},[r("div",{staticClass:"aui-list-item-inner"},[t._m(3),t._v(" "),r("div",{staticClass:"aui-list-item-input"},[r("input",{ref:"f_bank_card",staticStyle:{"line-height":"20px","text-align":"right"},attrs:{type:"tel",maxlength:"20",placeholder:"银行卡号"},domProps:{value:t.userInfo.bank_card},on:{blur:function(e){return t.changePosition("absolute")},focus:function(e){return t.changePosition("static")}}})])])]),t._v(" "),r("li",{staticClass:"aui-list-item aui-padded-t-5 aui-padded-b-5"},[r("div",{staticClass:"aui-list-item-inner"},[t._m(4),t._v(" "),r("div",{staticClass:"aui-list-item-input"},[r("input",{ref:"f_bank_name",staticStyle:{"line-height":"20px","text-align":"right"},attrs:{type:"text",maxlength:"20",placeholder:"银行开户行名称"},domProps:{value:t.userInfo.bank_name},on:{blur:function(e){return t.changePosition("absolute")},focus:function(e){return t.changePosition("static")}}})])])])]),t._v(" "),r("div",{staticClass:"forwar-main aui-padded-15"},[r("div",{staticClass:"forward-title aui-text-left aui-font-size-16"},[t._v("提现金额")]),t._v(" "),r("div",{staticClass:"forwar-money"},[r("span",[t._v("￥")]),t._v(" "),r("input",{ref:"f_money",staticClass:"forwar-input",attrs:{type:"number",placeholder:"0.00"},on:{blur:function(e){return t.changePosition("absolute")},focus:function(e){return t.changePosition("static")}}}),t._v(" "),r("div",{staticClass:"aui-clear"})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showXianzhi,expression:"showXianzhi"}],staticClass:"forwar-footer aui-font-size-14"},[t._v("可用余额："+t._s(t.userInfo.balance)+" 金币")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.showXianzhi,expression:"!showXianzhi"}],staticClass:"forwar-footer aui-font-size-14"},[t._v("可提现佣金："+t._s(t.userInfo.commssion)+" 元")])]),t._v(" "),r("div",{staticClass:"aui-margin-15"},[r("div",{staticClass:"aui-btn aui-btn-block forward-active",on:{click:t.verifyPaycode}},[t._v("确认提现")])]),t._v(" "),r("div",{staticClass:"forward-notice aui-padded-l-15 aui-font-size-16",staticStyle:{color:"#f45e4d"}},[t._v("")]),t._v(" "),r("div",{staticClass:"recharge-notice aui-font-size-14",staticStyle:{color:"#888"}},[t._m(5),t._v(" "),r("ul",{staticClass:"aui-padded-15 aui-padded-t-0"},[r("li",[t._v("1. 若提现至银行卡，请详细填写银行卡开户行名称!")]),t._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:t.showXianzhi,expression:"showXianzhi"}]},[t._v("2. 玩家输赢流水需达到最新充值金额的一倍并且最低提现金额为五十，才可申请提现！")])])])]):r("ul",{staticClass:"aui-list aui-media-list"},[t._l(t.list,function(e,n){return r("li",{key:n,staticClass:"aui-list-item aui-list-item-middle aui-padded-t-5 aui-padded-b-5"},[r("div",{staticClass:"aui-media-list-item-inner"},[r("div",{staticClass:"aui-list-item-media",staticStyle:{width:"3rem"}},["alipay"==e.forward_way?r("img",{staticClass:"aui-img-round aui-list-img-sm",staticStyle:{"box-shadow":"#ddd 0px 1px 10px 0px"},attrs:{src:i("k9A2")}}):r("img",{staticClass:"aui-img-round aui-list-img-sm",staticStyle:{"box-shadow":"#ddd 0px 1px 10px 0px"},attrs:{src:i("rgfK")}})]),t._v(" "),r("div",{staticClass:"aui-list-item-inner"},[r("div",{staticClass:"aui-list-item-text"},[r("div",{staticClass:"aui-list-item-title aui-font-size-18"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.realname)+" | "+t._s("alipay"==e.forward_way?"支付宝":"银行卡")+"\n\t\t\t\t\t\t\t\t"),0==e.status?r("div",{staticClass:"aui-label aui-label-info"},[t._v("申请中")]):2==e.status?r("div",{staticClass:"aui-label aui-label-danger"},[t._v("提现失败")]):t._e(),t._v(" "),1==e.status?r("div",{staticClass:"aui-label",staticStyle:{background:"#00CC00",color:"#fff"}},[t._v("提现成功")]):t._e()]),t._v(" "),r("div",{staticClass:"aui-list-item-right aui-font-size-18",staticStyle:{color:"#000"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.account)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"aui-list-item-text aui-padded-t-5 aui-font-size-16"},[t._v("\n\t\t\t\t\t\t\t"+t._s("alipay"!=e.forward_way?e.bankname+" | "+e.bankcard:"支付宝账号："+e.alipay_code)+"\n\t\t\t\t\t\t")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.remark,expression:"item.remark"}],staticClass:"aui-list-item-text aui-padded-t-5 aui-font-size-16",staticStyle:{color:"#e51c23"}},[t._v("\n\t\t\t\t\t\t\t反馈: "+t._s(e.remark)+"\n\t\t\t\t\t\t")])])])])}),t._v(" "),r("div",{ref:"scrollEnd",staticClass:"aui-text-center aui-font-size-14 aui-text-default aui-padded-15 aui-hide"},[t._v("~~我也是有底线的~~")])],2)]),t._v(" "),r("yd-keyboard",{ref:"keyboard",attrs:{title:"平台安全键盘","input-text":"设置账户支付密码",callback:t.Verification,disorder:!0},model:{value:t.safeKeyboard,callback:function(e){t.safeKeyboard=e},expression:"safeKeyboard"}}),t._v(" "),r("yd-keyboard",{ref:"keyboard",attrs:{title:"平台安全键盘","input-text":"验证支付密码",callback:t.paycodedone,disorder:""},model:{value:t.showPaykeyboard,callback:function(e){t.showPaykeyboard=e},expression:"showPaykeyboard"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("")},function(){var t=this.$createElement,e=this._self._c||t;return e("")},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aui-list-item-label"},[e("img",{attrs:{src:i("pKgV"),width:"20",alt:""}}),this._v(" 真实姓名\n\t\t\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aui-list-item-label"},[e("img",{attrs:{src:i("rgfK"),width:"20",alt:""}}),this._v(" 银行卡号\n\t\t\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aui-list-item-label"},[e("img",{attrs:{src:i("5oUw"),width:"20",alt:""}}),this._v(" 开户行\n\t\t\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recharge-title aui-margin-l-15 aui-margin-t-10"},[e("b",[this._v("提现需知")])])}]};var h=i("VU/8")(f,d,!1,function(t){i("6lmV")},"data-v-2cc596f6",null);e.default=h.exports},"xH/j":function(t,e,i){var r=i("hJx8");t.exports=function(t,e,i){for(var n in e)i&&t[n]?t[n]=e[n]:r(t,n,e[n]);return t}}});