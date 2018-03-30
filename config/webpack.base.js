let path = require('path');
let dir = process.cwd()//获取当前 程序运行的目录
let baseConfig = {
    entry:{
        "bundle":dir+'/src/main'
    },
    output:{
        "path":dir+"/dist",
         "filename":"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.scss$/,
                loaders: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                 ]
            },
            {
                test:/\.(png|gif|jpg|jpeg|eot|svg|ttf|woff)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports=baseConfig;