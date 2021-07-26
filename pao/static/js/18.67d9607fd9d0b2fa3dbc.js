webpackJsonp([18],{"3A7/":function(t,e,i){t.exports=i.p+"static/img/bili.b438c4b.png"},ja7c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("cVr7"),a=i("ofmo"),r={name:"Userlist",data:function(){return{currPage:1,userList:"",scroll:"",showUserRate:!1,selectedId:0,total:0,userRate:0,hideSearchBtn:!0,searchCount:0}},mounted:function(){this.refreshList(),s.a.use(a.a),this.$nextTick(function(){var t=this;this.scroll=new s.a(this.$refs.wrapper,{probeType:3,click:!0,bounce:{top:!1},pullUpLoad:{threshold:10}}),this.scroll.on("pullingUp",function(){t.currPage++,t.refreshList()})})},methods:{inputValue:function(){this.$refs.keyword.value.length>0?this.hideSearchBtn=!1:(this.hideSearchBtn=!0,0!=this.searchCount&&(this.searchCount=this.currPage=1,this.$refs.scrollEnd.classList.add("aui-hide"),this.refreshList()))},searchByKeyword:function(){if(this.$refs.keyword.value.length<=0)return this.rAlert("请输入关键词",function(){}),!1;this.searchCount=this.currPage=1,this.$refs.scrollEnd.classList.add("aui-hide"),this.refreshList()},changePosition:function(){var t=document.getElementById("pannel");t.scrollIntoView(!0),t.scrollIntoViewIfNeeded()},refreshList:function(){var t=this;1==this.currPage&&this.$dialog.loading.open(),this.$httpRequest("ApiUserInvitList","post",{keyword:this.$refs.keyword.value,page:this.currPage},function(e){if(t.$dialog.loading.close(),t.userRate=e.data.agent_rate,200==e.status_code){if(t.total=0==t.total?e.data.total:t.total,t.user_id=e.data.group_user,1==t.currPage)t.userList=e.data.data;else for(var i=0;i<e.data.data.length;i++)t.userList.push(e.data.data[i]);t.$nextTick(function(){t.scroll.refresh()}),t.scroll.finishPullUp()}else t.$refs.scrollEnd.classList.remove("aui-hide"),t.$nextTick(function(){t.endScroll=!0,t.scroll.refresh(),t.scroll.finishPullUp()})})},setUserRate:function(t){var e=this;this.$dialog.confirm({title:'<b class="aui-font-size-20">用户须知</b>',mes:'<div class="aui-font-size-18 aui-padded-t-15 aui-padded-b-15" style="line-height: 25px!important;color: red;">只可为下级玩家设置一次返佣比例，设置后将不可再次更改，请谨慎操作！</div>',opts:function(){e.$refs["rate-insert"].value="",e.showUserRate=!0,e.selectedId=t}})},saveUserRate:function(){var t=this,e=this.$refs["rate-insert"].value;""!=e?e>=this.userRate?this.rAlert("下级玩家分佣比例需小于您所持有的："+this.userRate,function(){}):(this.$dialog.loading.open(),this.$httpRequest("ApiSetAgentRate","post",{unique_id:this.selectedId,agent_rate:e},function(i){t.$dialog.loading.close(),200==i.status_code?(t.showUserRate=!1,t.rAlert("设置成功",function(){document.getElementById("option-"+t.selectedId).innerHTML='<div class="aui-btn" style="top: 10px;">比例：'+e+"%</div>"})):t.$dialog.toast({mes:'<span style="color: #fff;">'+i.message+"</span>",timeout:2e3,icon:"error"})})):this.rAlert("请输入分佣比例",function(){})},rAlert:function(t,e){this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t+"</b></div>",callback:function(){e()}})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrapper",staticClass:"wrapper"},[s("div",{staticClass:"wrapper-main"},[s("div",{staticClass:"aui-text-center aui-font-size-18 aui-padded-15",staticStyle:{background:"#fff"}},[t._v("\n\t\t\t当前邀请的玩家总数："),s("b",[t._v(t._s(t.total))]),t._v(" 人\n\t\t")]),t._v(" "),s("div",{staticClass:"agent-search ",class:t.hideSearchBtn?"":"search-active"},[s("input",{ref:"keyword",attrs:{type:"search",placeholder:"ID，昵称"},on:{input:t.inputValue}}),t._v(" "),s("div",{staticClass:"aui-btn search-btn",on:{click:t.searchByKeyword}},[t._v("搜索")])]),t._v(" "),s("ul",{staticClass:"aui-list aui-media-list aui-margin-t-15"},[t._l(t.userList,function(e,i){return s("li",{key:i,staticClass:"aui-list-item aui-list-item-middle aui-padded-t-5 aui-padded-b-5",attrs:{id:"item-"+e.unique_id}},[s("div",{staticClass:"aui-media-list-item-inner"},[s("div",{staticClass:"aui-list-item-media",staticStyle:{width:"3rem"}},[s("img",{staticClass:"aui-list-img-sm",staticStyle:{width:"45px",height:"45px","border-radius":"5px","box-shadow":"#eee 0px 1px 10px 0px"},attrs:{src:t.webUrl+"/upload/"+e.avatar}})]),t._v(" "),s("div",{staticClass:"aui-list-item-inner"},[s("div",{staticClass:"aui-list-item-text"},[s("div",{staticClass:"aui-list-item-title aui-font-size-18 user-name"},[t._v(t._s(e.name))]),t._v(" "),t.userRate>0?s("div",{staticClass:"aui-list-item-right",attrs:{id:"option-"+e.unique_id}},[t.userRate>0&&0==e.agent_rate?s("div",{staticClass:"aui-btn aui-btn-danger",staticStyle:{top:"10px"},on:{click:function(i){return t.setUserRate(e.unique_id)}}},[t._v("设置返佣")]):s("div",{staticClass:"aui-btn",staticStyle:{top:"10px"}},[t._v("比例："+t._s(e.agent_rate)+"%")])]):t._e()]),t._v(" "),s("div",{staticClass:"aui-list-item-text"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.created_at)+"  ["+t._s(e.unique_id)+"]\n\t\t\t\t\t\t")])])])])}),t._v(" "),s("div",{ref:"scrollEnd",staticClass:"aui-text-center zui-font-size-14 aui-text-default aui-padded-15 aui-hide"},[t._v("~~我也是有底线的~~")])],2)]),t._v(" "),s("yd-popup",{attrs:{position:"center",width:"90%"},model:{value:t.showUserRate,callback:function(e){t.showUserRate=e},expression:"showUserRate"}},[s("div",{staticClass:"aui-padded-15",staticStyle:{"background-color":"#eee","border-radius":"5px"}},[s("div",{staticClass:"title aui-text-center aui-font-size-20 aui-margin-b-15"},[t._v("设置返佣比例")]),t._v(" "),s("div",{staticClass:"aui-row text-item",staticStyle:{background:"#fff"}},[s("div",{staticClass:"aui-col-xs-3 aui-font-size-16"},[s("img",{staticClass:"aui-pull-left",staticStyle:{"vertical-align":"top"},attrs:{src:i("3A7/"),width:"15"}}),t._v(" 比例\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"aui-col-xs-8"},[s("input",{ref:"rate-insert",staticClass:"text-insert aui-text-right",staticStyle:{"margin-top":"-10px"},attrs:{type:"number",id:"pannel",placeholder:"返佣比例: 需小于"+t.userRate},on:{blur:t.changePosition,focus:t.changePosition}})]),t._v(" "),s("div",{staticClass:"aui-col-xs-1 aui-text-right"},[t._v("%")])]),t._v(" "),s("div",{staticClass:"send-desc aui-text-left"},[t._v("设置后不可更改")]),t._v(" "),s("div",{staticClass:"aui-btn aui-btn-block rate-btn",on:{click:t.saveUserRate}},[t._v("确认保存")])])])],1)},staticRenderFns:[]};var l=i("VU/8")(r,n,!1,function(t){i("pCdl")},"data-v-0b958bc2",null);e.default=l.exports},pCdl:function(t,e){}});