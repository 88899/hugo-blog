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
- 知识库管理在submodule中
- 支持数学公式、流程图、mermaid图表、代码高亮、图片懒加载、SEO优化等
- 已开启google analytics

## markdown头部配置样例
```
---
title: 文章名称，大标题
date: 2025-05-03
author: 作者名称
# 作者头像，可以是网络链接，也可以是项目中的图片地址
avatar: 作者头像，可以是网络链接，也可以是项目中的图片地址
# 分类名称，展示在分类列表中
categories: 分类名称
# 标签名称, 展示在tag列表中
tags: 标签1, 标签2
# 系列名称
series: 系列名称
# 封面图片，可以是网络链接，也可以是项目中的图片地址
cover: 封面图片，可以是网络链接，也可以是项目中的图片地址
# 如果需要数学公式，请将此字段设置为true
math: true
# 如果需要渲染流程图，请将此字段设置为true
mermaid: true
---
```
## github submodule
```shell
git submodule add https://github.com/88899/notes.git content
```

## vercel配置
```python
# vercel.json中增加以下配置
{
  "buildCommand": "git submodule update --remote --merge && hugo --gc --minify"
}
```

## Cloudflare Pages配置
* Build command: git submodule update --remote --merge && hugo --gc --minify
* Build output: public

## 修订日志
* 2025-08-28 release v1.0.1 增加每页记录数的配置参数
* 2025-08-28 release v1.0.0
* 2022-05-03：增加vercel和Cloudflare Pages配置
* 2022-05-02：增加github submodule配置
* 2022-05-01：增加文章头部配置样例
## 联系作者

## SEO优化
