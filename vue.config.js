module.exports={
    "devServer": {
        "port": 8080,
        "disableHostCheck": true,
        "proxy": {
            "/": {
                "target": "http://localhost:8080",
                "changeOrigin": true,  //开启代理
                "ws": false,
                "pathRewrite": {
                    "^/": ""
                }
            },
            "/static": {
                "target": "http://localhost:3000",
                "changeOrigin": true,  //开启代理
                "ws": false,
                "pathRewrite": {
                    "^/": ""
                }
            }
        }
    }
}