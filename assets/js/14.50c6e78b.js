(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(e,t,l){"use strict";l.r(t);var n={data:function(){return{requestUrl:"https://easy-mock.com/mock/5aee142c96e73977996d13b6/listview/list",filterButtons1:[{type:"primary",icon:"el-icon-edit",text:"primary",click:function(){return console.log("click:button-primary")}}],filterButtons2:[{type:"success",icon:"el-icon-check",text:"success",click:function(){return console.log("click:button-success")}},{type:"info",icon:"el-icon-message",text:"info",click:function(){return console.log("click:button-info")}}],filterButtons3:[{type:"warning",icon:"el-icon-star-off",text:"warning",click:function(){return console.log("click:button-warning")}},{type:"primary",text:"分裂下拉",splitButton:!0,click:function(){return console.log("click:button-dropdown2")},children:[{text:"菜单1",click:function(){return console.log("click:button-dropdown2-sub1")}},{text:"菜单2",click:function(){return console.log("click:button-dropdown2-sub2")}}]}],filterFields1:[{type:"text",model:"name",label:"文本字段"},{type:"number",model:"number"}],filterFields2:[{type:"select",model:"select",label:"单选字段",options:[{label:"选项 1",value:1},{label:"选项 2",value:2},{label:"选项 3",value:3},{label:"禁用项",value:4,disabled:!0}]},{type:"date",model:"date",label:"日期选择"}],filterFields3:[{type:"multiple-Select",model:"multipleSelect",label:"多选字段",options:[{label:"选项 1",value:1},{label:"选项 2",value:2},{label:"选项 3",value:3},{label:"禁用项",value:4,disabled:!0}],get:function(e){return e.join(",")}},{type:"dateRange",model:"dateRange",label:"日期范围"}],tableColumns1:[{label:"自定义标签",prop:"sku",align:"center"},{label:"产品名称",prop:"name",align:"center"}],tableColumns2:[{label:"销售员",prop:"seller",align:"center"},{label:"仓库",prop:"warehouse",align:"center"},{label:"零售价格",prop:"sale_price",align:"center"}],tableColumns3:[{label:"折扣率",align:"center",formatter:function(e){return e.discount.toFixed(2)}},{label:"折后价",align:"center",formatter:function(e){return(e.discount*e.sale_price).toFixed(2)}}]}}},i=l(0),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("listview-container",{attrs:{"header-title":"演示列表容器","header-nav":[{text:"菜单1",to:"/list"},"菜单2"]}},[l("listview",{attrs:{"header-title":"演示列表1","request-url":e.requestUrl,"filter-buttons":e.filterButtons1,"filter-fields":e.filterFields1,"table-columns":e.tableColumns1}}),e._v(" "),l("listview",{attrs:{"header-title":"演示列表2","request-url":e.requestUrl,"filter-buttons":e.filterButtons2,"filter-fields":e.filterFields2,"table-columns":e.tableColumns2}}),e._v(" "),l("listview",{attrs:{"header-title":"演示列表3","request-url":e.requestUrl,"filter-buttons":e.filterButtons3,"filter-fields":e.filterFields3,"table-columns":e.tableColumns3}})],1)},[],!1,null,null,null);o.options.__file="listview-container.vue";t.default=o.exports}}]);