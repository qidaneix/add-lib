# add-lib

## 最简单的包

1. github 上新建 add-lib 仓库，并 clone 到本地
2. 运行`npm init`，生成 package.json 文件，注意设置`main`字段的值
3. 生成 index.js 文件，用最简单的 ES5+commonjs 写一个函数
4. 修改 package.json 的`version`字段，设置版本号
5. git 提交，打上 git tag，tag 和 package.json 的`version`一致
6. git push 到 github
7. 新建 add-use 项目，并通过 github 安装这个包`npm i -D git+https://github.com/qidaneix/add-lib.git`
8. 使用 commonjs 引用这个包`const add = require('add-lib')`，并尝试使用，功能正常
9. 回到本项目，运行`npm adduser`，登陆 npm 账户
10. 运行`npm public`，在 npm 发布这个包
