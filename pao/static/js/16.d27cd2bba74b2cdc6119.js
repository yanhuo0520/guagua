webpackJsonp([16],{gzPk:function(t,s){},sXs1:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"Addgroup",data:function(){return{toast:""}},mounted:function(){},methods:{addGroup:function(){var t=this,s=this.$refs.groupid.value;""!=s?(this.loading(),this.$httpRequest("ApiMemberJoinGroup","post",{group_number:s},function(s){t.toast.hide(),t.$setItem("cacheJoinList",""),200==s.status_code?(t.$refs.groupid.value="",t.globalAlert(s.message,function(){t.$router.push({path:"/ChatList"})})):402==s.status_code?t.$router.push({path:"/chat/"+s.data.group_number+"/"+s.data.group_name+"/"+s.data.group_type}):t.globalAlert(s.message,function(){})})):this.globalAlert("请填写群号",function(){})},globalAlert:function(t,s){this.$dialog.alert({mes:"<div class='aui-font-size-20 aui-padded-15' style='color: #000;'><b>"+t+"</b></div>",callback:function(){s()}})},loading:function(){this.toast=new auiToast,this.toast.loading({title:"加载中",duration:1e4},function(t){})}}},e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"aui-content addGroup"},[s("div",{staticClass:"aui-row text-item"},[this._m(0),this._v(" "),s("div",{staticClass:"aui-col-xs-8"},[s("input",{ref:"groupid",staticClass:"text-insert",attrs:{type:"text",placeholder:"请输入要加入的群号"}})])]),this._v(" "),s("div",{staticClass:"send-desc"},[this._v("加入群聊后，您可随时选择退出")]),this._v(" "),s("div",{staticClass:"action"},[s("div",{staticClass:"aui-btn aui-btn-block",on:{click:this.addGroup}},[this._v("查找并加入")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"aui-col-xs-4"},[s("img",{staticClass:"aui-pull-left",attrs:{src:i("wiDa"),width:"18",alt:""}}),this._v(" 群ID\n\t\t")])}]};var n=i("VU/8")(a,e,!1,function(t){i("gzPk")},null,null);s.default=n.exports},wiDa:function(t,s,i){t.exports=i.p+"static/img/group.418f421.png"}});