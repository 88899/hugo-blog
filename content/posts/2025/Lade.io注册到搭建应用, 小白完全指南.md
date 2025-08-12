---
title: Lade.io注册到搭建应用, 小白完全指南
date: 2025-05-03
author: Sherry
categories:
  - VPS
avatar: https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250807170937500.png
tags:
  - lade
series: mjj
---



## 说明

* 我尽量简化，所以尽量用图说话：红色线代表需要要操作的, 所以你可以按着红色标识操作
* 如果你已经有账号，可以直接跳转到第二节
* 目前作者增加了github账号验证，所以你得有一个注册时间大于6个月的github账号
* 所用到的代码（https://github.com/eooce/Sing-box/tree/main）
* 我是小白，所以写作水平有限，请大家多多包涵

<!--more-->

## 一、注册账号

* 打开：https://www.lade.io/，开始注册

![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519105710549.png)


* 填写必须的信息
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519105959930.png)

* 验证账号：去你的邮箱查收，并完成账号验证

![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519110202153.png)


* 重新登录，看到下面这个图代表登录成功了

* 接下来进行github账号验证，按图中红色标识的三个操作（1. 创建gist, 2. 得到gist连接发给live chat, 3. 再次输入邮箱，约1分钟会给你审核结果）, 具体看下面的截图

![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519110448902.png)

(如下图在github创建gist)
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519114736704.png)

(创建成功后，复制地址栏中的连接)

(回到Lade.io，点击live chat，将刚复制的连接发个chat)

(chat会让你再次输入mail地址)

![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519111118127.png)


(提交后等待约1分钟，如果你的github账号不足6个月，会是这个提示（不成功）
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519111158847.png)

(验证成功会返回这个消息)

![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519111239211.png)



## 二、部署应用

* 打开https://github.com/eooce/Sing-box/tree/main/nodejs， 下载图中三个文件
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519112118611.png)

* 修改start.sh文件（重点，也是唯一需要修改的文件)
说明：需要修改的配置如下图红色标识（如果不需要扎针，关于nezha的可以留空）。隧道token和自定义域名，请自行搜索教程解决。
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250519112501403.png)

* 重点来了，下面的操作需要在你电脑上进行（我这里以mac电脑为例子，如果你是windows或者linux,请在lade官网看对应系统的操作指南https://www.lade.io/docs/platform/cli）， 另外lade也支持在远程服务器上操作。
```shell
# 安装lade环境
brew install lade-io/tap/lade
# 进入前面保存好的文件所在的目录
cd /xx/xx/刚下载好的文件所在目录

# 登入lade
lade login
# 创建lade 应用，abcde是应用名称，自定义即可
lade apps create abcde
# 部署lade 应用, 名字和上面保持一致
lade deploy --app abcde

# 等一会儿，查看日志，节点信息在日志中
lade logs -a abcde
# 可以查看应用运行状态
lade apps show abcde
```
从日志中复制节点信息，导入你的骑墙软件即可玩耍了。

到此为止，lade的应用就算部署完成了。我这里部署的是nodejs应用，当然你也可以举一反三，部署python应用.