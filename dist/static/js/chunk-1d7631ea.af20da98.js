(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d7631ea","chunk-829b29d0"],{"04dd":function(e,l,t){},1747:function(e,l,t){"use strict";t.d(l,"a",(function(){return u}));t("99af"),t("7db0"),t("4160"),t("a15b"),t("159b");var a=t("b85c"),i=t("5530"),n=t("d4ec"),s=t("bee2"),r=t("ade3"),o={less:" < ",eless:" <= ",greater:" > ",egreater:" >= ",equal:" = ",nequal:" <> ",equals:" = "},u=function(){function e(l){Object(n["a"])(this,e),Object(r["a"])(this,"filters",[]),Object(r["a"])(this,"count",0),this.filters=l}return Object(s["a"])(e,[{key:"add",value:function(e){var l=Object(i["a"])({},e);l.id=this.generateId(),this.filters.push(l)}},{key:"generateId",value:function(){return this.count++}},{key:"remove",value:function(e){var l=this.filters.find((function(l){return l.id===e.id}));l&&this.filters.remove(l)}},{key:"buildFilter",value:function(){var e,l=[],t=Object(a["a"])(this.filters);try{for(t.s();!(e=t.n()).done;){var i=e.value,n=null;"input"!==i.value.typeValue&&(n=i.value.typeValue);var s={type:i.type,label:i.label,operation:i.operation.value,value:n||i.value.value};l.push(s)}}catch(r){t.e(r)}finally{t.f()}return l}}],[{key:"buildFilterDescription",value:function(e){var l=this,t=[];return e.forEach((function(e){var a=l.buildSingleFilterDescription(e);t.push(a)})),t.join(", ")}},{key:"buildSingleFilterDescription",value:function(e){var l="",t=e.operation;if(t in o){var a=o[t];l="".concat(e.label," ").concat(a," ").concat(e.value)}else l="".concat(e.label," ").concat(t," ").concat(e.value);return l}}]),e}()},cd7d:function(e,l,t){"use strict";var a=t("04dd"),i=t.n(a);i.a},cf26:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("base-dialog",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{Save:["ctrl","s"],Close:["esc"]},expression:"{ Save: ['ctrl', 's'], Close: ['esc'] }"}],attrs:{title:"Choose stock filters",visible:e.isShow,width:"770px"},on:{shortkey:e.handleShortkeyAction,"update:visible":function(l){e.isShow=l}}},[t("div",{staticClass:"list-selected-filters"},["stock_screener"===e.caller?t("div",{staticClass:"filter-item flex mb-1"},[t("div",{staticClass:"filter-type mr-1"},[e._v("Transaction Date")]),t("div",{staticClass:"filter-operation"},[t("base-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(l){e.stockDate=l},expression:"stockDate"}})],1)]):e._e(),"dialog_notification"===e.caller?t("div",{staticClass:"filter-item flex mb-1"},[t("div",{staticClass:"filter-type mr-1"},[e._v("Symbol")]),t("div",{staticClass:"filter-operation"},[t("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.symbol,callback:function(l){e.symbol=l},expression:"symbol"}},e._l(e.listStock,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)]):e._e(),"dialog_backtest"===e.caller?t("div",{staticClass:"filter-item flex mb-1"},[t("div",{staticClass:"filter-type mr-1"},[e._v("Period")]),t("div",{staticClass:"filter-operation"},[t("base-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(l){e.stockDate=l},expression:"stockDate"}}),t("div",{staticClass:"ml-1 mr-1"},[e._v("-")]),t("base-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.stockDate,callback:function(l){e.stockDate=l},expression:"stockDate"}})],1)]):e._e(),e._l(e.filters,(function(l){return t("div",{key:l.id,staticClass:"filter-item flex mb-1"},[t("div",{staticClass:"filter-type mr-1"},[e._v(" "+e._s(l.label)+" ")]),t("div",{staticClass:"filter-operation mr-1"},["combo"===l.operation.type?t("div",{staticClass:"filter-operation__combo"},[t("el-select",{attrs:{filterable:"",placeholder:"Select filter"},model:{value:l.operation.value,callback:function(t){e.$set(l.operation,"value",t)},expression:"filter.operation.value"}},e._l(l.operation.list,(function(e){return t("el-option",{key:"operation_"+e.key+"_"+l.id,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()]),t("div",{staticClass:"filter-value mr-1"},[["in_range","not_in_range"].includes(l.operation.value)?t("div",{staticClass:"filter-value-item"},[t("base-input-number-range",{attrs:{controls:!1},model:{value:l.value.value,callback:function(t){e.$set(l.value,"value",t)},expression:"filter.value.value"}})],1):"input"===l.value.type?t("div",{staticClass:"filter-value-item"},[t("base-input-number",{staticClass:"w-120",attrs:{controls:!1},model:{value:l.value.value,callback:function(t){e.$set(l.value,"value",t)},expression:"filter.value.value"}})],1):["Input_LOHLC","Input_LOHLC_EMA","Input_LOHLC_SMA","Input_LOHLC_MACD_Signal","Input_LOHLC_MACD_Level","Input_LOHLC_Stock_D","Input_LOHLC_Stock_K"].includes(l.value.type)?t("div",{staticClass:"filter-value-item flex"},[t("el-select",{staticClass:"w-120",class:{"mr-1":"input"===l.value.typeValue},attrs:{filterable:"",placeholder:"Select type of filter value"},model:{value:l.value.typeValue,callback:function(t){e.$set(l.value,"typeValue",t)},expression:"filter.value.typeValue"}},e._l(l.value.list,(function(e){return t("el-option",{key:"value_"+e.type+"_"+l.id,attrs:{label:e.label,value:e.type}})})),1),"input"===l.value.typeValue?t("base-input-number",{staticClass:"w-120",attrs:{controls:!1},model:{value:l.value.value,callback:function(t){e.$set(l.value,"value",t)},expression:"filter.value.value"}}):e._e()],1):["comboFilter"].includes(l.value.type)?t("div",{staticClass:"filter-value-item flex"},[t("el-select",{staticClass:"w-120",attrs:{filterable:"",placeholder:"Select candlestick pattern"},model:{value:l.value.value,callback:function(t){e.$set(l.value,"value",t)},expression:"filter.value.value"}},e._l(l.value.list,(function(e){return t("el-option",{key:"value_"+e.type+"_"+l.id,attrs:{label:e.label,value:e.type}})})),1)],1):e._e()]),t("div",{staticClass:"remove-filter"},[t("i",{staticClass:"el-icon-delete c-pointer",on:{click:function(t){return e.removeFilter(l)}}})])])}))],2),t("span",{staticClass:"dialog-footer flex flex-between",attrs:{slot:"footer"},slot:"footer"},[t("div",{staticClass:"footer-left"},[t("el-select",{attrs:{filterable:"",placeholder:"Select filter"},on:{change:e.onSelectFilter},model:{value:e.selectedFilter,callback:function(l){e.selectedFilter=l},expression:"selectedFilter"}},e._l(e.listFilters,(function(e){return t("el-option",{key:e.type,attrs:{label:e.label,value:e}})})),1)],1),t("div",{staticClass:"footer-right"},[t("base-button",{on:{click:function(l){return e.onButtonClick("Cancel")}}},[e._v("Cancel")]),t("base-button",{attrs:{type:"primary"},on:{click:function(l){return e.onButtonClick("Confirm")}}},[e._v("Confirm")])],1)])])},i=[],n=(t("96cf"),t("1da1")),s=t("a9f9"),r=(t("99af"),[{key:"less",label:"Less",value:"less"},{key:"eless",label:"Less than or equal",value:"eless"},{key:"greater",label:"Greater",value:"greater"},{key:"egreater",label:"Greater than or equal",value:"egreater"},{key:"in_range",label:"Between",value:"in_range"},{key:"not_in_range",label:"Outside",value:"not_in_range"},{key:"equal",label:"Equal",value:"equal"},{key:"nequal",label:"Not Equal",value:"nequal"}]),o=[{type:"input",label:"Value"},{type:"last",label:"Last"},{type:"open",label:"Open"},{type:"high",label:"High"},{type:"low",label:"Low"},{type:"close",label:"Close"}],u=[].concat(o,[{type:"ema20",label:"Exponential Moving Average (20)"},{type:"ema34",label:"Exponential Moving Average (34)"},{type:"ema50",label:"Exponential Moving Average (50)"},{type:"ema89",label:"Exponential Moving Average (89)"},{type:"ema200",label:"Exponential Moving Average (200)"}]),p=[].concat(o,[{type:"sma20",label:"Simple Moving Average (20)"},{type:"sma50",label:"Simple Moving Average (50)"},{type:"sma200",label:"Simple Moving Average (200)"}]),c=[{type:"doji",label:"Doji"},{type:"bullish_marubozu",label:"Bullish marubozu"},{type:"bearish_marubozu",label:"Bearish marubozu"},{type:"hammer",label:"Hammer"},{type:"inverted_hammer",label:"Inverted hammer"},{type:"gravestone_doji",label:"Gravestone doji"},{type:"dragonfly_doji",label:"Dragonfly doji"},{type:"bearish_hammer_stick",label:"Bearish Hammer Stick"},{type:"bearish_inverted_hammer_stick",label:"Bearish Inverted Hammer Stick"},{type:"bullish_inverted_hammer_stick",label:"Bullish Inverted Hammer Stick"},{type:"bearish_spinning_top",label:"Bearish Spinning Top"},{type:"bullish_spinning_top",label:"Bullish Spinning Top"},{type:"bullish_hammer_stick",label:"Bullish Hammer Stick"}],v=[{type:"bullish_harami",label:"Bullish harami"},{type:"bearish_harami",label:"Bearish harami"},{type:"dark_cloud_cover",label:"Dark cloud cover"},{type:"doji_star",label:"Doji star"},{type:"bullish_engulfing",label:"Bullish engulfing"},{type:"bearish_engulfing",label:"Bearish engulfing"},{type:"piercing_pattern",label:"Piercing Pattern"},{type:"rain_drop",label:"Rain Drop"},{type:"rain_drop_doji",label:"Rain Drop Doji"},{type:"star",label:"Star"},{type:"shooting_star",label:"Shooting star"},{type:"bearish_harami_cross",label:"Bearish Harami Cross"},{type:"bullish_harami_cross",label:"Bullish Harami Cross"},{type:"inside_bar",label:"Inside Bar"},{type:"outside_bar",label:"Outside Bar"}],d=[{type:"hanging_man",label:"Hanging Man"},{type:"morning_star",label:"Morning star"},{type:"morning_star_doji",label:"Morning star doji"},{type:"abandoned_baby",label:"Abandoned Baby"},{type:"evening_star",label:"Evening star"},{type:"evening_star_doji",label:"Evening star doji"},{type:"downside_tasuki_gap",label:"Downside Tasuki Gap"},{type:"three_black_crows",label:"Three Black Crows"},{type:"three_white_soldiers",label:"Three White Soldiers"},{type:"three_outside_down",label:"Three Outside Down"},{type:"three_outside_up",label:"Three Outside Up"},{type:"three_inside_up",label:"Three Inside Up"},{type:"three_inside_down",label:"Three Inside Down"}],b=[{type:"bollinger20_lband_indicator",label:"Bollinger Lower Band (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:o,defaultValue:0,value:0}},{type:"bollinger20_hband_indicator",label:"Bollinger Upper Band (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:o,defaultValue:0,value:0}},{type:"ema20",label:"Exponential Moving Average (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_EMA",typeValue:"input",list:u,defaultValue:0,value:0}},{type:"sma20",label:"Simple Moving Average (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_EMA",typeValue:"input",list:p,defaultValue:0,value:0}},{type:"rsi14",label:"Relative Strength Index (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"rsi7",label:"Relative Strength Index (7)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"obv",label:"On Balance Volume",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"adx14",label:"Average Directional Index (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"atr14",label:"Average True Range (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"awesome_oscillator",label:"Awesome Oscillator",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"cci20",label:"Commodity Channel Index (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"cmf20",label:"Chaikin Money Flow (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"mfi14",label:"Money Flow Index (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:0,value:0}},{type:"psar_up_indicator",label:"Parabolic SAR Up Indicator",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:o,defaultValue:0,value:0}},{type:"psar_down_indicator",label:"Parabolic SAR Down Indicator",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC",typeValue:"input",list:o,defaultValue:0,value:0}},{type:"single_candle",label:"Single candle",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:c,defaultValue:"Any",value:"Any"}},{type:"double_candles",label:"Double candles",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:v,defaultValue:"Any",value:"Any"}},{type:"triple_candles",label:"Triple candles",operation:{type:"const",value:"ilike"},value:{type:"comboFilter",list:d,defaultValue:"Any",value:"Any"}},{type:"macd_level_12_26",label:"MACD Level (12, 26)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_MACD_Signal",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"macd_signal_12_26",label:"MACD Signal (12, 26)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_MACD_Level",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"stochastic_k_14_3_3",label:"Stochastic %K (14, 3, 3)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_Stock_D",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"stochastic_d_14_3_3",label:"Stochastic %D (14, 3, 3)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"Input_LOHLC_Stock_K",typeValue:"input",list:u,defaultValue:30,value:30}},{type:"williams_percent_range_14",label:"Williams Percent Range (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"aroon_up_14",label:"Aroon Up (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"aroon_down_14",label:"Aroon Down (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:30,value:30}},{type:"keltner20_channel_hband_indicator",label:"Keltner Channel High Band (20)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:1,value:1}},{type:"keltner20_channel_lband_indicator",label:"Keltner Channel Low Band (14)",operation:{type:"combo",list:r,defaultOperation:"less",value:"less"},value:{type:"input",defaultValue:1,value:1}}],y=t("1747"),f=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"flex vertical-center"},[t("base-input-number",{staticClass:"w-120 mr-1",attrs:{controls:!1},model:{value:e.value1,callback:function(l){e.value1=l},expression:"value1"}}),t("div",[e._v("-")]),t("base-input-number",{staticClass:"w-120 ml-1",attrs:{controls:!1},model:{value:e.value2,callback:function(l){e.value2=l},expression:"value2"}})],1)},_=[],m=(t("a9e3"),{name:"BaseInputNumberRange",props:{value:[Array,Number]},data:function(){return{value1:0,value2:0}},created:function(){this.value instanceof Array?(this.value1=this.value[0],this.value1=this.value[1]):this.value instanceof Number&&(this.value1=this.value2=this.value)},watch:{value1:{immediate:!0,handler:function(e){var l=[this.value1||0,this.value2||0];this.$emit("input",l)}},value2:{immediate:!0,handler:function(e){var l=[this.value1||0,this.value2||0];this.$emit("input",l)}}}}),h=m,k=t("2877"),g=Object(k["a"])(h,f,_,!1,null,null,null),C=g.exports,O={name:"ChooseStockFilters",extends:s["a"],components:{BaseInputNumberRange:C},props:{caller:{type:String,default:"stock_screener"}},mounted:function(){this.$el.click()},data:function(){return this.listStock=["RAL","HPG","VIC"],this.listFilters=b.clone(),this.listOperations=r.clone(),this.titleParam=[],{filters:[],selectedFilter:null,symbol:null,stockDate:new Date("2021-01-28")}},created:function(){this._stockFilter=new y["a"](this.filters)},methods:{handleConfirm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,!e.validateFilters();case 2:if(!l.sent){l.next=4;break}return l.abrupt("return");case 4:e.stockFilters=e._stockFilter.buildFilter();case 5:case"end":return l.stop()}}),l)})))()},validateFilters:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()},handleShortkeyAction:function(e){switch(e.srcKey){case"Save":this.onButtonClick("Confirm");break;case"Close":this.onButtonClick("Cancel");break}},onSelectFilter:function(e){this._stockFilter.add(e),this.selectedFilter=null},removeFilter:function(e){this._stockFilter.remove(e)}}},w=O,S=(t("cd7d"),Object(k["a"])(w,a,i,!1,null,"58b989b4",null));l["default"]=S.exports}}]);