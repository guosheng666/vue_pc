/**
 * @author gs
 * @description 返回所有menus菜单
 * **/
function getMenus(data,menus=[]) {
    for (let v of data){
        if(v.children){
            menus.push({
                name:v.title,
                label:v.name,
                path:v.path,
                children:getMenus(v.children)
            })
        }else {
            menus.push({
                name:v.title,
                label:v.name,
                path:v.path
            })
        }
    }
    return menus
}
export default getMenus