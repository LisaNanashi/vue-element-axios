<template>
  <div id="app">
    <!-- <router-view/> -->
     <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件 -->
    </router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import "../src/assets/common.css"
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  height: 100%; 
  padding: 0; 
}
#app {
  min-width: 1280px;
  margin: 0 auto;
  background: #f5f5f5;
}
</style>
