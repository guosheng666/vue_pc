module.exports={
    "devServer": {
        "proxy": {
            "/": {
                "target": "http://localhost:3000/",
                "changeOrigin": true,  //开启代理
                "pathRewrite": {
                    "^/": ""
                }
            }
        }
    }
}