<template>
  <!-- stripe:是否为斑马纹 table; -->
  <!-- border:是否带有纵向边框; -->
  <!-- fit:列的宽度是否自撑开; -->
  <!-- highlight-current-row:是否要高亮当前行; -->
  <el-table
    :data="tableData"
    border
    stripe
    fit
    ref="multipleTable"
    highlight-current-row
    :height="tabheight"
    @row-dblclick="rowDblclick"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.3)"
  >
    <!-- 是否需要全选， isshow控制-->
    <el-table-column v-if="isshow" type="selection" align="center" fixed></el-table-column>
    <!-- prop: 字段名name, label: 展示的名称, fixed: 是否需要固定(left, right), minWidth: 设置列的最小宽度(不传默认值),
    oper: 是否有操作列, oper.name: 操作列字段名称, oper.clickFun: 操作列点击事件, formatData: 格式化内容-->
    <el-table-column
      v-for="(th, key) in tableHeader"
      :key="key"
      :prop="th.prop"
      :label="th.label"
      :fixed="th.fixed"
      :width="th.width"
      :min-width="th.minWidth"
      align="left"
    >
      <!-- 加入template主要是有操作一栏， 操作一栏的内容是相同的， 数据不是动态获取的，这里操作一栏的名字定死 -->
      <template slot-scope="scope">
        <!--formatData：自定义过滤器-->
        <div>
          <span v-if="!th.formatData">{{ scope.row[th.prop] }}</span>
          <span v-else>
            <!--这一块做el-tag标签样式判断。不需要可以去除判断 ** start **-->
            <span v-if="th.isok == 1">
              <!-- scope.row[th.prop]==true -->
              <el-tag type="success">{{ th.formatData() }}</el-tag>
            </span>
            <!-- ** end**-->
            <span v-else>{{ th.formatData() }}</span>
          </span>
        </div>
      </template>
    </el-table-column>
    <!-- 操作栏单独 -->
    <el-table-column
      v-if="tableOper.label"
      :label="tableOper.label"
      :fixed="tableOper.fixed"
      :width="tableOper.width"
      :min-width="tableOper.minWidth"
      align="left"
    >
      <template slot-scope="scope">
        <div>
          <el-button
            v-for="(o, key) in tableOper.oper"
            :key="key"
            @click="o.clickFun(scope.row)"
            :type="o.style"
            :icon="o.icon"
            size="small"
          >{{o.name}}</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "TablePainal",
  // 传入的数据
  props: {
    api: {
      type: String,
      default: function () {
        return "";
      },
    },
    searchParams: {
      type: Object,
      default: function () {
        return {
          page: 1,
          size: 10,
        };
      },
    },
    rowDblclick: {
      // 单行点击事件
      type: Function,
      default: (row, event, column) => {
        console.log("default: " + row + "---" + event + "---" + column);
      },
    },
    tableHeader: {
      // 表格头部
      type: Array,
      default: function () {
        return [];
      },
    },
    tableOper: {
      // 表格操作栏
      type: Object,
      default: function () {
        return [];
      },
    },
    tabheight: {
      type: String,
      default: "100%",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isshow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    // 获取列表数据
    async getList() {
      let data = await this.$http.get(this.api, this.searchParams);
      console.log(data);
    },
    // 获取选择行数信息
    getmydata() {
      let data = this.$refs.multipleTable.selection;
      let IDS = [];
      //   for (let i = 0; i < data.length; i++) {
      //     IDS.push(data[i].ID);
      //   }
      //   this.$emit("func", IDS);
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
</style>