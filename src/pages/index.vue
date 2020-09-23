<template>
  <div class="hello">
    <!-- element -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <!-- antv -->
    <canvas id="myChart" width="400" height="260"></canvas>
    <router-link to="/detail">Go to detail</router-link>
  </div>
</template>

<script>
import F2 from "@antv/f2";
export default {
  name: "index",
  data() {
    return {
      msg: "index",
    };
  },
  methods: {
    _initChart() {
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ];

      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        id: "myChart",
        pixelRatio: window.devicePixelRatio, // 指定分辨率
      });

      // Step 2: 载入数据源
      chart.source(data);

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position("genre*sold").color("genre");

      // Step 4: 渲染图表
      chart.render();
    },
  },
  mounted() {
    // let that = this;
    // this.$dd.device.notification.alert({
    //   message: "测试",
    //   title: "提示", //可传空
    //   buttonName: "收到",
    //   onSuccess: function () {
    //     //onSuccess将在点击button之后回调
    //     /*回调*/
    //     console.log(111111);
    //     that.$dd.ready(function () {
    //       // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
    //       that.$dd.channel.permission.requestAuthCode({
    //         corpId: "ding21e3ff9907b8cf7f24f2f5cc6abecb85",
    //         onSuccess: function (result) {
    //           /*{
    //         code: 'hYLK98jkf0m' //string authCode
    //     }*/
    //           console.log(result);
    //         },
    //         onFail: function (err) {},
    //       });
    //     });
    //   },
    //   onFail: function (err) {},
    // });

    this._initChart();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
