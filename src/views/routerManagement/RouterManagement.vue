<template>
    <div style="height: 100%">
        <div>路由管理</div>
        <el-tree
                :data="router"
                show-checkbox
                node-key="1000"
                style="height: 100%;width: 100%"
                default-expand-all
                :props="defaultProps"
                :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
                  type="text"
                  size="mini"
                  @click="() => append(data)">
            Append
          </el-button>
          <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
        </el-tree>
    </div>
</template>

<script>
    let id = 1000;
    export default {
        name: "RouterManagement",
        data(){
            return{
                router:[],
                defaultProps:{
                    children:'children',
                    label:'title'
                }
            }
        },
        mounted() {
            this.getRouter()
        },
        methods:{
            getRouter(){
                this.axios.get('getRouters').then(res=>{

                    this.router = JSON.parse(res.data.msg).routers
                    console.log(this.router)
                })
            },
            append(data) {
                const newChild = { id: id++, title: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
                console.log(this.router)
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
            qwe(node){
                console.log(node)
                return node.title
            },
        }
    }
</script>

<style scoped>
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>