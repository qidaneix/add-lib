# add-lib

## 最简单的包

先弄一个最简单的包，没有任何构建、编译、lint 以及测试工具，只有 git、npm 和不需要编译的 ES5+commonjs 代码，包暂时只在 node 环境运行

1. github 上新建 add-lib 仓库，并 clone 到本地
2. 运行`npm init`，生成 package.json 文件，注意设置`main`字段的值
3. 生成 index.js 文件，用最简单的 ES5+commonjs 写一个函数
4. 修改 package.json 的`version`字段，设置版本号
5. git 提交，打上 git tag，tag 和 package.json 的`version`一致
6. git push 到 github
7. 新建 add-use 项目，并通过 github 安装这个包`npm i -D git+https://github.com/qidaneix/add-lib.git`
8. 使用 commonjs 引用这个包`const add = require('add-lib')`，并尝试使用，功能正常
9. 回到本项目，运行`npm adduser`，登陆 npm 账户
10. 运行`npm publish --access=public`，在 npm 发布这个包
11. 在 add-use 项目中，去掉之前的 github 上拉取的依赖`npm un -D git+https://github.com/qidaneix/add-lib.git`
12. 从 npm 安装依赖`npm i -D @xiaodabao/add-lib`
13. `const add = require('@xiaodabao/add-lib')`，并尝试使用，功能正常

## 加上单元测试

看 package.json 文件`"test": "echo \"Error: no test specified\" && exit 1"`这句话不舒服，决定先把单元测试功能加上

1. 安装 jest，`npm i -D jest`
2. 新建 index.test.js 文件，写入测试代码
3. 修改 package.json 的测试命令为`"test": "jest"`
4. 运行`npm run test`，测试通过

## 让代码在 node 环境和浏览器环境都能运行

想让代码既能 node 环境也能在浏览器环境运行（浏览器环境，这里只考虑 script 标签引入全局变量的情况，暂不考虑 webpack 引入的情况），其实只要给源码 index.js 加上 UMD 包裹就行了，但这样源码会不好看可读性低。所以决定使用构建工具，使用构建工具既可以选择打 UMD 通用包，一个包兼容两个环境；又可以分别打 commonjs 和 IIFE 两个包，分别在不同的环境运行。
由于对 webpack 比对 rollup 熟悉，决定使用 webpack 打包
