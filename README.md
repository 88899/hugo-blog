## 简洁风格的个人博客模版
* 无需VPS
* 无需数据库
* 无需懂代码

## 只需修改三处
* 全局站点配置：修改根目录下的hugo.toml文件
* 图片（logo等)：替换/public/img/和/public/images/下的同名文件
* 站点内容修改：修改/content/目录下的文章文件

注意：如果你本地有hugo环境，建议替换static下的相关资源，替换完成后记得执行hugo

### 如果觉得好用，就给个star吧

## 感谢原项目：
* [https://github.com/g1eny0ung/hugo-theme-dream](https://github.com/g1eny0ung/hugo-theme-dream)

## 在线预览
[https://googhub.nyc.mn//](https://googhub.nyc.mn/)

## 项目介绍
- 基于Hugo框架搭建

## markdown头部配置样例
```
---
title: 文章名称，大标题
date: 2025-05-03
author: 作者名称
avatar: 作者头像，可以是网络链接，也可以是项目中的图片地址
categories:
  - AI
  - 技术
cover: 封面图片，可以是网络链接，也可以是项目中的图片地址
---
```

## vercel配置
* 增加子模块
* git submodule update --remote --merge && hugo --gc --minify
*