<template>
  <layout-list>
    <template slot="utility">
      <div class="row select-stock">
        <div class="param-label">Choose a stock symbol</div>
        <el-select
          v-model="symbol"
          multiple
          filterable
          placeholder="Please select"
        >
          <el-option
            v-for="stock in listStock"
            :key="stock.id"
            :label="stock.symbol"
            :value="stock.symbol"
          />
        </el-select>
      </div>
      <div class="row">
        <div class="param-label">Choose a period</div>
        <el-date-picker
          v-model="daterange"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div class="row">
        <div class="param-label">Stop loss ATR factor</div>
        <base-input-number
          v-model="strategy_params.atr_stop_loss"
        ></base-input-number>
      </div>
      <div class="row">
        <div class="param-label">Scale out ATR factor</div>
        <base-input-number
          v-model="strategy_params.atr_scale_out"
        ></base-input-number>
      </div>
      <div class="row select-strategy">
        <div class="param-label">Choose a strategy</div>
        <el-select
          v-model="strategy"
          @change="onSelectStrategy"
          filterable
          value-key="id"
          placeholder="Please select"
        >
          <el-option
            v-for="strategy in listStrategy"
            :key="strategy.id"
            :label="strategy.label"
            :value="strategy"
          />
        </el-select>
      </div>
      <div class="row strategy-description">
        {{ strategy.description }}
      </div>
      <div class="row">
        <div class="param-label">Choose strategy parameters</div>
        <!-- RSIStrategy -->
        <div v-if="strategy.id === 'RSIStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Buy when RSI at</div>
            <base-input-number
              v-model="strategy_params.upper"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Sell when RSI at</div>
            <base-input-number
              v-model="strategy_params.lower"
            ></base-input-number>
          </div>
        </div>
        <!-- end RSIStrategy -->
        <!-- WilliamsRStrategy -->
        <div v-if="strategy.id === 'WilliamsRStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Buy when WilliamsRStrategy at</div>
            <base-input-number
              v-model="strategy_params.upper"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Sell when WilliamsRStrategy at</div>
            <base-input-number
              v-model="strategy_params.lower"
            ></base-input-number>
          </div>
        </div>
        <!-- end WilliamsRStrategy -->
        <!-- RateOfChangeStrategy -->
        <div v-if="strategy.id === 'RateOfChangeStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end RateOfChangeStrategy -->
        <!-- EnvelopeStrategy -->
        <div v-if="strategy.id === 'EnvelopeStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Percentage</div>
            <base-input-number
              v-model="strategy_params.perc"
            ></base-input-number>
          </div>
        </div>
        <!-- end EnvelopeStrategy -->
        <!-- UltimateOscillatorStrategy -->
        <div
          v-if="strategy.id === 'UltimateOscillatorStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Fast Period</div>
            <base-input-number v-model="strategy_params.p1"></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Middle Period</div>
            <base-input-number v-model="strategy_params.p2"></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Slow Period</div>
            <base-input-number v-model="strategy_params.p3"></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Buy when UltimateOscillator at</div>
            <base-input-number
              v-model="strategy_params.upper"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Sell when UltimateOscillator at</div>
            <base-input-number
              v-model="strategy_params.lower"
            ></base-input-number>
          </div>
        </div>
        <!-- end UltimateOscillatorStrategy -->
        <!-- CCIStrategy -->
        <div v-if="strategy.id === 'CCIStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end CCIStrategy -->
        <!-- TrixStrategy -->
        <div v-if="strategy.id === 'TrixStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end TrixStrategy -->
        <!-- VortexStrategy -->
        <div v-if="strategy.id === 'VortexStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end VortexStrategy -->
        <!-- BollingerBandsAndRSIStrategy -->
        <div
          v-if="strategy.id === 'BollingerBandsAndRSIStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Bollinger Bands Period</div>
            <base-input-number
              v-model="strategy_params.bbband_period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Bollinger Bands Devfactor</div>
            <base-input-number
              v-model="strategy_params.devfactor"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">RSI Period</div>
            <base-input-number
              v-model="strategy_params.rsi_period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Buy when RSI overbought at</div>
            <base-input-number
              v-model="strategy_params.upper"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Sell when RSI oversold at</div>
            <base-input-number
              v-model="strategy_params.lower"
            ></base-input-number>
          </div>
        </div>
        <!-- end BollingerBandsAndRSIStrategy -->
        <!-- BollingerBandsSidewayStrategy -->
        <div
          v-if="
            strategy.id === 'BollingerBandsSidewayStrategy' ||
            strategy.id === 'BollingerBandsStrategy'
          "
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Bollinger Bands Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Bollinger Bands Devfactor</div>
            <base-input-number
              v-model="strategy_params.devfactor"
            ></base-input-number>
          </div>
        </div>
        <!-- end BollingerBandsSidewayStrategy -->
        <!-- MACDStrategy -->
        <div v-if="strategy.id === 'MACDStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Fast EMA Period</div>
            <base-input-number
              v-model="strategy_params.period_me1"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Slow EMA Period</div>
            <base-input-number
              v-model="strategy_params.period_me2"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Signal factor</div>
            <base-input-number
              v-model="strategy_params.period_signal"
            ></base-input-number>
          </div>
        </div>
        <!-- end MACDStrategy -->
        <!-- MaCrossoverStrategy -->
        <div
          v-if="strategy.id === 'MaCrossoverStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Fast EMA period</div>
            <base-input-number
              v-model="strategy_params.pfast"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Slow EMA period</div>
            <base-input-number
              v-model="strategy_params.pslow"
            ></base-input-number>
          </div>
        </div>
        <!-- end MaCrossoverStrategy -->
        <!-- AroonUpAndDownStrategy -->
        <div
          v-if="strategy.id === 'AroonUpAndDownStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end AroonUpAndDownStrategy -->
        <!-- TRIXStrategy -->
        <div v-if="strategy.id === 'TRIXStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
        </div>
        <!-- end TRIXStrategy -->
        <!-- ADXDMICrossStrategy -->
        <div
          v-if="strategy.id === 'ADXDMICrossStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">ADX strong trend level</div>
            <base-input-number
              v-model="strategy_params.adx_strong_trend_level"
            ></base-input-number>
          </div>
        </div>
        <!-- end ADXDMICrossStrategy -->
        <!-- PSARStrategy -->
        <div v-if="strategy.id === 'PSARStrategy'" class="stategy-parameters">
          <div class="row">
            <div class="param-label">Period</div>
            <base-input-number
              v-model="strategy_params.period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Increment</div>
            <base-input-number v-model="strategy_params.af"></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Max value</div>
            <base-input-number
              v-model="strategy_params.afmax"
            ></base-input-number>
          </div>
        </div>
        <!-- end PSARStrategy -->
        <!-- JapaneseCandlestickStrategy -->
        <div
          v-if="strategy.id === 'JapaneseCandlestickStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Buy pattern</div>
            <base-input v-model="strategy_params.buy_pattern"></base-input>
          </div>
          <div class="row">
            <div class="param-label">Sell pattern</div>
            <base-input v-model="strategy_params.sell_pattern"></base-input>
          </div>
        </div>
        <!-- end JapaneseCandlestickStrategy -->
        <!-- MassIndexStrategy -->
        <div
          v-if="strategy.id === 'MassIndexStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Fast period</div>
            <base-input-number
              v-model="strategy_params.fast_period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Slow period</div>
            <base-input-number
              v-model="strategy_params.slow_period"
            ></base-input-number>
          </div>
        </div>
        <!-- end MassIndexStrategy -->
        <!-- KSTOscillatorStrategy -->
        <div
          v-if="strategy.id === 'KSTOscillatorStrategy'"
          class="stategy-parameters"
        >
          <div class="row">
            <div class="param-label">Fast period</div>
            <base-input-number
              v-model="strategy_params.fast_period"
            ></base-input-number>
          </div>
          <div class="row">
            <div class="param-label">Slow period</div>
            <base-input-number
              v-model="strategy_params.slow_period"
            ></base-input-number>
          </div>
        </div>
        <!-- end KSTOscillatorStrategy -->
      </div>
      <div class="row horizontal-center">
        <base-button :loading="loading" @click="showResult"
          >Show Result</base-button
        >
      </div>
      <base-button
        v-if="hasData"
        type="primary"
        class="export-result"
        :loading="loadingExportResult"
        @click="exportResult"
        >Export Result</base-button
      >
    </template>
    <template slot="table">
      <div v-if="hasData">
        <div
          v-for="(result, index) in results"
          :key="result.symbol"
          class="result-item"
        >
          <div style="font-size: 20px" class="title text-center bold mb-1">
            {{ result.title }}
          </div>
          <div class="title text-center italic mb-1">
            Total trades:
            {{ result.total_trades | formatData(EnumFormatType.Number) }}
          </div>
          <!-- <div class="title text-center italic mb-1">
          PnL: {{ result.pnl | formatData(EnumFormatType.Number) }}
        </div>
        <div class="title text-center italic mb-1">
          % PnL: {{ result.percent_pnl || 0 }}%
        </div> -->
          <div class="title text-center italic mb-1">
            Total wins: {{ result.total_won || 0 }}
          </div>
          <div class="title text-center italic mb-1">
            Total losses: {{ result.total_lost || 0 }}
          </div>
          <div class="title text-center italic mb-1">
            Win rate: {{ result.win_rate || 0 }}%
          </div>
          <!-- <div class="title text-center italic mb-1">
          Final portfolio:
          {{ finalPortfolio | formatData(EnumFormatType.Number) }}
        </div> -->
          <div class="table-result">
            <table-viewer
              :pagination="false"
              :ref="`tableResult${index}`"
              :data="result.data"
              :columns="columnsBacktestResult"
            >
            </table-viewer>
          </div>
        </div>
      </div>
    </template>
  </layout-list>
</template>

<script>
import LayoutList from "@/views/base/LayoutList.vue";
import { fnStoreAllStock } from "@/api/storeConfig.js";
import BacktestAPI from "@/api/BacktestAPI.js";
import { columnsBacktestResult } from "@/common/columnConfig";
import { EnumFormatType } from "@/common/enum";
import XLSX from "xlsx";

export default {
  name: "Backtest",
  components: {
    LayoutList,
  },
  created() {
    const self = this;
    fnStoreAllStock().then((res) => {
      if (res && res.success) {
        self.listStock = res.data;
      }
    });
  },
  data() {
    this.EnumFormatType = EnumFormatType;
    this.api = this.getApi();
    this.columnsBacktestResult = columnsBacktestResult;
    this.listStrategy = [
      {
        id: "RSIStrategy",
        label: "RSI Strategy",
        description:
          "RSI Strategy will execute a buy transaction when RSI goes oversold and a sell transaction when RSI goes overbought",
      },
      // {
      //   id: "BollingerBandsAndRSIStrategy",
      //   label: "Bollinger Bands And RSI Strategy",
      //   description: "Bollinger Bands And RSI Strategy",
      // },
      // {
      //   id: "BollingerBandsSidewayStrategy",
      //   label: "Bollinger Bands Sideway Strategy",
      //   description: "Bollinger Bands Sideway Strategy",
      // },
      {
        id: "BollingerBandsStrategy",
        label: "Bollinger Bands Strategy",
        description:
          "Bollinger Bands Strategy will execute a buy transaction when price closes below the bottom band and a sell transaction when price close above the top band",
      },
      {
        id: "MACDStrategy",
        label: "MACD Strategy",
        description:
          "MACD Strategy will execute a buy transaction when histogram goes from negative to positive and a sell transaction when histogram goes from positive to negative",
      },
      {
        id: "MaCrossoverStrategy",
        label: "Moving Average Crossover Strategy",
        description:
          "Moving Average Crossover Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      },
      {
        id: "ADXDMICrossStrategy",
        label: "ADX-DMI Cross Strategy",
        description:
          "ADX-DMI Cross Strategy will execute a buy transaction when DMI+ goes above DMI- and a sell transaction when DMI+ goes below DMI- and both with ADX is above strong trend level",
      },
      {
        id: "PSARStrategy",
        label: "Parabolic SAR Strategy",
        description:
          "Parabolic SAR Strategy will execute a buy transaction when the PSAR dot goes below price and a sell transaction when the PSAR dot goes above price",
      },
      {
        id: "AroonUpAndDownStrategy",
        label: "Aroon Up And Down Strategy",
        description:
          "Aroon Up And Down Strategy will execute a buy transaction when Aroon Up goes above Aroon Down and a sell transaction when Aroon Up goes below Aroon Down",
      },
      {
        id: "CCIStrategy",
        label: "Commodity Channel Index Strategy",
        // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      },
      {
        id: "TrixStrategy",
        label: "Trix Strategy",
        description:
          "Trix Strategy will execute a buy transaction when TRIX goes above zero line and a sell transaction when TRIX goes below zero line",
      },
      {
        id: "VortexStrategy",
        label: "Vortex Strategy",
        description:
          "Vortex Strategy will execute a buy transaction when VI+ crosses above VI- and a sell transaction when VI+ crosses below VI-",
      },
      {
        id: "UltimateOscillatorStrategy",
        label: "Ultimate Oscillator Strategy",
        description:
          "Ultimate Oscillator Strategy will execute a buy transaction when Ultimate Oscillator goes oversold and a sell transaction when Ultimate Oscillator goes overbought",
      },
      {
        id: "EnvelopeStrategy",
        label: "Envelope Strategy",
        description: "Envelope Strategy will execute a buy transaction when he price moved below the lower range and a sell transaction when when the price moved beyond the upper range",
      },
      {
        id: "RateOfChangeStrategy",
        label: "Rate Of Change Strategy",
        description: "Rate Of Change Strategy will execute a buy transaction when Rate Of Change goes above zero line and a sell transaction when Rate Of Change goes below zero line",
      },
      {
        id: "WilliamsRStrategy",
        label: "Williams %R Strategy",
        description: "Williams %R Strategy will execute a buy transaction when Williams %R goes oversold and a sell transaction when Williams %R goes overbought",
      },
      //#endregion DONE
      // {
      //   id: "AccelerationDecelerationOscillatorStrategy",
      //   label: "Acceleration Deceleration Oscillator",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "AwesomeOscillatorStrategy",
      //   label: "Awesome Oscillator Strategy",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "IchimokuStrategy",
      //   label: "Ichimoku Strategy",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "RelativeMomentumIndexStrategy",
      //   label: "Relative Momentum Index Strategy",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "StochasticStrategy",
      //   label: "Stochastic Strategy",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "TrueStrengthIndicatorStrategy",
      //   label: "True Strength Indicator Strategy",
      //   // description: "Commodity Channel Index Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA",
      // },
      // {
      //   id: "JapaneseCandlestickStrategy",
      //   label: "Japanese Candlestick Strategy",
      //   description: "Japanese Candlestick will execute a buy transaction when price formed a bullish pin bar/engufling/maruboru and a sell transaction when formed a bearish pin bar/engufling/maruboru",
      // },
    ];
    return {
      loadingExportResult: false,
      loading: false,
      hasData: false,
      listStock: [],
      strategy: {},
      strategy_params: {
        atr_stop_loss: 1.5,
        atr_scale_out: 1,
      },
      symbol: ["HPG", "VIC"],
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      daterange: [new Date("2021-02-01"), new Date("2021-07-04")],
      results: [],
      // commission: 0.001,
      // cash: 100000,
      // winRate: 0,
      // totalTrades: 0,
      // finalPortfolio: 0,
      // pnl: 0,
      // percent_pnl: 0,
    };
  },
  methods: {
    /**
     * @override
     */
    getApi() {
      return new BacktestAPI();
    },
    /**
     * Handle event when selecting strategy
     * Set default strategy_params
     */
    onSelectStrategy(strategy) {
      this.strategy_params = {}; // reset
      switch (strategy.id) {
        case "RSIStrategy":
          this.strategy_params = {
            period: 14,
            upper: 70,
            lower: 30,
          };
          break;
        case "WilliamsRStrategy":
          this.strategy_params = {
            period: 14,
            upper: -20,
            lower: -80,
          };
          break;
        case "RateOfChangeStrategy":
          this.strategy_params = {
            period: 9,
          };
          break;
        case "EnvelopeStrategy":
          this.strategy_params = {
            perc: 10,
          };
          break;
        case "UltimateOscillatorStrategy":
          this.strategy_params = {
            p1: 7,
            p2: 14,
            p3: 28,
            upper: 70,
            lower: 30,
          };
          break;
        case "CCIStrategy":
          this.strategy_params = {
            period: 14,
          };
          break;
        case "TrixStrategy":
          this.strategy_params = {
            period: 18,
          };
          break;
        case "VortexStrategy":
          this.strategy_params = {
            period: 14,
          };
          break;
        case "BollingerBandsAndRSIStrategy":
          this.strategy_params = {
            bbband_period: 20,
            devfactor: 2,
            rsi_period: 14,
            upper: 70,
            lower: 30,
          };
          break;
        case "BollingerBandsSidewayStrategy":
          this.strategy_params = {
            period: 20,
            devfactor: 2,
          };
          break;
        case "BollingerBandsStrategy":
          this.strategy_params = {
            period: 20,
            devfactor: 2,
          };
          break;
        case "MACDStrategy":
          this.strategy_params = {
            period_me1: 12,
            period_me2: 26,
            period_signal: 9,
          };
          break;
        case "MaCrossoverStrategy":
          this.strategy_params = {
            pfast: 30,
            pslow: 50,
          };
          break;
        case "ADXDMICrossStrategy":
          this.strategy_params = {
            period: 14,
            adx_strong_trend_level: 25,
          };
          break;
        case "PSARStrategy":
          this.strategy_params = {
            period: 2,
            af: 0.02,
            afmax: 0.2,
          };
          break;
        case "AroonUpAndDownStrategy":
          this.strategy_params = {
            period: 14,
          };
          break;
      }
      this.strategy_params.atr_stop_loss = 1.5;
      this.strategy_params.atr_scale_out = 1;
    },
    /**
     * Do backtest strategy and show result
     */
    async showResult() {
      this.loading = true;
      this.hasData = false;
      let self = this,
        symbol = this.symbol,
        strategy = this.strategy.id,
        formatDate = (date) => {
          if (date && date instanceof Date) {
            return (
              date.getUTCFullYear() +
              "/" +
              (date.getUTCMonth() + 1) +
              "/" +
              date.getUTCDate()
            );
          } else {
            return "";
          }
        },
        fromDate = formatDate(this.daterange[0]),
        toDate = formatDate(this.daterange[1]);
      if (symbol && strategy) {
        let url = "",
          payload = {
            symbol: symbol,
            from_date: fromDate,
            to_date: toDate,
            // cash: this.cash,
            // commission: this.commission,
            strategy: strategy,
            strategy_params: this.strategy_params,
          },
          res = await this.api.request(url, "post", payload);
        if (res && res.success) {
          this.results = this.prepareResults(res.data);
          // this.totalTrades = res.data.total_trades;
          // this.winRate = res.data.win_rate;
          // this.finalPortfolio = res.data.final_portfolio;
          // this.pnl = res.data.pnl;
          // this.percent_pnl = res.data.percent_pnl;
          // let data = this.prepareDisplayData(res.data.result);
          // self.$refs.tableResult.setDisplayData(data);
          self.hasData = true;
        }
      }
      this.loading = false;
    },
    prepareResults(data) {
      let results = [];
      for (let item of data) {
        let result = {
          ...item,
        };
        result.title = this.buildBacktestTitle(item);
        result.data = this.prepareDisplayData(item.result);
        results.push(result);
      }
      return results;
    },
    buildBacktestTitle(item) {
      let fromDate = this.$utility.formatDate(this.daterange[0]),
        toDate = this.$utility.formatDate(this.daterange[1]);
      return `Backtest result for ${this.strategy.label} of ${item.symbol} symbol from ${fromDate} to ${toDate}`;
    },
    prepareDisplayData(data) {
      return (data || []).map((item) => {
        return {
          transaction_date: this.$utility.formatDate(item.transaction_date),
          transaction_type: item.transaction_type,
          description: this.getDescription(item),
          style: this.getRowStyle(item),
        };
      });
    },
    getRowStyle(row) {
      switch (row.transaction_type) {
        case "SCALE OUT CREATE":
          return "color: green;";
        case "STOP LOSS CREATE":
          return "color: red;";
      }
    },
    getDescription(item) {
      let result = "";
      switch (item.transaction_type) {
        case "BUY CREATE":
        case "SELL CREATE":
          result = `Price close at ${this.$utility.toThousandFilter(
            item.price
          )}. ATR stop loss level is ${this.$utility.toThousandFilter(
            Math.round(item.stop_loss_level)
          )}. ATR scale out level is ${this.$utility.toThousandFilter(
            Math.round(item.scale_out_level)
          )}.`;
          break;
        case "SCALE OUT CREATE":
        case "STOP LOSS CREATE":
          result = `Price close at ${this.$utility.toThousandFilter(
            item.price
          )}`;
          break;
        // case "BUY EXECUTED":
        //   result = `Buy executed at ${this.$utility.toThousandFilter(
        //     item.price
        //   )} with cost ${this.$utility.toThousandFilter(
        //     item.cost
        //   )} and commission ${this.$utility.toThousandFilter(item.commission)}`;
        //   break;
        // case "SELL EXECUTED":
        //   result = `Sell executed at ${this.$utility.toThousandFilter(
        //     item.price
        //   )} with cost ${this.$utility.toThousandFilter(
        //     item.cost
        //   )} and commission ${this.$utility.toThousandFilter(item.commission)}`;
        //   break;
        // case "OPERATION PROFIT":
        //   const net = this.$utility.toThousandFilter(item.net),
        //     gross = this.$utility.toThousandFilter(item.gross);
        //   if (item.net >= 0) {
        //     result = `Gross profit is ${gross} and net profit is ${net}`;
        //   } else {
        //     result = `Gross loss is ${gross} and net loss is ${net}`;
        //   }
        //   break;
      }
      return result;
    },
    /**
     * Export backtest results to excel
     * @author NCThanh 20.06.2021
     */
    exportResult() {
      this.loadingExportResult = true;
      /* create new workbook */
      let workbook = XLSX.utils.book_new();
      let aHeader = ["transaction_date", "transaction_type", "description"];

      for (let i = 0, len = this.results.length; i < len; i++) {
        let result = this.results[i];
        let symbol = result.symbol;
        let title = result.title;
        result.data.forEach((item) => delete item.style);
        let data = result.data;
        let ws = XLSX.utils.json_to_sheet(data, { header: aHeader });
        XLSX.utils.book_append_sheet(workbook, ws, symbol);
      }

      /* generate file and send to client */
      XLSX.writeFile(workbook, `backtest_${new Date()}.xlsx`);
      this.loadingExportResult = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.param-label {
  min-width: 250px;
}
.result-item {
  margin-bottom: 2rem;
}
.export-result {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}
</style>