<template>
    <div id="app">
        <el-container v-if="isShow" style="height: 100%;width: 100%;">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="300px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <div v-for="(v,index) of menus" :key="index">
                            <el-submenu v-if="v.children" :index="v.name">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{v.name}}</span>
                                </template>
                                <el-menu-item-group v-for="(item,num) of  v.children" :key="'c'+num">
                                    <el-menu-item :index="item.name">{{item.name}}</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item v-else :index="v.name">
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{v.name}}</span>
                            </el-menu-item>
                        </div>
                    </el-menu>
                </el-aside>
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
                isShow:true,
                menus:[
                    {
                        name:"主页",
                    },
                    {
                        name:"权限配置",
                        children:[
                            {
                                name:"权限",
                            }
                        ]
                    }
                ]
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
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
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
    #app .el-menu-item,.el-submenu__title{
        text-align: left!important;
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
