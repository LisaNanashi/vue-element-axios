<template>
  <div class="detail">
    <TablePainal
      ref="mt"
      api="/api/getlist"
      :searchParams="{
        search1:this.search1||'查询条件1',
        search2:'查询条件2',
      }"
      id="printTable"
      :tableData="tableData"
      tabheight="100%"
      :tableHeader="tableHeader"
      :tableOper="tableOper"
      :loading="loading"
      :isshow="isshow"
    />
  </div>
</template>

<script>
import { TablePainal } from "../_common/allComponents";
export default {
  name: "detail",
  components: { TablePainal },
  data() {
    return {
      loading: false,
      isshow: true,
      tableHeader: [
        // 表头
        { prop: "label1", label: "卡号" },
        { prop: "label2", label: "标签类型" },
        { prop: "label3", label: "对象类型" },
        { prop: "label4", label: "对象值" },
        {
          prop: "label5",
          label: "是否启用",
          isok: "1",
          formatData: function(val) {
            console.log(1111)
            return val === true ? "启用" : "禁用";
          },
        },
        // 如果后端传过来的值不是我们所预期的，此处可以如下判断修改，isok是是否需要渲染为el-tag,效果为下图
        {
          prop: "label6",
          label: "是否设防",
          isok: "1",
          formatData: function(val) {
            return val === true ? "设防" : "未设防";
          },
        },
      ],
      // 此处为操作栏，不需要可以删除，clickFun绑定此操作按钮的事件
      tableOper: {
        label: "操作",
        fixed: "right",
        minWidth: "160px",
        width: "160px",
        oper: [
          { name: "修改", style: "primary", clickFun: this.handleClick },
          { name: "删除", style: "danger", clickFun: this.delClick },
        ],
      },
      tableData: [],
      search1:'哈哈哈哈哈'
    };
  },
  methods: {
    handleClick(e){
      console.log(e)
    }
  },
  mounted(){  },
};
</script>

<style scoped>
</style>
