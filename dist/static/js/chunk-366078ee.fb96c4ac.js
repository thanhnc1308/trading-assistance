(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-366078ee"],{"301a":function(e,t,l){},"3d72":function(e,t,l){},"5fe2":function(e,t,l){"use strict";var a=l("301a"),i=l.n(a);i.a},af64:function(e,t,l){"use strict";l.d(t,"a",(function(){return p}));l("fce8"),l("99af");var a=l("d4ec"),i=l("257e"),s=l("262e"),n=l("2caf"),o=l("ade3"),r=l("8eb9"),u=function(e){Object(s["a"])(l,e);var t=Object(n["a"])(l);function l(){var e;Object(a["a"])(this,l);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(o["a"])(Object(i["a"])(e),"prefix","/stock"),e}return l}(r["a"]);function p(){return(new u).request("?paging_filter=0&order_by=symbol","get")}},cf26:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("base-dialog",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{Save:["ctrl","s"],Close:["esc"]},expression:"{ Save: ['ctrl', 's'], Close: ['esc'] }"}],ref:"chooseStockFilters",staticClass:"choose-stock-filters",attrs:{title:"Choose stock filters",visible:e.isShow,width:"770px"},on:{shortkey:e.handleShortkeyAction,"update:visible":function(t){e.isShow=t}}},[l("div",{staticClass:"list-selected-filters"},["stock_screener"===e.caller?l("div",{staticClass:"filter-item flex mb-1"},[l("div",{staticClass:"filter-type mr-1"},[e._v("Transaction Date")]),l("div",{staticClass:"filter-operation"},[l("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(t){e.stockDate=t},expression:"stockDate"}})],1)]):e._e(),"dialog_notification"===e.caller?l("div",{staticClass:"filter-item flex mb-1"},[l("div",{staticClass:"filter-type mr-1"},[e._v("Symbol")]),l("div",{staticClass:"filter-operation"},[l("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.symbol,callback:function(t){e.symbol=t},expression:"symbol"}},e._l(e.listStock,(function(e){return l("el-option",{key:e.id,attrs:{label:e.symbol,value:e.symbol}})})),1)],1)]):e._e(),"dialog_backtest"===e.caller?l("div",{staticClass:"filter-item flex mb-1"},[l("div",{staticClass:"filter-type mr-1"},[e._v("Period")]),l("div",{staticClass:"filter-operation"},[l("base-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(t){e.stockDate=t},expression:"stockDate"}}),l("div",{staticClass:"ml-1 mr-1"},[e._v("-")]),l("base-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(t){e.stockDate=t},expression:"stockDate"}})],1)]):e._e(),e._l(e.filters,(function(t){return l("div",{key:t.id,staticClass:"filter-item flex mb-1"},[l("div",{staticClass:"filter-type mr-1"},[e._v(" "+e._s(t.label)+" ")]),l("div",{staticClass:"filter-operation mr-1"},["combo"===t.operation.type?l("div",{staticClass:"filter-operation__combo"},[l("el-select",{attrs:{filterable:"",placeholder:"Select filter"},model:{value:t.operation.value,callback:function(l){e.$set(t.operation,"value",l)},expression:"filter.operation.value"}},e._l(t.operation.list,(function(e){return l("el-option",{key:"operation_"+e.key+"_"+t.id,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()]),l("div",{staticClass:"filter-value mr-1"},[["in_range","not_in_range"].includes(t.operation.value)?l("div",{staticClass:"filter-value-item"},[l("base-input-number-range",{attrs:{controls:!1},model:{value:t.value.value,callback:function(l){e.$set(t.value,"value",l)},expression:"filter.value.value"}})],1):"input"===t.value.type?l("div",{staticClass:"filter-value-item"},[l("base-input-number",{staticClass:"w-120",attrs:{controls:!1},model:{value:t.value.value,callback:function(l){e.$set(t.value,"value",l)},expression:"filter.value.value"}})],1):["Input_LOHLC","Input_LOHLC_EMA","Input_LOHLC_SMA","Input_LOHLC_MACD_Signal","Input_LOHLC_MACD_Level","Input_LOHLC_Stock_D","Input_LOHLC_Stock_K"].includes(t.value.type)?l("div",{staticClass:"filter-value-item flex"},[l("el-select",{staticClass:"w-120",class:{"mr-1":"input"===t.value.typeValue},attrs:{filterable:"",placeholder:"Select type of filter value"},model:{value:t.value.typeValue,callback:function(l){e.$set(t.value,"typeValue",l)},expression:"filter.value.typeValue"}},e._l(t.value.list,(function(e){return l("el-option",{key:"value_"+e.type+"_"+t.id,attrs:{label:e.label,value:e.type}})})),1),"input"===t.value.typeValue?l("base-input-number",{staticClass:"w-120",attrs:{controls:!1},model:{value:t.value.value,callback:function(l){e.$set(t.value,"value",l)},expression:"filter.value.value"}}):e._e()],1):["comboFilter"].includes(t.value.type)?l("div",{staticClass:"filter-value-item flex"},[l("el-select",{staticClass:"w-120",attrs:{filterable:"",placeholder:"Select candlestick pattern"},model:{value:t.value.value,callback:function(l){e.$set(t.value,"value",l)},expression:"filter.value.value"}},e._l(t.value.list,(function(e){return l("el-option",{key:"value_"+e.type+"_"+t.id,attrs:{label:e.label,value:e.type}})})),1)],1):e._e()]),l("div",{staticClass:"remove-filter"},[l("i",{staticClass:"el-icon-delete c-pointer",on:{click:function(l){return e.removeFilter(t)}}})])])}))],2),l("span",{staticClass:"dialog-footer flex flex-between",attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"footer-left"},[l("el-select",{attrs:{filterable:"",placeholder:"Select filter"},on:{change:e.onSelectFilter},model:{value:e.selectedFilter,callback:function(t){e.selectedFilter=t},expression:"selectedFilter"}},e._l(e.listFilters,(function(e){return l("el-option",{key:e.type,attrs:{label:e.label,value:e}})})),1)],1),l("div",{staticClass:"footer-right"},[l("base-button",{on:{click:function(t){return e.onButtonClick("Cancel")}}},[e._v("Cancel")]),l("base-button",{attrs:{type:"primary"},on:{click:function(t){return e.onButtonClick("Confirm")}}},[e._v("Confirm")])],1)])])},i=[],s=(l("96cf"),l("1da1")),n=l("a9f9"),o=(l("99af"),[{key:"less",label:"Less",value:"less"},{key:"eless",label:"Less than or equal",value:"eless"},{key:"greater",label:"Greater",value:"greater"},{key:"egreater",label:"Greater than or equal",value:"egreater"},{key:"in_range",label:"Between",value:"in_range"},{key:"not_in_range",label:"Outside",value:"not_in_range"},{key:"equal",label:"Equal",value:"equal"},{key:"nequal",label:"Not Equal",value:"nequal"}]),r=[{type:"input",label:"Value"},{type:"last",label:"Last"},{type:"open",label:"Open"},{type:"high",label:"High"},{type:"low",label:"Low"},{type:"close",label:"Close"}],u=[].concat(r,[{type:"ema20",label:"Exponential Moving Average (20)"},{type:"ema34",label:"Exponential Moving Average (34)"},{type:"ema50",label:"Exponential Moving Average (50)"},{type:"ema89",label:"Exponential Moving Average (89)"},{type:"ema200",label:"Exponential Moving Average (200)"}]),p=[].concat(r,[{type:"sma20",label:"Simple Moving Average (20)"},{type:"sma50",label:"Simple Moving Average (50)"},{type:"sma200",label:"Simple Moving Average (200)"}]),c=[{type:"doji",label:"Doji"},{type:"bullish_marubozu",label:"Bullish marubozu"},{type:"bearish_marubozu",label:"Bearish marubozu"},{type:"hammer",label:"Hammer"},{type:"inverted_hammer",label:"Inverted hammer"},{type:"gravestone_doji",label:"Gravestone doji"},{type:"dragonfly_doji",label:"Dragonfly doji"},{type:"bearish_hammer_stick",label:"Bearish Hammer Stick"},{type:"bearish_inverted_hammer_stick",label:"Bearish Inverted Hammer Stick"},{type:"bullish_inverted_hammer_stick",label:"Bullish Inverted Hammer Stick"},{type:"bearish_spinning_top",label:"Bearish Spinning Top"},{type:"bullish_spinning_top",label:"Bullish Spinning Top"},{type:"bullish_hammer_stick",label:"Bullish Hammer Stick"}],v=[{type:"bullish_harami",label:"Bullish harami"},{type:"bearish_harami",label:"Bearish harami"},{type:"dark_cloud_cover",label:"Dark cloud cover"},{type:"doji_star",label:"Doji star"},{type:"bullish_engulfing",label:"Bullish engulfing"},{type:"bearish_engulfing",label:"Bearish engulfing"},{type:"piercing_pattern",label:"Piercing Pattern"},{type:"rain_drop",label:"Rain Drop"},{type:"rain_drop_doji",label:"Rain Drop Doji"},{type:"star",label:"Star"},{type:"shooting_star",label:"Shooting star"},{type:"bearish_harami_cross",label:"Bearish Harami Cross"},{type:"bullish_harami_cross",label:"Bullish Harami Cross"},{type:"inside_bar",label:"Inside Bar"},{type:"outside_bar",label:"Outside Bar"}],d=[{type:"hanging_man",label:"Hanging Man"},{type:"morning_star",label:"Morning star"},{type:"morning_star_doji",label:"Morning star doji"},{type:"abandoned_baby",label:"Abandoned Baby"},{type:"evening_star",label:"Evening star"},{type:"evening_star_doji",label:"Evening star doji"},{type:"downside_tasuki_gap",label:"Downside Tasuki Gap"},{type:"three_black_crows",label:"Three Black Crows"},{type:"three_white_soldiers",label:"Three White Soldiers"},{type:"three_outside_down",label:"Three Outside Down"},{type:"three_outside_up",label:"Three Outside Up"},{type:"three_inside_up",label:"Three Inside Up"},{type:"three_inside_down",label:"Three Inside Down"}],b=[{type:"bollinger20_lband_indicator",label:"Bollinger Lower Band (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:r,defaultValue:0,value:0}},{type:"bollinger20_hband_indicator",label:"Bollinger Upper Band (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:r,defaultValue:0,value:0}},{type:"ema20",label:"Exponential Moving Average (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_EMA",typeValue:"input",list:u,defaultValue:0,value:0}},{type:"sma20",label:"Simple Moving Average (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_EMA",typeValue:"input",list:p,defaultValue:0,value:0}},{type:"rsi14",label:"Relative Strength Index (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"rsi7",label:"Relative Strength Index (7)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"obv",label:"On Balance Volume",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"adx14",label:"Average Directional Index (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"atr14",label:"Average True Range (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"awesome_oscillator",label:"Awesome Oscillator",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"cci20",label:"Commodity Channel Index (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"cmf20",label:"Chaikin Money Flow (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"mfi14",label:"Money Flow Index (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"psar_up_indicator",label:"Parabolic SAR Up Indicator",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:r,defaultValue:0,value:0}},{type:"psar_down_indicator",label:"Parabolic SAR Down Indicator",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:r,defaultValue:0,value:0}},{type:"single_candle",label:"Single candle",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:c,defaultValue:"Any",value:"Any"}},{type:"double_candles",label:"Double candles",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:v,defaultValue:"Any",value:"Any"}},{type:"triple_candles",label:"Triple candles",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:d,defaultValue:"Any",value:"Any"}},{type:"macd_level_12_26",label:"MACD Level (12, 26)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_MACD_Signal",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"macd_signal_12_26",label:"MACD Signal (12, 26)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_MACD_Level",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"stochastic_k_14_3_3",label:"Stochastic %K (14, 3, 3)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_Stock_D",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"stochastic_d_14_3_3",label:"Stochastic %D (14, 3, 3)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_Stock_K",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"williams_percent_range_14",label:"Williams Percent Range (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"aroon_up_14",label:"Aroon Up (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"aroon_down_14",label:"Aroon Down (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"keltner20_channel_hband_indicator",label:"Keltner Channel High Band (20)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:1,value:1}},{type:"keltner20_channel_lband_indicator",label:"Keltner Channel Low Band (14)",operation:{type:"combo",list:o,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:1,value:1}}],y=l("1747"),f=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"flex vertical-center"},[l("base-input-number",{staticClass:"w-120 mr-1",attrs:{controls:!1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),l("div",[e._v("-")]),l("base-input-number",{staticClass:"w-120 ml-1",attrs:{controls:!1},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},_=[],m=(l("a9e3"),{name:"BaseInputNumberRange",props:{value:[Array,Number]},data:function(){return{value1:0,value2:0}},created:function(){this.value instanceof Array?(this.value1=this.value[0],this.value1=this.value[1]):this.value instanceof Number&&(this.value1=this.value2=this.value)},watch:{value1:{immediate:!0,handler:function(e){var t=[this.value1||0,this.value2||0];this.$emit("input",t)}},value2:{immediate:!0,handler:function(e){var t=[this.value1||0,this.value2||0];this.$emit("input",t)}}}}),h=m,k=l("2877"),g=Object(k["a"])(h,f,_,!1,null,null,null),C=g.exports,O=l("af64"),w={name:"ChooseStockFilters",extends:n["a"],components:{BaseInputNumberRange:C},props:{caller:{type:String,default:"stock_screener"}},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$refs.chooseStockFilters.$el,l=t.querySelector(".el-dialog__title");l.click(),l.click()}))},data:function(){return this.listFilters=b.clone(),this.listOperations=o.clone(),this.titleParam=[],{filters:[],listStock:[],selectedFilter:null,symbol:null,stockDate:new Date("2021-01-28")}},created:function(){var e=this;Object(O["a"])().then((function(t){t&&t.success&&(e.listStock=t.data)})),this._stockFilter=new y["a"](this.filters)},methods:{handleConfirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,!e.validateFilters();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:e.stockFilters=e._stockFilter.buildFilter();case 5:case"end":return t.stop()}}),t)})))()},validateFilters:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()},handleShortkeyAction:function(e){switch(e.srcKey){case"Save":this.onButtonClick("Confirm");break;case"Close":this.onButtonClick("Cancel");break}},onSelectFilter:function(e){this._stockFilter.add(e),this.selectedFilter=null},removeFilter:function(e){this._stockFilter.remove(e)}}},S=w,x=(l("5fe2"),l("f738"),Object(k["a"])(S,a,i,!1,null,"4838d9d6",null));t["default"]=x.exports},f738:function(e,t,l){"use strict";var a=l("3d72"),i=l.n(a);i.a}}]);