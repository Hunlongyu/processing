## 多窗口管理

多窗口管理：启动、关闭、新建等

```
config.ts                   窗口配置
  |-  default               默认配置
  |-  main                  主界面配置
  |-  about                 关于界面配置
  |_  print                 打印界面配置
index.ts                    窗口管理
  |-  mini                  最小化
  |-  max                   最大化
  |-  close                 关闭
  |-  get                   获取单个窗口
  |-  getAll                获取所有窗口
  |-  open                  打开窗口
  |-  closeAll              关闭所有窗口
  |_  createWindow          新建窗口
```
