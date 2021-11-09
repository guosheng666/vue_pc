/**
 * @author gs
 * @description 返回单个路由
 * **/

function getRouter(item){
    let pageRouter = {
        path: item.path,
        name: item.name,
        meta:item.meta,
        title:item.title,
        component: () => import(`@/${item.component}`)//用模板字符串解决import 不能直接用变量的问题
    }
    if(item.children){
        pageRouter.children = []
        for (let v of item.children){
            pageRouter.children.push(getRouter(v))
        }
    }

    return pageRouter

}
export default getRouter