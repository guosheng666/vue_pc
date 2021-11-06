<template>
  <div id="app">
      <el-container v-if="isShow" style="height: 100%;width: 100%;">
          <el-header>Header</el-header>
          <el-container>
              <el-aside width="200px">Aside</el-aside>
              <el-main>
                  <router-view/>
              </el-main>
          </el-container>
      </el-container>
    <router-view v-else/>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow:true
            }
        },
        watch:{
            $route:{
                handler(val){
                    console.log("val")
                    console.log(val)
                    console.log("val")
                    if (val.name=="Login"){
                        this.isShow = false
                    }else {
                        this.isShow = true
                    }
                },
                // 深度观察监听
                deep: true,
                immediate:true
            }
        }

    }
</script>
<style>
  html,body{
    height: 100%;
    width: 100%;
    margin: 0;
  }
#app {
  text-align: center;
  height: 100%;
  width: 100%;
  color: #2c3e50;
}
  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
  }

  .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
  }

  .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
  }

  body > .el-container {
      margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
      line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
      line-height: 320px;
  }

</style>
