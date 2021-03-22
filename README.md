# webpack-demo
1. [html+js没有配置文件时打包](https://github.com/YukiGreen/webpack-demo/blob/master/01-getting-started/package.json)

直接`serve .`可在浏览器中打开该html，可正常运行。

下面我们用webpack打包下这个模块

1. 初始化一个`package.json`, `yarn init --yes`
2. `yarn add webpack webpack-cli --dev`
3. `yarn webpack --version #4.40.2 或#5.27.1； webpack-cli最新#4.5.0或3.3.9`
4. `yarn webpack` # 执行完成后，会生成一个`dist/main.js`文件，这是打包后的文件
5. 修改html中的引入方式为：`<script src="dist/main.js"></script>`
6. 若觉得每次使用`yarn webpack`命令来打包比较麻烦，可在`package.json`中加入scripts对象，如下：

```
"scripts": {
    "build": "webpack"
  },
```

2. [指定输出文件路径和名称]()

```
// 执行
yarn webpack # 根据将配置文件进行打包
```

