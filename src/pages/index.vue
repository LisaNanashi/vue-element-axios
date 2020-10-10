<template>
  <div class="hello">
    <!-- <router-link to="/detail">Go to detail</router-link> -->
    <el-row>
      <!-- 左侧导航 -->
      <el-col :span="5">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo minHeight"
          @open="handleOpen"
          @close="handleClose"
        >
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">代办事宜</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">已办事宜</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-position"></i>
            <span slot="title">人事通知管理</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span>因私出国（境）管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">因私出国（境）审批</el-menu-item>
              <el-menu-item index="4-2">因私证照管理</el-menu-item>
              <el-menu-item index="4-3">出国（境）统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
           <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>基础信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">人员花名册</el-menu-item>
              <el-menu-item index="5-2">收入明细维护</el-menu-item>
              <el-menu-item index="5-3">假期余额维护</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 右侧内容 -->
      <el-col :span="19">
        <div class="minHeight">
            
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "index",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
