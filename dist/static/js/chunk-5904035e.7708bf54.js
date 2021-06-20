(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5904035e"],{"000b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout-list",[a("template",{slot:"utility"},[a("div",{staticClass:"row select-stock"},[a("div",{staticClass:"param-label"},[t._v("Choose a stock symbol")]),a("el-select",{attrs:{multiple:"",filterable:"",placeholder:"Please select"},model:{value:t.symbol,callback:function(e){t.symbol=e},expression:"symbol"}},t._l(t.listStock,(function(t){return a("el-option",{key:t.id,attrs:{label:t.symbol,value:t.symbol}})})),1)],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Choose a period")]),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":t.pickerOptions},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Stop loss ATR factor")]),a("base-input-number",{model:{value:t.strategy_params.atr_stop_loss,callback:function(e){t.$set(t.strategy_params,"atr_stop_loss",e)},expression:"strategy_params.atr_stop_loss"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Scale out ATR factor")]),a("base-input-number",{model:{value:t.strategy_params.atr_scale_out,callback:function(e){t.$set(t.strategy_params,"atr_scale_out",e)},expression:"strategy_params.atr_scale_out"}})],1),a("div",{staticClass:"row select-strategy"},[a("div",{staticClass:"param-label"},[t._v("Choose a strategy")]),a("el-select",{attrs:{filterable:"","value-key":"id",placeholder:"Please select"},on:{change:t.onSelectStrategy},model:{value:t.strategy,callback:function(e){t.strategy=e},expression:"strategy"}},t._l(t.listStrategy,(function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t}})})),1)],1),a("div",{staticClass:"row strategy-description"},[t._v(" "+t._s(t.strategy.description)+" ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Choose strategy parameters")]),"RSIStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Buy when RSI at")]),a("base-input-number",{model:{value:t.strategy_params.upper,callback:function(e){t.$set(t.strategy_params,"upper",e)},expression:"strategy_params.upper"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Sell when RSI at")]),a("base-input-number",{model:{value:t.strategy_params.lower,callback:function(e){t.$set(t.strategy_params,"lower",e)},expression:"strategy_params.lower"}})],1)]):t._e(),"BollingerBandsAndRSIStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Bollinger Bands Period")]),a("base-input-number",{model:{value:t.strategy_params.bbband_period,callback:function(e){t.$set(t.strategy_params,"bbband_period",e)},expression:"strategy_params.bbband_period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Bollinger Bands Devfactor")]),a("base-input-number",{model:{value:t.strategy_params.devfactor,callback:function(e){t.$set(t.strategy_params,"devfactor",e)},expression:"strategy_params.devfactor"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("RSI Period")]),a("base-input-number",{model:{value:t.strategy_params.rsi_period,callback:function(e){t.$set(t.strategy_params,"rsi_period",e)},expression:"strategy_params.rsi_period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Buy when RSI overbought at")]),a("base-input-number",{model:{value:t.strategy_params.upper,callback:function(e){t.$set(t.strategy_params,"upper",e)},expression:"strategy_params.upper"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Sell when RSI oversold at")]),a("base-input-number",{model:{value:t.strategy_params.lower,callback:function(e){t.$set(t.strategy_params,"lower",e)},expression:"strategy_params.lower"}})],1)]):t._e(),"BollingerBandsSidewayStrategy"===t.strategy.id||"BollingerBandsStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Bollinger Bands Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Bollinger Bands Devfactor")]),a("base-input-number",{model:{value:t.strategy_params.devfactor,callback:function(e){t.$set(t.strategy_params,"devfactor",e)},expression:"strategy_params.devfactor"}})],1)]):t._e(),"MACDStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Fast EMA Period")]),a("base-input-number",{model:{value:t.strategy_params.period_me1,callback:function(e){t.$set(t.strategy_params,"period_me1",e)},expression:"strategy_params.period_me1"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Slow EMA Period")]),a("base-input-number",{model:{value:t.strategy_params.period_me2,callback:function(e){t.$set(t.strategy_params,"period_me2",e)},expression:"strategy_params.period_me2"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Signal factor")]),a("base-input-number",{model:{value:t.strategy_params.period_signal,callback:function(e){t.$set(t.strategy_params,"period_signal",e)},expression:"strategy_params.period_signal"}})],1)]):t._e(),"MaCrossoverStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Fast EMA period")]),a("base-input-number",{model:{value:t.strategy_params.pfast,callback:function(e){t.$set(t.strategy_params,"pfast",e)},expression:"strategy_params.pfast"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Slow EMA period")]),a("base-input-number",{model:{value:t.strategy_params.pslow,callback:function(e){t.$set(t.strategy_params,"pslow",e)},expression:"strategy_params.pslow"}})],1)]):t._e(),"AroonUpAndDownStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1)]):t._e(),"TRIXStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1)]):t._e(),"ADXDMICrossStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("ADX strong trend level")]),a("base-input-number",{model:{value:t.strategy_params.adx_strong_trend_level,callback:function(e){t.$set(t.strategy_params,"adx_strong_trend_level",e)},expression:"strategy_params.adx_strong_trend_level"}})],1)]):t._e(),"PSARStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Period")]),a("base-input-number",{model:{value:t.strategy_params.period,callback:function(e){t.$set(t.strategy_params,"period",e)},expression:"strategy_params.period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Increment")]),a("base-input-number",{model:{value:t.strategy_params.af,callback:function(e){t.$set(t.strategy_params,"af",e)},expression:"strategy_params.af"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Max value")]),a("base-input-number",{model:{value:t.strategy_params.afmax,callback:function(e){t.$set(t.strategy_params,"afmax",e)},expression:"strategy_params.afmax"}})],1)]):t._e(),"JapaneseCandlestickStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Buy pattern")]),a("base-input",{model:{value:t.strategy_params.buy_pattern,callback:function(e){t.$set(t.strategy_params,"buy_pattern",e)},expression:"strategy_params.buy_pattern"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Sell pattern")]),a("base-input",{model:{value:t.strategy_params.sell_pattern,callback:function(e){t.$set(t.strategy_params,"sell_pattern",e)},expression:"strategy_params.sell_pattern"}})],1)]):t._e(),"MassIndexStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Fast period")]),a("base-input-number",{model:{value:t.strategy_params.fast_period,callback:function(e){t.$set(t.strategy_params,"fast_period",e)},expression:"strategy_params.fast_period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Slow period")]),a("base-input-number",{model:{value:t.strategy_params.slow_period,callback:function(e){t.$set(t.strategy_params,"slow_period",e)},expression:"strategy_params.slow_period"}})],1)]):t._e(),"KSTOscillatorStrategy"===t.strategy.id?a("div",{staticClass:"stategy-parameters"},[a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Fast period")]),a("base-input-number",{model:{value:t.strategy_params.fast_period,callback:function(e){t.$set(t.strategy_params,"fast_period",e)},expression:"strategy_params.fast_period"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"param-label"},[t._v("Slow period")]),a("base-input-number",{model:{value:t.strategy_params.slow_period,callback:function(e){t.$set(t.strategy_params,"slow_period",e)},expression:"strategy_params.slow_period"}})],1)]):t._e()]),a("div",{staticClass:"row horizontal-center"},[a("base-button",{attrs:{loading:!1},on:{click:t.showResult}},[t._v("Show Result")])],1),t.hasData?a("div",{staticClass:"row horizontal-center"},[a("base-button",{attrs:{loading:!1},on:{click:t.exportResult}},[t._v("Export Result")])],1):t._e()]),a("template",{slot:"table"},[t.hasData?a("div",t._l(t.results,(function(e,s){return a("div",{key:e.symbol,staticClass:"result-item"},[a("div",{staticClass:"title text-center bold mb-1",staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"title text-center italic mb-1"},[t._v(" Total trades: "+t._s(t._f("formatData")(e.total_trades,t.EnumFormatType.Number))+" ")]),a("div",{staticClass:"title text-center italic mb-1"},[t._v(" Total wins: "+t._s(e.total_won||0)+" ")]),a("div",{staticClass:"title text-center italic mb-1"},[t._v(" Total losses: "+t._s(e.total_lost||0)+" ")]),a("div",{staticClass:"title text-center italic mb-1"},[t._v(" Win rate: "+t._s(e.win_rate||0)+"% ")]),a("div",{staticClass:"table-result"},[a("table-viewer",{ref:"tableResult"+s,refInFor:!0,attrs:{pagination:!1,data:e.data,columns:t.columnsBacktestResult}})],1)])})),0):t._e()])],2)},r=[],i=(a("99af"),a("d81d"),a("5530")),l=a("b85c"),n=(a("96cf"),a("1da1")),o=a("17df"),c=a("af64"),d=a("d4ec"),p=a("257e"),u=a("262e"),m=a("2caf"),g=a("ade3"),b=a("8eb9"),y=function(t){Object(u["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;Object(d["a"])(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r)),Object(g["a"])(Object(p["a"])(t),"prefix","/backtest"),t}return a}(b["a"]),_=a("b34c"),v=a("d5a8"),f=a("1146"),h=a.n(f),w={name:"Backtest",components:{LayoutList:o["a"]},created:function(){var t=this;Object(c["a"])().then((function(e){e&&e.success&&(t.listStock=e.data)}))},data:function(){return this.EnumFormatType=v["b"],this.api=this.getApi(),this.columnsBacktestResult=_["a"],this.listStrategy=[{id:"RSIStrategy",label:"RSI Strategy",description:"RSI Strategy will execute a buy transaction when RSI goes oversold and a sell transaction when RSI goes overbought"},{id:"BollingerBandsStrategy",label:"Bollinger Bands Strategy",description:"Bollinger Bands Strategy will execute a buy transaction when price closes below the bottom band and a sell transaction when price close above the top band"},{id:"MACDStrategy",label:"MACD Strategy",description:"MACD Strategy will execute a buy transaction when histogram goes from negative to positive and a sell transaction when histogram goes from positive to negative"},{id:"MaCrossoverStrategy",label:"Moving Average Crossover Strategy",description:"Moving Average Crossover Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA"},{id:"ADXDMICrossStrategy",label:"ADX-DMI Cross Strategy",description:"ADX-DMI Cross Strategy will execute a buy transaction when DMI+ goes above DMI- and a sell transaction when DMI+ goes below DMI- and both with ADX is above strong trend level"},{id:"PSARStrategy",label:"Parabolic SAR Strategy",description:"Parabolic SAR Strategy will execute a buy transaction when the PSAR dot goes below price and a sell transaction when the PSAR dot goes above price"}],{loading:!1,hasData:!1,listStock:[],strategy:{},strategy_params:{atr_stop_loss:1.5,atr_scale_out:1},symbol:["HPG","RAL"],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"Last month",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},daterange:[new Date("2020-02-01"),new Date("2020-07-01")],results:[]}},methods:{getApi:function(){return new y},onSelectStrategy:function(t){switch(this.strategy_params={},t.id){case"RSIStrategy":this.strategy_params={period:14,upper:70,lower:30};break;case"BollingerBandsAndRSIStrategy":this.strategy_params={bbband_period:20,devfactor:2,rsi_period:14,upper:70,lower:30};break;case"BollingerBandsSidewayStrategy":this.strategy_params={period:20,devfactor:2};break;case"BollingerBandsStrategy":this.strategy_params={period:20,devfactor:2};break;case"MACDStrategy":this.strategy_params={period_me1:12,period_me2:26,period_signal:9};break;case"MaCrossoverStrategy":this.strategy_params={pfast:30,pslow:50};break;case"ADXDMICrossStrategy":this.strategy_params={period:14,adx_strong_trend_level:25};break;case"PSARStrategy":this.strategy_params={period:2,af:.02,afmax:.2};break;case"AroonUpAndDownStrategy":this.strategy_params={period:14};break}this.strategy_params.atr_stop_loss=1.5,this.strategy_params.atr_scale_out=1},showResult:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r,i,l,n,o,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,t.hasData=!1,a=t,s=t.symbol,r=t.strategy.id,i=function(t){return t&&t instanceof Date?t.getUTCFullYear()+"/"+(t.getUTCMonth()+1)+"/"+t.getUTCDate():""},l=i(t.daterange[0]),n=i(t.daterange[1]),!s||!r){e.next=10;break}return o="",c={symbol:s,from_date:l,to_date:n,strategy:r,strategy_params:t.strategy_params},e.next=8,t.api.request(o,"post",c);case 8:d=e.sent,d&&d.success&&(t.results=t.prepareResults(d.data),a.hasData=!0);case 10:t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()},prepareResults:function(t){var e,a=[],s=Object(l["a"])(t);try{for(s.s();!(e=s.n()).done;){var r=e.value,n=Object(i["a"])({},r);n.title=this.buildBacktestTitle(r),n.data=this.prepareDisplayData(r.result),a.push(n)}}catch(o){s.e(o)}finally{s.f()}return a},buildBacktestTitle:function(t){var e=this.$utility.formatDate(this.daterange[0]),a=this.$utility.formatDate(this.daterange[1]);return"Backtest result for ".concat(this.strategy.label," of ").concat(t.symbol," symbol from ").concat(e," to ").concat(a)},prepareDisplayData:function(t){var e=this;return(t||[]).map((function(t){return{transaction_date:e.$utility.formatDate(t.transaction_date),transaction_type:t.transaction_type,description:e.getDescription(t),style:e.getRowStyle(t)}}))},getRowStyle:function(t){switch(t.transaction_type){case"SCALE OUT CREATE":return"color: green;";case"STOP LOSS CREATE":return"color: red;"}},getDescription:function(t){var e="";switch(t.transaction_type){case"BUY CREATE":case"SELL CREATE":e="Price close at ".concat(this.$utility.toThousandFilter(t.price),". ATR stop loss level is ").concat(this.$utility.toThousandFilter(Math.round(t.stop_loss_level)),". ATR scale out level is ").concat(this.$utility.toThousandFilter(Math.round(t.scale_out_level)),".");break;case"SCALE OUT CREATE":case"STOP LOSS CREATE":e="Price close at ".concat(this.$utility.toThousandFilter(t.price));break}return e},exportResult:function(){for(var t=h.a.utils.book_new(),e=["transaction_date","transaction_type","description"],a=0,s=this.results.length;a<s;a++){var r=this.results[a],i=r.symbol,l=(r.title,r.data),n=h.a.utils.json_to_sheet(l,{header:e});h.a.utils.book_append_sheet(t,n,i)}h.a.writeFile(t,"backtest_".concat(new Date,".xlsx"))}}},T=w,C=(a("0212"),a("2877")),A=Object(C["a"])(T,s,r,!1,null,"721826f4",null);e["default"]=A.exports},"0212":function(t,e,a){"use strict";var s=a("4f35"),r=a.n(s);r.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"4f35":function(t,e,a){},"8eb9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("99af");var s=a("d4ec"),r=a("bee2"),i=a("ade3"),l=a("e32c"),n=function(){function t(){Object(s["a"])(this,t),Object(i["a"])(this,"prefix",null),Object(i["a"])(this,"controller",null),this.service=l["a"]}return Object(r["a"])(t,[{key:"getUrl",value:function(){return this.prefix}},{key:"request",value:function(t,e,a){return this.service.request({url:this.getUrl()+t,method:e,data:a})}},{key:"getAll",value:function(){return this.service.request({url:this.getUrl(),method:"get"})}},{key:"getPaging",value:function(t){}},{key:"getById",value:function(t){var e=this.getFetchUrl(t);return this.service.request({url:e,method:"get"})}},{key:"getFetchUrl",value:function(t){return"".concat(this.getUrl(),"/").concat(t)}},{key:"post",value:function(t){return this.service.request({url:this.getUrl(),method:"post",data:t})}},{key:"put",value:function(t){var e=this.getPayloadId(t),a=this.getPutUrl(e);return this.service.request({url:a,method:"put",data:t})}},{key:"getPutUrl",value:function(t){return"".concat(this.getUrl(),"/").concat(t)}},{key:"getPayloadId",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.getIdProperty instanceof Function?t.getIdProperty():t["id"]}},{key:"delete",value:function(t){var e=this.getPayloadId(t),a=this.getDeleteUrl(e);return this.service.request({url:a,method:"delete"})}},{key:"getDeleteUrl",value:function(t){return"".concat(this.getUrl(),"/").concat(t)}}]),t}()},af64:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("fce8"),a("99af");var s=a("d4ec"),r=a("257e"),i=a("262e"),l=a("2caf"),n=a("ade3"),o=a("8eb9"),c=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;Object(s["a"])(this,a);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return t=e.call.apply(e,[this].concat(l)),Object(n["a"])(Object(r["a"])(t),"prefix","/stock"),t}return a}(o["a"]);function d(){return(new c).request("?paging_filter=0&order_by=symbol","get")}},b34c:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return n})),a.d(e,"a",(function(){return o}));var s=a("d5a8"),r=[{dataField:"transaction_date",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Link,formatType:s["b"].Text},{dataField:"transaction_type",label:"Type",columnAlign:"center",dataAlign:"center",width:"80",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"quantity",label:"Quantity",columnAlign:"center",dataAlign:"center",width:"80",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"entry",label:"Entry price",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"exit",label:"Exit price",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"total_value",label:"Total value",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"pnl",label:"PnL",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].SignedTag,formatType:s["b"].AbsPercentage},{dataField:"screenshot",label:"Screenshot",columnAlign:"center",dataAlign:"center",width:"150",columnType:s["a"].Image,formatType:s["b"].Text},{dataField:"comments",label:"Comments",columnAlign:"center",dataAlign:"center",minWidth:"200",columnType:s["a"].Text,formatType:s["b"].Text}],i=[{dataField:"created_at",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"description",label:"Description",columnAlign:"center",dataAlign:"center",minWidth:"300",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"gmail",label:"Gmail",columnAlign:"center",dataAlign:"center",width:"300",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"send_gmail",label:"Send Gmail",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Boolean,formatType:s["b"].Text},{dataField:"tg_chat_id",label:"Telegram Chat",columnAlign:"center",dataAlign:"center",Width:"150",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"send_telegram",label:"Send Telegram",columnAlign:"center",dataAlign:"center",width:"130",columnType:s["a"].Boolean,formatType:s["b"].Text}],l=(s["a"].Link,s["b"].Text,s["a"].SignedTag,s["b"].AbsPercentage,[{dataField:"stock_date",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"120",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",width:"120",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"open_price",label:"Open",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"high_price",label:"High",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"low_price",label:"Low",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"close_price",label:"Close",columnAlign:"center",dataAlign:"center",minWidth:"100",columnType:s["a"].Number,formatType:s["b"].Number}]),n=[{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",minWidth:"120",columnType:s["a"].Link,formatType:s["b"].Text}],o=[{dataField:"transaction_date",label:"Transaction Date",columnAlign:"center",dataAlign:"center",width:"150",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"transaction_type",label:"Transaction Type",columnAlign:"center",dataAlign:"center",width:"250",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"description",label:"Description",columnAlign:"center",dataAlign:"center",minWidth:"200",columnType:s["a"].Text,formatType:s["b"].Text}]}}]);