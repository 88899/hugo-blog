---
title: 复刻NL同款论坛：在Serv00打造高性能免费社区，Serv00价值最大化
date: 2025-01-20
author: Flio Niu
avatar: /img/personal/avatar.png
categories:
  - AI
  - 技术
---

### 初衷

我非常喜欢Nl论坛，喜欢它的界面局和功能，符合我的体验和习惯。于是我想有没有办法自建一个学习学习，于是有了这篇文章。

<!--more-->

### 开始
最近Serv00的"猎杀行动"让很mjj们瑟瑟发抖，手里的几个"幸存账号"成了稀缺资源。如何在刀尖上优雅起舞，把免费羊毛薅出高定质感？今天就教你在Serv00搭建与NL完全一致的论坛系统，让每个账号都化身生产力核弹！

🔥 准备工作
1. 幸存者账号：拿出你的Serv00账号
2. 在Websites面板创建站点，可以使用默认的，也可以用自己的域名创建
3. 数据库：MySQL数据库创建，在Mysql面板，根据提示创建即可。

⚡ 部署论坛

【第一步】下载论坛源码（https://docs.flarum.org/install/）请特别注意：
- PHP版本：选择和Serv00当前PHP Version一致的包（我的是8.1）
- 傻瓜安装模式：选择带有no-public版本压缩包！
![](https://cdn.jsdelivr.net/gh/dgdghub/dg-pic@main/blog/20250418175558969.png)


【第二步】上传压缩包，并解压到之前创建好的website/public_html目录下

【第三步】在浏览器打开前面创建的website，开始安装：
填写站点名，数据库信息，站点管理账号信息等

【第四步】进入论坛后台管理，设置你的论坛（例如：https://xxx.com/admin#）

### 完成
案例展示：https://nanagehub.serv00.net/

### 后续
默认是只有英文，可以自行安装语言扩展（https://discuss.flarum.org.cn/d/1211）

最后祝mjj们完🐔开心！！！