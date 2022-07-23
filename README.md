## 简介

### 目录结构

```
dist                      -   开发中间产物
node_modules              -   依赖库
public                    -   静态资源文件夹
server                    -   后台模拟
  |-  databas             -   开发时测试用的数据库
  |_  websocket           -   mock server
src                       -   业务代码
  |-  main                -   主进程
        |-  client        -   websocket 与后台通信
        |-  database      -   操作数据库
        |-  events        -   主进程与渲染进程通信
        |-  router        -   窗口管理
        |-  utils         -   主进程工具类
  |-  preload             -   preload
  |_  rederer             -   渲染进程
        |-  assets        -   资源目录
        |-  components    -   全局组件
        |-  utis          -   工具类
        |_  pages         -   多页面
          |-  about       -   关于页面
          |-  print       -   打印页面
          |_  main        -   主界面
index.html                -   主页面
index_about               -   关于页面
index_print               -   打印页面
```
