## EPR PROCESSING 改版

#### 一、 技术栈更改：

```
1. vue2         ->		vue3
2. js           ->		ts
3. electron12   -> 		electron-latest
4. node14       -> 		node16
5. ElementUI    ->		NaiveUI
6. webpack      ->		vite3
```

#### 二、 引入新的技术

1. 使用 Sqlite 数据库: 管理数据、记录日志、参数配置、自定义函数等
2. 利用 worker, child_process 解决 主进程和渲染进程计算数据时阻塞的问题
3. 使用 lightningchart 绘制 2D 图

#### 三、 验证性的工作

1. GPU.js 实际运用，以及性能比较
2. lightning chart 使用
3. piscina, microjob

#### 四、 优化改善

1. 丰富的数据结构，规范数据，实部、虚部、g 因子等
2. 封装常用小组件、统一风格样式
3. 引入 mitt 管理渲染进程全局事件，解构父子、兄弟组件之间复杂的通信方式
4. 将数据处理的部分，放到主进程里，并使用进程池等方式
5. 进一步封装 dll, 避免在项目里写太多重复代码
6. 优化软件日志，以及软件提示
7. 优化 epr、excel 文件加载解析保存速度
8. 优化 echarts 绘图、处理速度
9. 增加批量处理功能
10. 使用 rust 编译 dll 来解决批量处理速度
11. 使用 async await 异步
12. 如果显示的点数超过 10W，就抽点

```
P = R * line.length / (end - start)
P: 未抽点前要显示的点数
R: 当前x轴的间距
line.length: 实验数据单条线的点的总数量
end: x轴末端值
start: x轴起点值

data = lttb(line, number)
```

13. 封装一个 lttb 的 ts 库

#### 五、里程碑

1. 初始化项目，GIT、目录结构
2. 完成渲染进程与主进程通信
3. 完成数据结构的 ts 类型
4. 完成 websocket 开发
5. 完成 界面开发、参考 EPR100 配色样式
6. 完成 epr、eprp 文件的解析与保存功能
7. 完成 excel 文件的解析与保存功能
8. 完成 sqlite 数据库的数据解析功能
9. 完成 echarts 绘图功能
10. 完成二维数据的渲染，以及操作
11. 完成 echarts 抽点功能
12. 封装算法的 dll
13. 完成处理记录历史功能
14. 左侧工具栏功能
15. 完成历史文件功能
16. 完成日志功能
17. 完成批量处理功能
18. 完成数据处理功能
19. 打印功能
