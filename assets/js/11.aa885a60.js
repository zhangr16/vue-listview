(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(e,l,t){"use strict";t.r(l);var n={data:function(){var e=this.$createElement;return{requestUrl:"https://easy-mock.com/mock/5aee142c96e73977996d13b6/listview/list",filterButtons:[{text:"default",click:function(){return console.log("click:button-default")}},{type:"primary",icon:"el-icon-edit",text:"primary",click:function(){return console.log("click:button-primary")}},{type:"success",icon:"el-icon-check",text:"success",click:function(){return console.log("click:button-success")}},{type:"info",icon:"el-icon-message",text:"info",click:function(){return console.log("click:button-info")}},{type:"warning",icon:"el-icon-star-off",text:"warning",click:function(){return console.log("click:button-warning")}},{type:"danger",icon:"el-icon-delete",text:"danger",click:function(){return console.log("click:button-danger")}},{type:"primary",text:"下拉按钮",click:function(){return console.log("click:button-dropdown1")},children:[{text:"菜单1",click:function(){return console.log("click:button-dropdown1-sub1")}},{text:"菜单2",click:function(){return console.log("click:button-dropdown1-sub2")}}]},{type:"primary",text:"分裂下拉",splitButton:!0,click:function(){return console.log("click:button-dropdown2")},children:[{text:"菜单1",click:function(){return console.log("click:button-dropdown2-sub1")}},{text:"菜单2",click:function(){return console.log("click:button-dropdown2-sub2")}}]}],filterModel:{hidden:"hidden"},filterFields:[{type:"text",model:"name",label:"文本字段"},{type:"text",model:"name2",label:"禁用文本",disabled:!0},{type:"number",model:"number"},{type:"select",model:"select",label:"单选字段",options:[{label:"选项 1",value:1},{label:"选项 2",value:2},{label:"选项 3",value:3},{label:"禁用项",value:4,disabled:!0}]},{type:"multiple-Select",model:"multipleSelect",label:"多选字段",options:[{label:"选项 1",value:1},{label:"选项 2",value:2},{label:"选项 3",value:3},{label:"禁用项",value:4,disabled:!0}],get:function(e){return e.join(",")}},{type:"date",model:"date",label:"日期选择"},{type:"dateRange",model:"dateRange",label:"日期范围"},{type:"timeSelect",model:"timeSelect",label:"固定时间"},{type:"timePicker",model:"timePicker",label:"任意时间"},{type:"timePickerRange",model:"timePickerRange",label:"时间范围"},{type:"dateTime",model:"dateTime",label:"日期时间"},{type:"dateTimeRange",model:"dateTimeRange",label:"日期时间范围"},{type:"cascader",model:"cascader",label:"级联选项",options:[{value:"1",label:"菜单1",children:[{value:"2",label:"菜单2",children:[{value:"3",label:"菜单3",children:[{value:"4",label:"菜单4"}]}]}]}]},[{type:"label",label:"组合"},{type:"text",label:"支持组合多个字段"},{type:"text",label:"避免被自动收起拆开"}],{type:"label",label:"文本标签"}],tableSelection:[],tableColumns:[{label:"自定义标签",prop:"sku",width:100,align:"center"},{label:"产品名称",prop:"name",width:200,align:"center"},{label:"操作",width:150,align:"center",render:function(l){return e("div",[e("el-button",{on:{click:function(e){return e.stopPropagation()}},style:"padding:4px 8px",attrs:{size:"mini",type:"success"}},["审核"]),e("el-button",{on:{click:function(e){return e.stopPropagation()}},style:"padding:4px 8px",attrs:{size:"mini",type:"danger"}},["删除"])])}},{label:"销售员",prop:"seller",align:"center"},{label:"仓库",prop:"warehouse",align:"center"},{label:"零售价格",prop:"sale_price",align:"center"},{label:"折扣率",align:"center",formatter:function(e){return e.discount.toFixed(2)}},{label:"折后价",align:"center",formatter:function(e){return(e.discount*e.sale_price).toFixed(2)}},{label:"折扣时间",align:"center",children:[{label:"折扣开始",prop:"date",align:"center"},{label:"折扣结束",prop:"date",align:"center"}]},{label:"数量",prop:"quantity",align:"center"},{label:"最后修改",align:"center",children:[{label:"修改人",prop:"seller",align:"center"},{label:"修改时间",prop:"date",align:"center"}]}]}}},i=t(0),o=Object(i.a)(n,function(){var e=this,l=e.$createElement;return(e._self._c||l)("listview",{attrs:{"header-title":"演示列表1","header-nav":[{text:"菜单1",to:"/list"},"菜单2"],"request-url":e.requestUrl,"filter-buttons":e.filterButtons,"filter-fields":e.filterFields,"filter-model":e.filterModel,"table-columns":e.tableColumns,"table-selection":e.tableSelection},on:{"update:tableSelection":function(l){e.tableSelection=l},"update:table-selection":function(l){e.tableSelection=l}}})},[],!1,null,null,null);o.options.__file="all.vue";l.default=o.exports}}]);