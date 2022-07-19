## 简介

### 目录结构

```
dist                      -   开发中间产物
node_modules              -   依赖库
public                    -   静态资源文件夹
server                    -   后台模拟 server
src                       -   业务代码
  |-  main                -   主进程
  |-  preload             -   preload
  |_  rederer             -   渲染进程
        |-  assets        -   资源目录
        |-  components    -   全局组件
        |-  utis          -   工具类
        |_  views         -   多页面
          |-  about       -   关于页面
          |-  print       -   打印页面
          |_  main        -   主界面
```
